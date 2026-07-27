"use client";

import { useState } from "react";
import { ArrowRight, Check, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SessionActions({
  onNext,
  onSkipKnown,
}: {
  onNext: () => void;
  onSkipKnown: () => void;
}) {
  const [favorited, setFavorited] = useState(false);
  const [scheduled, setScheduled] = useState(false);

  return (
    <div className="mt-8 space-y-3">
      <Button
        size="lg"
        onClick={onNext}
        className="h-12 w-full gap-2 rounded-xl bg-blue-600 text-base text-white hover:bg-blue-700"
      >
        Next Sentence
        <ArrowRight className="size-4" />
      </Button>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          disabled={scheduled}
          onClick={() => setScheduled(true)}
          className="gap-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-100"
        >
          {scheduled ? <Check className="size-3.5 text-emerald-600" /> : null}
          {scheduled ? "Scheduled for tomorrow" : "Repeat Tomorrow"}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onSkipKnown}
          className="rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900"
        >
          I Already Know This
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFavorited((prev) => !prev)}
          className="gap-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900"
        >
          <Star
            className={
              favorited ? "size-3.5 fill-amber-400 text-amber-400" : "size-3.5"
            }
          />
          Favorite Pattern
        </Button>
      </div>
    </div>
  );
}
