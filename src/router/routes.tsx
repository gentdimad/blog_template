import { createBrowserRouter} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PostPage from '../pages/PostPage'
import TagPage from '../pages/TagPage'
import AuthorPage from '../pages/AuthorPage'
import AboutPage from '../pages/AboutPage'
import NotFoundPage from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/post/:slug', element: <PostPage /> },
  { path: '/tag/:tag', element: <TagPage /> },
  { path: '/author/:id', element: <AuthorPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '*', element: <NotFoundPage /> },
])
