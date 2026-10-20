import { STEPS } from '../data'

export default function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="container">
        <header className="section-head section-head--end reveal">
          <p className="eyebrow">Processes</p>
          <h2 id="process-title">From the first idea to the final detail</h2>
          <p>A disciplined, progressive four-step journey towards clean design solutions.</p>
        </header>

        <ol className="steps">
          {STEPS.map((s, i) => (
            <li className="glass step reveal" style={{ '--d': `${i * 90}ms` }} key={s.n}>
              <span className="step__n" style={{ color: s.color }} aria-hidden="true">
                {s.n}
              </span>
              <h3>
                <span className="sr-only">Step {s.n}: </span>
                {s.title}
              </h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
