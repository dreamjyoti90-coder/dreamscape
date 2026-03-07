'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById('featured-dreams')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Moon decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 pointer-events-none">
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0 rounded-full bg-accent-moon opacity-20 blur-3xl"
            style={{
              boxShadow: '0 0 80px 40px rgba(251, 191, 36, 0.3)',
            }}
          />
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="var(--accent-moon)"
              opacity="0.9"
            />
            <circle
              cx="60"
              cy="50"
              r="35"
              fill="var(--bg-deep)"
            />
          </svg>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif text-text-heading mb-6"
          style={{
            textShadow: '0 0 40px rgba(124, 58, 237, 0.5)',
          }}
        >
          Dreamscape
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-text-muted mb-12"
        >
          A journal of dreams beneath the stars
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={scrollToContent}
            className="inline-flex items-center space-x-2 px-8 py-3 rounded-button bg-accent-primary hover:bg-accent-glow text-white font-medium transition-all hover:shadow-lg hover:shadow-accent-primary/50 hover:scale-105"
          >
            <span>Explore Dreams</span>
          </button>
        </motion.div>
      </div>

    </section>
  )
}
