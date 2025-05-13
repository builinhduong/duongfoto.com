"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"

interface ProjectImageProps {
  src: string
  alt: string
  index: number
}

export function ProjectImage({ src, alt, index }: ProjectImageProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.2,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
      }}
      className="flex justify-center"
    >
      <motion.div
        className="relative max-w-2xl w-full aspect-[3/4]"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </motion.div>
    </motion.div>
  )
}
