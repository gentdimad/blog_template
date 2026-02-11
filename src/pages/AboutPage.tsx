import Page from '../components/layout/Page'
import { site } from '../config/site'

export default function AboutPage() {
  return (
    <Page>
      <h1>About {site.siteName}</h1>
      <p className="muted" style={{ maxWidth: '70ch' }}>
        {site.description}
      </p>
      <p>
        This is a minimalist, Medium-style blog template built with React + Vite. Customize everything from a single
        configuration file at <code>src/config/site.ts</code> including colors, site name, and contact info.
      </p>
      <p>
        Built by {site.developer.name}. Find more at <a href={site.developer.website} target="_blank" rel="noreferrer">{site.developer.website}</a>.
      </p>
    </Page>
  )
}
