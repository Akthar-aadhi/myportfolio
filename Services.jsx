import { SERVICES } from '../data'
import { ServiceIcon } from './Icons'

export default function Services() {
  return (
    <section className="section section--services" id="services" aria-labelledby="services-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Services</p>
          <h2 id="services-title">What I can help you create.</h2>
          <p>Thoughtful digital services tailored to student initiatives, small businesses, and bold new brands.</p>
        </header>

        <div className="cards3">
          {SERVICES.map((s, i) => (
            <article className="glass service-card reveal" style={{ '--d': `${i * 90}ms` }} key={s.key}>
              <div>
                <span className="service-card__icon" style={{ background: s.tint }}>
                  <ServiceIcon name={s.key} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
