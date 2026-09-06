import { useEffect, useRef } from 'react'

export default function useHeroMotion() {
  const shellRef = useRef<HTMLElement>(null)
  const artRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const shell = shellRef.current
    const art = artRef.current
    if (!shell || !art) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const desktopPointer = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)')
    let inView = true
    let listening = false
    let frame = 0
    let lastTime = 0
    let x = 0
    let y = 0
    let targetX = 0
    let targetY = 0
    let bounds = shell.getBoundingClientRect()
    let documentTop = bounds.top + window.scrollY

    const measureBounds = () => {
      bounds = shell.getBoundingClientRect()
      documentTop = bounds.top + window.scrollY
    }

    const resetPointer = () => {
      cancelAnimationFrame(frame)
      frame = 0
      lastTime = 0
      x = y = targetX = targetY = 0
      art.style.removeProperty('transform')
    }

    const interpolate = (time: number) => {
      const delta = time - lastTime
      lastTime = time
      const ease = 1 - Math.exp(-delta / 110)
      x += (targetX - x) * ease
      y += (targetY - y) * ease
      const settled = Math.abs(targetX - x) < 0.005 && Math.abs(targetY - y) < 0.005
      if (settled) {
        x = targetX
        y = targetY
      }

      // Only cover the pixels exposed by pointer translation; the resting crop is P2.
      const edgeCover = 1 + 2 * Math.max(Math.abs(x) / bounds.width, Math.abs(y) / bounds.height)
      art.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${edgeCover})`
      frame = settled ? 0 : requestAnimationFrame(interpolate)
      if (settled) lastTime = 0
    }

    const requestFrame = () => {
      if (!frame) {
        lastTime = performance.now()
        frame = requestAnimationFrame(interpolate)
      }
    }

    const enter = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        resetPointer()
        return
      }
      // Geometry is cached on entry/resize, never read in the animation loop.
      measureBounds()
    }

    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        resetPointer()
        return
      }
      const normalizedX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1))
      const normalizedY = Math.max(-1, Math.min(1, (event.pageY - documentTop) / bounds.height * 2 - 1))
      targetX = normalizedX * 2
      targetY = normalizedY * 1.5
      requestFrame()
    }

    const leave = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        resetPointer()
        return
      }
      targetX = targetY = 0
      if (x || y) requestFrame()
      else resetPointer()
    }

    const syncMotion = () => {
      const paused = !inView || document.hidden
      shell.dataset.motionPaused = String(paused)
      const enabled = !reducedMotion.matches && desktopPointer.matches && !paused
      if (enabled === listening) return
      listening = enabled
      if (enabled) {
        measureBounds()
        shell.addEventListener('pointerenter', enter)
        shell.addEventListener('pointermove', move, { passive: true })
        shell.addEventListener('pointerleave', leave)
        shell.addEventListener('pointercancel', leave)
      } else {
        shell.removeEventListener('pointerenter', enter)
        shell.removeEventListener('pointermove', move)
        shell.removeEventListener('pointerleave', leave)
        shell.removeEventListener('pointercancel', leave)
        resetPointer()
      }
    }

    const refreshBounds = () => {
      resetPointer()
      if (listening) measureBounds()
    }

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      syncMotion()
    })
    observer.observe(shell)
    reducedMotion.addEventListener('change', syncMotion)
    desktopPointer.addEventListener('change', syncMotion)
    document.addEventListener('visibilitychange', syncMotion)
    window.addEventListener('resize', refreshBounds)
    window.addEventListener('scroll', resetPointer, { passive: true })
    syncMotion()

    return () => {
      observer.disconnect()
      reducedMotion.removeEventListener('change', syncMotion)
      desktopPointer.removeEventListener('change', syncMotion)
      document.removeEventListener('visibilitychange', syncMotion)
      window.removeEventListener('resize', refreshBounds)
      window.removeEventListener('scroll', resetPointer)
      shell.removeEventListener('pointerenter', enter)
      shell.removeEventListener('pointermove', move)
      shell.removeEventListener('pointerleave', leave)
      shell.removeEventListener('pointercancel', leave)
      resetPointer()
      delete shell.dataset.motionPaused
    }
  }, [])

  return { shellRef, artRef }
}
