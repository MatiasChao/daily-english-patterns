import {
  BookOpenCheck,
  CalendarCheck2,
  Flame,
  LineChart,
  RotateCw,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: CalendarCheck2,
    title: "Daily personalized practice",
    description:
      "A fresh set of 10 sentences generated for you every day, matched to your level.",
  },
  {
    icon: WandSparkles,
    title: "AI corrections",
    description:
      "Instant, natural corrections that sound like a fluent speaker, not a textbook.",
  },
  {
    icon: RotateCw,
    title: "Spaced repetition",
    description:
      "Patterns you struggle with resurface at the right time, until they stick.",
  },
  {
    icon: BookOpenCheck,
    title: "Grammar explanations",
    description:
      "A short, clear explanation for every correction so you understand the why.",
  },
  {
    icon: LineChart,
    title: "Progress tracking",
    description:
      "Watch your accuracy and pattern mastery improve session after session.",
  },
  {
    icon: Flame,
    title: "Streaks",
    description:
      "Stay consistent with daily streaks that keep five minutes non-negotiable.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need, nothing you don't."
          description="A focused toolkit built around one goal: thinking in English, faster."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <feature.icon className="size-5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
