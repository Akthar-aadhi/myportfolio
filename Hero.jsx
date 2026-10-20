import { HERO_SERVICES } from '../data'
import { ArrowDown, Pin } from './Icons'
import { HeroWave } from './Waves'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__badge reveal">
            <span aria-hidden="true" />
            Design · Development · Creativity
          </p>

          <h1 id="hero-title" className="hero__title reveal" style={{ '--d': '80ms' }}>
            <span className="hero__hello">Welcomeyy!</span>
            <span className="hero__line">
              Designing digital experiences with <em>purpose</em>.
            </span>
          </h1>

          <p className="hero__lead reveal" style={{ '--d': '160ms' }}>
            I&rsquo;m Akthar, a creative college student exploring UI/UX design, web development, and visual storytelling. I turn
            ideas into thoughtful, engaging digital experiences.
          </p>

          <div className="hero__cta reveal" style={{ '--d': '240ms' }}>
            <a href="#work" className="btn btn--dark">
              Explore My Work
            </a>
            <a href="#contact" className="btn btn--light">
              Let&rsquo;s Connect
            </a>
          </div>

          <p className="hero__geo reveal" style={{ '--d': '300ms' }}>
            <Pin />
            <span>12.92° N, 79.33° E · Ranipet district, Tamil Nadu, India</span>
          </p>
        </div>

        <a href="#work" className="scroll-hint" aria-label="Scroll to selected work">
          <span>Scroll to explore</span>
          <span className="scroll-hint__arrow">
            <ArrowDown />
          </span>
        </a>

        <div className="hero-card-wrap">
          <HeroWave />
          <div className="hero-card reveal">
            <h2>my services to growth your business by creating</h2>
            <ul>
              {HERO_SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
