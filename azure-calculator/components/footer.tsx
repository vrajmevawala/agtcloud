import Link from "next/link"
import { MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#121a2f] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/placeholder.svg?height=60&width=180" alt="AccessGlobal Logo" className="h-12 mb-4" />
            <div className="flex items-start space-x-2 mt-6">
              <MapPin className="h-5 w-5 text-[#d32f2f] mt-1" />
              <p>Dr. Jamasji Building, opp. Parsi Agiyari, Surat, Gujarat 395003</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-[#d32f2f] pb-2">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#d32f2f]">
                  Tally Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d32f2f]">
                  Azure Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d32f2f]">
                  Microsoft 365
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d32f2f]">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-[#d32f2f] pb-2">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#d32f2f]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d32f2f]">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d32f2f]">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d32f2f]">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#0a1022] py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">© {new Date().getFullYear()} AccessGlobal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
