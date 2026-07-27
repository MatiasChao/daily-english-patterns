"use client";

import { useMemo, useState } from "react";

import { FeedbackPanel } from "@/components/session/feedback-panel";
import { SessionActions } from "@/components/session/session-actions";
import { SessionComplete, type SessionStats } from "@/components/session/session-complete";
import { SessionDoneEmpty } from "@/components/session/session-done-empty";
import { SessionHeader } from "@/components/session/session-header";
import { SessionSidebar } from "@/components/session/session-sidebar";
import { TranslatePanel } from "@/components/session/translate-panel";
import { gradeAnswer, type AnswerStatus, type GradeResult } from "@/lib/grading";
import { exercises, type Exercise, type FocusArea } from "@/lib/session-data";

type Phase = "answering" | "feedback" | "complete" | "done";

interface AnswerRecord {
  exercise: Exercise;
  status: AnswerStatus;
}

const INITIAL_STREAK = 18;

function isMistake(status: AnswerStatus) {
  return status === "almost" || status === "needs-improvement";
}

function isGood(status: AnswerStatus) {
  return status === "perfect" || status === "natural";
}

export function SessionView() {
  const [queue, setQueue] = useState<Exercise[]>(exercises);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("answering");
  const [answerText, setAnswerText] = useState("");
  const [grade, setGrade] = useState<GradeResult | null>(null);
  const [records, setRecords] = useState<AnswerRecord[]>([]);
  const [streakDays, setStreakDays] = useState(INITIAL_STREAK);
  const [isPracticeMode, setIsPracticeMode] = useState(false);

  const currentExercise = queue[index];
  const total = queue.length;

  const completed =
    phase === "complete" || phase === "done"
      ? total
      : phase === "feedback"
        ? index + 1
        : index;

  const accuracyPct = useMemo(() => {
    if (records.length === 0) return null;
    const good = records.filter((r) => isGood(r.status)).length;
    return Math.round((good / records.length) * 100);
  }, [records]);

  const hasMistakes = useMemo(() => records.some((r) => isMistake(r.status)), [records]);

  const headerTitle =
    isPracticeMode && (phase === "answering" || phase === "feedback")
      ? "Reviewing Mistakes"
      : "Today's Session";

  const stats: SessionStats = useMemo(() => {
    const good = records.filter((r) => isGood(r.status)).length;
    const mistakenRecords = records.filter((r) => isMistake(r.status));

    const tally = new Map<FocusArea, number>();
    for (const record of mistakenRecords) {
      tally.set(record.exercise.focus, (tally.get(record.exercise.focus) ?? 0) + 1);
    }
    let mostCommonMistake: FocusArea | null = null;
    let max = 0;
    for (const [focus, count] of tally) {
      if (count > max) {
        max = count;
        mostCommonMistake = focus;
      }
    }

    return {
      accuracyPct: total > 0 ? Math.round((good / total) * 100) : 0,
      correctCount: good,
      total,
      newPatterns: mistakenRecords.length,
      streakDays,
      mostCommonMistake,
    };
  }, [records, total, streakDays]);

  function handleSubmit() {
    if (!answerText.trim()) return;
    const result = gradeAnswer(answerText, currentExercise);
    setGrade(result);
    setRecords((prev) => [...prev, { exercise: currentExercise, status: result.status }]);
    setPhase("feedback");
  }

  function advance() {
    if (index + 1 < queue.length) {
      setIndex((i) => i + 1);
      setAnswerText("");
      setGrade(null);
      setPhase("answering");
    } else {
      if (!isPracticeMode) setStreakDays((d) => d + 1);
      setPhase("complete");
    }
  }

  function handlePracticeMistakes() {
    const mistaken = records.filter((r) => isMistake(r.status)).map((r) => r.exercise);
    if (mistaken.length === 0) return;
    setQueue(mistaken);
    setIndex(0);
    setAnswerText("");
    setGrade(null);
    setRecords([]);
    setIsPracticeMode(true);
    setPhase("answering");
  }

  return (
    <div className="min-h-screen bg-white">
      <SessionHeader
        completed={completed}
        total={total}
        streakDays={streakDays}
        title={headerTitle}
      />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        {phase === "complete" ? (
          <SessionComplete
            stats={stats}
            hasMistakes={hasMistakes}
            onFinish={() => setPhase("done")}
            onPracticeMistakes={handlePracticeMistakes}
          />
        ) : phase === "done" ? (
          <SessionDoneEmpty hasMistakes={hasMistakes} onReviewMistakes={handlePracticeMistakes} />
        ) : (
          <div className="flex justify-center gap-10">
            <div className="w-full max-w-2xl">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/3 sm:p-10">
                {phase === "answering" ? (
                  <TranslatePanel
                    key={currentExercise.id}
                    exercise={currentExercise}
                    value={answerText}
                    onChange={setAnswerText}
                    onSubmit={handleSubmit}
                  />
                ) : grade ? (
                  <FeedbackPanel
                    key={currentExercise.id}
                    exercise={currentExercise}
                    userAnswer={answerText}
                    grade={grade}
                  />
                ) : null}
              </div>

              {phase === "feedback" ? (
                <SessionActions
                  key={currentExercise.id}
                  onNext={advance}
                  onSkipKnown={advance}
                />
              ) : null}
            </div>

            <SessionSidebar
              sentenceNumber={index + 1}
              total={total}
              accuracyPct={accuracyPct}
              currentFocus={currentExercise.focus}
            />
          </div>
        )}
      </main>
    </div>
  );
}
