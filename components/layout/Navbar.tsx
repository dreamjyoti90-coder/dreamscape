'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle">
      <div className="backdrop-blur-md bg-bg-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 group"
            >
              <Moon className="w-6 h-6 text-accent-moon transition-transform group-hover:rotate-12" />
              <span className="text-xl font-serif font-semibold text-text-heading">
                Dreamscape
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/')
                    ? 'text-accent-primary'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                Home
              </Link>
              <Link
                href="/dreams"
                className={`text-sm font-medium transition-colors ${
                  isActive('/dreams')
                    ? 'text-accent-primary'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                Dreams
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
