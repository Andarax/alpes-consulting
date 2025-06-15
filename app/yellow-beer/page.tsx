import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StickyFooter from "@/components/sticky-footer"
import { Beer, Globe, Truck, Package } from "lucide-react"

export default function YellowBeerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <main className="flex-1 bg-gray-50">
        <div className="bg-yellow-600/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Beer className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Yellow Bear</h1>
            <p className="text-xl opacity-90">Import-Export E-commerce Platform</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Trading</h3>
              <p className="text-gray-600">
                International trade solutions connecting businesses worldwide with quality products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Truck className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Logistics Management</h3>
              <p className="text-gray-600">
                End-to-end logistics and supply chain management for seamless international trade.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Package className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quote Platform</h3>
              <p className="text-gray-600">
                Advanced e-commerce platform for instant quotes and streamlined ordering processes.
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
