import { Link } from 'react-router-dom'
import type { Post } from '../../data/types'
import TagList from '../content/TagList'

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <h2 style={{ margin: 0 }}><Link to={`/post/${post.slug}`}>{post.title}</Link></h2>
      <p className="muted" style={{ marginTop: '0.5rem' }}>{post.description}</p>
      <div className="meta">
        <span>{new Date(post.date).toLocaleDateString()}</span>
        <span>• {post.readingTime} min read</span>
      </div>
      <TagList tags={post.tags} />
    </article>
  )
}
