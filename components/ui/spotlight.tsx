"use client"
import { useRef, useState, useEffect } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Spotlight({
  children,
  className = "",
  size = 600,
  strength = 0.3,
}: {
  children?: React.ReactNode
  className?: string
  size?: number
  strength?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (!containerRef.current) return

    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    setPosition({ x, y })
    setOpacity(1)

    if (!hasInteracted) {
      setHasInteracted(true)
    }
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  // Auto animation when no interaction
  useEffect(() => {
    if (hasInteracted) return

    const interval = setInterval(() => {
      if (!containerRef.current) return

      const { width, height } = containerRef.current.getBoundingClientRect()
      const x = width * 0.5 + Math.sin(Date.now() / 2000) * width * 0.3
      const y = height * 0.5 + Math.cos(Date.now() / 2000) * height * 0.2

      setPosition({ x, y })
      setOpacity(0.7)
    }, 50)

    return () => clearInterval(interval)
  }, [hasInteracted])

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-0"
        style={{
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(120, 120, 255, ${strength}), transparent ${size}px)`,
          opacity,
        }}
        animate={{ opacity }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
