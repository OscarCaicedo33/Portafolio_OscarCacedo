import ThemeToggle from './ThemeToggle'
import { useScrollSpy } from '../hooks/useScrollSpy'

const LINKS = [
  { href: '#sobre', id: 'sobre', label: 'Sobre mí' },
  { href: '#stack', id: 'stack', label: 'Stack' },
  { href: '#experiencia', id: 'experiencia', label: 'Experiencia' },
  { href: '#proyectos', id: 'proyectos', label: 'Proyectos' },
  { href: '#contacto', id: 'contacto', label: 'Contacto' },
]

const SECTION_IDS = LINKS.map((l) => l.id)

export default function Navbar({ theme, onToggleTheme }) {
  const activeId = useScrollSpy(SECTION_IDS)
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-7 py-4">
        <a
          href="#top"
          aria-label="Inicio"
          title="Inicio"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 10.5 12 3l9 7.5" />
            <path d="M5 9.5V21h14V9.5" />
          </svg>
        </a>
        <div className="flex items-center gap-5 sm:gap-[26px]">
          <div className="hidden gap-[26px] font-mono text-[13px] tracking-[.5px] sm:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`transition-colors hover:text-accent ${
                  activeId === l.id ? 'text-accent' : 'text-muted'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </nav>
  )
}
