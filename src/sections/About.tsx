export default function About() {
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

        {/* Visual Elements */}
        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center space-x-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-blue/30 bg-primary-blue/10">
              <span className="text-sm font-bold text-primary-blue">01</span>
            </div>
            
            <div className="h-px w-16 bg-primary-blue/30"></div>
            
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-blue/30 bg-primary-blue/10">
              <span className="text-sm font-bold text-primary-blue">02</span>
            </div>
            
            <div className="h-px w-16 bg-primary-blue/30"></div>
            
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-blue bg-primary-blue">
              <span className="text-sm font-bold text-white">03</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 text-center md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-sm font-semibold text-gray-900">Identify</div>
            <div className="text-sm text-gray-500">Global challenges & opportunities</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-sm font-semibold text-gray-900">Connect</div>
            <div className="text-sm text-gray-500">Talent with impact businesses</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-sm font-semibold text-gray-900">Accelerate</div>
            <div className="text-sm text-gray-500">Mission-driven economy</div>
          </div>
        </div>
      </div>
    </section>
  );
}