import { Quote, Star } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative rounded-3xl border border-slate-200 bg-slate-50/60 p-10 text-center shadow-sm sm:p-14">
          <Quote className="mx-auto size-8 text-blue-200" strokeWidth={1.5} />

          <p className="mt-6 text-xl leading-relaxed font-medium tracking-tight text-slate-900 sm:text-2xl">
            &ldquo;I&apos;ve learned more practical English in one month than
            in years using traditional apps.&rdquo;
          </p>

          <div className="mt-6 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <p className="mt-3 text-sm text-slate-500">
            English learner, 3 months on Daily English Patterns
          </p>
        </div>
      </div>
    </section>
  );
}
