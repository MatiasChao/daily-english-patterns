"use client";

import { useState } from "react";
import { Check, Layers } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PatternInfo } from "@/lib/session-data";

export function PatternCard({ pattern }: { pattern: PatternInfo }) {
  const [queued, setQueued] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-500 uppercase">
        <Layers className="size-3.5" />
        Pattern learned
      </div>
      <p className="mt-1.5 text-base font-semibold text-slate-900">
        {pattern.name}
      </p>

      <ul className="mt-3 space-y-1">
        {pattern.examples.map((example) => (
          <li key={example} className="text-sm text-slate-600">
            {example}
          </li>
        ))}
      </ul>

      <Button
        variant="outline"
        size="sm"
        disabled={queued}
        onClick={() => setQueued(true)}
        className="mt-4 gap-1.5 rounded-lg border-slate-200 bg-white text-slate-700 disabled:opacity-100"
      >
        {queued ? (
          <>
            <Check className="size-3.5 text-emerald-600" />
            Queued for practice
          </>
        ) : (
          "Practice this pattern later"
        )}
      </Button>
    </div>
  );
}
