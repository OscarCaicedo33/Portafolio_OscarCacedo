import { SectionHeader } from './Section'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-[120px] pb-[100px] pt-[120px]">
      <Reveal>
        <SectionHeader title="Sobre mí" className="mb-10" />
      </Reveal>
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_.6fr]">
        <Reveal as="p" className="m-0 text-[clamp(17px,2vw,21px)] leading-[1.75] text-muted">
          <strong className="font-bold text-text">
            Data Analyst &amp; Especialista en Power BI
          </strong>{' '}
          en{' '}
          <strong className="font-bold text-text">Ogilvy Colombia</strong>,
          analizando canales digitales y redes sociales para marcas como
          Coca-Cola. Ingeniero de base con enfoque en el sector financiero y los
          canales transaccionales.
        </Reveal>
        <Reveal
          delay={150}
          className="aspect-square overflow-hidden rounded-lg border border-line bg-surface-2"
        >
          <img
            src="/oscar.png"
            alt="Oscar Caicedo"
            className="block h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </Reveal>
      </div>
    </section>
  )
}
