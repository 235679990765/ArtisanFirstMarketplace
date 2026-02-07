import { Card, CardContent } from '../ui/card'
import { 
  Target,
  Shield,
  Zap,
  Heart,
  Globe,
  Users
} from 'lucide-react'

const valueProps = [
  {
    icon: <Target className="h-10 w-10" />,
    title: "Artisan-First Design",
    description: "Built for artisans with limited digital access",
    points: [
      "No smartphone required",
      "Local language support",
      "Field coordinator assistance"
    ],
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Transparent & Fair",
    description: "Complete pricing transparency",
    points: [
      "5-10% platform fee only",
      "No hidden charges",
      "Real-time payment tracking"
    ],
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Hybrid Model",
    description: "Digital platform + offline support",
    points: [
      "Collection center network",
      "Quality assurance",
      "Bulk shipping optimization"
    ],
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Community-Led",
    description: "Owned and shaped by artisan communities",
    points: [
      "SHG partnerships",
      "Local employment creation",
      "Community decision-making"
    ],
    color: "from-purple-500 to-pink-500"
  }
]

const competitiveAdvantages = [
  {
    aspect: "Commission",
    competitors: "15-30% + hidden fees",
    artisanMarket: "5-10% transparent fee",
    difference: "Artisans earn 40-60% more"
  },
  {
    aspect: "Digital Access",
    competitors: "Smartphone & English required",
    artisanMarket: "No digital skills needed",
    difference: "Accessible to all artisans"
  },
  {
    aspect: "Logistics",
    competitors: "Individual shipping, high cost",
    artisanMarket: "Collection centers, 60% cheaper",
    difference: "Lower prices, faster delivery"
  },
  {
    aspect: "Support",
    competitors: "Automated, no human help",
    artisanMarket: "Local coordinators, multi-language",
    difference: "Personalized assistance"
  }
]

export default function ValueProposition() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4">
            <Globe className="h-5 w-5" />
            <span className="font-semibold">Our Value Proposition</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why We're Different
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unlike existing platforms, we're designed from the ground up for 
            India's artisan reality—not adapted from urban e-commerce models.
          </p>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {valueProps.map((prop, index) => (
            <Card 
              key={index}
              className="border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${prop.color} rounded-xl flex items-center justify-center mb-4`}>
                    <div className="text-white">{prop.icon}</div>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {prop.description}
                  </p>
                  
                  {/* Points */}
                  <ul className="space-y-2 mt-auto">
                    {prop.points.map((point, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competitive Comparison */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            How We Compare to Other Platforms
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-gray-700 font-semibold">Aspect</th>
                  <th className="text-left py-4 px-6 text-red-600 font-semibold">Other Platforms</th>
                  <th className="text-left py-4 px-6 text-emerald-600 font-semibold">ArtisanMarket</th>
                  <th className="text-left py-4 px-6 text-amber-600 font-semibold">Difference</th>
                </tr>
              </thead>
              <tbody>
                {competitiveAdvantages.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-100 hover:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
                  >
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {item.aspect}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">{item.competitors}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">{item.artisanMarket}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="inline-flex items-center bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
                        <Users className="h-3 w-3 mr-1" />
                        {item.difference}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Our Guiding Philosophy
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg mt-1">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-200">Technology Should Serve Artisans</h4>
                    <p className="text-emerald-100">Not exploit them through complex systems</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg mt-1">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-200">Every Transaction Should Empower</h4>
                    <p className="text-emerald-100">Not just transfer goods for profit</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg mt-1">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-200">Culture is an Asset to Preserve</h4>
                    <p className="text-emerald-100">Not a commodity to exploit</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-center">
                Simple Promise
              </h4>
              <p className="text-center text-lg italic mb-4">
                "Yeh platform artisans ko bheek nahi, business ka mauka deta hai."
              </p>
              <p className="text-emerald-100 text-center">
                (This platform gives artisans business opportunities, not charity)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}