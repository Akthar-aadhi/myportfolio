import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/manrope'
import '@fontsource-variable/inter'
import '@fontsource-variable/space-grotesk'
import '@fontsource/newsreader/400-italic.css'
import '@fontsource/cousine/400.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/sections.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
