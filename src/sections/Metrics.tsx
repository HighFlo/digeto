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
      <div className="mb-12 text-center">
        <h2
          id="metrics-heading"
          className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl"
        >
          Our Numbers
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500">
          Funding, reach, and outcomes from our global impact ecosystem.
        </p>
      </div>

      {/* KPI Numbers - Clean Layout */}
      <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="text-center">
            <div className="text-5xl font-bold text-black md:text-6xl">
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