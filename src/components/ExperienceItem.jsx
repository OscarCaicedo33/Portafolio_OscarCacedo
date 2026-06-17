export default function ExperienceItem({ company, date, role, bullets }) {
  return (
    <div className="border-t border-line py-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-mono text-[15px] font-bold tracking-[.5px] text-accent">
          {company}
        </span>
        <span className="font-mono text-[13px] text-faint">{date}</span>
      </div>
      <div className="my-2 mb-5 font-display text-[clamp(20px,2.4vw,26px)] font-bold text-text">
        {role}
      </div>
      {bullets.map((b, i) => (
        <div key={i} className="mb-3 flex gap-3">
          <span className="font-mono text-accent">▷</span>
          <span className="text-[16px] leading-[1.6] text-muted">{b}</span>
        </div>
      ))}
    </div>
  )
}
