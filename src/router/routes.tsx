import { createBrowserRouter} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PostPage from '../pages/PostPage'
import TagPage from '../pages/TagPage'
import AuthorPage from '../pages/AuthorPage'
import AboutPage from '../pages/AboutPage'
import NotFoundPage from '../pages/NotFoundPage'

const DEFAULT_ROOT_PATH = '/blog_template';

export const router = createBrowserRouter([
  { path: DEFAULT_ROOT_PATH || "/", element: <HomePage /> },
  { path: DEFAULT_ROOT_PATH + '/post/:slug', element: <PostPage /> },
  { path: DEFAULT_ROOT_PATH + '/tag/:tag', element: <TagPage /> },
  { path: DEFAULT_ROOT_PATH + '/author/:id', element: <AuthorPage /> },
  { path: DEFAULT_ROOT_PATH + '/about', element: <AboutPage /> },
  { path: '*', element: <NotFoundPage /> },
])
