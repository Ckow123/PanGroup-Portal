export default function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="hero-shell relative isolate min-h-[max(42rem,100svh)] overflow-hidden bg-deep"
    >
      <img
        src="/media/hero/pan-group-hero-master-v1.png"
        alt="A chibi immune-cell guardian exploring a glowing tumor microenvironment"
        width={1672}
        height={941}
        fetchPriority="high"
        decoding="async"
        draggable="false"
        className="hero-art absolute inset-0 size-full object-cover"
      />
      <div aria-hidden="true" className="hero-wash absolute inset-0" />

      <div className="hero-layout relative z-10 mx-auto flex min-h-[max(42rem,100svh)] w-full max-w-7xl items-start px-4 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-[clamp(9rem,18vh,11rem)] lg:px-10 xl:px-8">
        <div className="hero-copy w-full max-w-[36rem] text-white">
          <p className="mb-5 flex items-center gap-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/84 sm:text-sm">
            <span aria-hidden="true" className="h-px w-8 bg-aqua/90" />
            Welcome to
          </p>

          <h1
            id="hero-title"
            className="hero-title font-display text-[clamp(3.2rem,8vw,6.2rem)] font-bold leading-[0.96] tracking-[-0.035em]"
          >
            <span className="block">PAN GROUP</span>
            <span className="mt-3 block font-serif text-[0.45em] font-normal italic leading-[1.18] tracking-[-0.012em] text-white/94 sm:mt-4">
              Breast Cancer Research
            </span>
          </h1>

          <div className="mt-7 max-w-[32rem] sm:mt-8">
            <p className="hero-description text-base leading-7 text-white/90 sm:text-lg sm:leading-[1.7]">
              A little place for our research, ideas and discoveries.
            </p>
            <p className="hero-microline mt-2.5 text-xs font-medium tracking-[0.085em] text-white/74 sm:text-sm">
              Literature · Knowledge · Experiments
            </p>
          </div>

          <a
            href="#research"
            aria-label="Explore Pan Group research"
            className="hero-cta group mt-8 inline-flex min-h-12 items-center gap-4 rounded-full border px-5 py-3 text-xs font-semibold tracking-[0.12em] text-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white focus-visible:ring-2 focus-visible:ring-aqua/70 sm:mt-10 sm:px-6 sm:text-sm"
          >
            EXPLORE NOW
            <span
              aria-hidden="true"
              className="hero-cta-arrow text-lg leading-none text-deep/75 motion-reduce:transform-none motion-reduce:transition-none"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
