export default function ForBusinesses() {
  const benefits = [
    {
      title: "Curated Talent Pipeline",
      description:
        "Stop sifting through resumes. We offer direct access to a curated talent pool of pre-vetted, mission-aligned professionals who will fit seamlessly into your team.",
      icon: "👥",
    },
    {
      title: "Strategic Growth Partner",
      description:
        "As an active VC and growth partner, we provide hands-on support in business development, market expansion, and more, helping you overcome the unique challenges of scaling an impact-driven business.",
      icon: "📈",
    },
    {
      title: "Seamless Integration",
      description:
        "Our graduates understand the unique ecosystem of impact organizations and are prepared to contribute from day one, minimizing onboarding time and risk.",
      icon: "⚡",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      {/* Hero Section - Centered */}
      <div className="mb-16 text-center">
        <div className="mb-4 inline-block rounded-full border border-primary-blue/30 bg-primary-blue/10 px-5 py-2">
          <span className="text-sm font-semibold text-primary-blue">
            For Businesses
          </span>
        </div>

        <h1 className="mb-6 text-5xl font-semibold text-gray-900">
          Find the Talent.
          <br />
          <span className="text-primary-blue">Fuel the Growth.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          You're building a solution for a better world. We are your partner for
          talent and scale.
        </p>
      </div>

      {/* Benefits Section - Horizontal Cards */}
      <div className="mb-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Why Our Bridge?</h2>
        </div>

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

      {/* CTA Section - Full Width Card */}
      <div className="rounded-2xl bg-primary-blue p-8 text-center">
        <h3 className="mb-4 text-3xl font-semibold text-white">
          Ready to Scale Your Impact?
        </h3>

        <p className="mx-auto mb-6 max-w-xl text-lg text-white/80">
          Partner with us to access top talent and strategic support that will
          accelerate your mission-driven business.
        </p>

        <div className="flex flex-col items-center space-y-3 sm:flex-row sm:justify-center sm:space-x-3 sm:space-y-0">
          <button className="rounded-xl bg-white px-8 py-3 text-base font-semibold text-primary-blue">
            Connect with Our Team
          </button>

          <button className="rounded-xl border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all hover:bg-primary-blue hover:text-white">
            View Success Stories
          </button>
        </div>
      </div>
    </div>
  );
}