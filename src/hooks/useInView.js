import { useEffect, useRef, useState } from 'react'

// Detecta cuándo un elemento entra en el viewport (una sola vez por defecto).
// Devuelve [ref, inView] para disparar animaciones de entrada.
export function useInView({ threshold = 0.2, once = true, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Sin soporte de IntersectionObserver: mostrar de inmediato.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once, rootMargin])

  return [ref, inView]
}
