"use client"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

interface CategoryTitleProps {
  title: string
}

export function CategoryTitle({ title }: CategoryTitleProps) {
  return (
    <div className="text-center mb-16">
      <TextGenerateEffect words={title} className="text-4xl font-bold tracking-tight" duration={0.3} />
    </div>
  )
}
