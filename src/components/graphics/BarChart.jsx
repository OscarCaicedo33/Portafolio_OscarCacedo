import { useInView } from '../../hooks/useInView'

// Gráfica de barras del hero: 6 barras en --accent que se animan en bucle
// como un ecualizador en vivo (cada una con su propio ritmo y desfase).
const BARS = [
  { h: '42%', o: 0.35, dur: '1.8s', delay: '0s' },
  { h: '68%', o: 0.5, dur: '1.4s', delay: '0.2s' },
  { h: '54%', o: 0.4, dur: '2.1s', delay: '0.5s' },
  { h: '100%', o: 1, dur: '1.6s', delay: '0.1s' },
  { h: '76%', o: 0.6, dur: '1.9s', delay: '0.35s' },
  { h: '48%', o: 0.4, dur: '1.5s', delay: '0.6s' },
]

export default function BarChart() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  return (
    <div ref={ref} className="my-[18px] flex h-[150px] items-end gap-[11px]">
      {BARS.map((b, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-[3px] bg-accent ${inView ? 'bar-eq' : ''}`}
          style={{
            height: b.h,
            opacity: b.o,
            '--eq-dur': b.dur,
            '--eq-delay': b.delay,
          }}
        />
      ))}
    </div>
  )
}
