import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { getCategories } from "@/lib/categories"

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] })

export const metadata: Metadata = {
  title: "DUONGFOTO | Photography Portfolio",
  description: "Minimalist photography portfolio showcasing premium photography work",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Lấy dữ liệu categories từ server
  const categories = getCategories()
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-[#f5f5f5]`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header categories={categories} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
