const stats = [
  { value: "250+", label: "Sentences mastered" },
  { value: "35", label: "Patterns learned" },
  { value: "18", label: "Day streak" },
  { value: "94%", label: "Accuracy" },
];

export function Statistics() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-3xl font-semibold tracking-tight text-blue-600 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
