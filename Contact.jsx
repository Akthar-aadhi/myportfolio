import { useState } from 'react'
import { LINKS, PROJECT_FOCUS } from '../data'
import SafeImage from './SafeImage'
import { ArrowRight } from './Icons'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please tell me your name.'
  if (!v.email.trim()) e.email = 'Please add your email.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'That email doesn’t look right.'
  if (v.message.trim().length < 10) e.message = 'A sentence or two about your idea helps (10+ characters).'
  return e
}

export default function Contact() {
  const empty = { name: '', email: '', focus: PROJECT_FOCUS[0], budget: '', message: '' }
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [failure, setFailure] = useState('')
  const [trap, setTrap] = useState('') // honeypot: real visitors never see or fill this

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (sending) return // block duplicate submissions while a request is in flight
    setFailure('')
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      document.getElementById(`f-${first}`)?.focus()
      return
    }
    if (trap) return // bots fill hidden fields; silently drop

    setSending(true)
    try {
      const res = await fetch(LINKS.formspree, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          project_type: values.focus,
          budget: values.budget.trim() || 'Not specified',
          message: values.message.trim(),
          _subject: `Portfolio enquiry — ${values.focus} (${values.name.trim()})`,
        }),
      })
      if (res.ok) {
        setSent(true)
        setValues(empty)
      } else {
        const data = await res.json().catch(() => null)
        setFailure(data?.errors?.map((x) => x.message).join(' ') || 'Something went wrong on the server. Please try again in a moment.')
      }
    } catch {
      setFailure('Couldn’t reach the server. Check your connection and try again.')
    } finally {
      setSending(false)
    }
  }

  const reset = () => {
    setValues(empty)
    setErrors({})
    setFailure('')
    setSent(false)
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Have an idea? Let&rsquo;s make it happen.</h2>
          <p>Have a website, app, or visual design idea in mind? I&rsquo;d love to hear about it and explore how we can bring it to life.</p>
        </header>

        <div className="contact">
          <aside className="glass channels reveal" aria-labelledby="channels-title">
            <h3 id="channels-title">Direct Channels</h3>
            <p>Reach out directly via email or check my creative explorations on socials.</p>

            <div className="email-box">
              <span>Primary Email</span>
              <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            </div>

            <ul className="channel-links">
              <li>
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram (@akthar_sgian) <ArrowRight />
                </a>
              </li>
              <li>
                <a href={LINKS.behance} target="_blank" rel="noopener noreferrer">
                  Behance Portfolio <ArrowRight />
                </a>
              </li>
              <li>
                <a href={`tel:${LINKS.phone}`}>
                  Contact Me ( Call ) <ArrowRight />
                </a>
              </li>
            </ul>
          </aside>

          <div className="glass form-card reveal" style={{ '--d': '100ms' }}>
            {sent ? (
              <div className="thanks" role="status" aria-live="polite">
                <div className="thanks__img">
                  <SafeImage src="/images/thanks-illustration.png" file="thanks-illustration.png" alt="" />
                </div>
                <p>
                  Thanks for visiting me!
                  <br />I&rsquo;ll soonly connect with You :)
                </p>
                <button type="button" className="text-link" onClick={reset}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate aria-busy={sending}>
                <div className="hp" aria-hidden="true">
                  <label>
                    Leave this field empty
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
                  </label>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="f-name">Full name</label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      placeholder="e.g. Maya Sharma"
                      value={values.name}
                      onChange={set('name')}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'e-name' : undefined}
                    />
                    {errors.name && (
                      <span className="field__error" id="e-name">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor="f-email">Email address</label>
                    <input
                      id="f-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="e.g. maya@example.com"
                      value={values.email}
                      onChange={set('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'e-email' : undefined}
                    />
                    {errors.email && (
                      <span className="field__error" id="e-email">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="f-focus">Project type</label>
                  <select id="f-focus" name="focus" value={values.focus} onChange={set('focus')}>
                    {PROJECT_FOCUS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="f-budget">
                    Budget <span className="field__opt">(optional)</span>
                  </label>
                  <input
                    id="f-budget"
                    name="budget"
                    type="text"
                    inputMode="text"
                    placeholder="e.g. ₹15,000 or $200"
                    maxLength={60}
                    value={values.budget}
                    onChange={set('budget')}
                  />
                </div>

                <div className="field">
                  <label htmlFor="f-message">Project details</label>
                  <textarea
                    id="f-message"
                    required
                    maxLength={3000}
                    name="message"
                    rows={4}
                    placeholder="Briefly describe what you would like to build or discuss..."
                    value={values.message}
                    onChange={set('message')}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'e-message' : undefined}
                  />
                  {errors.message && (
                    <span className="field__error" id="e-message">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn--dark form__submit" disabled={sending}>
                  {sending ? 'Sending…' : 'Start a Conversation'}
                </button>
                {failure && (
                  <p className="form__status is-error" role="alert">
                    {failure} You can also email me at {LINKS.email}.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
