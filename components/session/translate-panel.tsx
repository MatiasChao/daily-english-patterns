import type { KeyboardEvent } from "react";
import { CornerDownLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { Exercise } from "@/lib/session-data";

const MAX_LENGTH = 200;

export function TranslatePanel({
  exercise,
  value,
  onChange,
  onSubmit,
}: {
  exercise: Exercise;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}) {
  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (value.trim()) onSubmit();
    }
  }

  return (
    <div>
      <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
        Translate naturally
      </p>
      <p className="mt-4 text-2xl leading-snug font-semibold text-slate-900 sm:text-3xl">
        &ldquo;{exercise.prompt}&rdquo;
      </p>

      <Textarea
        autoFocus
        value={value}
        onChange={(event) => onChange(event.target.value.slice(0, MAX_LENGTH))}
        onKeyDown={handleKeyDown}
        placeholder="Type your answer in English..."
        aria-label="Your translation in English"
        rows={3}
        className="mt-6 min-h-28 resize-none rounded-2xl border-slate-200 bg-slate-50/60 p-4 text-lg leading-relaxed placeholder:text-slate-400"
      />

      <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
        <span className="inline-flex items-center gap-1">
          <CornerDownLeft className="size-3.5" />
          Press Enter to submit
        </span>
        <span>
          {value.length} / {MAX_LENGTH}
        </span>
      </div>

      <Button
        size="lg"
        disabled={!value.trim()}
        onClick={onSubmit}
        className="mt-6 h-12 w-full rounded-xl bg-blue-600 text-base text-white hover:bg-blue-700 disabled:opacity-40"
      >
        Submit Answer
      </Button>
    </div>
  );
}
