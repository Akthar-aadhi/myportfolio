/* Decorative orange waves recreated from the Figma vectors (Vector 1 behind the hero card, Vector 2 behind About). */
export function HeroWave() {
  return (
    <svg className="wave wave--hero" viewBox="0 0 1300 202" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <filter id="wave-blur-1" x="-5%" y="-40%" width="110%" height="180%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
      </defs>
      <path
        d="M0,76 C80,42 140,16 209,16 C330,16 400,100 470,150 C530,192 590,182 635,182 C700,182 760,150 830,80 C890,22 950,16 1028,16 C1110,16 1200,60 1300,96"
        fill="none"
        stroke="#ff8a3d"
        strokeWidth="16"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        filter="url(#wave-blur-1)"
      />
    </svg>
  )
}

export function AboutWave() {
  return (
    <svg className="wave wave--about" viewBox="0 0 1278 518" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <filter id="wave-blur-2" x="-5%" y="-20%" width="110%" height="140%">
          <feGaussianBlur stdDeviation="1.8" />
        </filter>
      </defs>
      <path
        d="M0,495 C120,372 290,205 524,205 C620,205 680,270 760,298 C820,318 860,315 892,310 C1030,296 1160,150 1278,23"
        fill="none"
        stroke="#ff8a3d"
        strokeOpacity="0.85"
        strokeWidth="9"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        filter="url(#wave-blur-2)"
      />
    </svg>
  )
}
