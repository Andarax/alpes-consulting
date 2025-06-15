import { Button } from "@/components/ui/button"
import { Phone, Users, History, UserCheck, Building, Calendar, Briefcase } from "lucide-react"
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

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link
            href="/history"
            className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors"
          >
            <History className="h-4 w-4" />
            <span>Alpes's History</span>
          </Link>
          <Link
            href="/founders"
            className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors"
          >
            <UserCheck className="h-4 w-4" />
            <span>Founders, Partners</span>
          </Link>
          <Link
            href="/clients"
            className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors"
          >
            <Building className="h-4 w-4" />
            <span>Clients</span>
          </Link>
          <Link
            href="/projects"
            className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors"
          >
            <Briefcase className="h-4 w-4" />
            <span>Next Projects</span>
          </Link>
          <Link href="/events" className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors">
            <Calendar className="h-4 w-4" />
            <span>Events Calendar</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors">
            <Users className="h-4 w-4" />
            <span>About Us</span>
          </Link>
        </nav>

        {/* Contact Button */}
        <Button className="flex items-center space-x-1 bg-black text-white hover:bg-gray-800">
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Contact</span>
        </Button>
      </div>
    </header>
  )
}
