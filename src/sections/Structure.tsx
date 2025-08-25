export default function Structure() {
  const steps = [
    {
      number: "01",
      title: "The Accelerator",
      description: "Our immersive, 3-month program equips fellows with the specialized skills, insights, and mentorship to thrive in the impact sector."
    },
    {
      number: "02", 
      title: "The Talent Pool",
      description: "Upon graduation, our fellows become part of an exclusive, pre-vetted talent pool, ready to make an immediate contribution to leading organizations."
    },
    {
      number: "03",
      title: "The VC & Growth Partner", 
      description: "We are deeply invested in our partners' success. As a VC and growth partner, we provide hands-on strategic support and capital to help businesses scale their impact globally."
    }
  ];

  return (
    <section
      aria-labelledby="structure-heading"
      className="mx-auto w-full max-w-6xl px-6 py-16"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-primary-blue/20 bg-primary-blue/5 px-4 py-2">
            <span className="text-sm font-medium text-primary-blue">How It Works</span>
          </div>
          
          <h2
            id="structure-heading"
            className="mb-6 text-5xl font-semibold tracking-tight text-gray-900"
          >
            Your Journey Across{" "}
            <span className="text-primary-blue">the Bridge</span>.
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            We've created a holistic process to turn purpose into powerful action.
          </p>
        </div>

        {/* Steps - 3 Column Layout */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Divider */}
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-0 hidden h-full w-px bg-primary-blue/10 md:block"></div>
              )}
              
              {/* Step Number */}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-primary-blue/20 bg-primary-blue/5">
                <span className="text-lg font-bold text-primary-blue">{step.number}</span>
              </div>
              
              {/* Step Content */}
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}