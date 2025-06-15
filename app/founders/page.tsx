import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StickyFooter from "@/components/sticky-footer"
import { UserCheck } from "lucide-react"

export default function FoundersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <main className="flex-1 bg-gray-50">
        <div className="bg-[#1d518d] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <UserCheck className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Founders & Partners</h1>
            <p className="text-xl opacity-90">Meet Our Leadership Team</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">John Alpes</h3>
              <p className="text-[#1d518d] font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600">Visionary leader with 30+ years in construction and business development.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Maria Rodriguez</h3>
              <p className="text-[#1d518d] font-medium mb-3">Co-Founder & CTO</p>
              <p className="text-gray-600">Technology expert specializing in AI and digital transformation.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Carlos Martinez</h3>
              <p className="text-[#1d518d] font-medium mb-3">Managing Partner</p>
              <p className="text-gray-600">Financial strategist with expertise in international business operations.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <StickyFooter />
    </div>
  )
}
