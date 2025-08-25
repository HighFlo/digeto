export default function Metrics() {
  const kpis: { label: string; value: string; hint?: string }[] = [
    { label: "Total funded", value: "$18M+" },
    { label: "Startups supported", value: "89" },
    { label: "International projects", value: "47" },
    { label: "Angel investors", value: "500+" },
    { label: "VCs & institutional funds", value: "100+" },
    { label: "Countries in network", value: "15+" },
  ];

  const regionalSplit = [
    { label: "Europe", value: 58 },
    { label: "Asia", value: 16 },
    { label: "Middle East", value: 12 },
    { label: "North America", value: 8 },
    { label: "Africa", value: 6 },
  ];

  const fundingStage = [
    { label: "Series A", value: 68 },
    { label: "Seed", value: 25 },
    { label: "Series B", value: 7 },
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

      {/* Chart Containers */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Regional Split */}
        <div className="rounded-2xl border border-gray-100/50 bg-white/40 p-6 backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Client Regional Split
            </h3>
            <span className="text-xs text-gray-500">Share of portfolio</span>
          </div>
          <ul role="list" className="space-y-3">
            {regionalSplit.map((r) => (
              <li key={r.label} className="grid grid-cols-12 items-center gap-3">
                <div className="col-span-3 text-sm text-gray-600">{r.label}</div>
                <div className="col-span-7">
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-primary-blue"
                      style={{ width: `${r.value}%` }}
                      aria-label={`${r.label} ${r.value}%`}
                    />
                  </div>
                </div>
                <div className="col-span-2 text-right text-sm tabular-nums text-gray-700">
                  {r.value}%
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Funding Stage */}
        <div className="rounded-2xl border border-gray-100/50 bg-white/40 p-6 backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Funding Stage Distribution
            </h3>
            <span className="text-xs text-gray-500">Current focus</span>
          </div>
          <ul role="list" className="space-y-3">
            {fundingStage.map((s) => (
              <li key={s.label} className="grid grid-cols-12 items-center gap-3">
                <div className="col-span-3 text-sm text-gray-600">{s.label}</div>
                <div className="col-span-7">
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-primary-blue/80"
                      style={{ width: `${s.value}%` }}
                      aria-label={`${s.label} ${s.value}%`}
                    />
                  </div>
                </div>
                <div className="col-span-2 text-right text-sm tabular-nums text-gray-700">
                  {s.value}%
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-500">
            Focused primarily on Series A, with Seed and select Series B.
          </p>
        </div>
      </div>
    </section>
  );
}