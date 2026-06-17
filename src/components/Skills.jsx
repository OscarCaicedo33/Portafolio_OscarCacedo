import { SKILLS } from '../data/content'
import { SectionHeader } from './Section'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="stack" className="scroll-mt-[120px] py-[100px]">
      <Reveal>
        <SectionHeader title="Stack" className="mb-11" />
      </Reveal>
      <div className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
        {SKILLS.map((cat, i) => (
          <Reveal key={cat.group} delay={i * 100}>
            <div className="mb-4 font-mono text-[11px] tracking-[2px] text-faint">
              {cat.group}
            </div>
            <div className="flex flex-wrap gap-[10px]">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-surface px-[14px] py-[7px] font-mono text-[13px] tracking-[.5px] text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
