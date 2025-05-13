"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { Photo } from "@/lib/projects"
import { cn } from "@/lib/utils"

interface ProjectSectionProps {
  photo: Photo
  index: number
}

export function ProjectSection({ photo, index }: ProjectSectionProps) {
  // Xử lý các trường bị thiếu
  const processedPhoto = {
    ...photo,
    alt: photo.alt || photo.title || `Image ${index + 1}`,
    width: photo.width || 1200,
    height: photo.height || 1600,
    description: photo.description || "",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="relative aspect-auto overflow-hidden rounded-lg mb-6">
        <Image
          src={processedPhoto.src || "/placeholder.svg"}
          alt={processedPhoto.alt}
          width={processedPhoto.width}
          height={processedPhoto.height}
          className="object-cover w-full"
        />
      </div>

      {processedPhoto.title && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className={cn("text-xl font-medium", index % 2 === 0 ? "text-left" : "text-right")}>
            {processedPhoto.title}
          </h2>
          {processedPhoto.description && (
            <p className={cn("text-sm text-gray-500 mt-2", index % 2 === 0 ? "text-left" : "text-right")}>
              {processedPhoto.description}
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}
