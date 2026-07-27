import { cn } from "@/lib/utils";
import type { AnswerStatus } from "@/lib/grading";

export const STATUS_CONFIG: Record<
  AnswerStatus,
  { emoji: string; label: string; className: string }
> = {
  perfect: {
    emoji: "✅",
    label: "Perfect",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  natural: {
    emoji: "🟢",
    label: "Natural",
    className: "bg-blue-50 text-blue-700 border-blue-200",
  },
  almost: {
    emoji: "🟡",
    label: "Almost correct",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  "needs-improvement": {
    emoji: "🔴",
    label: "Needs improvement",
    className: "bg-rose-50 text-rose-700 border-rose-200",
  },
};

export function StatusBadge({ status }: { status: AnswerStatus }) {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium",
        config.className
      )}
    >
      <span aria-hidden>{config.emoji}</span>
      {config.label}
    </span>
  );
}
