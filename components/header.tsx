import { Button } from "@/components/ui/button"
import { Phone, Users } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-[#1d518d] shadow-sm border-b">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-white/20 rounded border border-white/30"></div>
          <span className="text-2xl font-bold text-white">ALPES</span>
        </Link>

        {/* Right side navigation */}
        <div className="flex items-center space-x-4">
          <Link href="/about" className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">About Us</span>
          </Link>

          <Button className="flex items-center space-x-1 bg-black text-white hover:bg-gray-800">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
