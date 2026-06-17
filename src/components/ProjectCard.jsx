import Spheres from './graphics/Spheres'
import MetricGraphic from './graphics/MetricGraphic'
import WipBox from './graphics/WipBox'
import HeatmapGraphic from './graphics/HeatmapGraphic'
import DonutGraphic from './graphics/DonutGraphic'

function Graphic({ type, wipLabel }) {
  if (type === 'spheres') return <Spheres />
  if (type === 'metric') return <MetricGraphic />
  if (type === 'heatmap') return <HeatmapGraphic />
  if (type === 'donut') return <DonutGraphic />
  if (type === 'wip') return <WipBox label={wipLabel} />
  return null
}

export default function ProjectCard({ tag, title, desc, stack, live, url, graphic, wipLabel }) {
  return (
    <div className="group flex min-h-[460px] w-full flex-col rounded-lg border border-line bg-surface p-[26px] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-hero">
      <div className="mb-[14px] font-mono text-[11px] tracking-[2px] text-faint">
        {tag}
      </div>
      <div className="font-display text-[26px] font-bold leading-[1.1] text-text">
        {title}
      </div>
      <div className="mt-[10px] text-[14px] italic leading-[1.55] text-muted">
        {desc}
      </div>

      <div className="my-[18px] flex min-h-[150px] flex-1 items-center justify-center">
        <Graphic type={graphic} wipLabel={wipLabel} />
      </div>

      <div className="border-t border-line pt-[14px] font-mono text-[11px] tracking-[1.5px] text-faint">
        {stack}
      </div>

      {live && url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[14px] font-mono text-[13px] font-bold text-accent transition-opacity hover:opacity-80"
        >
          Ver proyecto →
        </a>
      )}
      {!live && (
        <div className="mt-[14px] inline-flex items-center gap-2 self-start rounded-full border border-accent px-3 py-[5px] font-mono text-[11px] tracking-[1px] text-accent">
          <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-accent" />
          BUILDING · ETA SOON
        </div>
      )}
    </div>
  )
}
