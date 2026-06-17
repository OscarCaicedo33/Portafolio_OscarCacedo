// Toggle oscuro/claro. Muestra el icono del tema al que se cambiará.
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      title={isDark ? 'Tema claro' : 'Tema oscuro'}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-[15px] text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? '☀' : '☾'}
    </button>
  )
}
