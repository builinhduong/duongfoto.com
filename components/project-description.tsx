"use client"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

interface ProjectDescriptionProps {
  title: string
  year: string
  description?: string
}

export function ProjectDescription({ title, year, description }: ProjectDescriptionProps) {
  return (
    <div className="text-center mb-12">
      <TextGenerateEffect words={title} className="text-2xl font-normal mb-1" duration={0.3} />
      <p className="text-sm text-gray-400 mt-2">{year}</p>
      {description && (
        <TextGenerateEffect
          words={description}
          className="text-sm font-normal text-gray-500 mt-4 max-w-2xl mx-auto"
          duration={0.2}
          filter={false}
        />
      )}
    </div>
  )
}
