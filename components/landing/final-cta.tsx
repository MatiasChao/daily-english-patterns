import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section id="pricing" className="scroll-mt-16 px-6 py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-center sm:px-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
        />

        <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to stop translating?
        </h2>
        <p className="relative mt-4 text-lg text-slate-300">
          Start thinking in English today.
        </p>

        <div className="relative mt-9 flex justify-center">
          <Button
            size="lg"
            className="h-12 gap-2 rounded-xl bg-white px-7 text-base text-slate-900 hover:bg-slate-100"
            render={<a href="/session" />}
            nativeButton={false}
          >
            Start for Free
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
