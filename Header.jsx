import { useEffect, useRef, useState } from 'react'
import { NAV } from '../data'
import { useActiveSection } from '../hooks'
import { Menu } from './Icons'

export default function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV.map((n) => n.id))
  const toggleRef = useRef(null)

  // Close on Escape, lock scroll while open, close if viewport grows to desktop
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => window.innerWidth > 860 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = prev
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="header__bar container">
        <a href="#top" className="logo" aria-label="Akthar — back to top" onClick={close}>
          <span className="logo__word">Akthar</span>
          <span className="logo__dot" aria-hidden="true" />
        </a>

        <nav className="header__nav" aria-label="Primary">
          <ul>
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className={active === n.id ? 'is-active' : ''} aria-current={active === n.id ? 'true' : undefined}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <span className="status-badge">
            <span className="status-badge__dot" aria-hidden="true" />
            Open to freelance projects
          </span>
          <a href="#contact" className="btn btn--dark header__cta">
            Let&rsquo;s Talk
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Menu open={open} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={close} className={active === n.id ? 'is-active' : ''}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__foot">
          <span className="status-badge">
            <span className="status-badge__dot" aria-hidden="true" />
            Open to freelance projects
          </span>
          <a href="#contact" className="btn btn--dark" onClick={close}>
            Let&rsquo;s Talk
          </a>
        </div>
      </div>
      {open && <button type="button" className="mobile-scrim" aria-label="Close menu" tabIndex={-1} onClick={close} />}
    </header>
  )
}
