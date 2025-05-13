"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { SocialIcons } from "@/components/social-icons"
import { Spotlight } from "@/components/ui/spotlight"
import { TextReveal } from "@/components/ui/text-reveal"
import { MovingBorder } from "@/components/ui/moving-border"
import { AnimatedGradient } from "@/components/ui/animated-gradient"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"
import { Category } from "@/lib/categories"

type HomeClientProps = {
  categories: Category[];
}

export default function HomeClient({ categories }: HomeClientProps) {
  // Featured images for parallax effect
  const featuredImages = [
    "/images/portrait-1.jpg",
    "/images/wedding-1.jpg",
    "/images/fashion-1.jpg",
    "/images/hmmm-1.jpg",
    "/images/portrait-2.jpg",
    "/images/wedding-2.jpg",
    "/images/fashion-2.jpg",
    "/images/hmmm-2.jpg",
    "/images/portrait-3.jpg",
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <AnimatedGradient
        className="w-full"
        containerClassName="min-h-screen"
        colors={["rgba(142, 202, 230, 0.2)", "rgba(33, 158, 188, 0.1)", "rgba(2, 48, 71, 0.05)"]}
        blur={120}
      >
        <Spotlight className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24" strength={0.2}>
          <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <TextReveal text="DUONGFOTO" className="text-5xl md:text-7xl font-bold mb-6" delay={0.2} />

              <TextReveal
                text="Capturing moments, preserving memories"
                className="text-xl text-gray-600 max-w-md mx-auto"
                delay={0.8}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="mt-8"
              >
                <Image
                  src="/images/portrait-detail-1.jpg"
                  alt="Featured photography"
                  width={300}
                  height={400}
                  className="mx-auto rounded-lg shadow-lg"
                  priority
                />
              </motion.div>
            </motion.div>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((category: Category) => (
                  <Link
                    key={category.id}
                    href={`/${category.id}`}
                    className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                  >
                    <Image
                      src={category.thumbnailSrc}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                      <h2 className="text-white text-3xl font-bold">{category.title}</h2>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                        <p className="text-lg">{category.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <SocialIcons />
          </div>
        </Spotlight>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <TextReveal text="Featured Work" className="text-3xl md:text-4xl font-bold mb-4" />
            <TextReveal text="A glimpse into our photographic journey" className="text-gray-600" delay={0.4} />
          </div>

          <ParallaxScroll
            images={featuredImages}
            imageClassName="grayscale hover:grayscale-0 transition-all duration-500"
          />

          <div className="mt-24 text-center">
            <MovingBorder>
              <Link
                href="/contact"
                className="inline-block text-lg font-medium py-4 px-8 bg-black text-white hover:bg-gray-800 transition-colors rounded-lg"
              >
                Get in Touch
              </Link>
            </MovingBorder>
          </div>
        </div>
      </AnimatedGradient>
    </main>
  )
} 