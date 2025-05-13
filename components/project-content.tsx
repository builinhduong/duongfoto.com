"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import type { Photo } from "@/lib/projects"
import { cn } from "@/lib/utils"

interface ProjectContentProps {
  title: string
  year: string
  description?: string
  photos: Photo[]
}

export function ProjectContent({ title, year, description, photos }: ProjectContentProps) {
  // Mô tả mặc định nếu không có trong dữ liệu
  const defaultDescription = `Bộ sưu tập hình ảnh ${title} được thực hiện vào năm ${year}. Dự án này thể hiện phong cách độc đáo và tầm nhìn sáng tạo của nhiếp ảnh gia.`

  // Xử lý các trường bị thiếu cho ảnh
  const processedPhotos = photos.map((img, i) => ({
    ...img,
    span: img.span || (i % 5 === 0 ? "both" : i % 3 === 0 ? "row" : i % 4 === 0 ? "col" : "normal"),
    alt: img.alt || img.title || `Image ${i + 1}`,
    width: img.width || 1200,
    height: img.height || 1600,
    description: img.description || "",
  }))

  return (
    <TracingBeam className="px-4 md:px-6 max-w-screen-2xl">
      <div className="max-w-3xl mx-auto pt-4 pb-20">
        {/* Tiêu đề dự án */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-sm text-gray-400 mb-6">{year}</p>
          <div className="max-w-2xl mx-auto">
            <TextGenerateEffect
              words={description || defaultDescription}
              className="text-sm font-normal text-gray-500"
              duration={0.2}
              filter={false}
            />
          </div>
        </div>

        {/* Nội dung dự án */}
        <div className="space-y-16">
          {processedPhotos.map((photo, index) => (
            <div key={index} className="mb-16">
              <div className="relative aspect-auto overflow-hidden rounded-lg mb-6">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="object-cover w-full"
                />
              </div>

              {photo.title && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <h2 className={cn("text-xl font-medium", index % 2 === 0 ? "text-left" : "text-right")}>
                    {photo.title}
                  </h2>
                  {photo.description && (
                    <p className={cn("text-sm text-gray-500 mt-2", index % 2 === 0 ? "text-left" : "text-right")}>
                      {photo.description}
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </TracingBeam>
  )
}
