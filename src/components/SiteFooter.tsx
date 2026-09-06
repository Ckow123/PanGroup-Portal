export default function SiteFooter() {
  return (
    <footer className="bg-paper px-4 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-4 border-t border-ink/10 py-8 text-sm sm:grid-cols-3 sm:items-center sm:py-9">
        <a
          href="#top"
          className="w-fit font-semibold tracking-[0.04em] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose"
        >
          Pan Group
        </a>
        <p className="font-serif text-ink/72 sm:text-center">Breast Cancer Research</p>
        <p className="text-ink/58 sm:text-right">
          Literature · Knowledge · Experiments
        </p>
      </div>
    </footer>
  )
}
