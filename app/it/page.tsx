import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StickyFooter from "@/components/sticky-footer"
import { Cpu, Brain, Bitcoin, Code } from "lucide-react"

export default function ITPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <main className="flex-1 bg-gray-50">
        <div className="bg-purple-700/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Cpu className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Alpes IT</h1>
            <p className="text-xl opacity-90">Artificial Intelligence & Cryptocurrency Solutions</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Development</h3>
              <p className="text-gray-600">
                Custom artificial intelligence solutions and machine learning implementations for businesses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Bitcoin className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Crypto Solutions</h3>
              <p className="text-gray-600">
                Blockchain development, cryptocurrency trading platforms, and digital asset management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Code className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Software Development</h3>
              <p className="text-gray-600">
                Full-stack development services with cutting-edge technologies and frameworks.
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
