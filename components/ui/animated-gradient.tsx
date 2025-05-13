"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function AnimatedGradient({
  children,
  className,
  containerClassName,
  colors = ["rgba(142, 202, 230, 0.33)", "rgba(33, 158, 188, 0.12)", "rgba(2, 48, 71, 0.15)"],
  duration = 5,
  blur = 100,
  interactive = true,
  ...props
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  duration?: number
  blur?: number
  interactive?: boolean
  [key: string]: any
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [animateToPosition, setAnimateToPosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    const { width, height } = containerRef.current.getBoundingClientRect()
    setDimensions({ width, height })

    // Set initial position
    setPosition({ x: width / 2, y: height / 2 })
    setAnimateToPosition({ x: width / 2, y: height / 2 })

    // Start animation loop if not interactive
    if (!interactive) {
      const interval = setInterval(() => {
        const x = Math.random() * width
        const y = Math.random() * height
        setAnimateToPosition({ x, y })
      }, duration * 1000)

      return () => clearInterval(interval)
    }
  }, [interactive, duration])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return

    const { left, top } = containerRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    setAnimateToPosition({ x, y })
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {colors.map((color, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 z-0"
          animate={{
            x: animateToPosition.x - dimensions.width / 2,
            y: animateToPosition.y - dimensions.height / 2,
          }}
          transition={{
            duration: duration,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
          style={{
            background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
            transform: `translate(${position.x}px, ${position.y}px)`,
            filter: `blur(${blur}px)`,
            opacity: 0.8,
          }}
        />
      ))}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}
