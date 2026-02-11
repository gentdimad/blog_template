import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Page from '../components/layout/Page'
import Prose from '../components/content/Prose'
import TableOfContents from '../components/content/TableOfContents'
import SocialShare from '../components/content/SocialShare'
import TagList from '../components/content/TagList'
import { loadAllPosts } from '../data/index'
import type { Post } from '../data/types'

export default function PostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    loadAllPosts().then(all => setPost(all.find(p => p.slug === slug) || null))
  }, [slug])

  if (!post) return <Page><p>Loading…</p></Page>

  return (
    <Page>
      <article>
        <header>
          <h1>{post.title}</h1>
          <p className="muted">{new Date(post.date).toLocaleDateString()} • {post.readingTime} min read</p>
          <TagList tags={post.tags} />
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(200px, 280px)', gap: '2rem' }}>
          <Prose>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Prose>
          <aside>
            <TableOfContents headings={post.headings} />
          </aside>
        </div>
        <footer style={{ marginTop: '2rem' }}>
          <SocialShare title={post.title} />
        </footer>
      </article>
    </Page>
  )
}
