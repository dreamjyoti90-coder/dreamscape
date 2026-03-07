import { client } from '@/lib/sanity.client'
import { featuredDreamPostsQuery, recentDreamPostsQuery } from '@/lib/sanity.queries'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import FeaturedDreams from '@/components/home/FeaturedDreams'
import RecentFeed from '@/components/home/RecentFeed'

export const revalidate = 60 // Revalidate every 60 seconds

async function getFeaturedDreams() {
  try {
    return await client.fetch(featuredDreamPostsQuery)
  } catch (error) {
    console.error('Error fetching featured dreams:', error)
    return []
  }
}

async function getRecentDreams() {
  try {
    return await client.fetch(recentDreamPostsQuery)
  } catch (error) {
    console.error('Error fetching recent dreams:', error)
    return []
  }
}

export default async function Home() {
  const [featuredDreams, recentDreams] = await Promise.all([
    getFeaturedDreams(),
    getRecentDreams(),
  ])

  return (
    <>
      <HeroSection />
      <AboutSection />
      {featuredDreams.length > 0 && <FeaturedDreams dreams={featuredDreams} />}
      {recentDreams.length > 0 && <RecentFeed dreams={recentDreams} />}
    </>
  )
}
