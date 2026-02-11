import { Link } from 'react-router-dom'
import type { Post } from '../../data/types'

export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <section className="featured" aria-label="Featured post">
      <h2><Link to={`/post/${post.slug}`}>{post.title}</Link></h2>
      <p className="muted">{post.description}</p>
      <div className="muted">{new Date(post.date).toLocaleDateString()} • {post.readingTime} min read</div>
    </section>
  )
}
