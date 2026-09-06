export default function ClosingSection() {
  return (
    <section
      aria-labelledby="closing-title"
      className="closing-world relative overflow-hidden border-t border-white/65 bg-mist px-4 py-20 text-ink sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="closing-panel relative mx-auto grid max-w-6xl min-w-0 items-center gap-9 rounded-[2rem] border p-7 backdrop-blur-md sm:rounded-[2.5rem] sm:p-11 lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-14">
        <div className="min-w-0 max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.17em] text-lilac-ink sm:text-sm">
            <span aria-hidden="true" className="size-2 rounded-full bg-lilac" />
            Keep looking
          </p>
          <h2
            id="closing-title"
            className="section-title font-display text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
          >
            Follow the <span className="font-serif font-normal italic text-rose-ink">questions.</span>
          </h2>
          <p className="section-copy mt-5 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
            Move between the literature, shared knowledge and practical skills that
            shape the next experiment.
          </p>
        </div>

        <a
          href="#literature"
          aria-label="Explore literature resources"
          className="closing-cta group inline-flex min-h-12 w-fit items-center gap-4 rounded-full border border-white/10 bg-deep/95 px-6 py-3 text-xs font-semibold tracking-[0.115em] text-white hover:bg-[#31437e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep focus-visible:ring-2 focus-visible:ring-aqua/65 motion-reduce:transition-none sm:text-sm"
        >
          EXPLORE NOW
          <span
            aria-hidden="true"
            className="text-lg leading-none text-white/82 transition-transform group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
          >
            →
          </span>
        </a>
      </div>
    </section>
  )
}
