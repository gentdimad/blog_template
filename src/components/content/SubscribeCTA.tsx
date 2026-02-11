import { site } from '../../config/site'

export default function SubscribeCTA() {
  return (
    <section className="post-card" aria-label="Subscribe">
      <h3 style={{ marginTop: 0 }}>Stay up to date</h3>
      <p className="muted">Subscribe to {site.siteName} to get the latest articles in your inbox.</p>
      <a className="button" href={`mailto:${site.contact.email}?subject=Subscribe%20to%20${encodeURIComponent(site.siteName)}`}>Subscribe via Email</a>
    </section>
  )
}
