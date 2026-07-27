import { CalendarCheck2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SessionDoneEmpty({
  hasMistakes,
  onReviewMistakes,
}: {
  hasMistakes: boolean;
  onReviewMistakes: () => void;
}) {
  return (
    <div className="mx-auto max-w-md animate-in fade-in py-16 text-center duration-500">
      <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-blue-50">
        <CalendarCheck2 className="size-7 text-blue-600" strokeWidth={1.75} />
      </div>

      <h1 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
        You&apos;re done for today 🎉
      </h1>
      <p className="mt-2 text-base leading-relaxed text-slate-600">
        Come back tomorrow for a new AI-generated session.
      </p>

      {hasMistakes ? (
        <Button
          variant="outline"
          onClick={onReviewMistakes}
          className="mt-8 h-11 rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50"
        >
          Review Previous Mistakes
        </Button>
      ) : null}
    </div>
  );
}
