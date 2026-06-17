import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

// Anima un número de 0 a `end` cuando `start` pasa a true.
// Con reduced-motion, salta directo al valor final.
export function useCountUp(end, { duration = 1400, start = false } = {}) {
  const [value, setValue] = useState(0)
  const reduced = usePrefersReducedMotion()
  const frameRef = useRef(null)

  useEffect(() => {
    if (!start) return
    if (reduced) {
      setValue(end)
      return
    }

    let startTime = null
    const tick = (now) => {
      if (startTime === null) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))
      if (progress < 1) frameRef.current = requestAnimationFrame(tick)
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [start, end, duration, reduced])

  return value
}
