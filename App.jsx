import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Process from './components/Process'
import About from './components/About'
import Tools from './components/Tools'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks'

export default function App() {
  useReveal()
  return (
    <>
      <a href="#work" className="skip-link">
        Skip to content
      </a>
      <div className="page">
        <div className="ambient" aria-hidden="true" />
        <Header />
        <main>
          <Hero />
          <Work />
          <Services />
          <Process />
          <About />
          <Tools />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
