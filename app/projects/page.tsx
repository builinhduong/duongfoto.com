import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
  const allProjects = [
    {
      id: "nature",
      title: "Nature",
      description: "Breathtaking landscapes and wildlife photography",
      thumbnail: "/serene-mountain-lake.png",
      count: 12,
      categories: ["Landscapes", "Wildlife", "Macro"],
    },
    {
      id: "portraits",
      title: "Portraits",
      description: "Capturing personality and emotion in every face",
      thumbnail: "/professional-portrait.png",
      count: 8,
      categories: ["Studio", "Environmental", "Black & White"],
    },
    {
      id: "urban",
      title: "Urban",
      description: "City life and architecture from around the world",
      thumbnail: "/placeholder.svg?key=zegq4",
      count: 10,
      categories: ["Architecture", "Street", "Night"],
    },
    {
      id: "events",
      title: "Events",
      description: "Weddings, concerts, and special moments",
      thumbnail: "/event-photography.png",
      count: 15,
      categories: ["Weddings", "Concerts", "Corporate"],
    },
    {
      id: "travel",
      title: "Travel",
      description: "Exploring cultures and destinations worldwide",
      thumbnail: "/travel-photography-collection.png",
      count: 18,
      categories: ["Destinations", "Cultural", "Adventure"],
    },
    {
      id: "abstract",
      title: "Abstract",
      description: "Creative and conceptual photography",
      thumbnail: "/placeholder.svg?key=o50lt",
      count: 7,
      categories: ["Conceptual", "Experimental", "Minimalist"],
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Photography Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Browse through my complete collection of photography projects, organized by theme and style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group block overflow-hidden rounded-none transition-all hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            </div>
            <div className="p-6 bg-card">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.categories.map((category) => (
                  <span key={category} className="px-3 py-1 bg-muted text-sm">
                    {category}
                  </span>
                ))}
              </div>
              <p className="text-sm">{project.count} photos</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
