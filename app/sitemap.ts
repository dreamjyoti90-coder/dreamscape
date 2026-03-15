import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity.client'
import { allDreamPostsQuery } from '@/lib/sanity.queries'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.midnightdreams.online'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch(allDreamPostsQuery).catch(() => [])

  const dreamUrls: MetadataRoute.Sitemap = posts.map((post: any) => ({
    url: `${SITE_URL}/dreams/${post.slug.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/dreams`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...dreamUrls,
  ]
}
