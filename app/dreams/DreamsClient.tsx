'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import DreamCard from '@/components/dream/DreamCard'
import FilterBar from '@/components/ui/FilterBar'

interface Dream {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  publishedAt: string
  coverImage?: any
  dreamType?: string
  dreamMood?: string
  featured?: boolean
  tags?: string[]
}

interface DreamsClientProps {
  initialDreams: Dream[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

export default function DreamsClient({ initialDreams }: DreamsClientProps) {
  const [filteredDreams, setFilteredDreams] = useState<Dream[]>(initialDreams)

  const handleFilterChange = (filters: { type?: string; mood?: string; search?: string }) => {
    let filtered = [...initialDreams]

    if (filters.type) {
      filtered = filtered.filter((dream) => dream.dreamType === filters.type)
    }

    if (filters.mood) {
      filtered = filtered.filter((dream) => dream.dreamMood === filters.mood)
    }

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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <FilterBar onFilterChange={handleFilterChange} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8"
      >
        <p className="text-text-muted">
          {filteredDreams.length} dream{filteredDreams.length !== 1 ? 's' : ''} found
        </p>
      </motion.div>

      {filteredDreams.length > 0 ? (
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
    </>
  )
}
