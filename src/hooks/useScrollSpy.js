import { useEffect, useState } from 'react'

// Devuelve el id de la sección actualmente visible para resaltar el nav.
export function useScrollSpy(ids, { rootMargin = '-45% 0px -50% 0px' } = {}) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin, threshold: 0 },
    )

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, rootMargin])

  return activeId
}
