import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StickyFooter from "@/components/sticky-footer"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />

      <main className="flex-1 bg-gray-50">
        <div className="bg-[#1d518d] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Calendar className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Events Calendar</h1>
            <p className="text-xl opacity-90">Upcoming Events & Conferences</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#1d518d]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Construction Industry Summit 2024</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Convention Center, Main Hall</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>500+ Attendees Expected</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="bg-[#1d518d] text-white px-6 py-2 rounded hover:bg-[#1d518d]/90">Register</button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Sustainable Agriculture Workshop</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>April 8, 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>2:00 PM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Alpes Agro Facility</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Limited to 50 Participants</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Register</button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">AI & Cryptocurrency Conference</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>May 20, 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Tech Hub Auditorium</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>300+ Tech Professionals</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Register</button>
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
