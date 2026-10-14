import { useEffect, useRef } from 'react'

export function useParallax(factor = 0.3) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * factor * 40
      const y = (e.clientY / window.innerHeight - 0.5) * factor * 40
      el.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [factor])

  return ref
}
