import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params

  // Define categories and their projects
  const categories = {
    prewedding: {
      title: "PREWEDDING",
      projects: [
        {
          id: "urban-romance",
          title: "Urban Romance",
          description: "Love stories in city settings",
          coverImage: "/images/couple-train.jpg",
        },
        {
          id: "subway-stories",
          title: "Subway Stories",
          description: "Intimate moments in transit",
          coverImage: "/images/couple-subway.jpg",
        },
        {
          id: "city-lights",
          title: "City Lights",
          description: "Evening prewedding sessions",
          coverImage: "/images/couple-subway-2.jpg",
        },
        {
          id: "natural-connection",
          title: "Natural Connection",
          description: "Outdoor prewedding photography",
          coverImage: "/images/couple-outdoor.jpg",
        },
      ],
    },
    "ao-dai": {
      title: "AO DAI",
      projects: [
        {
          id: "traditional-elegance",
          title: "Traditional Elegance",
          description: "Classic Ao Dai photography",
          coverImage: "/images/ao-dai-1.png",
        },
        {
          id: "modern-heritage",
          title: "Modern Heritage",
          description: "Contemporary Ao Dai styles",
          coverImage: "/images/ao-dai-2.png",
        },
      ],
    },
    portrait: {
      title: "PORTRAIT",
      projects: [
        {
          id: "studio-sessions",
          title: "Studio Sessions",
          description: "Controlled lighting portrait work",
          coverImage: "/images/portrait-woman.jpg",
        },
        {
          id: "natural-light",
          title: "Natural Light",
          description: "Portraits using available light",
          coverImage: "/images/portrait-closeup.jpg",
        },
      ],
    },
    couple: {
      title: "COUPLE",
      projects: [
        {
          id: "everyday-moments",
          title: "Everyday Moments",
          description: "Casual couple photography",
          coverImage: "/images/couple-casual.png",
        },
        {
          id: "destination-sessions",
          title: "Destination Sessions",
          description: "Couples in scenic locations",
          coverImage: "/images/couple-beach.png",
        },
      ],
    },
  }

  // Check if category exists
  if (!categories[category as keyof typeof categories]) {
    notFound()
  }

  const categoryData = categories[category as keyof typeof categories]

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16 mb-24">
          <h1 className="text-4xl font-bold mb-16 tracking-tight">{categoryData.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categoryData.projects.map((project) => (
              <Link key={project.id} href={`/${category}/${project.id}`} className="group">
                <div className="aspect-[4/3] relative mb-4 overflow-hidden">
                  <Image
                    src={project.coverImage || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-medium group-hover:text-gray-600 transition-colors">{project.title}</h2>
                    <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
