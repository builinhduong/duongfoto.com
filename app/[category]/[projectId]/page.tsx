import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { ProjectHeader } from "@/components/project-header"
import { OptimizedBentoGallery } from "@/components/optimized-bento-gallery"
import { getCategoryById, getProjectById } from "@/lib/projects"

interface ProjectPageProps {
  params: {
    category: string
    projectId: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { category, projectId } = params

  const categoryData = await getCategoryById(category)
  if (!categoryData) {
    notFound()
  }

  const project = await getProjectById(category, projectId)
  if (!project) {
    notFound()
  }

  // Check if project has photos
  if (!project.photos || !Array.isArray(project.photos) || project.photos.length === 0) {
    return (
      <main className="min-h-screen bg-[#f5f5f5] pt-8 pb-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${category}`}
            className="inline-flex items-center mb-12 text-sm hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {categoryData.title}
          </Link>

          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-sm text-gray-400 mb-6">{project.year}</p>
            <p className="text-gray-500">No photos available for this project.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-8 pb-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${category}`}
          className="inline-flex items-center mb-12 text-sm hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {categoryData.title}
        </Link>

        <TracingBeam fullWidth>
          <div className="pt-4 pb-20 px-4 md:px-8">
            <ProjectHeader title={project.title} year={project.year} description={project.description} />
            <div className="mt-16">
              <OptimizedBentoGallery images={project.photos} />
            </div>
          </div>
        </TracingBeam>
      </div>
    </main>
  )
}
