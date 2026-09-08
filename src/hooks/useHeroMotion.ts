import { useEffect, useRef } from 'react'

export default function useHeroMotion() {
  const shellRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const shell = shellRef.current
    if (!shell) return

    let inView = true

    const syncMotion = () => {
      const paused = !inView || document.hidden
      shell.dataset.motionPaused = String(paused)
    }

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      syncMotion()
    })
    observer.observe(shell)
    document.addEventListener('visibilitychange', syncMotion)
    syncMotion()

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', syncMotion)
      delete shell.dataset.motionPaused
    }
  }, [])

  return { shellRef }
}
