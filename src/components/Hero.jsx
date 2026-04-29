export default function Hero() {
  return (
    <section className="bg-neutral-bg" aria-labelledby="hero-heading">
      <div className="container-page pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            id="hero-heading"
            className="display-italic text-4xl md:text-6xl lg:text-7xl text-primary-dark leading-[1.1]"
          >
            Work smarter, not harder &mdash; achieve better results with smarter planning and focused effort.
          </h1>

          <p className="mx-auto mt-12 md:mt-16 max-w-xl text-base md:text-lg text-primary-dark/85 leading-relaxed">
            We offer comprehensive virtual administrative support and social media
            management packages thoughtfully tailored to fit your budget, current
            workload, and scheduling needs.
          </p>
        </div>

        <div className="mt-12 md:mt-16 overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=70"
            alt="A virtual assistant working on a laptop in a bright workspace"
            loading="eager"
            className="h-[360px] md:h-[520px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
