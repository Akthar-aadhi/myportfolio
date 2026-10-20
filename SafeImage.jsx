import { useState } from 'react'

/**
 * Renders an image from /public/images. If the file hasn't been added yet,
 * shows a labelled placeholder instead of a broken-image icon.
 */
export default function SafeImage({ src, alt = '', file, eager = false, className = '' }) {
  const [missing, setMissing] = useState(false)
  return (
    <span className={`safe-img ${missing ? 'is-missing' : ''} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setMissing(true)}
      />
      <span className="safe-img__fallback" role="img" aria-label={alt || 'Image placeholder'}>
        add {file || src.split('/').pop()}
      </span>
    </span>
  )
}
