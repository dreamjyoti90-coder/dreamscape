'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import DreamCard from '@/components/dream/DreamCard'
import FilterBar from '@/components/ui/FilterBar'
import { client } from '@/lib/sanity.client'
import { allDreamPostsQuery } from '@/lib/sanity.queries'

export default function DreamsPage() {
  const [allDreams, setAllDreams] = useState<any[]>([])
  const [filteredDreams, setFilteredDreams] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDreams() {
      try {
        const dreams = await client.fetch(allDreamPostsQuery)
        setAllDreams(dreams)
        setFilteredDreams(dreams)
      } catch (error) {
        console.error('Error fetching dreams:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDreams()
  }, [])

  const handleFilterChange = (filters: { type?: string; mood?: string; search?: string }) => {
    let filtered = [...allDreams]

    // Filter by type
    if (filters.type) {
      filtered = filtered.filter((dream) => dream.dreamType === filters.type)
    }

    // Filter by mood
    if (filters.mood) {
      filtered = filtered.filter((dream) => dream.dreamMood === filters.mood)
    }

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(
        (dream) =>
          dream.title.toLowerCase().includes(searchLower) ||
          dream.excerpt?.toLowerCase().includes(searchLower) ||
          dream.tags?.some((tag: string) => tag.toLowerCase().includes(searchLower))
      )
    }

    setFilteredDreams(filtered)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-text-heading mb-4">
            Dream Archive
          </h1>
          <p className="text-text-muted text-lg">
            Explore the collection of dreams from beyond the veil
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <FilterBar onFilterChange={handleFilterChange} />
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-text-muted">
            {loading ? 'Loading dreams...' : `${filteredDreams.length} dream${filteredDreams.length !== 1 ? 's' : ''} found`}
          </p>
        </motion.div>

        {/* Dreams Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-primary"></div>
          </div>
        ) : filteredDreams.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDreams.map((dream) => (
              <DreamCard key={dream._id} dream={dream} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-text-muted text-lg">
              No dreams found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
