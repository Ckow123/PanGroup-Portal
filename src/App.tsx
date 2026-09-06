import FloatingNav from './components/FloatingNav'
import SiteFooter from './components/SiteFooter'
import ClosingSection from './sections/ClosingSection'
import HeroSection from './sections/HeroSection'
import ResearchSection from './sections/ResearchSection'
import ResourcesSection from './sections/ResourcesSection'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-full bg-deep px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-aqua motion-reduce:transition-none"
      >
        Skip to content
      </a>
      <FloatingNav />
      <main id="main-content">
        <HeroSection />
        <ResearchSection />
        <ResourcesSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </div>
  )
}
