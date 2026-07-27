import { Sparkles } from "lucide-react";

export function AiExplanationCard({ explanation }: { explanation: string }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
        <Sparkles className="size-4" />
        Why?
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">
        {explanation}
      </p>
    </div>
  );
}
