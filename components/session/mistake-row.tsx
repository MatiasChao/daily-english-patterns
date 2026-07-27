import { ArrowDown } from "lucide-react";

import type { Mistake } from "@/lib/grading";

export function MistakeRow({ mistake }: { mistake: Mistake }) {
  return (
    <li className="rounded-xl border border-rose-100 bg-rose-50/50 p-4">
      {mistake.wrong ? (
        <p className="text-sm text-rose-700">
          <span aria-hidden>❌</span> {mistake.wrong}
        </p>
      ) : null}
      {mistake.wrong && mistake.correct ? (
        <div className="flex items-center gap-1.5 py-0.5 text-rose-300">
          <ArrowDown className="size-3.5" />
        </div>
      ) : null}
      {mistake.correct ? (
        <p className="text-sm font-medium text-emerald-700">
          <span aria-hidden>✅</span> {mistake.correct}
        </p>
      ) : null}
      <p className="mt-2 text-xs leading-relaxed text-slate-500">
        {mistake.explanation}
      </p>
    </li>
  );
}
