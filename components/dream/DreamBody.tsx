import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-serif text-text-heading mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-serif text-text-heading mb-5 mt-7">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-serif text-text-heading mb-4 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-serif text-text-heading mb-3 mt-5">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-text-primary mb-6 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent-primary pl-6 py-2 my-6 italic text-text-muted bg-bg-elevated/50 rounded-r">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-text-heading">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-text-muted">{children}</em>
    ),
    code: ({ children }) => (
      <code className="bg-bg-elevated px-2 py-1 rounded text-accent-glow font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          target={!value.href.startsWith('/') ? '_blank' : undefined}
          className="text-accent-primary hover:text-accent-glow underline decoration-accent-primary/30 hover:decoration-accent-glow transition-colors"
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8 rounded-card overflow-hidden border border-border-subtle">
          <Image
            src={urlFor(value).width(1200).height(800).url()}
            alt={value.alt || 'Dream image'}
            width={1200}
            height={800}
            className="w-full h-auto"
            style={{
              boxShadow: '0 0 20px rgba(124, 58, 237, 0.2)',
            }}
          />
          {value.alt && (
            <p className="text-center text-text-muted text-sm mt-2 px-4 pb-4">
              {value.alt}
            </p>
          )}
        </div>
      )
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-text-primary">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-text-primary">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    number: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
  },
}

interface DreamBodyProps {
  body: any
}

export default function DreamBody({ body }: DreamBodyProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <PortableText value={body} components={components} />
    </div>
  )
}
