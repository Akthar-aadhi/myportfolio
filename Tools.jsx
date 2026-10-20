import { TOOLS } from '../data'
import { ToolIcon } from './Icons'

const SETS = 3 // 3 x 5 cards per group keeps the loop seamless on very wide screens

function ToolCard({ t, dup }) {
  return (
    <li className={`glass tool ${dup ? 'dup' : ''}`} aria-hidden={dup || undefined}>
      <span className="tool__icon" style={{ background: t.tint }}>
        <ToolIcon name={t.key} color={t.color} />
      </span>
      <div>
        <h3>{t.name}</h3>
        <span className="tool__role">{t.role}</span>
      </div>
    </li>
  )
}

function Group({ hidden }) {
  return (
    <ul className="tools-group" aria-hidden={hidden || undefined} aria-label={hidden ? undefined : 'Tools I use'}>
      {Array.from({ length: SETS }).flatMap((_, s) =>
        TOOLS.map((t) => <ToolCard key={`${s}-${t.key}`} t={t} dup={hidden || s > 0} />),
      )}
    </ul>
  )
}

export default function Tools() {
  return (
    <section className="section section--tools" id="tools" aria-labelledby="tools-title">
      <div className="container">
        <header className="section-head section-head--end reveal">
          <p className="eyebrow">Tools</p>
          <h2 id="tools-title">The tools behind the ideas</h2>
          <p>Software and platforms I use to design, ideate, and ship projects</p>
        </header>
      </div>

      {/* Full-width, endlessly scrolling row (pauses on hover/focus) */}
      <div className="tools-track">
        <div className="tools-marquee">
          <Group />
          <Group hidden />
        </div>
      </div>
    </section>
  )
}
