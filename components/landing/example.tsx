import { ArrowDown, BookOpenCheck, CheckCircle2, Languages, MessageSquareText } from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";

const flow = [
  {
    icon: Languages,
    label: "Spanish sentence",
    content: "“Se me olvidó traer el paraguas.”",
    tone: "default" as const,
  },
  {
    icon: MessageSquareText,
    label: "Your answer",
    content: "“I forgot bring the umbrella.”",
    tone: "muted" as const,
  },
  {
    icon: CheckCircle2,
    label: "AI correction",
    content: "“I forgot to bring the umbrella.”",
    tone: "success" as const,
  },
  {
    icon: BookOpenCheck,
    label: "Grammar explanation",
    content:
      "Use “forget + to + verb” to talk about forgetting to do something. “Forget + verb-ing” means forgetting that you already did it.",
    tone: "info" as const,
  },
];

export function Example() {
  return (
    <section id="example" className="scroll-mt-16 bg-slate-50/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="See it in action"
          title="One exercise, start to finish."
          description="This is exactly what happens every time you submit a sentence."
        />

        <div className="mx-auto mt-14 max-w-xl rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/[0.05] sm:p-3">
          {flow.map((item, index) => (
            <div key={item.label}>
              <div className="flex items-start gap-4 rounded-2xl p-5 sm:p-6">
                <span
                  className={
                    "flex size-10 shrink-0 items-center justify-center rounded-xl " +
                    (item.tone === "success"
                      ? "bg-emerald-50 text-emerald-600"
                      : item.tone === "info"
                        ? "bg-blue-50 text-blue-600"
                        : item.tone === "muted"
                          ? "bg-slate-100 text-slate-500"
                          : "bg-blue-50 text-blue-600")
                  }
                >
                  <item.icon className="size-5" />
                </span>
                <div className="pt-1">
                  <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    {item.label}
                  </p>
                  <p
                    className={
                      "mt-1.5 leading-relaxed " +
                      (item.tone === "info"
                        ? "text-sm text-slate-600"
                        : "text-lg font-medium text-slate-900")
                    }
                  >
                    {item.content}
                  </p>
                </div>
              </div>
              {index < flow.length - 1 ? (
                <div className="flex justify-center py-1">
                  <ArrowDown className="size-4 text-slate-300" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
