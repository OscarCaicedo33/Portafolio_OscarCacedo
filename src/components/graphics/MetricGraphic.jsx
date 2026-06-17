import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'

// Número grande 137 (count-up) + label + mini-barras animadas — Ticket Dashboard.
const MINI_BARS = [
  { h: '50%', o: 0.4 },
  { h: '80%', o: 0.6 },
  { h: '60%', o: 0.45 },
  { h: '100%', o: 1 },
  { h: '70%', o: 0.55 },
  { h: '40%', o: 0.35 },
]

export default function MetricGraphic() {
  const [ref, inView] = useInView({ threshold: 0.5 })
  const count = useCountUp(137, { start: inView })

  return (
    <div ref={ref} className="w-full text-center">
      <div className="font-display text-[84px] font-extrabold leading-none tracking-[-2px] text-text tabular-nums">
        {count}
      </div>
      <div className="mt-1 font-mono text-[11px] tracking-[2px] text-accent">
        TICKETS ANALIZADOS
      </div>
      <div className="mt-[18px] flex h-[46px] items-end gap-[6px]">
        {MINI_BARS.map((b, i) => (
          <div
            key={i}
            className="flex-1 bg-accent"
            style={{
              height: inView ? b.h : '0%',
              opacity: b.o,
              transition: 'height 0.8s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: `${i * 70}ms`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
