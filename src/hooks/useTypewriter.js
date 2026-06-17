import { useEffect, useRef, useState } from 'react'

// Efecto typewriter: escribe ~85ms/char, pausa 1.5s, borra ~40ms/char,
// pausa 0.35s y pasa a la siguiente palabra. Loop infinito.
const TYPE_MS = 85
const DELETE_MS = 40
const PAUSE_FULL = 1500
const PAUSE_EMPTY = 350

export function useTypewriter(words) {
  const [typed, setTyped] = useState('')
  const stateRef = useRef({ ri: 0, ci: 0, deleting: false })
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (!words || words.length === 0) return

    const tick = () => {
      const s = stateRef.current
      const word = words[s.ri]

      if (!s.deleting) {
        s.ci++
        setTyped(word.slice(0, s.ci))
        if (s.ci >= word.length) {
          s.deleting = true
          timeoutRef.current = setTimeout(tick, PAUSE_FULL)
          return
        }
        timeoutRef.current = setTimeout(tick, TYPE_MS)
      } else {
        s.ci--
        setTyped(word.slice(0, s.ci))
        if (s.ci <= 0) {
          s.deleting = false
          s.ri = (s.ri + 1) % words.length
          timeoutRef.current = setTimeout(tick, PAUSE_EMPTY)
          return
        }
        timeoutRef.current = setTimeout(tick, DELETE_MS)
      }
    }

    timeoutRef.current = setTimeout(tick, TYPE_MS)
    return () => clearTimeout(timeoutRef.current)
  }, [words])

  return typed
}
