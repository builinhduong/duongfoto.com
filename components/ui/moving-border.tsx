"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  className?: string
  containerClassName?: string
  borderClassName?: string
  as?: any
  [key: string]: any
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!ref.current) return

      const { width, height } = ref.current.getBoundingClientRect()
      const x = Math.random() * width
      const y = Math.random() * height
      setPosition({ x, y })
      setOpacity(1)
    }, duration)

    return () => clearInterval(interval)
  }, [duration])

  return (
    <Component
      ref={ref}
      className={cn("relative overflow-hidden border border-transparent bg-transparent p-[1px]", containerClassName)}
      {...otherProps}
    >
      <motion.div
        className={cn("pointer-events-none absolute -inset-px opacity-0", borderClassName)}
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
          opacity,
        }}
        animate={{ opacity }}
        transition={{ duration: 0.5 }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </Component>
  )
}
