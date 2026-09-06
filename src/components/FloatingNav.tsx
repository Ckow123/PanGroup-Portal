const navItems = [
  { label: '文献', href: '#literature' },
  { label: '科普文', href: '#science-notes' },
  { label: '实验技能', href: '#lab-skills' },
  { label: '知识库', href: '#knowledge-base' },
]

export default function FloatingNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label="Primary navigation"
        className="floating-nav flex w-full max-w-4xl items-center gap-1 rounded-full border px-2 py-1.5 text-deep sm:w-auto sm:gap-3 sm:px-3 sm:py-2"
      >
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-2 rounded-full px-1.5 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep focus-visible:ring-2 focus-visible:ring-aqua/55 sm:pr-3"
          aria-label="Pan Group — back to top"
        >
          <span
            aria-hidden="true"
            className="size-2.5 rounded-full bg-aqua shadow-[0_0_10px_rgba(64,195,193,0.48)]"
          />
          <span className="text-[0.72rem] font-semibold tracking-[0.035em] text-deep/92 sm:text-sm">
            Pan Group
          </span>
        </a>

        <ul className="grid min-w-0 flex-1 grid-cols-4 items-center sm:flex sm:flex-none">
          {navItems.map((item) => (
            <li key={item.href} className="min-w-0">
              <a
                href={item.href}
                className="nav-link block whitespace-nowrap rounded-full px-1 py-2 text-center text-[0.7rem] font-medium text-deep/72 hover:text-deep focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-deep focus-visible:ring-2 focus-visible:ring-aqua/55 motion-reduce:transition-none sm:px-3 sm:text-sm"
                lang="zh-Hans"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
