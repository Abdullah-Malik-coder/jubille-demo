import { useEffect, useMemo, useState } from 'react'

export function useCountUp({ start = 0, end = 100, durationMs = 1100, enabled = true }) {
  const [value, setValue] = useState(start)

  const startTime = useMemo(() => (enabled ? performance.now() : 0), [enabled])

  useEffect(() => {
    if (!enabled) return

    let raf = 0
    const tick = (now) => {
      const elapsed = now - startTime
      const t = Math.min(1, elapsed / durationMs)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3)
      const next = Math.round(start + (end - start) * eased)
      setValue(next)
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [durationMs, enabled, end, start, startTime])

  return value
}
