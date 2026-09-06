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

      <div className="relative z-10 mx-auto flex min-h-[max(42rem,100svh)] w-full max-w-7xl items-start px-4 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-[clamp(9rem,18vh,11rem)] lg:px-10 xl:px-8">
        <div className="hero-copy w-full max-w-[36rem] text-white">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/82 sm:text-sm">
            <span aria-hidden="true" className="h-px w-8 bg-aqua/90" />
            Welcome to
          </p>

          <h1
            id="hero-title"
            className="font-display text-[clamp(3.2rem,8vw,6.2rem)] font-bold leading-[0.94] tracking-[-0.045em]"
          >
            <span className="block">PAN GROUP</span>
            <span className="mt-3 block font-serif text-[0.45em] font-normal italic leading-tight tracking-[-0.02em] text-white/92 sm:mt-4">
              Breast Cancer Research
            </span>
          </h1>

          <div className="mt-7 max-w-[31rem] sm:mt-9">
            <p className="text-base leading-7 text-white/88 sm:text-lg sm:leading-8">
              A little place for our research, ideas and discoveries.
            </p>
            <p className="mt-3 text-xs font-medium tracking-[0.09em] text-white/70 sm:text-sm">
              Literature · Knowledge · Experiments
            </p>
          </div>

          <a
            href="#research"
            className="group mt-7 inline-flex min-h-12 items-center gap-5 rounded-full border border-white/60 bg-white/90 px-5 py-3 text-xs font-semibold tracking-[0.13em] text-deep shadow-[0_12px_35px_rgba(21,31,79,0.2)] backdrop-blur-xl transition-colors hover:bg-aqua focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua motion-reduce:transition-none sm:mt-9 sm:px-6 sm:text-sm"
          >
            EXPLORE NOW
            <span
              aria-hidden="true"
              className="text-base transition-transform group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
