import Image from "next/image"
import Link from "next/link"

export default function CommercialPage() {
  const projects = [
    {
      id: "brand-campaign-2025",
      title: "Brand Campaign 2025",
      year: "2025",
      coverImage: "/images/commercial-1.jpg",
    },
    {
      id: "product-series",
      title: "Product Series",
      year: "2025",
      coverImage: "/images/commercial-2.jpg",
    },
    {
      id: "lifestyle-collection",
      title: "Lifestyle Collection",
      year: "2025",
      coverImage: "/images/commercial-3.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-8 pb-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <Link key={project.id} href={`/commercial/${project.id}`} className="group">
              <div className="aspect-[3/4] relative mb-4 overflow-hidden">
                <Image
                  src={project.coverImage || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-normal mb-1">{project.title}</h2>
                <p className="text-sm text-gray-400">{project.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
