import { Card, CardContent } from './ui/card'
import { AlertTriangle, DollarSign, Globe, Truck, Users, X } from 'lucide-react'

const problems = [
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Exploitative Middlemen System",
    description: "Artisan → Middleman → Wholesaler → Online Seller → Customer",
    details: "Profit ka bada hissa artisan ko nahi milta. Up to 70% of final price goes to intermediaries.",
    impact: "Artisans earn less than 30% of product value"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Digital & Language Barriers",
    description: "English apps, complicated forms, online payments ka dar",
    details: "Most artisans are not comfortable with digital platforms or English interfaces.",
    impact: "Limited access to national and global markets"
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Logistics Challenges",
    description: "Courier ka system nahi, high shipping cost, damage aur returns ka risk",
    details: "Individual shipping is expensive and complex for rural artisans.",
    impact: "60% higher logistics costs for rural artisans"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Women & Home-Based Artisans",
    description: "Bahar jaa ke bechna mushkil, family responsibilities, safety issues",
    details: "Women artisans face mobility and social constraints.",
    impact: "75% of women artisans sell only in local markets"
  },
  {
    icon: <AlertTriangle className="h-8 w-8" />,
    title: "Cultural Erosion",
    description: "Traditional knowledge slowly disappears with each generation",
    details: "Youth are moving away from crafts due to economic pressures.",
    impact: "Over 50 traditional crafts at risk of extinction"
  },
  {
    icon: <X className="h-8 w-8" />,
    title: "Platform Exploitation",
    description: "High commissions on existing e-commerce platforms",
    details: "15-30% commissions + hidden charges make crafts uncompetitive.",
    impact: "Artisans lose 40-60% of earnings to platform fees"
  }
]

export default function Problem() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-semibold">The Problem We Are Solving</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Despite their skills, most tribal artisans struggle to sell beyond local markets
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            India's artisans create timeless art — but the market never reaches them directly.
            They face multiple barriers that prevent fair compensation and market access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="border-red-200 hover:border-red-300 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <div className="text-red-600">{problem.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 mb-3 font-medium">
                      {problem.description}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      {problem.details}
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-500 px-3 py-2">
                      <span className="text-sm font-semibold text-red-700">
                        Impact: {problem.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Problem Summary */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                As a result:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <X className="h-5 w-5 mr-3 text-red-200" />
                  <span>Artisans earn significantly less than their craft's value</span>
                </li>
                <li className="flex items-center">
                  <X className="h-5 w-5 mr-3 text-red-200" />
                  <span>Traditional crafts lose economic and cultural value</span>
                </li>
                <li className="flex items-center">
                  <X className="h-5 w-5 mr-3 text-red-200" />
                  <span>Young generations abandon ancestral crafts</span>
                </li>
                <li className="flex items-center">
                  <X className="h-5 w-5 mr-3 text-red-200" />
                  <span>Migration from rural to urban areas increases</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-center">
                The Current Reality
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Artisan's Share</span>
                    <span className="font-bold">20-30%</span>
                  </div>
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full bg-red-300 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Middlemen's Share</span>
                    <span className="font-bold">50-60%</span>
                  </div>
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-300 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Platform/Logistics</span>
                    <span className="font-bold">15-25%</span>
                  </div>
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-300 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-center mt-4 text-white/80">
                Only a small fraction reaches the actual creator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}