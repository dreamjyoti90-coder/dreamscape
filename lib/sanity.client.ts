import { createClient } from 'next-sanity'
import { sanityConfig } from '@/sanity.env'

export const client = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: false, // Disable CDN for fresh data
  token: process.env.SANITY_API_TOKEN,
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
})
