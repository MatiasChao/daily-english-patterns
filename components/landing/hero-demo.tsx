"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, Clock, RotateCcw, SendHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PROMPT_ES = "Tengo que llamar a mi madre.";
const ANSWER_EN = "I have to call my mother.";
const EXPLANATION =
  "“Have to” expresses obligation naturally in everyday speech — it sounds more like a real English speaker than “I need to call.”";

export function HeroDemo() {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!answer.trim()) return;
    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
    setAnswer("");
  }

  return (
    <div
      id="hero-demo"
      className="relative w-full max-w-md scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/6 sm:p-7"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-900">
          Today&apos;s Session
        </h3>
        <Badge className="bg-blue-50 text-blue-600">10 Sentences</Badge>
      </div>

      <div className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
        <Clock className="size-3.5" />
        Estimated time: 5 minutes
      </div>

      <div className="mt-5">
        <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-slate-500">
          <span>Progress</span>
          <span className="text-slate-900">3 / 10</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[30%] rounded-full bg-blue-600 transition-all duration-500" />
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-5">
        <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
          Translate
        </p>
        <p className="mt-1.5 text-lg font-medium text-slate-900">
          &ldquo;{PROMPT_ES}&rdquo;
        </p>

        <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
          <label htmlFor={inputId} className="sr-only">
            Your translation in English
          </label>
          <Input
            id={inputId}
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            disabled={submitted}
            placeholder="Type your answer in English..."
            className="h-10 flex-1 rounded-xl bg-white"
          />
          <Button
            type="submit"
            disabled={submitted}
            size="icon"
            className="size-10 shrink-0 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
            aria-label="Check answer"
          >
            <SendHorizontal className="size-4" />
          </Button>
        </form>

        <div
          className={cn(
            "grid transition-all duration-300 ease-out",
            submitted
              ? "mt-4 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4">
              <div className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                <CheckCircle2 className="size-4" />
                Almost perfect!
              </div>
              <p className="mt-2 text-xs font-medium tracking-wide text-slate-500 uppercase">
                Natural English
              </p>
              <p className="mt-1 text-[15px] font-medium text-blue-700">
                &ldquo;{ANSWER_EN}&rdquo;
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {EXPLANATION}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors hover:text-slate-900"
              >
                <RotateCcw className="size-3" />
                Try another sentence
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
