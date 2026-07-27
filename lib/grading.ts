import type { Exercise } from "@/lib/session-data";

export type AnswerStatus = "perfect" | "natural" | "almost" | "needs-improvement";

export interface Mistake {
  wrong: string;
  correct: string;
  explanation: string;
}

export interface GradeResult {
  status: AnswerStatus;
  mistakes: Mistake[];
}

type DiffPart = { type: "equal" | "delete" | "insert"; words: string[] };

function normalizeWords(sentence: string): string[] {
  return sentence
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9'\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);
}

/** Word-level LCS diff, merging consecutive same-type runs. */
function diffWords(a: string[], b: string[]): DiffPart[] {
  const n = a.length;
  const m = b.length;
  const table: number[][] = Array.from({ length: n + 1 }, () =>
    new Array(m + 1).fill(0)
  );

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      table[i][j] =
        a[i] === b[j] ? table[i + 1][j + 1] + 1 : Math.max(table[i + 1][j], table[i][j + 1]);
    }
  }

  const raw: { type: "equal" | "delete" | "insert"; word: string }[] = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      raw.push({ type: "equal", word: a[i] });
      i++;
      j++;
    } else if (table[i + 1][j] >= table[i][j + 1]) {
      raw.push({ type: "delete", word: a[i] });
      i++;
    } else {
      raw.push({ type: "insert", word: b[j] });
      j++;
    }
  }
  while (i < n) raw.push({ type: "delete", word: a[i++] });
  while (j < m) raw.push({ type: "insert", word: b[j++] });

  const merged: DiffPart[] = [];
  for (const part of raw) {
    const last = merged[merged.length - 1];
    if (last && last.type === part.type) {
      last.words.push(part.word);
    } else {
      merged.push({ type: part.type, words: [part.word] });
    }
  }
  return merged;
}

const PREPOSITIONS = new Set(["in", "on", "at", "of", "for", "to", "with", "from", "about"]);

function explainSubstitution(wrongWords: string[], correctWords: string[]): string {
  const wrongSet = new Set(wrongWords);
  const correctSet = new Set(correctWords);

  if (correctSet.has("to") && !wrongSet.has("to")) {
    return "Don't forget the infinitive “to” after this verb.";
  }
  if ((correctSet.has("have") || correctSet.has("has")) && !wrongSet.has("have") && !wrongSet.has("has")) {
    return "The present perfect needs the auxiliary “have” or “has” here.";
  }
  const correctPrep = correctWords.find((w) => PREPOSITIONS.has(w));
  const wrongPrep = wrongWords.find((w) => PREPOSITIONS.has(w));
  if (correctPrep && correctPrep !== wrongPrep) {
    return `Check the preposition — it should be “${correctPrep}” here.`;
  }
  if (correctWords.some((w) => w.endsWith("ing")) && !wrongWords.some((w) => w.endsWith("ing"))) {
    return "Use the “-ing” form (gerund) after this word.";
  }
  return `This part sounds more natural as “${correctWords.join(" ")}”.`;
}

function explainInsertion(correctWords: string[]): string {
  if (correctWords.includes("to")) return "Don't forget the infinitive “to” here.";
  if (correctWords.includes("have") || correctWords.includes("has")) {
    return "The present perfect needs the auxiliary “have” or “has” here.";
  }
  const prep = correctWords.find((w) => PREPOSITIONS.has(w));
  if (prep) return `Don't forget the preposition “${prep}” here.`;
  return `You're missing “${correctWords.join(" ")}” here.`;
}

function explainDeletion(wrongWords: string[]): string {
  return `Remove “${wrongWords.join(" ")}” — it's not needed here.`;
}

function buildMistakes(diff: DiffPart[]): Mistake[] {
  const mistakes: Mistake[] = [];
  for (let k = 0; k < diff.length; k++) {
    const part = diff[k];
    if (part.type === "delete") {
      const next = diff[k + 1];
      if (next?.type === "insert") {
        mistakes.push({
          wrong: part.words.join(" "),
          correct: next.words.join(" "),
          explanation: explainSubstitution(part.words, next.words),
        });
        k++;
      } else {
        mistakes.push({
          wrong: part.words.join(" "),
          correct: "",
          explanation: explainDeletion(part.words),
        });
      }
    } else if (part.type === "insert") {
      const prev = diff[k - 1];
      if (prev?.type !== "delete") {
        mistakes.push({
          wrong: "",
          correct: part.words.join(" "),
          explanation: explainInsertion(part.words),
        });
      }
    }
  }
  return mistakes;
}

export function gradeAnswer(userAnswer: string, exercise: Exercise): GradeResult {
  const userWords = normalizeWords(userAnswer);
  const correctWords = normalizeWords(exercise.correctAnswer);
  const naturalWords = normalizeWords(exercise.naturalAnswer);

  if (userWords.length === 0) {
    return { status: "needs-improvement", mistakes: [] };
  }

  const userJoined = userWords.join(" ");
  if (userJoined === correctWords.join(" ")) {
    return { status: "perfect", mistakes: [] };
  }
  if (userJoined === naturalWords.join(" ")) {
    return { status: "natural", mistakes: [] };
  }

  const diff = diffWords(userWords, correctWords);
  const equalCount = diff
    .filter((d) => d.type === "equal")
    .reduce((sum, d) => sum + d.words.length, 0);
  const similarity = equalCount / Math.max(correctWords.length, userWords.length, 1);
  const mistakes = buildMistakes(diff);

  if (similarity >= 0.55 && mistakes.length > 0 && mistakes.length <= 3) {
    return { status: "almost", mistakes };
  }
  return { status: "needs-improvement", mistakes: similarity >= 0.35 ? mistakes.slice(0, 2) : [] };
}
