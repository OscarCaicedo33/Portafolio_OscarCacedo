import { ROLES, CV_URL } from '../data/content'
import { useTypewriter } from '../hooks/useTypewriter'
import BarChart from './graphics/BarChart'
import Reveal from './Reveal'

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section
      id="top"
      className="relative grid min-h-[calc(100vh-150px)] items-center gap-12 scroll-mt-[120px] md:grid-cols-[1.15fr_.85fr]"
    >
      {/* Glow de acento ambiental */}
      <div className="hero-glow -left-32 top-0" aria-hidden="true" />

      {/* Columna izquierda */}
      <Reveal className="relative">
        <div className="mb-[18px] font-mono text-[14px] tracking-[1px] text-accent">
          // hola, soy
        </div>
        <h1 className="m-0 font-display text-[clamp(40px,6.4vw,82px)] font-extrabold leading-[.98] tracking-[-1px] text-text">
          Oscar
          <br />
          Caicedo
        </h1>
        <div className="mt-[14px] font-display text-[clamp(20px,2.8vw,34px)] font-medium text-muted">
          Especialista en <span className="text-accent">{typed}</span>
          <span className="text-accent animate-blink">|</span>
        </div>
        <p className="mt-[26px] max-w-[480px] text-[16px] leading-[1.7] text-muted">
          3+ años convirtiendo datos complejos en decisiones de negocio reales.
          Canales digitales · sector financiero · Colombia.
        </p>
        <div className="mt-[38px] flex flex-wrap items-center gap-[22px]">
          <a
            href="#proyectos"
            className="rounded-lg border border-accent bg-accent px-6 py-[14px] font-mono text-[14px] font-bold tracking-[.5px] text-accent-ink transition-opacity hover:opacity-90"
          >
            Ver proyectos →
          </a>
          <a href="#contacto" className="font-mono text-[14px] text-text">
            Contacto →
          </a>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[14px] text-muted hover:text-text"
          >
            ↓ Descargar CV
          </a>
        </div>
      </Reveal>

      {/* Columna derecha — tarjeta de datos */}
      <Reveal delay={150} className="relative">
        <div className="rounded-[14px] border border-line bg-surface p-7 shadow-hero">
          <div className="font-mono text-[11px] tracking-[2px] text-faint">
            DATA ANALYST · BI
          </div>
          <BarChart />
          <div className="mt-[18px] border-t border-line pt-[14px] font-mono text-[11px] tracking-[1px] text-muted">
            <span>+1M REGISTROS / MES</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
