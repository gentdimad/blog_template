import { useEffect, useState } from 'react'
import Page from '../components/layout/Page'
import PostList from '../components/cards/PostList'
import FeaturedPost from '../components/cards/FeaturedPost'
import SubscribeCTA from '../components/content/SubscribeCTA'
import { loadAllPosts } from '../data/index'
import type { Post } from '../data/types'

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => { loadAllPosts().then(setPosts) }, [])

  const [featured, ...rest] = posts
  return (
    <Page>
      {featured && <FeaturedPost post={featured} />}
      <PostList posts={rest} />
      <div style={{ marginTop: '2rem' }}>
        <SubscribeCTA />
      </div>
    </Page>
  )
}
