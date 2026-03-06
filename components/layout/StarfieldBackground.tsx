'use client'

import { useEffect, useRef } from 'react'

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Generate stars
    const starCount = 200
    const stars: HTMLDivElement[] = []

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div')
      star.className = 'star'

      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`

      // Random size (1px, 2px, or 3px)
      const size = Math.random()
      if (size < 0.6) {
        star.style.width = '1px'
        star.style.height = '1px'
      } else if (size < 0.9) {
        star.style.width = '2px'
        star.style.height = '2px'
      } else {
        star.style.width = '3px'
        star.style.height = '3px'
      }

      // Random animation
      const animations = ['twinkle-1', 'twinkle-2', 'twinkle-3']
      const animation = animations[Math.floor(Math.random() * animations.length)]
      const duration = 2 + Math.random() * 4 // 2-6 seconds
      const delay = Math.random() * 3

      star.style.animation = `${animation} ${duration}s ease-in-out ${delay}s infinite`
      star.style.backgroundColor = 'var(--star-color)'
      star.style.borderRadius = '50%'
      star.style.position = 'absolute'
      star.style.pointerEvents = 'none'

      canvasRef.current?.appendChild(star)
      stars.push(star)
    }

    // Generate shooting stars
    const createShootingStar = () => {
      const shootingStar = document.createElement('div')
      shootingStar.className = 'shooting-star'
      shootingStar.style.left = `${20 + Math.random() * 60}%`
      shootingStar.style.top = `${10 + Math.random() * 30}%`
      shootingStar.style.width = '2px'
      shootingStar.style.height = '2px'
      shootingStar.style.backgroundColor = 'var(--star-color)'
      shootingStar.style.borderRadius = '50%'
      shootingStar.style.position = 'absolute'
      shootingStar.style.boxShadow = '0 0 6px 2px rgba(255, 255, 255, 0.5)'
      shootingStar.style.animation = 'shooting-star 1.5s ease-out forwards'
      shootingStar.style.pointerEvents = 'none'

      canvasRef.current?.appendChild(shootingStar)

      setTimeout(() => {
        shootingStar.remove()
      }, 1500)
    }

    // Create shooting star every 8-15 seconds
    const shootingStarInterval = setInterval(() => {
      createShootingStar()
    }, 8000 + Math.random() * 7000)

    return () => {
      clearInterval(shootingStarInterval)
      stars.forEach(star => star.remove())
    }
  }, [])

  return (
    <>
      {/* Starfield */}
      <div
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating clouds */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
        <div className="cloud cloud-4" />
        <div className="cloud cloud-5" />
      </div>

      <style jsx>{`
        .cloud {
          position: absolute;
          background: var(--cloud-color);
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.05;
        }

        .cloud-1 {
          width: 300px;
          height: 150px;
          top: 10%;
          animation: drift 90s linear infinite;
        }

        .cloud-2 {
          width: 400px;
          height: 200px;
          top: 30%;
          animation: drift 120s linear infinite;
          animation-delay: -30s;
        }

        .cloud-3 {
          width: 250px;
          height: 125px;
          top: 50%;
          animation: drift 75s linear infinite;
          animation-delay: -60s;
        }

        .cloud-4 {
          width: 350px;
          height: 175px;
          top: 70%;
          animation: drift 100s linear infinite;
          animation-delay: -20s;
        }

        .cloud-5 {
          width: 200px;
          height: 100px;
          top: 85%;
          animation: drift 65s linear infinite;
          animation-delay: -50s;
        }

        @media (prefers-reduced-motion: reduce) {
          .cloud {
            animation: none !important;
          }
        }
      `}</style>
    </>
  )
}
