'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById('featured-dreams')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero.webp')" }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-bg-deep/60" aria-hidden />

      {/* Bottom fade into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 md:h-56 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--bg-deep) 0%, transparent 100%)',
        }}
        aria-hidden
      />

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
