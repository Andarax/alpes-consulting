import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StickyFooter from "@/components/sticky-footer"
import { History, Calendar, Award, Building } from "lucide-react"

export default function HistoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <main className="flex-1 bg-gray-50">
        <div className="bg-[#1d518d] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <History className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Alpes's History</h1>
            <p className="text-xl opacity-90">Our Journey Through Time</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1d518d] rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">1995 - Foundation</h3>
                  <p className="text-gray-600">
                    Alpes Construction Group was founded with a vision to provide comprehensive construction and
                    business solutions across multiple industries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1d518d] rounded-full flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">2005 - Expansion</h3>
                  <p className="text-gray-600">
                    Expanded operations to include consulting services, agriculture solutions, and technology
                    development, establishing our diverse business portfolio.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1d518d] rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">2020 - Innovation</h3>
                  <p className="text-gray-600">
                    Launched our AI and cryptocurrency division, positioning Alpes at the forefront of technological
                    innovation in the construction and business sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <StickyFooter />
    </div>
  )
}
