import { useInView } from '../../hooks/useInView'

// Heatmap de densidad (estilo mapa de datos) — proyecto Delitos en Colombia.
// Las celdas laten en una onda diagonal continua (keyframe heatwave).
const COLS = 6
const CELLS = [
  0.15, 0.3, 0.55, 0.4, 0.2, 0.1,
  0.25, 0.6, 0.85, 0.7, 0.35, 0.2,
  0.4, 0.8, 1.0, 0.9, 0.5, 0.3,
  0.2, 0.45, 0.65, 0.5, 0.3, 0.15,
]

export default function HeatmapGraphic() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  return (
    <div
      ref={ref}
      className="grid w-[156px] gap-[5px]"
      style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}
    >
      {CELLS.map((o, i) => {
        const row = Math.floor(i / COLS)
        const col = i % COLS
        return (
          <div
            key={i}
            className="aspect-square rounded-[3px] bg-accent"
            style={{
              '--o': o,
              opacity: inView ? o : 0,
              animation: inView ? 'heatwave 3s ease-in-out infinite' : 'none',
              animationDelay: `${(row + col) * 0.15}s`,
            }}
          />
        )
      })}
    </div>
  )
}
