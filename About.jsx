import SafeImage from './SafeImage'
import { ArrowRight } from './Icons'
import { AboutWave } from './Waves'

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <AboutWave />
      <div className="container about">
        <div className="about__text reveal">
          <p className="eyebrow">About Me</p>
          <h2 id="about-title">
            A Student, A Designer
            <br />
            Always Learner
          </h2>
          <p className="about__lead">
            I&rsquo;m a 3rd year college student with a growing passion for UI/UX design, web development, and visual creativity. I
            enjoy exploring ideas, learning new tools, and transforming concepts into experiences that feel clear, useful, and
            visually meaningful.
          </p>
          <p className="about__sub">
            I&rsquo;m continuously developing my skills through personal projects, design explorations, and hands-on practice. My
            goal is to create work that combines thoughtful design with practical functionality.
          </p>
          <a href="#contact" className="about__link">
            <span>Get in touch to work together</span>
            <ArrowRight />
          </a>
        </div>

        <div className="portrait reveal" style={{ '--d': '120ms' }}>
          <span className="portrait__shadow" aria-hidden="true" />
          <span className="portrait__frame" aria-hidden="true" />
          <div className="portrait__img">
            <SafeImage src="/images/akthar-photo.jpg" file="akthar-photo.jpg" alt="Portrait of Akthar" />
          </div>
        </div>
      </div>
    </section>
  )
}
