"use client"

import { TracingBeam } from "@/components/ui/tracing-beam"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { ProjectSection } from "@/components/project-section"
import type { Photo } from "@/lib/projects"

interface ProjectContentWithSectionsProps {
  title: string
  year: string
  description?: string
  photos: Photo[]
}

export function ProjectContentWithSections({ title, year, description, photos }: ProjectContentWithSectionsProps) {
  // Mô tả mặc định nếu không có trong dữ liệu
  const defaultDescription = `Bộ sưu tập hình ảnh ${title} được thực hiện vào năm ${year}. Dự án này thể hiện phong cách độc đáo và tầm nhìn sáng tạo của nhiếp ảnh gia.`

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
          {photos.map((photo, index) => (
            <ProjectSection key={index} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </TracingBeam>
  )
}
