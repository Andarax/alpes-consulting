import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StickyFooter from "@/components/sticky-footer"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <main className="flex-1 bg-gray-50">
        <div className="bg-[#1d518d] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Briefcase className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Next Projects</h1>
            <p className="text-xl opacity-90">Upcoming Developments & Initiatives</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
              <h3 className="text-xl font-semibold mb-3">Smart City Development</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Downtown District</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Q2 2024</span>
              </div>
              <p className="text-gray-600">
                Revolutionary smart city infrastructure project incorporating AI and IoT technologies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Agriculture Hub</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Rural Valley</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Q3 2024</span>
              </div>
              <p className="text-gray-600">
                Modern agricultural facility focused on sustainable farming practices and technology integration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
              <h3 className="text-xl font-semibold mb-3">Crypto Trading Platform</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Digital Platform</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Q1 2024</span>
              </div>
              <p className="text-gray-600">
                Next-generation cryptocurrency trading platform with advanced AI-powered analytics.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <StickyFooter />
    </div>
  )
}
