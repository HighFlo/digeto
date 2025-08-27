export default function Metrics() {
  const kpis: { label: string; value: string; hint?: string }[] = [
    { label: "Talents", value: "255" },
    { label: "Total funded", value: "$18M+" },
    { label: "Startups supported", value: "89" },
    { label: "International projects", value: "47" },
  ];

  return (
    <section
      aria-labelledby="metrics-heading"
      className="mx-auto w-full max-w-6xl px-6 py-16"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Section Header — same as Mission */}
        <div className="mb-12">
          <div className="mb-4 inline-block rounded-full border border-primary-blue/20 bg-primary-blue/5 px-4 py-2">
            <span className="text-sm font-medium text-primary-blue">Our Numbers</span>
          </div>

          <h2
            id="metrics-heading"
            className="text-5xl font-semibold tracking-tight text-gray-900"
          >
            Measuring our{" "}
            <span className="text-primary-blue">global footprint</span>.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Funding, reach, and outcomes from our impact ecosystem.
          </p>
        </div>
      </div>

      {/* KPI Grid — centered, clean, Mission-aligned */}
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-2xl border border-gray-200 bg-white/60 p-6 text-center shadow-sm"
          >
            <div className="text-5xl font-semibold text-gray-900 md:text-6xl">
              {kpi.value}
            </div>
            <div className="mt-2 text-sm font-medium text-gray-600">
              {kpi.label}
            </div>
            {kpi.hint && (
              <div className="mt-1 text-xs text-gray-400">{kpi.hint}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}