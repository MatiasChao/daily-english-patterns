import { AiExplanationCard } from "@/components/session/ai-explanation-card";
import { MistakeRow } from "@/components/session/mistake-row";
import { PatternCard } from "@/components/session/pattern-card";
import { StatusBadge } from "@/components/session/status-badge";
import type { GradeResult } from "@/lib/grading";
import type { Exercise } from "@/lib/session-data";

export function FeedbackPanel({
  exercise,
  userAnswer,
  grade,
}: {
  exercise: Exercise;
  userAnswer: string;
  grade: GradeResult;
}) {
  const showNatural = exercise.naturalAnswer !== exercise.correctAnswer;
  const showMistakes = grade.mistakes.length > 0;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <StatusBadge status={grade.status} />

      <p className="mt-4 text-2xl leading-snug font-semibold text-slate-900 sm:text-3xl">
        &ldquo;{exercise.prompt}&rdquo;
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
            Your answer
          </p>
          <p className="mt-1 text-base text-slate-600">{userAnswer}</p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
            Correct
          </p>
          <p className="mt-1 text-lg font-medium text-slate-900">
            {exercise.correctAnswer}
          </p>
        </div>

        {showNatural ? (
          <div>
            <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
              More natural
            </p>
            <p className="mt-1 text-lg font-medium text-blue-700">
              {exercise.naturalAnswer}
            </p>
          </div>
        ) : null}
      </div>

      {showMistakes ? (
        <ul className="mt-6 space-y-3">
          {grade.mistakes.map((mistake, index) => (
            <MistakeRow key={index} mistake={mistake} />
          ))}
        </ul>
      ) : null}

      <div className="mt-6 space-y-4">
        <AiExplanationCard explanation={exercise.why} />
        <PatternCard pattern={exercise.pattern} />
      </div>
    </div>
  );
}
