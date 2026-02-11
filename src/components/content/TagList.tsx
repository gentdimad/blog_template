import { Link } from 'react-router-dom'

export default function TagList({ tags }: { tags: string[] }) {
  if (!tags?.length) return null
  return (
    <ul className="tags" aria-label="Post tags">
      {tags.map(t => (
        <li key={t}><Link to={`/tag/${encodeURIComponent(t)}`}>#{t}</Link></li>
      ))}
    </ul>
  )
}
