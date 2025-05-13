"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Info } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  title?: string
  description?: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showInfo, setShowInfo] = useState(false)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setShowInfo(false)
  }

  const goToPrevious = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage - 1 + images.length) % images.length)
    setShowInfo(false)
  }

  const goToNext = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage + 1) % images.length)
    setShowInfo(false)
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious()
    } else if (e.key === "ArrowRight") {
      goToNext()
    } else if (e.key === "Escape") {
      closeLightbox()
    } else if (e.key === "i") {
      toggleInfo()
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[3/2] overflow-hidden rounded-none cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white font-medium">{image.title}</h3>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none rounded-none"
          onKeyDown={handleKeyDown}
        >
          <div className="relative flex items-center justify-center w-full h-full">
            {selectedImage !== null && (
              <>
                <div className="relative max-w-full max-h-[85vh] overflow-hidden">
                  <Image
                    src={images[selectedImage].src || "/placeholder.svg"}
                    alt={images[selectedImage].alt}
                    width={1200}
                    height={800}
                    className="object-contain max-h-[85vh]"
                  />

                  {showInfo && images[selectedImage].title && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white">
                      <h3 className="text-xl font-medium mb-1">{images[selectedImage].title}</h3>
                      {images[selectedImage].description && <p>{images[selectedImage].description}</p>}
                    </div>
                  )}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 rounded-none bg-black/40 text-white hover:bg-black/60"
                  onClick={closeLightbox}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-none bg-black/40 text-white hover:bg-black/60"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous</span>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-none bg-black/40 text-white hover:bg-black/60"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next</span>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "absolute bottom-4 right-4 rounded-none bg-black/40 text-white hover:bg-black/60",
                    showInfo && "bg-white/20 text-white",
                  )}
                  onClick={toggleInfo}
                >
                  <Info className="h-5 w-5" />
                  <span className="sr-only">Image Information</span>
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
