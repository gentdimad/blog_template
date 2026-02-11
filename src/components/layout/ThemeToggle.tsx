import { useEffect, useState } from 'react'
import { applyTheme } from '../../config/site'

export default function ThemeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>(() => (document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'))

  useEffect(() => {
    applyTheme(mode)
    localStorage.setItem('theme', mode)
  }, [mode])

  return (
    <button className="button" aria-label="Toggle theme" onClick={() => setMode(m => (m === 'light' ? 'dark' : 'light'))}>
      {mode === 'light' ? '🌞 Light' : '🌚 Dark'}
    </button>
  )
}
