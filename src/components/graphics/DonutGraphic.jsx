import { useInView } from '../../hooks/useInView'

// Gráfico de dona (cuota de mercado) — proyecto Consumo Masivo Brasil.
// El anillo gira lentamente en bucle; la etiqueta central queda fija.
const SEGMENTS = [
  { to: 42, color: 'var(--accent)' },
  { to: 68, color: 'color-mix(in srgb, var(--accent) 65%, transparent)' },
  { to: 86, color: 'color-mix(in srgb, var(--accent) 40%, transparent)' },
  { to: 100, color: 'color-mix(in srgb, var(--accent) 22%, transparent)' },
]

function buildGradient() {
  let start = 0
  const stops = SEGMENTS.map((s) => {
    const piece = `${s.color} ${start}% ${s.to}%`
    start = s.to
    return piece
  })
  return `conic-gradient(${stops.join(', ')})`
}

export default function DonutGraphic() {
  const [ref, inView] = useInView({ threshold: 0.5 })
  return (
    <div
      ref={ref}
      className="relative h-[140px] w-[140px]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.85)',
        transition: 'opacity 0.6s ease, transform 0.9s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* Anillo giratorio */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: buildGradient(),
          animation: inView ? 'spin-slow 16s linear infinite' : 'none',
        }}
      />
      {/* Hueco central + etiqueta (fijos) */}
      <div className="absolute inset-[26px] flex items-center justify-center rounded-full bg-surface">
        <span className="font-mono text-[11px] tracking-[1px] text-faint">BR · 2025</span>
      </div>
    </div>
  )
}
