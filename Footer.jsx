import { LINKS } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__mark" aria-label="Akthar — back to top">
            AKTHAR<span>.</span>
          </a>
          <p>Designed with curiosity. Built with intention.</p>
        </div>

        <nav className="footer__links" aria-label="Social and utility">
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={LINKS.behance} target="_blank" rel="noopener noreferrer">
            Behance
          </a>
          <a href="#top">
            Back to Top <span aria-hidden="true">↑</span>
          </a>
        </nav>

        <p className="footer__copy">© {new Date().getFullYear()} Akthar. All rights reserved.</p>
      </div>
    </footer>
  )
}
