// Caja punteada de "en construcción" — proyecto WIP.
export default function WipBox({ label = 'WIP' }) {
  return (
    <div className="relative flex h-[120px] w-[150px] items-center justify-center border border-dashed border-line">
      <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
      <span className="absolute left-[10px] top-2 font-mono text-[10px] tracking-[1px] text-faint">
        {label}
      </span>
      <span className="absolute bottom-2 font-mono text-[10px] tracking-[1px] text-faint">
        EN CONSTRUCCIÓN
      </span>
    </div>
  )
}
