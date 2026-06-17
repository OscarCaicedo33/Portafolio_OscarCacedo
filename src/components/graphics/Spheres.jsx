// 5 esferas de colores (degradados radiales) flotando — proyecto Pokémon ETL.
const SPHERES = [
  {
    left: 54, top: 18, size: 78,
    gradient: 'radial-gradient(circle at 32% 30%, #ff8a5b, #e8412a)',
    shadow: '0 10px 24px -8px rgba(232,65,42,.6)',
    delay: '0s',
  },
  {
    left: 12, top: 66, size: 56,
    gradient: 'radial-gradient(circle at 32% 30%, #6fb4ff, #2f7fe0)',
    delay: '0.6s',
  },
  {
    left: 108, top: 74, size: 48,
    gradient: 'radial-gradient(circle at 32% 30%, #7de08a, #34b04a)',
    delay: '1.2s',
  },
  {
    left: 4, top: 24, size: 30,
    gradient: 'radial-gradient(circle at 32% 30%, #ff9ee0, #d23ba0)',
    delay: '1.8s',
  },
  {
    left: 132, top: 30, size: 26,
    gradient: 'radial-gradient(circle at 32% 30%, #ffe08a, #e8b417)',
    delay: '2.4s',
  },
]

export default function Spheres() {
  return (
    <div className="relative h-[150px] w-[180px]">
      {SPHERES.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-floaty"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            background: s.gradient,
            boxShadow: s.shadow,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  )
}
