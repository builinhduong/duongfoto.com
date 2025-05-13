import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

export function SocialIcons() {
  return (
    <div className="flex items-center space-x-8">
      <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Facebook className="h-5 w-5 text-gray-400 hover:text-black transition-colors" />
      </Link>
      <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Instagram className="h-5 w-5 text-gray-400 hover:text-black transition-colors" />
      </Link>
      <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400 hover:text-black transition-colors"
        >
          <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
          <path d="M15 8a4 4 0 0 0 0 8" />
          <path d="M15 8a4 4 0 0 1 4 4V4" />
          <line x1="15" y1="12" x2="15" y2="12" />
        </svg>
      </Link>
      <Link href="mailto:contact@duongfoto.com" aria-label="Email">
        <Mail className="h-5 w-5 text-gray-400 hover:text-black transition-colors" />
      </Link>
    </div>
  )
}
