'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import DreamBadge from './DreamBadge'
import { urlFor } from '@/lib/sanity.image'
import { formatDate } from '@/lib/utils'

interface DreamCardProps {
  dream: {
    _id: string
    title: string
    slug: { current: string }
    excerpt?: string
    publishedAt: string
    coverImage?: any
    dreamType?: string
    dreamMood?: string
    featured?: boolean
  }
  featured?: boolean
}

export default function DreamCard({ dream, featured = false }: DreamCardProps) {
  const imageUrl = dream.coverImage
    ? urlFor(dream.coverImage).width(800).height(600).url()
    : null

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <Link href={`/dreams/${dream.slug.current}`}>
        <article
          className={`relative overflow-hidden rounded-card border border-border-subtle backdrop-blur-md bg-bg-glass hover:border-accent-primary/50 transition-all duration-300 ${
            featured ? 'h-[500px]' : 'h-[420px]'
          }`}
          style={{
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Cover Image */}
          {imageUrl && (
            <div className={`relative ${featured ? 'h-72' : 'h-56'} overflow-hidden`}>
              <Image
                src={imageUrl}
                alt={dream.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-transparent opacity-60" />

              {/* Featured badge */}
              {dream.featured && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-moon text-bg-deep">
                    Featured
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <h3
              className={`font-serif text-text-heading group-hover:text-accent-glow transition-colors ${
                featured ? 'text-2xl' : 'text-xl'
              }`}
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {dream.title}
            </h3>

            {/* Excerpt */}
            {dream.excerpt && (
              <p
                className="text-text-muted text-sm line-clamp-2"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {dream.excerpt}
              </p>
            )}

            {/* Meta */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2 text-text-muted text-xs">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(dream.publishedAt)}</span>
              </div>

              <div className="flex items-center space-x-2">
                {dream.dreamType && <DreamBadge label={dream.dreamType} type="type" />}
                {dream.dreamMood && <DreamBadge label={dream.dreamMood} type="mood" />}
              </div>
            </div>
          </div>

          {/* Hover glow effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 20px rgba(124, 58, 237, 0.2)',
            }}
          />
        </article>
      </Link>
    </motion.div>
  )
}
