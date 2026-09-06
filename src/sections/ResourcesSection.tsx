const resources = [
  {
    id: 'literature',
    index: '01',
    label: '文献',
    title: 'Literature',
    description: 'Papers, reading notes and the ideas worth returning to.',
    cue: 'Read',
    accent: 'bg-coral',
  },
  {
    id: 'science-notes',
    index: '02',
    label: '科普文',
    title: 'Science notes',
    description: 'Clear explanations that make complex cancer biology easier to follow.',
    cue: 'Understand',
    accent: 'bg-rose',
  },
  {
    id: 'lab-skills',
    index: '03',
    label: '实验技能',
    title: 'Lab skills',
    description: 'Methods, protocols and practical lessons from experimental work.',
    cue: 'Practice',
    accent: 'bg-aqua',
  },
  {
    id: 'knowledge-base',
    index: '04',
    label: '知识库',
    title: 'Knowledge base',
    description: 'Connected concepts, references and discoveries in one shared system.',
    cue: 'Connect',
    accent: 'bg-lilac',
  },
]

export default function ResourcesSection() {
  return (
    <section
      id="knowledge"
      aria-labelledby="resources-title"
      className="resources-world relative overflow-hidden bg-blush px-4 py-20 text-ink sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="relative mx-auto max-w-6xl">
        <header className="grid min-w-0 items-end gap-7 lg:grid-cols-[1fr_24rem] lg:gap-20">
          <div className="min-w-0">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-rose sm:text-sm">
              <span aria-hidden="true" className="size-2 rounded-full bg-aqua" />
              Knowledge &amp; resources
            </p>
            <h2
              id="resources-title"
              className="min-w-0 font-display text-[clamp(2.35rem,5vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.045em]"
            >
              Four ways into
              <span className="block font-serif font-normal italic text-[#766fbd]">the work.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-ink/62 sm:text-lg sm:leading-8">
            Four connected ways into the work—from reading a paper to running an
            experiment.
          </p>
        </header>

        <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-2">
          {resources.map((resource) => (
            <article
              key={resource.id}
              id={resource.id}
              className="resource-card scroll-mt-28 rounded-[1.65rem] border border-white/85 bg-white/64 p-6 shadow-[0_18px_55px_rgba(68,61,111,0.07)] backdrop-blur-md sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/54">
                  <span aria-hidden="true" className={`size-2.5 rounded-full ${resource.accent}`} />
                  <span>{resource.cue}</span>
                </div>
                <span className="rounded-full border border-ink/8 bg-white/55 px-3 py-1.5 text-sm text-ink/66" lang="zh-Hans">
                  {resource.label}
                </span>
              </div>

              <div className="mt-9 sm:mt-11">
                <p className="mb-3 text-xs font-medium tracking-[0.12em] text-ink/38">
                  {resource.index}
                </p>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  {resource.title}
                </h3>
                <p className="mt-3 max-w-lg text-base leading-7 text-ink/62">
                  {resource.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
