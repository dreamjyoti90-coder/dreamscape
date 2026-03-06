'use client'

import { Share2 } from 'lucide-react'

export default function ShareButton() {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center space-x-2 px-6 py-3 rounded-button border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white font-medium transition-all"
    >
      <Share2 className="w-4 h-4" />
      <span>Share Dream</span>
    </button>
  )
}
