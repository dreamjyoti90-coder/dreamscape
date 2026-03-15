import type { Metadata } from 'next'
import { client } from '@/lib/sanity.client'
import { allDreamPostsQuery } from '@/lib/sanity.queries'
import DreamsClient from './DreamsClient'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Dream Archive',
  description: 'Browse the full collection of dream journals — lucid dreams, nightmares, surreal visions, and more. Filter by type, mood, or search for a specific dream.',
  keywords: [
    'dream archive',
    'dream collection',
    'lucid dream stories',
    'nightmare journal',
    'dream types',
    'dream moods',
    'browse dreams',
  ],
  alternates: {
    canonical: '/dreams',
  },
  openGraph: {
    title: 'Dream Archive | Dreamscape',
    description: 'Browse the full collection of dream journals — lucid dreams, nightmares, and surreal visions.',
    url: '/dreams',
  },
}

export default async function DreamsPage() {
  const dreams = await client.fetch(allDreamPostsQuery).catch(() => [])

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif text-text-heading mb-4">
            Dream Archive
          </h1>
          <p className="text-text-muted text-lg">
            Explore the collection of dreams from beyond the veil
          </p>
        </div>

        <DreamsClient initialDreams={dreams} />
      </div>
    </div>
  )
}
