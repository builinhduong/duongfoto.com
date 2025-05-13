import { ProjectFocusCards } from "@/components/project-focus-cards"

export default function WeddingPage() {
  const projects = [
    {
      id: "mai-and-tuan-2025",
      title: "Mai & Tuan 2025",
      year: "2025",
      coverImage: "/images/wedding-1.jpg",
    },
    {
      id: "linh-and-minh",
      title: "Linh & Minh",
      year: "2025",
      coverImage: "/images/wedding-2.jpg",
    },
    {
      id: "thu-and-hai",
      title: "Thu & Hai",
      year: "2025",
      coverImage: "/images/wedding-3.jpg",
    },
    {
      id: "hong-and-nam",
      title: "Hong & Nam",
      year: "2024",
      coverImage: "/images/wedding-4.jpg",
    },
    {
      id: "lan-and-vinh",
      title: "Lan & Vinh",
      year: "2024",
      coverImage: "/images/wedding-5.jpg",
    },
    {
      id: "huong-and-duc",
      title: "Huong & Duc",
      year: "2024",
      coverImage: "/images/wedding-6.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-12 pb-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-16 tracking-tight text-center">WEDDING</h1>
        <ProjectFocusCards projects={projects} category="wedding" />
      </div>
    </main>
  )
}
