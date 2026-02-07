import { Card, CardContent } from './ui/card'
import { Users, Home, MapPin, Heart, Shield, Target } from 'lucide-react'

const targetGroups = [
  {
    icon: <MapPin className="h-10 w-10" />,
    title: "Tribal Artisans",
    description: "Indigenous craft communities preserving ancestral techniques",
    features: [
      "Traditional craft specialists",
      "Forest-based communities",
      "Scheduled Tribes (ST) artisans"
    ],
    count: "15M+ artisans",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Home className="h-10 w-10" />,
    title: "Home-Based Producers",
    description: "Artisans working from their homes and small workshops",
    features: [
      "Women-led households",
      "Part-time artisans",
      "Family craft businesses"
    ],
    count: "25M+ producers",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Women-Led Artisan Groups",
    description: "Self-help groups and women's cooperatives",
    features: [
      "SHG collectives",
      "Women's federations",
      "Rural entrepreneurship groups"
    ],
    count: "500K+ groups",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Traditional Craft Communities",
    description: "Communities preserving specific craft traditions",
    features: [
      "GI-tag craft clusters",
      "Generational artisans",
      "Cultural heritage keepers"
    ],
    count: "2000+ communities",
    color: "from-blue-500 to-indigo-500"
  }
]

export default function ForWhom() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4">
            <Target className="h-5 w-5" />
            <span className="font-semibold">Who This Platform Is For</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Designed for India's Artisan Communities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We focus on empowerment, not dependency. This platform is built specifically 
            for those who create India's cultural heritage with their hands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {targetGroups.map((group, index) => (
            <Card 
              key={index}
              className="border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Icon with gradient */}
                  <div className={`bg-gradient-to-br ${group.color} p-3 rounded-xl`}>
                    <div className="text-white">{group.icon}</div>
                  </div>
                  
                  <div className="flex-1">
                    {/* Title & Count */}
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {group.title}
                      </h3>
                      <span className="bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full">
                        {group.count}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4">
                      {group.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {group.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-500">
                          <Heart className="h-3 w-3 text-amber-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Focus Areas */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Our Focus: Empowerment Through Access
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold mb-2">₹0</div>
              <p className="font-semibold">No Upfront Cost</p>
              <p className="text-sm text-amber-100 mt-2">
                Zero investment required from artisans
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="font-semibold">Digital Assistance</p>
              <p className="text-sm text-amber-100 mt-2">
                Complete support for non-digital users
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="font-semibold">Local Language Support</p>
              <p className="text-sm text-amber-100 mt-2">
                Assistance in regional languages
              </p>
            </div>
          </div>
        </div>

        {/* Artisan Journey */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            The Artisan Journey on Our Platform
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-emerald-700 mb-4">
                Before Our Platform
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Limited to local markets and middlemen</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Earns only 20-30% of product value</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-600">No control over pricing or customers</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Limited growth opportunities</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-emerald-700 mb-4">
                With Our Platform
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Access to national market directly</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Earns 70-80% of product value</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Sets own prices, builds brand</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Business growth and training support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 font-medium">
              "We focus on empowerment, not dependency. Every artisan deserves 
              to be an entrepreneur, not just a worker."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}