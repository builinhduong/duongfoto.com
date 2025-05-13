import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ImageGallery } from "@/components/image-gallery"

interface ProjectPageProps {
  params: {
    projectId: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = params

  // This would typically come from a database or CMS
  const projects = {
    nature: {
      title: "Nature Photography",
      description:
        "Capturing the beauty and wonder of the natural world through my lens. From majestic mountains to delicate flowers, these images celebrate the diversity and splendor of nature.",
      coverImage: "/dramatic-mountain-vista.png",
      images: [
        {
          src: "/majestic-mountain-vista.png",
          alt: "Mountain landscape at sunset",
          width: 1200,
          height: 800,
          title: "Mountain Majesty",
          description: "Sunset over the mountain range",
        },
        {
          src: "/placeholder.svg?key=owcba",
          alt: "Sunlight streaming through forest trees",
          width: 1200,
          height: 800,
          title: "Forest Light",
          description: "Morning light filtering through ancient trees",
        },
        {
          src: "/placeholder.svg?key=9j1e5",
          alt: "Dramatic ocean waves crashing on rocks",
          width: 1200,
          height: 800,
          title: "Ocean Power",
          description: "The raw power of the sea",
        },
        {
          src: "/placeholder.svg?key=ciwp0",
          alt: "Macro photography of a flower",
          width: 1200,
          height: 800,
          title: "Petal Details",
          description: "The intricate details of nature",
        },
        {
          src: "/placeholder.svg?key=367sx",
          alt: "Deer in natural habitat",
          width: 1200,
          height: 800,
          title: "Forest Dweller",
          description: "Wildlife in their natural environment",
        },
        {
          src: "/placeholder.svg?key=8ng00",
          alt: "Long exposure of a waterfall",
          width: 1200,
          height: 800,
          title: "Flowing Time",
          description: "The gentle flow of water over time",
        },
        {
          src: "/placeholder.svg?key=jg921",
          alt: "Autumn colors in a landscape",
          width: 1200,
          height: 800,
          title: "Autumn Palette",
          description: "The vibrant colors of fall",
        },
        {
          src: "/placeholder.svg?key=4mc0b",
          alt: "Starry night sky",
          width: 1200,
          height: 800,
          title: "Cosmic Wonder",
          description: "The beauty of the night sky",
        },
      ],
    },
    portraits: {
      title: "Portrait Photography",
      description:
        "Capturing the essence and personality of individuals through thoughtful portraiture. Each image tells a unique story and reveals something special about the subject.",
      coverImage: "/artistic-portrait.png",
      images: [
        {
          src: "/professional-headshot.png",
          alt: "Professional headshot",
          width: 1200,
          height: 800,
          title: "Professional Presence",
          description: "Corporate headshot with natural lighting",
        },
        {
          src: "/placeholder.svg?key=w093g",
          alt: "Environmental portrait of an artist",
          width: 1200,
          height: 800,
          title: "The Artist",
          description: "Portrait in the subject's creative space",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=black+and+white+portrait+photography",
          alt: "Black and white portrait",
          width: 1200,
          height: 800,
          title: "Timeless",
          description: "Classic black and white portraiture",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=family+portrait+photography+outdoors",
          alt: "Family portrait outdoors",
          width: 1200,
          height: 800,
          title: "Family Bonds",
          description: "Capturing relationships and connections",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=dramatic+lighting+portrait",
          alt: "Portrait with dramatic lighting",
          width: 1200,
          height: 800,
          title: "Light and Shadow",
          description: "Using light to create mood and drama",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=candid+portrait+photography",
          alt: "Candid portrait",
          width: 1200,
          height: 800,
          title: "Unguarded Moment",
          description: "Capturing authentic expressions",
        },
      ],
    },
    urban: {
      title: "Urban Photography",
      description:
        "Exploring the beauty, complexity, and energy of urban environments. From towering skyscrapers to quiet side streets, these images capture the essence of city life.",
      coverImage: "/placeholder.svg?height=800&width=1600&query=cityscape+night+photography",
      images: [
        {
          src: "/placeholder.svg?height=800&width=1200&query=city+skyline+photography",
          alt: "City skyline",
          width: 1200,
          height: 800,
          title: "Urban Horizon",
          description: "The dramatic skyline of a modern city",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=street+photography+urban+life",
          alt: "Street photography of urban life",
          width: 1200,
          height: 800,
          title: "Street Life",
          description: "The rhythm and flow of city streets",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=architecture+photography+modern+building",
          alt: "Modern architecture",
          width: 1200,
          height: 800,
          title: "Architectural Lines",
          description: "The bold geometry of modern design",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=night+photography+city+lights",
          alt: "City at night with lights",
          width: 1200,
          height: 800,
          title: "City Lights",
          description: "The urban landscape transformed by night",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=urban+decay+photography",
          alt: "Urban decay photography",
          width: 1200,
          height: 800,
          title: "Urban Patina",
          description: "Finding beauty in decay and transformation",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=subway+station+photography",
          alt: "Subway station",
          width: 1200,
          height: 800,
          title: "Underground",
          description: "Life beneath the city streets",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=urban+park+photography",
          alt: "Urban park",
          width: 1200,
          height: 800,
          title: "Urban Oasis",
          description: "Nature within the concrete jungle",
        },
      ],
    },
    events: {
      title: "Event Photography",
      description:
        "Documenting special moments and celebrations with an unobtrusive approach. From weddings to corporate events, these images capture the emotion and atmosphere of important occasions.",
      coverImage: "/placeholder.svg?height=800&width=1600&query=wedding+photography+ceremony",
      images: [
        {
          src: "/placeholder.svg?height=800&width=1200&query=wedding+photography+couple",
          alt: "Wedding couple portrait",
          width: 1200,
          height: 800,
          title: "Wedding Day",
          description: "Capturing love and commitment",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=concert+photography+performance",
          alt: "Concert performance",
          width: 1200,
          height: 800,
          title: "Stage Presence",
          description: "The energy of live music",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=corporate+event+photography",
          alt: "Corporate event",
          width: 1200,
          height: 800,
          title: "Professional Gathering",
          description: "Documenting business events",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=birthday+party+photography",
          alt: "Birthday celebration",
          width: 1200,
          height: 800,
          title: "Celebration",
          description: "The joy of milestone moments",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=sports+event+photography",
          alt: "Sports event",
          width: 1200,
          height: 800,
          title: "Athletic Achievement",
          description: "Capturing action and emotion in sports",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=graduation+ceremony+photography",
          alt: "Graduation ceremony",
          width: 1200,
          height: 800,
          title: "Academic Success",
          description: "Celebrating educational milestones",
        },
      ],
    },
    travel: {
      title: "Travel Photography",
      description:
        "Exploring diverse cultures and breathtaking destinations around the world. These images capture the essence of place, from iconic landmarks to hidden gems off the beaten path.",
      coverImage: "/placeholder.svg?height=800&width=1600&query=travel+destination+scenic+view",
      images: [
        {
          src: "/placeholder.svg?height=800&width=1200&query=travel+photography+venice+italy",
          alt: "Venice, Italy",
          width: 1200,
          height: 800,
          title: "Venetian Canals",
          description: "The timeless beauty of Venice",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=travel+photography+kyoto+japan",
          alt: "Kyoto, Japan",
          width: 1200,
          height: 800,
          title: "Japanese Traditions",
          description: "The cultural heritage of Kyoto",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=travel+photography+santorini+greece",
          alt: "Santorini, Greece",
          width: 1200,
          height: 800,
          title: "Aegean Blue",
          description: "The iconic white and blue of Santorini",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=travel+photography+new+york+city",
          alt: "New York City, USA",
          width: 1200,
          height: 800,
          title: "Urban Jungle",
          description: "The energy of the Big Apple",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=travel+photography+machu+picchu",
          alt: "Machu Picchu, Peru",
          width: 1200,
          height: 800,
          title: "Ancient Wonder",
          description: "The mystical ruins of Machu Picchu",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=travel+photography+marrakech+morocco",
          alt: "Marrakech, Morocco",
          width: 1200,
          height: 800,
          title: "Moroccan Patterns",
          description: "The vibrant colors and textures of Marrakech",
        },
      ],
    },
    abstract: {
      title: "Abstract Photography",
      description:
        "Exploring form, color, texture, and light through a creative lens. These images challenge perception and invite viewers to see the world in new and unexpected ways.",
      coverImage: "/placeholder.svg?height=800&width=1600&query=abstract+art+photography",
      images: [
        {
          src: "/placeholder.svg?height=800&width=1200&query=abstract+photography+light+patterns",
          alt: "Abstract light patterns",
          width: 1200,
          height: 800,
          title: "Light Waves",
          description: "Exploring the fluid nature of light",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=abstract+photography+macro+texture",
          alt: "Abstract macro texture",
          width: 1200,
          height: 800,
          title: "Micro Cosmos",
          description: "The hidden world of textures",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=abstract+photography+architecture+lines",
          alt: "Abstract architectural lines",
          width: 1200,
          height: 800,
          title: "Geometric Order",
          description: "Finding patterns in architectural spaces",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=abstract+photography+water+reflection",
          alt: "Abstract water reflection",
          width: 1200,
          height: 800,
          title: "Liquid Mirror",
          description: "Reality transformed through reflection",
        },
        {
          src: "/placeholder.svg?height=800&width=1200&query=abstract+photography+motion+blur",
          alt: "Abstract motion blur",
          width: 1200,
          height: 800,
          title: "Movement",
          description: "Capturing the essence of motion",
        },
      ],
    },
  }

  const project = projects[projectId as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/projects" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-8">{project.description}</p>
      </div>

      <div className="relative w-full h-[40vh] md:h-[60vh] rounded-none overflow-hidden mb-12">
        <Image
          src={project.coverImage || "/placeholder.svg"}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <ImageGallery images={project.images} />
    </main>
  )
}
