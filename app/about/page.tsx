import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StickyFooter from "@/components/sticky-footer"
import { Users, Target, Award, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <main className="flex-1 bg-gray-50">
        <div className="bg-[#1d518d] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Users className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl opacity-90">Building the Future Across Industries</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-[#1d518d] flex-shrink-0 mt-1" />
                  <p className="text-gray-600 leading-relaxed">
                    To provide comprehensive, innovative solutions across construction, consulting, agriculture,
                    technology, and commerce sectors, driving sustainable growth and excellence for our clients and
                    communities.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <div className="flex items-start space-x-4">
                  <Globe className="h-8 w-8 text-[#1d518d] flex-shrink-0 mt-1" />
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading diversified business group, recognized globally for innovation, sustainability,
                    and transformative impact across all industries we serve.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-[#1d518d] mr-3" />
                <h2 className="text-3xl font-bold">Our Values</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-[#1d518d]">Excellence</h3>
                  <p className="text-gray-600">Delivering superior quality in every project and service we provide.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-[#1d518d]">Innovation</h3>
                  <p className="text-gray-600">Embracing cutting-edge technologies and creative solutions.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-[#1d518d]">Integrity</h3>
                  <p className="text-gray-600">
                    Maintaining the highest ethical standards in all our business practices.
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
