import { EXPERIENCES } from '../data/content'
import { SectionHeader } from './Section'
import ExperienceItem from './ExperienceItem'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-[120px] py-[100px]">
      <Reveal>
        <SectionHeader title="Experiencia" className="mb-11" />
      </Reveal>
      {EXPERIENCES.map((exp, i) => (
        <Reveal key={exp.company} delay={i * 120}>
          <ExperienceItem {...exp} />
        </Reveal>
      ))}
    </section>
  )
}
