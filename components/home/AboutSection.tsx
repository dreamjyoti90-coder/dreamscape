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
            About Me
          </motion.h3>
          <div className="text-text-muted text-lg md:text-xl leading-relaxed space-y-6 text-center max-w-2xl mx-auto">
            {[
              <>
                Hi, I&apos;m <span className="text-text-heading font-medium">Jyoti</span>. Sit tight — let&apos;s be friends, and let me tell you my stories — one piece at a time.
              </>,
              <>Not all of my stories belong to the hours I am awake.</>,
              <>
                I&apos;m an adventurous soul, drawn to new beginnings, unfamiliar paths, and the experiences that quietly shape who I am becoming. I move through life with curiosity and courage, always ready to explore what lies beyond the familiar.
              </>,
              <>Some parts of my journey are easy to explain. Others remain just out of reach.</>,
              <>
                There are memories, feelings, and places I visit when I sleep — as if a part of me continues elsewhere. This space is where I follow those traces, one story at a time.
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
