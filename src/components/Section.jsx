// Encabezado de sección reutilizable: <h2> + línea que rellena el resto del ancho.
export function SectionHeader({ title, className = '' }) {
  return (
    <div className={`flex items-center gap-[18px] ${className}`}>
      <h2 className="m-0 font-display text-[clamp(26px,4vw,44px)] font-bold tracking-[-.5px] text-text">
        {title}
      </h2>
      <div className="h-px flex-1 bg-line" />
    </div>
  )
}
