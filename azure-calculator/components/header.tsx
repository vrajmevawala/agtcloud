import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 border-b">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-[#d32f2f]" />
              <span className="text-sm">darshan@agtglobal.in</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#d32f2f]" />
              <span className="text-sm">0261-3117799</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-[#d32f2f]">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#d32f2f]">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#d32f2f]">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#d32f2f]">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="mr-8">
              <img src="/placeholder.svg?height=60&width=180" alt="AccessGlobal Logo" className="h-10" />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 py-2">
                  <span>Products</span>
                </button>
              </div>
              <Link href="#" className="py-2">
                Resources
              </Link>
              <Link href="#" className="py-2">
                About Us
              </Link>
              <Link href="#" className="py-2">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="link" className="text-[#d32f2f]">
              Login
            </Button>
            <Button className="bg-[#d32f2f] hover:bg-[#b71c1c]">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
