import { Card, CardContent } from './ui/card'
import { 
  Users, 
  TrendingUp, 
  Globe, 
  Package,
  Shield,
  Heart,
  DollarSign,
  MapPin
} from 'lucide-react'

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "40M+",
    label: "Artisans in India",
    description: "Handloom, handicraft, and craft workers",
    color: "text-emerald-600"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: "70%",
    label: "Higher Potential Income",
    description: "With direct market access",
    color: "text-amber-600"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    value: "10+",
    label: "Languages Supported",
    description: "Regional language interfaces",
    color: "text-blue-600"
  },
  {
    icon: <Package className="h-8 w-8" />,
    value: "60%",
    label: "Lower Logistics Cost",
    description: "Through collection centers",
    color: "text-purple-600"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    value: "0%",
    label: "Middlemen Commission",
    description: "Direct artisan payment",
    color: "text-red-600"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    value: "75%",
    label: "Women Artisans",
    description: "Home-based craft producers",
    color: "text-pink-600"
  }
]

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Scale of Opportunity
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            India's artisan economy represents a massive opportunity for 
            sustainable development and cultural preservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gray-100`}>
                    <div className={stat.color}>{stat.icon}</div>
                  </div>
                  
                  <div>
                    <div className="flex items-baseline mb-1">
                      <div className={`text-3xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Size Visualization */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            India's Artisan Market Potential
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <span className="h-12 w-12 mx-auto mb-4 flex items-center justify-center text-emerald-200 text-6xl">
                ₹
              </span>
              <div className="text-3xl font-bold mb-2">₹15,000 Cr+</div>
              <p className="text-emerald-100">Annual Market Size</p>
              <p className="text-sm text-emerald-200 mt-2">Handicrafts & Handloom</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-emerald-200" />
              <div className="text-3xl font-bold mb-2">5000+</div>
              <p className="text-emerald-100">Craft Clusters</p>
              <p className="text-sm text-emerald-200 mt-2">Across India</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <Globe className="h-12 w-12 mx-auto mb-4 text-emerald-200" />
              <div className="text-3xl font-bold mb-2">200+</div>
              <p className="text-emerald-100">Countries</p>
              <p className="text-sm text-emerald-200 mt-2">Export Destination</p>
            </div>
          </div>
        </div>

        {/* Current Reality */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            The Current vs Potential Reality
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-red-600 mb-4">
                Current Reality
              </h4>
              <div className="space-y-4">
                {[
                  "Artisans earn only 20-30% of product value",
                  "Limited to local markets",
                  "Dependent on middlemen",
                  "No digital access or skills",
                  "Youth abandoning traditional crafts"
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-emerald-600 mb-4">
                Potential with Our Platform
              </h4>
              <div className="space-y-4">
                {[
                  "Artisans earn 70-80% of product value",
                  "Access to national & global markets",
                  "Direct connection with buyers",
                  "Digital empowerment with assistance",
                  "Youth see crafts as viable career"
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600 italic">
                "The numbers tell a story of untapped potential and 
                opportunity waiting to be realized."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}