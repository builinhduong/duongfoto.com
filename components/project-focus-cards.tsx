"use client"

import type React from "react"
import type { Project } from "@/lib/projects"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { OptimizedTextEffect } from "@/components/ui/optimized-text-effect"

interface ProjectCardProps {
  project: Project
  category: string
  index: number
  hovered: number | null
  setHovered: React.Dispatch<React.SetStateAction<number | null>>
}

export function ProjectFocusCard({ project, category, index, hovered, setHovered }: ProjectCardProps) {
  const isHovered = hovered === index
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/${category}/${project.id}`}
        className="group block"
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
      >
        <div
          className={cn(
            "relative aspect-[3/4] mb-4 overflow-hidden transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
          )}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.03 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full w-full"
          >
            <Image
              src={project.coverImage || "/placeholder.svg"}
              alt={project.title}
              fill
              className={cn("object-cover transition-all duration-700", isHovered ? "grayscale-0" : "grayscale")}
            />
          </motion.div>

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/20 pointer-events-none"
          />

          {/* Hover border */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 border-2 border-white pointer-events-none"
          />
        </div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          {isHovered ? (
            <OptimizedTextEffect
              text={project.title}
              className="text-xl font-normal mb-1"
              staggerDelay={0.01}
              duration={0.2}
            />
          ) : (
            <h2 className="text-xl font-normal mb-1 transition-colors duration-300">{project.title}</h2>
          )}
          <p className="text-sm text-gray-400">{project.year}</p>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export function ProjectFocusCards({ projects, category }: { projects: Project[]; category: string }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
      {projects.map((project, index) => (
        <ProjectFocusCard
          key={project.id}
          project={project}
          category={category}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}
