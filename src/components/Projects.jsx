import { PROJECTS } from '../data/content'
import { SectionHeader } from './Section'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-[120px] py-[100px]">
      <Reveal>
        <SectionHeader title="Proyectos" className="mb-11" />
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-[22px]">
        {PROJECTS.map((p, i) => (
          <Reveal key={`${p.title}-${i}`} delay={i * 120} className="flex">
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
