"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    year: string
    coverImage: string
    category?: string
  }
  category: string
}

export function ProjectCard({ project, category }: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Link
      href={`/${category}/${project.id}`}
      className="group block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-[3/4] mb-4 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: isHovering ? 1.03 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className={cn(
              "object-cover grayscale transition-all duration-700",
              isHovering ? "grayscale-0" : "grayscale",
            )}
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/20 pointer-events-none"
        />

        {/* Hover border */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 border-2 border-white pointer-events-none"
        />
      </div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isHovering ? -5 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <h2 className="text-xl font-normal mb-1 transition-colors duration-300 group-hover:text-black">
          {project.title}
        </h2>
        <p className="text-sm text-gray-400">{project.year}</p>
      </motion.div>
    </Link>
  )
}
