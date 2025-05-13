"use client"

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

// Dữ liệu tĩnh cho các danh mục
const categoriesData = [
  {
    id: "love",
    title: "LOVE",
    description: "Capturing authentic moments of connection, emotion, and celebration between couples",
    thumbnailSrc: "/images/wedding-1.jpg"
  },
  {
    id: "fashion",
    title: "FASHION",
    description: "Elevating style through artistic photography that captures the essence of fashion design",
    thumbnailSrc: "/images/fashion-1.jpg"
  },
  {
    id: "portrait",
    title: "PORTRAIT",
    description: "Capturing genuine emotions and personalities through thoughtful portrait photography",
    thumbnailSrc: "/images/portrait-1.jpg"
  },
  {
    id: "hmmm",
    title: "Hmm...",
    description: "Experimental photography that challenges conventions and explores the boundaries of visual art",
    thumbnailSrc: "/images/abstract-1.jpg"
  }
];
import HomeClient from "@/components/HomeClient"
import { getCategories } from "@/lib/categories"

export default function Home() {
  const categories = getCategories()
  
  return <HomeClient categories={categories} />
}
