import { Blocks, MessagesSquare, Timer, Zap } from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";

const points = [
  {
    icon: MessagesSquare,
    title: "Practice real-life sentences",
  },
  {
    icon: Zap,
    title: "AI feedback in seconds",
  },
  {
    icon: Blocks,
    title: "Learn patterns, not words",
  },
  {
    icon: Timer,
    title: "5 minutes a day",
  },
];

export function SocialProof() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Built for learners who want real English." />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <point.icon className="size-5" />
              </span>
              <p className="text-sm font-medium text-slate-800 sm:text-[15px]">
                {point.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
