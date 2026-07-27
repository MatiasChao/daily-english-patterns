import { PartyPopper } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Confetti } from "@/components/session/confetti";
import type { FocusArea } from "@/lib/session-data";

export interface SessionStats {
  accuracyPct: number;
  correctCount: number;
  total: number;
  newPatterns: number;
  streakDays: number;
  mostCommonMistake: FocusArea | null;
}

export function SessionComplete({
  stats,
  hasMistakes,
  onFinish,
  onPracticeMistakes,
}: {
  stats: SessionStats;
  hasMistakes: boolean;
  onFinish: () => void;
  onPracticeMistakes: () => void;
}) {
  return (
    <div className="mx-auto max-w-xl animate-in fade-in zoom-in-95 py-12 text-center duration-500">
      <Confetti />

      <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-blue-50">
        <PartyPopper className="size-9 text-blue-600" strokeWidth={1.75} />
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900">
        Great job!
      </h1>
      <p className="mt-2 text-lg text-slate-600">
        You practiced for 5 minutes today.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-3xl font-semibold text-blue-600">
            {stats.accuracyPct}%
          </p>
          <p className="mt-1 text-sm text-slate-500">Accuracy</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-3xl font-semibold text-blue-600">
            {stats.correctCount}/{stats.total}
          </p>
          <p className="mt-1 text-sm text-slate-500">Correct answers</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-3xl font-semibold text-blue-600">
            {stats.newPatterns}
          </p>
          <p className="mt-1 text-sm text-slate-500">New patterns</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-3xl font-semibold text-blue-600">
            {stats.streakDays}
          </p>
          <p className="mt-1 text-sm text-slate-500">Day streak</p>
        </div>
      </div>

      {stats.mostCommonMistake ? (
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 text-left sm:text-center">
          <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
            Most common mistake
          </p>
          <p className="mt-1 text-base font-medium text-slate-900">
            {stats.mostCommonMistake}
          </p>
        </div>
      ) : null}

      <div className="mt-10 space-y-3">
        <Button
          size="lg"
          onClick={onFinish}
          className="h-12 w-full rounded-xl bg-blue-600 text-base text-white hover:bg-blue-700"
        >
          Finish Session
        </Button>
        <Button
          variant="ghost"
          disabled={!hasMistakes}
          onClick={onPracticeMistakes}
          className="h-11 w-full rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-40"
        >
          Practice Mistakes Again
        </Button>
      </div>
    </div>
  );
}
