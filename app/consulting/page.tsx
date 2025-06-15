import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StickyFooter from "@/components/sticky-footer"
import { Calculator, TrendingUp, PieChart, BarChart3 } from "lucide-react"

export default function ConsultingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <main className="flex-1 bg-gray-50">
        <div className="bg-blue-700/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Calculator className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Alpes Consulting</h1>
            <p className="text-xl opacity-90">Professional Financial Consulting Services</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Financial Planning</h3>
              <p className="text-gray-600">
                Strategic financial planning and investment advisory services for businesses and individuals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <PieChart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
              <p className="text-gray-600">
                Comprehensive risk assessment and management solutions to protect your investments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
              <p className="text-gray-600">In-depth market research and analysis to guide your business decisions.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <StickyFooter />
    </div>
  )
}
