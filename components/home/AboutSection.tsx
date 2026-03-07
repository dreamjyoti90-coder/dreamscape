'use client'

import { motion } from 'framer-motion'

const dreamyFadeIn = {
  initial: { opacity: 0, filter: 'blur(12px)', y: 20 },
  whileInView: { opacity: 1, filter: 'blur(0px)', y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
}

const stagger = {
  initial: { opacity: 0, filter: 'blur(10px)', y: 16 },
  whileInView: { opacity: 1, filter: 'blur(0px)', y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
}

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          {...dreamyFadeIn}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2
            {...dreamyFadeIn}
            transition={{ ...dreamyFadeIn.transition, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-text-heading mb-8"
          >
            About Dreamscape
          </motion.h2>
          <motion.p
            {...dreamyFadeIn}
            transition={{ ...dreamyFadeIn.transition, delay: 0.2 }}
            className="text-text-muted text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            A place to capture and share the stories that visit us in sleep—vivid,
            strange, and fleeting. Every dream is a journey; here we give them a
            home beneath the stars.
          </motion.p>
          <motion.p
            {...dreamyFadeIn}
            transition={{ ...dreamyFadeIn.transition, delay: 0.35 }}
            className="text-text-muted text-lg leading-relaxed max-w-xl mx-auto"
          >
            Whether you&apos;re here to read, to remember, or to wander, welcome.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="border-t border-white/10 pt-12 md:pt-16"
        >
          <motion.h3
            {...stagger}
            transition={{ ...stagger.transition, delay: 0.1 }}
            className="text-2xl md:text-3xl font-serif text-text-heading mb-6 text-center"
          >
            About the Author
          </motion.h3>
          <div className="text-text-muted text-lg md:text-xl leading-relaxed space-y-6 text-center max-w-2xl mx-auto">
            {[
              <>
                <span className="text-text-heading font-medium">Jyoti Kumari</span> is
                the creator behind Dreamscape. She believes that dreams are more than
                fragments of the night—they&apos;re stories waiting to be told, and
                sometimes the most honest ones we have.
              </>,
              <>
                This journal is her way of honouring those stories: recording her own,
                and opening a space for others to share and discover the strange,
                beautiful, and sometimes unsettling worlds we visit when we close our
                eyes.
              </>,
              <>
                When she&apos;s not writing or curating dreams, you might find her
                under the stars—awake or asleep—chasing the next one worth keeping.
              </>,
            ].map((content, i) => (
              <motion.p
                key={i}
                {...stagger}
                transition={{ ...stagger.transition, delay: 0.15 * (i + 1) }}
              >
                {content}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
