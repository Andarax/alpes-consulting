import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StickyFooter from "@/components/sticky-footer"
import { Building, Star } from "lucide-react"

export default function ClientsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <main className="flex-1 bg-gray-50">
        <div className="bg-[#1d518d] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Building className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Our Clients</h1>
            <p className="text-xl opacity-90">Trusted by Industry Leaders</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-gray-200 rounded mx-auto mb-4"></div>
                <h3 className="font-semibold">Client Company {i}</h3>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-8">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-[#1d518d] pl-6">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Alpes Group delivered exceptional results on our construction project. Their professionalism and
                  expertise are unmatched."
                </p>
                <p className="font-semibold">- CEO, Construction Corp</p>
              </div>
              <div className="border-l-4 border-[#1d518d] pl-6">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Their IT solutions transformed our business operations. Highly recommend Alpes IT for any technology
                  needs."
                </p>
                <p className="font-semibold">- CTO, Tech Solutions Inc</p>
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
