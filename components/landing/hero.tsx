import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroDemo } from "@/components/landing/hero-demo";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 size-112 rounded-full bg-blue-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-32 -left-40 size-96 rounded-full bg-blue-500/6 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pt-28">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Badge className="gap-1.5 border border-blue-100 bg-blue-50 py-1 pr-3 pl-2.5 text-blue-600">
            <Sparkles className="size-3.5" />
            5 minutes a day, powered by AI
          </Badge>

          <h1 className="mt-6 text-4xl leading-[1.1] font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Think in English.
            <br />
            <span className="text-blue-600">Not translate.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            Practice only 5 minutes a day with personalized AI feedback and
            improve your English naturally.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-12 gap-2 rounded-xl bg-blue-600 px-6 text-base text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700"
              render={<a href="/session" />}
              nativeButton={false}
            >
              Start Free
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 gap-2 rounded-xl border-slate-200 px-6 text-base text-slate-700 hover:bg-slate-50"
              render={<a href="#example" />}
              nativeButton={false}
            >
              <PlayCircle className="size-4" />
              See Demo
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroDemo />
        </div>
      </div>
    </section>
  );
}
