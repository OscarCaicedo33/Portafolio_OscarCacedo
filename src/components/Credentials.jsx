import { CERTIFICATIONS, EDUCATION } from '../data/content'
import { SectionHeader } from './Section'
import Reveal from './Reveal'

export default function Credentials() {
  return (
    <section id="credenciales" className="scroll-mt-[120px] py-[100px]">
      <Reveal>
        <SectionHeader title="Credenciales" className="mb-11" />
      </Reveal>
      <div className="grid gap-12 md:grid-cols-[1.4fr_.6fr]">
        {/* Certificaciones */}
        <Reveal>
          <div className="mb-5 font-mono text-[11px] tracking-[2px] text-faint">
            CERTIFICACIONES
          </div>
          <ul className="m-0 list-none p-0">
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert}
                className="group flex items-start gap-4 border-t border-line py-[14px]"
              >
                <span className="font-mono text-[15px] text-accent transition-transform duration-200 group-hover:translate-x-1">
                  ▷
                </span>
                <span className="text-[15px] leading-[1.5] text-muted transition-colors group-hover:text-text">
                  {cert}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Formación */}
        <Reveal delay={150}>
          <div className="mb-5 font-mono text-[11px] tracking-[2px] text-faint">
            FORMACIÓN
          </div>
          {EDUCATION.map((ed) => (
            <div key={ed.school} className="border-t border-line py-[14px]">
              <div className="font-display text-[18px] font-bold leading-[1.2] text-text">
                {ed.degree}
              </div>
              <div className="mt-1 font-mono text-[13px] tracking-[.5px] text-accent">
                {ed.school}
              </div>
              <div className="mt-1 font-mono text-[13px] text-faint">
                {ed.date}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
