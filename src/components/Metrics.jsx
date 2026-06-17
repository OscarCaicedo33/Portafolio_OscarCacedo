import { METRICS } from '../data/content'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import Reveal from './Reveal'

function MetricCard({ prefix, value, suffix, label, sub, delay }) {
  const [ref, inView] = useInView({ threshold: 0.5 })
  const count = useCountUp(value, { start: inView, duration: 1200 })

  return (
    <Reveal delay={delay} className="flex">
      <div
        ref={ref}
        className="flex w-full flex-col rounded-lg border border-line bg-surface p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent"
      >
        <div className="font-mono text-[11px] tracking-[2px] text-faint">
          {label}
        </div>
        <div className="mt-3 font-display text-[clamp(38px,5vw,56px)] font-extrabold leading-none tracking-[-1px] text-text tabular-nums">
          {prefix}
          {count}
          <span className="text-accent">{suffix}</span>
        </div>
        <div className="mt-3 text-[14px] leading-[1.5] text-muted">{sub}</div>
      </div>
    </Reveal>
  )
}

export default function Metrics() {
  return (
    <section className="py-[56px]">
      <div className="grid gap-[22px] sm:grid-cols-3">
        {METRICS.map((m, i) => (
          <MetricCard key={m.label} {...m} delay={i * 120} />
        ))}
      </div>
    </section>
  )
}
