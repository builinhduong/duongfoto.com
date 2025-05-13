"use client"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { motion } from "framer-motion"

interface ProjectCardTitleProps {
  title: string
  year: string
  isHovered: boolean
}

export function ProjectCardTitle({ title, year, isHovered }: ProjectCardTitleProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isHovered ? -5 : 0 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      {isHovered ? (
        <TextGenerateEffect words={title} className="text-xl font-normal mb-1" duration={0.2} filter={false} />
      ) : (
        <h2 className="text-xl font-normal mb-1 transition-colors duration-300">{title}</h2>
      )}
      <p className="text-sm text-gray-400">{year}</p>
    </motion.div>
  )
}
