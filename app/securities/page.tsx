import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StickyFooter from "@/components/sticky-footer"
import { Shield, Car, Home, Heart } from "lucide-react"

export default function SecuritiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <main className="flex-1 bg-gray-50">
        <div className="bg-red-700/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Alpes Securities</h1>
            <p className="text-xl opacity-90">Comprehensive Insurance Services</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Car className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Auto Insurance</h3>
              <p className="text-gray-600">
                Comprehensive vehicle insurance coverage with competitive rates and excellent service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Home className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Property Insurance</h3>
              <p className="text-gray-600">
                Complete property protection for homes, businesses, and commercial real estate.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Life & Health</h3>
              <p className="text-gray-600">
                Life and health insurance plans tailored to protect you and your family's future.
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
