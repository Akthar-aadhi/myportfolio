import { JUICY_SCREENS, LINKS } from '../data'
import SafeImage from './SafeImage'
import { ArrowRight } from './Icons'

export default function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">my works</p>
          <h2 id="work-title">A Few Things I&rsquo;ve Build &amp; Design</h2>
          <p>A selection of design explorations, digital experiences, and creative work crafted with care.</p>
        </header>

        <div className="work-list">
          {/* Project 1 — Juicy */}
          <article className="glass project project--juicy reveal">
            <div className="project__body">
              <span className="pill" style={{ background: 'var(--c-amber-100)', color: 'var(--c-accent-deep)' }}>
                Mobile UI/UX Design &amp; Prototyping
              </span>
              <h3 className="project__title">Juicy — Fresh Juice Delivery App</h3>
              <p className="project__text">
                End-to-end mobile app design for fresh juice ordering with intuitive navigation, location discovery, and clean
                onboarding. Features high-converting mobile interactions and a vibrant citrus aesthetic.
              </p>
              <ul className="tags" aria-label="Skills used">
                {['Figma', 'Mobile UI', 'Prototyping', 'Visual Identity'].map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="text-link">
                Inquire about this design <ArrowRight />
              </a>
            </div>

            <div className="bento">
              {JUICY_SCREENS.map((s, i) => (
                <figure className={`bento__screen ${i === 0 ? 'bento__screen--brand' : ''}`} key={s.file}>
                  <div className="bento__frame">
                    <SafeImage src={s.src} file={s.file} alt={`Juicy app screen — ${s.label.slice(4)}`} />
                  </div>
                  <figcaption>{s.label}</figcaption>
                </figure>
              ))}
            </div>
          </article>

          {/* Project 2 — JJR */}
          <article className="glass project project--jjr reveal">
            <div className="browser" aria-hidden="false">
              <div className="browser__bar">
                <span className="browser__dots" aria-hidden="true">
                  <i style={{ background: '#f87171' }} />
                  <i style={{ background: '#facc15' }} />
                  <i style={{ background: '#4ade80' }} />
                </span>
                <span className="browser__url">https://jjr-fish-market-vercel.app</span>
              </div>
              <div className="browser__screen">
                <SafeImage src="/images/jjr-screenshot.png" file="jjr-screenshot.png" alt="JJR Fish Centre website — Fresh Catch Daily hero with WhatsApp ordering" />
              </div>
            </div>

            <div className="project__body project__body--center">
              <span className="pill" style={{ background: 'var(--c-sky-100)', color: 'var(--c-sky-800)' }}>
                Web Development &amp; UI Design
              </span>
              <h3 className="project__title">JJR Fish Centre — Fresh Seafood Market</h3>
              <p className="project__text">
                Modern web presence and ordering interface for a fresh seafood market, featuring harbour-fresh daily catch
                catalogues, transparent live pricing, and seamless WhatsApp ordering integration.
              </p>
              <ul className="tags" aria-label="Skills used">
                {['Web Development', 'UI Design', 'Responsive Web', 'WhatsApp Flow'].map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
              <a href={LINKS.jjrDemo} className="text-link" target="_blank" rel="noopener noreferrer">
                Visit the Demo Website <ArrowRight />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </article>

          {/* Projects 3 & 4 */}
          <div className="work-duo">
            <article className="glass mini reveal">
              <div>
                <div className="mini__preview mini__preview--light">
                  <div className="mini__row">
                    <span>03 // PORTFOLIO</span>
                    <span>HTML / CSS / JS</span>
                  </div>
                  <div className="mini__center">
                    <strong>Golden Hour Aura</strong>
                    <span>Atmospheric visual portfolio architecture</span>
                  </div>
                  <span className="mini__foot">Ranipet District · Tamil Nadu</span>
                </div>
                <span className="pill" style={{ background: 'rgba(254,243,199,0.7)', color: 'var(--c-accent-deep)' }}>
                  Interaction &amp; Creative Front-End
                </span>
                <h3 className="mini__title">Creative Portfolio — Personal Space</h3>
                <p className="mini__text">
                  Bespoke digital space with Golden Hour Aura atmosphere, editorial type hierarchy, and responsive fluid motion.
                </p>
              </div>
              <footer className="mini__foot-row">
                <span>HTML/CSS · Vanilla JS · Editorial</span>
                <b>[Editable Project]</b>
              </footer>
            </article>

            <article className="glass mini reveal" style={{ '--d': '100ms' }}>
              <div>
                <div className="mini__preview mini__preview--dark">
                  <div className="mini__row mini__row--amber">
                    <span>04 // VISUAL DESIGN</span>
                    <span>CANVA / FIGMA</span>
                  </div>
                  <div className="mini__stack">
                    <span>Typography &amp; Hierarchy</span>
                    <strong>Creative Poster Series</strong>
                  </div>
                  <div className="mini__bar" aria-hidden="true">
                    <i />
                    <i />
                  </div>
                </div>
                <span className="pill" style={{ background: 'rgba(255,237,213,0.7)', color: 'var(--c-accent-deep)' }}>
                  Visual Design &amp; Print Media
                </span>
                <h3 className="mini__title">Poster &amp; Visual Design Collection</h3>
                <p className="mini__text">
                  Explorations in typography, contrast, layout geometry, and brand storytelling designed for digital campaigns and
                  physical print media.
                </p>
              </div>
              <footer className="mini__foot-row">
                <span>Canva · Figma · Storytelling</span>
                <b>[Editable Project]</b>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
