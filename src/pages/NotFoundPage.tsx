import Page from '../components/layout/Page'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <Page>
      <h1>404 – Not Found</h1>
      <p className="muted">We couldn't find that page. Try the homepage or use the search.</p>
      <Link className="button" to="/">Go home</Link>
    </Page>
  )
}
