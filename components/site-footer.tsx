import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col md:flex-row py-10 gap-8">
        <div className="md:w-1/3">
          <Link href="/" className="font-bold text-xl mb-4 block">
            PhotoFolio
          </Link>
          <p className="text-muted-foreground mb-4">
            Professional photography portfolio showcasing a diverse range of projects from landscapes to portraits.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
          <div>
            <h3 className="font-medium mb-4">Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects/nature" className="text-muted-foreground hover:text-foreground">
                  Nature
                </Link>
              </li>
              <li>
                <Link href="/projects/portraits" className="text-muted-foreground hover:text-foreground">
                  Portraits
                </Link>
              </li>
              <li>
                <Link href="/projects/urban" className="text-muted-foreground hover:text-foreground">
                  Urban
                </Link>
              </li>
              <li>
                <Link href="/projects/events" className="text-muted-foreground hover:text-foreground">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/license" className="text-muted-foreground hover:text-foreground">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} PhotoFolio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
