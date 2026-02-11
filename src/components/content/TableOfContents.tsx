import type { Heading } from '../../data/types'

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  if (!headings?.length) return null
  return (
    <nav className="toc" aria-label="Table of contents">
      <strong>On this page</strong>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {headings.filter(h => h.depth <= 3).map(h => (
          <li key={h.id} style={{ marginTop: '0.4rem' }}>
            <a href={`#${h.id}`}>{h.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
