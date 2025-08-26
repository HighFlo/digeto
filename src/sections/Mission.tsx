export default function Mission() {
  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-6xl px-6 py-16"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full border border-primary-blue/20 bg-primary-blue/5 px-4 py-2">
            <span className="text-sm font-medium text-primary-blue">Our Mission</span>
          </div>
          
          <h2
            id="about-heading"
            className="text-5xl font-semibold tracking-tight text-gray-900"
          >
            Closing the Gap.{" "}
            <span className="text-primary-blue">Building the Bridge.</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-center">
          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            The most ambitious individuals want to solve pressing global challenges, 
            but the path to a high-impact career can be unclear.
          </div>
          
          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            At the same time, the most innovative impact-driven businesses struggle 
            to find the right talent and strategic support to scale.
          </div>
          
          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            We built <span className="font-semibold text-gray-900">The Bridge to Global Impact</span> to solve this.
          </div>
          
          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Our unique ecosystem provides the resources, talent, and network needed 
            to accelerate a <span className="font-semibold text-primary-blue">mission-driven economy</span>.
          </div>
        </div>
      </div>
    </section>
  );
}