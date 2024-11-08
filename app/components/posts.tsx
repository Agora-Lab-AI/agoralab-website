import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="max-w-4xl mx-auto">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="block mb-6 p-6 rounded-2xl transition-all hover:bg-blue-50 border border-transparent hover:border-blue-100"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row items-center">
              <p className="text-sm font-medium text-blue-500 mb-2 md:mb-0 md:w-[120px]">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 md:flex-1">
                {post.metadata.title}
              </h3>
              <svg className="w-5 h-5 text-blue-400 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
    </div>
  )
}
