"use client"

import { OptimizedTextEffect } from "@/components/ui/optimized-text-effect"
import { motion } from "framer-motion"

interface ProjectHeaderProps {
  title: string
  year: string
  description?: string
}

export function ProjectHeader({ title, year, description }: ProjectHeaderProps) {
  // Default description if none provided
  const defaultDescription = `Bộ sưu tập hình ảnh ${title} được thực hiện vào năm ${year}. Dự án này thể hiện phong cách độc đáo và tầm nhìn sáng tạo của nhiếp ảnh gia.`

  const finalDescription = description || defaultDescription

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <OptimizedTextEffect text={title} className="text-3xl font-bold mb-2" staggerDelay={0.03} duration={0.5} />
      <p className="text-sm text-gray-400 mb-6">{year}</p>
      <div className="max-w-2xl mx-auto">
        <OptimizedTextEffect
          text={finalDescription}
          className="text-sm font-normal text-gray-500"
          staggerDelay={0.01}
          duration={0.3}
        />
      </div>
    </motion.div>
  )
}
