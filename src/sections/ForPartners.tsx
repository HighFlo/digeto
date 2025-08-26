export default function ForPartners() {
  const benefits = [
    {
      title: "Curated Impact Deal Flow",
      description:
        "Access vetted startups building in climate, health, education, agritech, and more—screened for impact and scalability.",
      icon: "🔎",
    },
    {
      title: "Co-Invest & Collaborate",
      description:
        "Connect with a global network of founders and co-investors to structure strategic deals and partnerships.",
      icon: "🤝",
    },
    {
      title: "ESG & Portfolio Support",
      description:
        "Leverage our experts and EDGE talent to strengthen diligence, ESG practices, and hands-on value creation post-investment.",
      icon: "📈",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      {/* Hero */}
      <div className="mb-16 text-center">
        <div className="mb-4 inline-block rounded-full border border-primary-blue/30 bg-primary-blue/10 px-5 py-2">
          <span className="text-sm font-semibold text-primary-blue">
            For Partners
          </span>
        </div>

        <h1 className="mb-6 text-5xl font-semibold text-gray-900">
          Invest With Purpose.
          <br />
          <span className="text-primary-blue">Lead the Future.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Discover high-quality, impact-aligned opportunities and collaborate
          with us to grow category-defining ventures.
        </p>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <div className="space-y-5">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-primary-blue/10 bg-primary-blue/5 p-6"
            >
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-primary-blue/20 bg-white">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-3">
                    <span className="text-sm font-bold text-primary-blue">
                      0{index + 1}
                    </span>
                    <div className="h-px flex-1 bg-primary-blue/20"></div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>

                  <p className="text-base text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}