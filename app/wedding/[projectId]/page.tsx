import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { BentoImageGallery } from "@/components/bento-image-gallery"

interface ProjectPageProps {
  params: {
    projectId: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = params

  // This would typically come from a database or CMS
  const projects = {
    "mai-and-tuan-2025": {
      title: "Mai & Tuan 2025",
      year: "2025",
      photos: [
        {
          src: "/images/wedding-1.jpg",
          alt: "Wedding photo 1",
          width: 1200,
          height: 1600,
          title: "Ceremony",
          description: "Beautiful moment during the ceremony",
          span: "both",
        },
        {
          src: "/images/wedding-detail-1.jpg",
          alt: "Wedding photo 2",
          width: 1200,
          height: 1600,
          title: "Detail Shot",
          description: "Close-up of wedding details",
        },
        {
          src: "/images/wedding-detail-2.jpg",
          alt: "Wedding photo 3",
          width: 1200,
          height: 1600,
          title: "Rings",
          description: "Wedding rings close-up",
          span: "col",
        },
        {
          src: "/images/wedding-3.jpg",
          alt: "Additional wedding photo",
          width: 1200,
          height: 1600,
          title: "First Dance",
          span: "row",
        },
        {
          src: "/images/wedding-4.jpg",
          alt: "Additional wedding photo",
          width: 1200,
          height: 1600,
          title: "Reception",
        },
      ],
    },
    "linh-and-minh": {
      title: "Linh & Minh",
      year: "2025",
      photos: [
        {
          src: "/images/wedding-2.jpg",
          alt: "Wedding photo 1",
          width: 1200,
          height: 1600,
          title: "Ceremony",
          description: "Beautiful moment during the ceremony",
          span: "both",
        },
        {
          src: "/images/wedding-detail-3.jpg",
          alt: "Wedding photo 2",
          width: 1200,
          height: 1600,
          title: "Detail Shot",
          description: "Close-up of wedding details",
          span: "row",
        },
        {
          src: "/images/wedding-5.jpg",
          alt: "Additional wedding photo",
          width: 1200,
          height: 1600,
          title: "First Dance",
          span: "col",
        },
        {
          src: "/images/wedding-6.jpg",
          alt: "Additional wedding photo",
          width: 1200,
          height: 1600,
          title: "Reception",
        },
      ],
    },
    // Add other projects as needed
  }

  const project = projects[projectId as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-8 pb-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/wedding" className="inline-flex items-center mb-12 text-sm hover:text-gray-600 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Wedding
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-2xl font-normal mb-1">{project.title}</h1>
          <p className="text-sm text-gray-400">{project.year}</p>
        </div>

        <BentoImageGallery images={project.photos} />
      </div>
    </main>
  )
}
