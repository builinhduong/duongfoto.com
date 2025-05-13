"use client"
import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function ParallaxScroll({
  images,
  className,
  imageClassName,
}: {
  images: string[]
  className?: string
  imageClassName?: string
}) {
  const gridRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  })

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200])
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200])

  const rotateFirst = useTransform(scrollYProgress, [0, 1], [0, -5])
  const rotateSecond = useTransform(scrollYProgress, [0, 1], [0, 5])
  const rotateThird = useTransform(scrollYProgress, [0, 1], [0, -5])

  // Split images into three columns
  const columns = [
    images.filter((_, i) => i % 3 === 0),
    images.filter((_, i) => i % 3 === 1),
    images.filter((_, i) => i % 3 === 2),
  ]

  return (
    <div ref={gridRef} className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 relative", className)}>
      <motion.div style={{ y: translateFirst, rotate: rotateFirst }} className="flex flex-col gap-4">
        {columns[0].map((image, idx) => (
          <div key={idx} className={cn("relative rounded-lg overflow-hidden aspect-[4/5]", imageClassName)}>
            <img
              src={image || "/placeholder.svg"}
              alt={`Parallax image ${idx}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </motion.div>
      <motion.div style={{ y: translateSecond, rotate: rotateSecond }} className="flex flex-col gap-4 mt-16">
        {columns[1].map((image, idx) => (
          <div key={idx} className={cn("relative rounded-lg overflow-hidden aspect-[4/5]", imageClassName)}>
            <img
              src={image || "/placeholder.svg"}
              alt={`Parallax image ${idx}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </motion.div>
      <motion.div style={{ y: translateThird, rotate: rotateThird }} className="flex flex-col gap-4">
        {columns[2].map((image, idx) => (
          <div key={idx} className={cn("relative rounded-lg overflow-hidden aspect-[4/5]", imageClassName)}>
            <img
              src={image || "/placeholder.svg"}
              alt={`Parallax image ${idx}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
