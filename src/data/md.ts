import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolink from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'
import rehypePrism from 'rehype-prism-plus'

export async function mdToHtml(md: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutolink, { behavior: 'wrap' })
    .use(rehypePrism)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(md)
  return String(file)
}
