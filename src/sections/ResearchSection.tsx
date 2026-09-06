const researchRhythm = [
  {
    title: 'Read closely',
    body: 'Return to the literature and keep the evidence in view.',
    accent: 'bg-rose',
  },
  {
    title: 'Connect ideas',
    body: 'Make relationships between questions, concepts and observations.',
    accent: 'bg-lilac',
  },
  {
    title: 'Test carefully',
    body: 'Turn what we learn into thoughtful experimental practice.',
    accent: 'bg-aqua',
  },
]

export default function ResearchSection() {
  return (
    <section
      id="research"
      aria-labelledby="research-title"
      className="research-world relative z-20 -mt-8 rounded-t-[2rem] bg-paper px-4 py-20 text-ink sm:-mt-10 sm:rounded-t-[3rem] sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-rose sm:text-sm">
              <span aria-hidden="true" className="size-2 rounded-full bg-rose" />
              Our shared research space
            </p>
          <h2
            id="research-title"
              className="max-w-3xl font-display text-[clamp(2.4rem,5vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.045em]"
          >
            Research lives
              <span className="block font-serif font-normal italic text-rose">between ideas.</span>
          </h2>
          </div>

          <div className="max-w-xl lg:pb-1">
            <p className="text-lg font-medium leading-8 text-ink/88 sm:text-xl sm:leading-9">
              Pan Group is a shared place for the papers, questions and practical
              knowledge behind our research.
            </p>
            <p className="mt-5 text-base leading-7 text-ink/62 sm:text-lg sm:leading-8">
              We collect what we read, explain what we learn and document the
              skills that help ideas become experiments.
            </p>
          </div>
        </div>

        <ol className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-3">
          {researchRhythm.map((item) => (
            <li
              key={item.title}
              className="rounded-[1.5rem] border border-ink/8 bg-white/66 p-6 shadow-[0_16px_45px_rgba(55,55,105,0.055)] backdrop-blur-sm sm:p-7"
            >
              <span aria-hidden="true" className={`mb-8 block h-1 w-10 rounded-full ${item.accent}`} />
              <h3 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">{item.title}</h3>
              <p className="mt-3 max-w-sm text-base leading-7 text-ink/64">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
