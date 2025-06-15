import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StickyFooter from "@/components/sticky-footer"
import { Leaf, Tractor, Sprout, Sun } from "lucide-react"

export default function AgroPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <main className="flex-1 bg-gray-50">
        <div className="bg-green-700/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Leaf className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Alpes Agro</h1>
            <p className="text-xl opacity-90">Agriculture & Farming Consulting Excellence</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Tractor className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Farm Management</h3>
              <p className="text-gray-600">
                Complete farm management solutions including crop planning and resource optimization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Sprout className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sustainable Agriculture</h3>
              <p className="text-gray-600">
                Eco-friendly farming practices and sustainable agriculture consulting services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Sun className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Climate Solutions</h3>
              <p className="text-gray-600">
                Climate-smart agriculture solutions to maximize yield and minimize environmental impact.
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
