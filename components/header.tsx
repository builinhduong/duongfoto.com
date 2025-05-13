"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Category } from "@/lib/categories"

type HeaderProps = {
  categories: Category[];
}

export function Header({ categories }: HeaderProps) {
  const pathname = usePathname()

  // If no categories are found, display a minimal header
  if (!categories || categories.length === 0) {
    return (
      <header className="py-12 bg-[#f5f5f5]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Link href="/" className="text-xl md:text-2xl tracking-wide text-black">
              DUONGFOTO
            </Link>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="py-12 bg-[#f5f5f5]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <nav className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-24">
            {categories.map((category) => {
              const isActive =
                pathname === `/${category.id}` || (pathname.startsWith(`/${category.id}/`) && category.id !== "contact")

              return (
                <Link
                  key={category.id}
                  href={`/${category.id}`}
                  className={cn(
                    "text-xl md:text-2xl tracking-wide transition-colors hover:text-black",
                    isActive ? "text-black" : "text-gray-400",
                  )}
                >
                  {category.title}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className={cn(
                "text-xl md:text-2xl tracking-wide transition-colors hover:text-black",
                pathname === "/contact" ? "text-black" : "text-gray-400",
              )}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
