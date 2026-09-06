export default function ClosingSection() {
  return (
    <section
      aria-labelledby="closing-title"
      className="closing-world relative overflow-hidden bg-mist px-4 py-20 text-ink sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="relative mx-auto grid max-w-6xl min-w-0 items-center gap-9 rounded-[2rem] border border-white/80 bg-white/55 p-7 shadow-[0_24px_70px_rgba(58,62,120,0.08)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-11 lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-14">
        <div className="min-w-0 max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#766fbd] sm:text-sm">
            <span aria-hidden="true" className="size-2 rounded-full bg-lilac" />
            Keep looking
          </p>
          <h2
            id="closing-title"
            className="font-display text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[1.03] tracking-[-0.045em]"
          >
            Follow the <span className="font-serif font-normal italic text-rose">questions.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink/62 sm:text-lg sm:leading-8">
            Move between the literature, shared knowledge and practical skills that
            shape the next experiment.
          </p>
        </div>

        <a
          href="#literature"
          className="group inline-flex min-h-12 w-fit items-center gap-5 rounded-full bg-deep px-6 py-3 text-xs font-semibold tracking-[0.12em] text-white shadow-[0_12px_30px_rgba(29,39,91,0.18)] transition-colors hover:bg-[#31437e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose motion-reduce:transition-none sm:text-sm"
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
    </section>
  )
}
