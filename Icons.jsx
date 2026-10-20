/* Simple stand-in icons. Replace with the exported Figma SVGs when available. */
const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export const ArrowRight = ({ className = 'arrow' }) => (
  <svg className={className} width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
    <path d="M0 3h8.5M6.2 .6 8.8 3 6.2 5.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ArrowDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 2.5v11M3.5 9 8 13.5 12.5 9" stroke="#ff8a3d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Pin = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 14.2s4.6-3.9 4.6-7.4a4.6 4.6 0 1 0-9.2 0c0 3.5 4.6 7.4 4.6 7.4Z" stroke="#ff8a3d" strokeWidth="1.3" />
    <circle cx="8" cy="6.8" r="1.6" stroke="#ff8a3d" strokeWidth="1.3" />
  </svg>
)

export const Menu = ({ open }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    {open ? (
      <path d="M5 5l12 12M17 5 5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    ) : (
      <path d="M3.5 6h15M3.5 11h15M3.5 16h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    )}
  </svg>
)

export const ServiceIcon = ({ name }) => {
  const color = '#b74d00'
  if (name === 'ux')
    return (
      <svg {...base} stroke={color}>
        <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
        <path d="M3.5 9.5h17M10 9.5V20" />
      </svg>
    )
  if (name === 'web')
    return (
      <svg {...base} stroke={color}>
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="m10 9.5-2.5 2.5L10 14.5M14 9.5l2.5 2.5-2.5 2.5" />
      </svg>
    )
  return (
    <svg {...base} stroke={color}>
      <path d="M12 3.5v4M10 5.5h4" />
      <path d="M6.5 20c-2 0-3.5-1.6-3.5-3.6 0-1.6 1-3 2.5-3.4.4-2.6 2.6-4.5 5.2-4.5 2.7 0 4.9 2 5.2 4.6 1.9.2 3.6 1.7 3.6 3.7 0 2-1.5 3.2-3.5 3.2Z" />
    </svg>
  )
}

export const ToolIcon = ({ name, color }) => {
  const p = { ...base, stroke: color, width: 24, height: 24 }
  switch (name) {
    case 'canva':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M14.8 9.6a3.6 3.6 0 1 0 0 4.8" />
        </svg>
      )
    case 'claude':
      return (
        <svg {...p}>
          <path d="M13 3 6 13.5h5L10 21l8-11h-5.2Z" />
        </svg>
      )
    case 'chatgpt':
      return (
        <svg {...p}>
          <path d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 16.5h-7L8 20v-3.5H5A1.5 1.5 0 0 1 3.5 15V7A1.5 1.5 0 0 1 5 5.5Z" />
          <path d="M8 10h8M8 13h5" />
        </svg>
      )
    case 'antigravity':
      return (
        <svg {...p}>
          <path d="M9.5 3.5h5M10.5 3.5v6L5 18.5a1.6 1.6 0 0 0 1.4 2.5h11.2A1.6 1.6 0 0 0 19 18.5l-5.5-9v-6" />
          <path d="M7.5 15h9" />
        </svg>
      )
    default:
      return (
        <svg {...p}>
          <rect x="9" y="3.5" width="6" height="5.5" rx="2.7" />
          <rect x="3.5" y="9" width="5.5" height="5.5" rx="2.7" />
          <rect x="9" y="9" width="6" height="5.5" rx="2.7" />
          <rect x="15" y="9" width="5.5" height="5.5" rx="2.7" />
          <rect x="9" y="14.5" width="6" height="6" rx="3" />
        </svg>
      )
  }
}
