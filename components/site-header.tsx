"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavigationMenu } from "@/components/navigation-menu"

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">PhotoFolio</span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <NavigationMenu />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button asChild variant="default">
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 sm:max-w-xs">
              <div className="px-7">
                <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                  <span className="font-bold text-xl">PhotoFolio</span>
                </Link>
              </div>
              <div className="mt-8 px-7">
                <MobileNav onClose={() => setIsMenuOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col space-y-6">
      <Link href="/" className="text-lg font-medium transition-colors hover:text-foreground/80" onClick={onClose}>
        Home
      </Link>
      <Link
        href="/projects"
        className="text-lg font-medium transition-colors hover:text-foreground/80"
        onClick={onClose}
      >
        Projects
      </Link>
      <Link href="/about" className="text-lg font-medium transition-colors hover:text-foreground/80" onClick={onClose}>
        About
      </Link>
      <Link
        href="/contact"
        className="text-lg font-medium transition-colors hover:text-foreground/80"
        onClick={onClose}
      >
        Contact
      </Link>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </div>
  )
}
