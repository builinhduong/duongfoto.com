"use client"
import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export function TextReveal({
  text,
  className,
  once = true,
  delay = 0,
  duration = 0.5,
  ...props
}: {
  text: string
  className?: string
  once?: boolean
  delay?: number
  duration?: number
  [key: string]: any
}) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn("", className)}
      variants={container}
      initial="hidden"
      animate={controls}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-[0.25em] whitespace-nowrap" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
