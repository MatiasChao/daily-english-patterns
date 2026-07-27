import { ArrowDown, ArrowRight, Languages, Target, Wand2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";

const steps: {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    step: "1",
    title: "Translate",
    description: "Write how you would naturally say the sentence.",
    icon: Languages,
  },
  {
    step: "2",
    title: "Get AI Feedback",
    description: "Receive corrections and a short explanation.",
    icon: Wand2,
  },
  {
    step: "3",
    title: "Master Patterns",
    description: "Review only what you need until it becomes automatic.",
    icon: Target,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From Spanish thoughts to English instinct."
          description="Three simple steps, repeated for five minutes a day, until English stops feeling like a translation."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {steps.map((item, index) => (
            <div key={item.step} className="relative flex flex-col items-center text-center">
              <div className="flex size-28 items-center justify-center rounded-3xl bg-blue-50">
                <item.icon className="size-11 text-blue-600" strokeWidth={1.75} />
              </div>

              <span className="mt-6 flex size-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                {item.step}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[22rem] text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>

              {index < steps.length - 1 ? (
                <>
                  <ArrowDown className="mt-6 size-5 text-slate-300 lg:hidden" />
                  <ArrowRight className="absolute top-12 -right-3 hidden size-5 text-slate-300 lg:block" />
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
