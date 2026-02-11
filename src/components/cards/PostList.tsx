import type { Post } from '../../data/types'
import PostCard from './PostCard'

export default function PostList({ posts }: { posts: Post[] }) {
  if (!posts?.length) return <p className="muted">No posts yet.</p>
  return (
    <section aria-label="Posts list">
      {posts.map(p => (
        <PostCard key={p.slug} post={p} />
      ))}
    </section>
  )
}
