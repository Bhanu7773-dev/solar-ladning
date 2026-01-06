"use client"

import { useEffect, useState } from "react"

interface AnimatedDividerProps {
  height?: number
  variant?: "wire" | "flowing" | "particles"
}

export default function AnimatedSectionDivider({ height = 120, variant = "flowing" }: AnimatedDividerProps) {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    if (variant === "particles") {
      const particleArray = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.3,
      }))
      setParticles(particleArray)
    }
  }, [variant])

  return (
    <div className="relative w-full overflow-hidden" style={{ height: `${height}px` }}>
      {variant === "wire" && (
        <svg className="w-full h-full" preserveAspectRatio="none">
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#ffd700" strokeWidth="2" opacity="0.3" />
          <circle cx="5%" cy="50%" r="6" fill="#ffd700" opacity="0.6" className="animate-pulse" />
          <circle cx="50%" cy="50%" r="6" fill="#10b981" opacity="0.6" className="animate-pulse" />
          <circle cx="95%" cy="50%" r="6" fill="#ffd700" opacity="0.6" className="animate-pulse" />
        </svg>
      )}

      {variant === "flowing" && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-8 bg-gradient-to-b from-accent via-green-400 to-transparent animate-flow-down"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  marginBottom: `${height / 12}px`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <path
                d="M0,50% Q25%,30% 50%,50% T100%,50%"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity="0.4"
              />
            </svg>
          </div>
        </div>
      )}

      {variant === "particles" && (
        <>
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 bg-green-400 rounded-full animate-particle-float"
              style={{
                left: `${particle.left}%`,
                bottom: "-10px",
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </>
      )}
    </div>
  )
}
