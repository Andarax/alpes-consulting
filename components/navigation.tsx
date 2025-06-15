import { Button } from "@/components/ui/button"
import { Calculator, Leaf, Beer, ShoppingCart, Cpu, Shield } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const branches = [
    {
      name: "Alpes Consulting",
      description: "Financial Consulting",
      color: "bg-blue-700/80 hover:bg-blue-800/80",
      icon: Calculator,
      href: "/consulting",
    },
    {
      name: "Alpes Agro",
      description: "Agriculture & Farming",
      color: "bg-green-700/80 hover:bg-green-800/80",
      icon: Leaf,
      href: "/agro",
    },
    {
      name: "Yellow Beer",
      description: "Import-Export E-commerce",
      color: "bg-yellow-600/80 hover:bg-yellow-700/80",
      icon: Beer,
      href: "/yellow-beer",
    },
    {
      name: "Two Free Shop",
      description: "E-commerce Store",
      color: "bg-orange-700/80 hover:bg-orange-800/80",
      icon: ShoppingCart,
      href: "/free-shop",
    },
    {
      name: "Alpes IT",
      description: "AI & Cryptocurrencies",
      color: "bg-purple-700/80 hover:bg-purple-800/80",
      icon: Cpu,
      href: "/it",
    },
    {
      name: "Alpes Securities",
      description: "Insurance Services",
      color: "bg-red-700/80 hover:bg-red-800/80",
      icon: Shield,
      href: "/securities",
    },
  ]

  return (
    <nav className="bg-gray-100 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          {branches.map((branch) => {
            const IconComponent = branch.icon
            return (
              <Link key={branch.name} href={branch.href}>
                <Button
                  variant="default"
                  className={`w-full h-auto p-4 flex flex-col items-center space-y-2 text-white ${branch.color} transition-all duration-200 hover:scale-105`}
                >
                  <IconComponent className="h-6 w-6" />
                  <div className="text-center">
                    <div className="font-semibold text-sm">{branch.name}</div>
                    <div className="text-xs opacity-90">{branch.description}</div>
                  </div>
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
