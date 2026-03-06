import { Moon } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-border-subtle mt-20">
      <div className="backdrop-blur-md bg-bg-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center space-y-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Moon className="w-5 h-5 text-accent-moon" />
              <span className="text-lg font-serif font-semibold text-text-heading">
                Dreamscape
              </span>
            </div>

            {/* Description */}
            <p className="text-text-muted text-sm text-center max-w-md">
              A journal of dreams beneath the stars. Capturing the ethereal moments
              between sleep and wake.
            </p>

            {/* Copyright */}
            <p className="text-text-muted text-xs">
              © {currentYear} Dreamscape. All dreams reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
