import { WHATSAPP_URL, SOCIALS } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-[120px] pb-[70px] pt-[120px] text-center">
      <Reveal>
      <h2 className="m-0 font-display text-[clamp(38px,6vw,72px)] font-extrabold tracking-[-1px] text-text">
        Contáctame
      </h2>
      <p className="mx-auto mb-9 mt-[22px] max-w-[520px] text-[18px] leading-[1.6] text-muted">
        Abierto a nuevas oportunidades y proyectos de datos. Mi bandeja siempre
        está abierta.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-lg border px-7 py-[15px] font-mono text-[17px] font-bold transition-opacity hover:opacity-90"
        style={{ color: '#25d366', borderColor: '#25d366' }}
      >
        <span
          className="h-[10px] w-[10px] rounded-full"
          style={{ background: '#25d366' }}
        />
        WhatsApp
      </a>

      </Reveal>

      <div className="mt-9 flex items-center justify-center gap-6 font-mono text-[13px] tracking-[.5px]">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            {s.label} →
          </a>
        ))}
      </div>

      <footer className="mt-[70px] border-t border-line pt-7 font-mono text-[13px] leading-[1.8] text-faint">
        <div>Diseñado y construido por Oscar Caicedo</div>
        <div>React · FastAPI · Tailwind CSS</div>
      </footer>
    </section>
  )
}
