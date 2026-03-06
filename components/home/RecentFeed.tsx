'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import DreamCard from '@/components/dream/DreamCard'

interface RecentFeedProps {
  dreams: any[]
}

export default function RecentFeed({ dreams }: RecentFeedProps) {
  if (!dreams || dreams.length === 0) {
    return null
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
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
            Recent Dreams
          </h2>
          <p className="text-text-muted text-lg">
            The latest whispers from the realm of sleep
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dreams.map((dream) => (
            <DreamCard key={dream._id} dream={dream} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/dreams"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-button border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-medium transition-all hover:shadow-lg hover:shadow-accent-primary/30"
          >
            <span>View All Dreams</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
