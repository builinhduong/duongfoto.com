import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { BentoImageGallery } from "@/components/bento-image-gallery"
import { Metadata } from "next"
import Image from "next/image"
import fs from "fs"
import path from "path"

interface ProjectPageProps {
  params: {
    projectId: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectId } = params
  
  const projectPath = path.join(process.cwd(), `data/fashion/${projectId}.json`)
  const projectData = JSON.parse(fs.readFileSync(projectPath, "utf8"))
  
  return {
    title: `${projectData.title} | Photography Portfolio`,
    description: projectData.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = params

  // This would typically come from a database or CMS
  const projects = {
    "summer-collection-2025": {
      title: "Summer Collection 2025",
      year: "2025",
      photos: [
        {
          src: "/images/fashion-1.jpg",
          alt: "Fashion photo 1",
          width: 1200,
          height: 1600,
          title: "Summer Vibes",
          description: "Key piece from the summer collection",
          span: "both",
        },
        {
          src: "/images/fashion-detail-1.jpg",
          alt: "Fashion photo 2",
          width: 1200,
          height: 1600,
          title: "Detail Shot",
          description: "Close-up of fabric and texture",
        },
        {
          src: "/images/fashion-detail-2.jpg",
          alt: "Fashion photo 3",
          width: 1200,
          height: 1600,
          title: "Accessories",
          description: "Styling details from the collection",
          span: "col",
        },
        {
          src: "/images/fashion-3.jpg",
          alt: "Additional fashion photo",
          width: 1200,
          height: 1600,
          title: "Casual Look",
          span: "row",
        },
        {
          src: "/images/fashion-4.jpg",
          alt: "Additional fashion photo",
          width: 1200,
          height: 1600,
          title: "Evening Wear",
        },
      ],
    },
    "urban-style": {
      title: "Urban Style",
      year: "2025",
      photos: [
        {
          src: "/images/fashion-2.jpg",
          alt: "Fashion photo 1",
          width: 1200,
          height: 1600,
          title: "Street Style",
          description: "Urban fashion in context",
          span: "both",
        },
        {
          src: "/images/fashion-detail-3.jpg",
          alt: "Fashion photo 2",
          width: 1200,
          height: 1600,
          title: "Detail Shot",
          description: "Close-up of urban styling elements",
          span: "row",
        },
        {
          src: "/images/fashion-5.jpg",
          alt: "Additional fashion photo",
          width: 1200,
          height: 1600,
          title: "City Vibes",
          span: "col",
        },
        {
          src: "/images/fashion-6.jpg",
          alt: "Additional fashion photo",
          width: 1200,
          height: 1600,
          title: "Night Look",
        },
      ],
    },
    // Add other projects as needed
  }

  const project = projects[projectId as keyof typeof projects]

  if (!project) {
    notFound()
  }

  const projectPath = path.join(process.cwd(), `data/fashion/${projectId}.json`)
  const projectData = JSON.parse(fs.readFileSync(projectPath, "utf8"))

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-8 pb-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/fashion" className="inline-flex items-center mb-12 text-sm hover:text-gray-600 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Fashion
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-2xl font-normal mb-1">{project.title}</h1>
          <p className="text-sm text-gray-400">{project.year}</p>
        </div>

        <p className="text-lg max-w-3xl mb-12">{projectData.description}</p>

        <BentoImageGallery images={project.photos} />
      </div>
    </main>
  )
}
