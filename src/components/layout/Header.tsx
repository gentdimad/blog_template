import { Link, NavLink } from 'react-router-dom'
import { site } from '../../config/site'
import ThemeToggle from './ThemeToggle'
import SearchBar from '../search/SearchBar'

export default function Header() {
  return (
    <header className="site-header" aria-label="Site header">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="brand">{site.siteName}</Link>
        <nav className="site-nav" aria-label="Primary">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <SearchBar />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
