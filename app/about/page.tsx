import { Metadata } from 'next'
import { Moon, Sparkles, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Dreamscape',
  description: 'Learn more about Dreamscape - A journal of dreams beneath the stars',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Moon className="w-20 h-20 text-accent-moon" />
              <Sparkles className="w-8 h-8 text-accent-primary absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-text-heading mb-6">
            About Dreamscape
          </h1>
          <p className="text-xl text-text-muted">
            A journal of dreams beneath the stars
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="backdrop-blur-md bg-bg-glass border border-border-subtle rounded-card p-8">
            <div className="flex items-start space-x-4 mb-4">
              <BookOpen className="w-6 h-6 text-accent-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-serif text-text-heading mb-4">
                  The Dream Journal
                </h2>
                <div className="text-text-primary space-y-4 leading-relaxed">
                  <p>
                    Welcome to Dreamscape, a digital sanctuary where the ephemeral world of dreams
                    finds permanence in words. Here, beneath a canopy of infinite stars, we capture
                    the fleeting moments between sleep and wakefulness.
                  </p>
                  <p>
                    Each dream is a journey into the subconscious, a story waiting to be told.
                    From the exhilarating rush of flight to the haunting presence of shadows,
                    from the crystal clarity of lucid awareness to the surreal impossibilities
                    that only dreams can conjure.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="backdrop-blur-md bg-bg-glass border border-border-subtle rounded-card p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Sparkles className="w-6 h-6 text-accent-moon mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-serif text-text-heading mb-4">
                  Why We Dream
                </h2>
                <div className="text-text-primary space-y-4 leading-relaxed">
                  <p>
                    Dreams have fascinated humanity since the dawn of consciousness. They are
                    windows into our deepest thoughts, fears, desires, and memories. They
                    connect us to something greater than ourselves—a shared human experience
                    that transcends culture, language, and time.
                  </p>
                  <p>
                    This journal exists to honor those nocturnal narratives, to give them voice
                    and permanence, and to remind us that even in sleep, we are storytellers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="backdrop-blur-md bg-bg-glass border border-border-subtle rounded-card p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Moon className="w-6 h-6 text-accent-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-serif text-text-heading mb-4">
                  About the Author
                </h2>
                <div className="text-text-primary space-y-4 leading-relaxed">
                  <p>
                    This journal is curated by <span className="text-accent-glow font-semibold">Jyoti Kumari</span>,
                    a dreamer and storyteller who believes in the power of nocturnal narratives.
                  </p>
                  <p>
                    Whether you stumbled upon this space by accident or were drawn here by
                    curiosity, you are welcome. Explore the archive, lose yourself in the
                    stories, and perhaps find echoes of your own dreams within these pages.
                  </p>
                  <p>
                    The night is vast, and the dreams are endless. There is always room for
                    one more story beneath the stars.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 pt-8 border-t border-border-subtle">
          <p className="text-text-muted italic">
            "We are such stuff as dreams are made on, and our little life is rounded with a sleep."
          </p>
          <p className="text-text-muted text-sm mt-2">
            — William Shakespeare, The Tempest
          </p>
        </div>
      </div>
    </div>
  )
}
