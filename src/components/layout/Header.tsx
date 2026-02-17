import { Link, NavLink } from 'react-router-dom'
import { site } from '../../config/site'
import ThemeToggle from './ThemeToggle'
import SearchBar from '../search/SearchBar'
import {DEFAULT_ABOUT_PATH, DEFAULT_ROOT_PATH} from "../../router/routes.tsx";

export default function Header() {
  return (
    <header className="fixed sticky top-0 z-10 border-b border-[color:var(--color-border)] bg-[var(--color-bg-soft)]" aria-label="Site header">
      <div className="max-w-[1100px] px-4 mx-auto flex items-center justify-between py-4">
        <Link to="/" className="font-bold tracking-[0.3px]">{site.siteName}</Link>
        <div className="flex items-center gap-3">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}
