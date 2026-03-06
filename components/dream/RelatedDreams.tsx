'use client'

import { motion } from 'framer-motion'
import DreamCard from './DreamCard'

interface RelatedDreamsProps {
  dreams: any[]
}

export default function RelatedDreams({ dreams }: RelatedDreamsProps) {
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
    <section className="py-16 border-t border-border-subtle">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-serif text-text-heading">
          More Dreams
        </h2>
        <p className="text-text-muted mt-2">
          Explore similar visions from the dream realm
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {dreams.map((dream) => (
          <DreamCard key={dream._id} dream={dream} />
        ))}
      </motion.div>
    </section>
  )
}
