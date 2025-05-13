"use client"
import { useEffect, useRef } from "react"
import { motion, useAnimate, stagger } from "framer-motion"
import { cn } from "@/lib/utils"

export const OptimizedTextEffect = ({
  text,
  className,
  staggerDelay = 0.015,
  duration = 0.4,
  once = true,
}: {
  text: string
  className?: string
  staggerDelay?: number
  duration?: number
  once?: boolean
}) => {
  const [scope, animate] = useAnimate()
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (once && hasAnimated.current) return

    const elements = scope.current?.querySelectorAll("span")
    if (elements?.length) {
      animate(elements, { opacity: [0, 1], y: [10, 0] }, { duration, delay: stagger(staggerDelay) })
      hasAnimated.current = true
    }
  }, [scope, animate, duration, staggerDelay, once])

  return (
    <motion.div ref={scope} className={cn(className)}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block opacity-0">
          {word}
          {i !== text.split(" ").length - 1 && <>&nbsp;</>}
        </span>
      ))}
    </motion.div>
  )
}
