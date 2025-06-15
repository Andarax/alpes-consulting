import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StickyFooter from "@/components/sticky-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      {/* Main content area - placeholder for now */}
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Alpes Construction Group</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diversified business group offering comprehensive solutions across construction, consulting,
              agriculture, technology, and commerce sectors.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <StickyFooter />
    </div>
  )
}
