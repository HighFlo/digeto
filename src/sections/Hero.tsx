import StatusPing from "../components/StatusPing";

export default function Hero() {
  return (
    <main className="w-full flex flex-col items-center justify-center bg-white px-6 py-36">
      {/* Status Ping */}
      <div className="mb-4">
        <StatusPing />
      </div>

      {/* Heading + Subtext */}
      <section className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900">
          The Bridge to Global Impact.
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          We connect purpose-driven talent, capital, and a global network to
          scale solutions for a better world.
        </p>
      </section>

      {/* Sections */}
      <section className="mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        {/* Talent */}
        <div className="flex flex-col rounded-xl bg-primary-blue/10 p-6 h-full">
          <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900">
            <span>🌐</span>
            <span>Talent</span>
          </h3>
          <p className="mt-3 text-sm text-gray-600 flex-grow">
            Join our Accelerator, become part of the talent pool for exclusive
            job opportunities, and work with the next generation of impactful
            ventures.
          </p>
          <button className="self-start mt-4 inline-flex items-center rounded-md bg-primary-blue px-4 py-2 text-sm font-medium text-white hover:bg-primary-blue/70">
            Join now →
          </button>
        </div>

        {/* Startups */}
        <div className="flex flex-col rounded-xl bg-primary-blue/10 p-6 h-full">
          <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900">
            <span>🚀</span>
            <span>Startups</span>
          </h3>
          <p className="mt-3 text-sm text-gray-600 flex-grow">
            Secure smart capital, scale with expert support, and hire top Edge
            Talent to grow your venture.
          </p>
          <button className="self-start mt-4 inline-flex items-center rounded-md bg-primary-blue px-4 py-2 text-sm font-medium text-white hover:bg-primary-blue/70">
            Connect →
          </button>
        </div>

        {/* Partners */}
        <div className="flex flex-col rounded-xl bg-primary-blue/10 p-6 h-full">
          <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900">
            <span>💡</span>
            <span>Partners</span>
          </h3>
          <p className="mt-3 text-sm text-gray-600 flex-grow">
            Become a pivotal part of the global movement toward a sustainable future. Partner with us to accelerate impactful solutions.
          </p>
          <button className="self-start mt-4 inline-flex items-center rounded-md bg-primary-blue px-4 py-2 text-sm font-medium text-white hover:bg-primary-blue/70">
            Contact us →
          </button>
        </div>
      </section>
    </main>
  );
}