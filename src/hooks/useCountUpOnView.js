import { useEffect, useMemo, useState } from 'react'

export function useCountUpOnView({ inView, value, durationMs = 900 }) {
  const [display, setDisplay] = useState(0)
  const target = useMemo(() => Number(value) || 0, [value])

  useEffect(() => {
    if (!inView) return

    let raf = null
    const start = performance.now()

    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => raf && cancelAnimationFrame(raf)
  }, [inView, target, durationMs])

  return display
}
