import { cn } from "@/lib/utils";
import { TODAYS_FOCUS, type FocusArea } from "@/lib/session-data";

export function SessionSidebar({
  sentenceNumber,
  total,
  accuracyPct,
  currentFocus,
}: {
  sentenceNumber: number;
  total: number;
  accuracyPct: number | null;
  currentFocus: FocusArea;
}) {
  return (
    <aside className="hidden w-64 shrink-0 space-y-4 lg:block">
      <div className="sticky top-28 space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
            Today&apos;s Progress
          </p>
          <p className="mt-1.5 text-base font-semibold text-slate-900">
            Sentence {sentenceNumber} of {total}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
            Current Accuracy
          </p>
          <p className="mt-1.5 text-2xl font-semibold text-blue-600">
            {accuracyPct === null ? "—" : `${accuracyPct}%`}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
            Today&apos;s Focus
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {TODAYS_FOCUS.map((focus) => (
              <span
                key={focus}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-xs font-medium",
                  focus === currentFocus
                    ? "border-blue-200 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-slate-50 text-slate-500"
                )}
              >
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
