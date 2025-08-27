import { IconArrowRight } from '@tabler/icons-react';

export default function ForStartups() {
  const benefits = [
    {
      title: "Raise Smarter, Faster",
      description:
        "Get matched with the right investors and access our fundraising matchmaking platform to accelerate your next round.",
      icon: "💸",
    },
    {
      title: "Tap Global Talent",
      description:
        "Plug into EDGE’s talent pool of impact-oriented applicants, plus a free month of support to kickstart BD, ops, tech, or fundraising tasks.",
      icon: "👩‍💻",
    },
    {
      title: "Scale With Support",
      description:
        "Unlock expert help across HR, Legal, Finance, Supply Chain, Marketing and ESG—alongside international expansion and partnership access.",
      icon: "🛠️",
    },
  ];

  return (
    <div id="startups" className="mx-auto w-full max-w-5xl px-6 py-12">
      {/* Hero */}
      <div className="mb-16 text-center">
        <div className="mb-4 inline-block rounded-full border border-primary-blue/30 bg-primary-blue/10 px-5 py-2">
          <span className="text-sm font-semibold text-primary-blue">
            For Startups
          </span>
        </div>

        <h1 className="mb-6 text-5xl font-semibold text-gray-900">
          Build What Matters.
          <br />
          <span className="text-primary-blue">Scale Beyond Borders.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          From fundraising to global expansion, we connect you to capital,
          talent, and operators who deliver impact from day one.
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
<div className="bg-primary-blue/3 border border-primary-blue/10 p-12 rounded-3xl text-center group hover:bg-primary-blue/5 transition-all duration-300">
  <h3 className="mb-6 text-2xl font-medium text-gray-900 tracking-tight">
    Ready to scale your startup?
  </h3>
  <a
    href=""
    className="inline-flex items-center gap-3 bg-primary-blue px-8 py-4 rounded-full text-base font-medium text-white transition-all duration-300 hover:bg-primary-blue/90 hover:shadow-lg hover:shadow-primary-blue/25 hover:-translate-y-0.5 group-hover:scale-105"
  >
    Connect
    <IconArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
  </a>
</div>
      
    </div>
  );
}