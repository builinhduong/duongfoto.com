import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16 mb-24">
          <h1 className="text-4xl font-bold mb-16 tracking-tight">ABOUT ME</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="aspect-[3/4] relative">
              <Image src="/images/photographer.png" alt="Photographer portrait" fill className="object-cover" />
            </div>

            <div className="space-y-6">
              <p className="text-lg">I'm a photographer specializing in capturing authentic moments and emotions.</p>
              <p className="text-lg">
                With a minimalist approach, I focus on the essence of each subject, creating timeless images that tell
                stories.
              </p>
              <p className="text-lg">Based in Vietnam, available for bookings worldwide.</p>

              <div className="pt-6 border-t border-gray-100">
                <h2 className="text-xl font-medium mb-4">Contact</h2>
                <p className="mb-2">Email: contact@duongfoto.com</p>
                <p className="mb-2">Phone: +84 123 456 789</p>
                <p>Instagram: @duongfoto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
