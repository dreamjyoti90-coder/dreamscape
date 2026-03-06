'use client'

import { motion } from 'framer-motion'
import DreamCard from '@/components/dream/DreamCard'

interface FeaturedDreamsProps {
  dreams: any[]
}

export default function FeaturedDreams({ dreams }: FeaturedDreamsProps) {
  if (!dreams || dreams.length === 0) {
    return null
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <section id="featured-dreams" className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
            Featured Dreams
          </h2>
          <p className="text-text-muted text-lg">
            Stories that shine brightest in the night
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
            <DreamCard key={dream._id} dream={dream} featured />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
