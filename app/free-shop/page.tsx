import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StickyFooter from "@/components/sticky-footer"
import { ShoppingCart, CreditCard, Shield, Star } from "lucide-react"

export default function FreeShopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <main className="flex-1 bg-gray-50">
        <div className="bg-black/90 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <ShoppingCart className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Tu Free Shop</h1>
            <p className="text-xl opacity-90">Premium E-commerce Experience</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CreditCard className="h-12 w-12 text-gray-800 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
              <p className="text-gray-600">
                Multiple secure payment options with advanced fraud protection and encryption.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-gray-800 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Buyer Protection</h3>
              <p className="text-gray-600">
                Comprehensive buyer protection program ensuring safe and secure transactions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Star className="h-12 w-12 text-gray-800 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premium Products</h3>
              <p className="text-gray-600">
                Curated selection of high-quality products from trusted sellers worldwide.
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
