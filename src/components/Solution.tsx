import { Card, CardContent } from './ui/card'
import { 
  Users, 
  Globe, 
  Package, 
  School, 
  Shield,
  Truck,
  Zap,
  Target
} from 'lucide-react'

const solutions = [
  {
    icon: <Users className="h-10 w-10" />,
    title: "Direct-to-Consumer Selling",
    description: "Artisans list and sell products without intermediaries",
    features: [
      "Zero middlemen commissions",
      "Artisans set their own prices",
      "Direct buyer-artisan connection"
    ],
    impact: "Artisans earn 50-70% more"
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Multilingual & Simple Interface",
    description: "Designed for first-time digital users",
    features: [
      "10+ Indian language support",
      "Voice-based navigation (future)",
      "Simplified product listing"
    ],
    impact: "Accessible to 100M+ artisans"
  },
  {
    icon: <Truck className="h-10 w-10" />,
    title: "Collection & Aggregation Centers",
    description: "Local centers reduce logistics cost and complexity",
    features: [
      "Panchayat/SHG office hubs",
      "Quality check & packaging",
      "Bulk shipping at 40% lower cost"
    ],
    impact: "60% lower logistics cost"
  },
  {
    icon: <School className="h-10 w-10" />,
    title: "Assisted Onboarding & Training",
    description: "Support for artisans with limited digital access",
    features: [
      "Field coordinators assistance",
      "WhatsApp-based updates",
      "Regular training sessions"
    ],
    impact: "Zero digital skills required"
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Transparent & Fair Model",
    description: "Clear pricing, low commission, no hidden charges",
    features: [
      "5-10% platform fee only",
      "Real-time payment tracking",
      "No listing or hidden fees"
    ],
    impact: "Complete pricing transparency"
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Hybrid Digital-Offline Model",
    description: "Blends simple technology with strong offline support",
    features: [
      "Online marketplace + local support",
      "Offline order management",
      "SMS/voice order updates"
    ],
    impact: "Bridges digital divide"
  }
]

export default function Solution() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <Target className="h-5 w-5" />
            <span className="font-semibold">Our Solution</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            A Tribal-Focused Marketplace That Puts Artisans First
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're creating a platform that blends simple technology with strong offline 
            support—designed specifically for India's artisan communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="bg-emerald-100 group-hover:bg-emerald-200 p-3 rounded-lg inline-block transition-colors">
                      <div className="text-emerald-600">{solution.icon}</div>
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6 flex-1">
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Impact */}
                  <div className="pt-4 border-t border-emerald-100">
                    <div className="inline-flex items-center bg-gradient-to-r from-emerald-50 to-teal-50 px-3 py-1.5 rounded-full">
                      <span className="text-sm font-semibold text-emerald-700">
                        Impact: {solution.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Workflow Visualization */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Platform Workflow: From Artisan to Customer
          </h3>
          
          <div className="relative">
            {/* Workflow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
              {[
                { step: 1, title: "Artisan Onboarding", icon: "👨‍🎨" },
                { step: 2, title: "Product Listing", icon: "📱" },
                { step: 3, title: "Collection Center", icon: "📦" },
                { step: 4, title: "Quality Check", icon: "✅" },
                { step: 5, title: "Direct Delivery", icon: "🚚" }
              ].map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="relative">
                    {/* Step Circle */}
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                      {item.icon}
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  
                  {/* Connector Line */}
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-1/4 w-1/2 h-1 bg-emerald-200 transform translate-x-12"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Bottom Description */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">5-10%</div>
                <p className="text-gray-600">Platform Fee Only</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">2-5 Days</div>
                <p className="text-gray-600">Delivery Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">100%</div>
                <p className="text-gray-600">Direct to Artisan Bank</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}