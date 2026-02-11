import { site } from '../../config/site'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <div>&copy; {new Date().getFullYear()} {site.siteName}</div>
            <div className="muted">Built by {site.developer.name}</div>
          </div>
          <div className="muted">
            <a href={`mailto:${site.contact.email}`}>Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
