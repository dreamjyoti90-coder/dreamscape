import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Calendar, User } from 'lucide-react'
import { client } from '@/lib/sanity.client'
import { dreamPostBySlugQuery, allDreamPostsQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'
import { formatDate } from '@/lib/utils'
import DreamBadge from '@/components/dream/DreamBadge'
import DreamBody from '@/components/dream/DreamBody'
import RelatedDreams from '@/components/dream/RelatedDreams'
import ShareButton from '@/components/dream/ShareButton'

export const revalidate = 60

interface PageProps {
  params: {
    slug: string
  }
}

async function getDreamPost(slug: string) {
  try {
    return await client.fetch(dreamPostBySlugQuery, { slug })
  } catch (error) {
    console.error('Error fetching dream post:', error)
    return null
  }
}

export async function generateStaticParams() {
  try {
    const posts = await client.fetch(allDreamPostsQuery)
    return posts.map((post: any) => ({
      slug: post.slug.current,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.midnightdreams.online'

export async function generateMetadata({ params }: PageProps) {
  const dream = await getDreamPost(params.slug)

  if (!dream) {
    return { title: 'Dream Not Found' }
  }

  const imageUrl = dream.coverImage
    ? urlFor(dream.coverImage).width(1200).height(630).url()
    : null

  const canonicalUrl = `${SITE_URL}/dreams/${params.slug}`

  return {
    title: dream.title,
    description: dream.excerpt || 'A dream story from Dreamscape',
    keywords: dream.tags ?? [],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: dream.title,
      description: dream.excerpt,
      url: canonicalUrl,
      siteName: 'Dreamscape',
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: dream.title }] : [],
      type: 'article',
      publishedTime: dream.publishedAt,
      authors: dream.author?.name ? [dream.author.name] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: dream.title,
      description: dream.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

export default async function DreamPostPage({ params }: PageProps) {
  const dream = await getDreamPost(params.slug)

  if (!dream) {
    notFound()
  }

  const coverImageUrl = dream.coverImage
    ? urlFor(dream.coverImage).width(1920).height(1080).url()
    : null

  const authorAvatarUrl = dream.author?.avatar?.asset
    ? urlFor(dream.author.avatar).width(100).height(100).url()
    : null

  const canonicalUrl = `${SITE_URL}/dreams/${params.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: dream.title,
    description: dream.excerpt || '',
    url: canonicalUrl,
    datePublished: dream.publishedAt,
    image: coverImageUrl || undefined,
    author: dream.author?.name
      ? { '@type': 'Person', name: dream.author.name }
      : { '@type': 'Organization', name: 'Dreamscape' },
    publisher: {
      '@type': 'Organization',
      name: 'Dreamscape',
      url: SITE_URL,
    },
    keywords: dream.tags?.join(', ') || '',
  }

  return (
    <article className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Cover Image */}
      {coverImageUrl && (
        <div className="relative w-full h-[60vh] -mt-16">
          <Image
            src={coverImageUrl}
            alt={dream.title}
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-deep/50 to-bg-deep"
          />
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            {dream.dreamType && <DreamBadge label={dream.dreamType} type="type" />}
            {dream.dreamMood && <DreamBadge label={dream.dreamMood} type="mood" />}
          </div>

          <h1
            className="text-5xl md:text-6xl font-serif text-text-heading mb-6"
            style={{
              textShadow: '0 0 30px rgba(124, 58, 237, 0.3)',
            }}
          >
            {dream.title}
          </h1>

          {dream.excerpt && (
            <p className="text-xl text-text-muted mb-8">
              {dream.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-text-muted">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(dream.publishedAt)}</span>
            </div>

            {dream.author && (
              <div className="flex items-center space-x-3">
                {authorAvatarUrl ? (
                  <Image
                    src={authorAvatarUrl}
                    alt={dream.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <User className="w-5 h-5" />
                )}
                <span>{dream.author.name}</span>
              </div>
            )}
          </div>
        </header>

        {/* Body */}
        <div className="mb-16">
          <DreamBody body={dream.body} />
        </div>

        {/* Share Button */}
        <div className="flex justify-center mb-12">
          <ShareButton />
        </div>

        {/* Related Dreams */}
        {dream.relatedPosts && dream.relatedPosts.length > 0 && (
          <RelatedDreams dreams={dream.relatedPosts} />
        )}
      </div>
    </article>
  )
}
