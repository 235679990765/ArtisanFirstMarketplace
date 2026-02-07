import { Card, CardContent } from '../components/ui/card'
import { 
  UserPlus,
  Package,
  Truck,
  ShieldCheck,
  Banknote,
  MessageSquare,
  Users,
  Globe,
  Target,
  ArrowRight
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

const workflowSteps = [
  {
    step: 1,
    title: "Artisan Registration",
    description: "Local coordinators help artisans join the platform",
    details: "No digital skills required. We handle documentation and training in local languages.",
    icon: <UserPlus className="h-10 w-10" />,
    color: "from-emerald-500 to-teal-500",
    image: "👨‍🎨"
  },
  {
    step: 2,
    title: "Product Listing",
    description: "Coordinator photographs and lists products",
    details: "Artisans set fair prices with our guidance. Products showcased in multiple languages.",
    icon: <Package className="h-10 w-10" />,
    color: "from-blue-500 to-indigo-500",
    image: "📱"
  },
  {
    step: 3,
    title: "Order Placement",
    description: "Customers browse and purchase directly",
    details: "Buyers connect with artisans, learn about crafts, and place orders online.",
    icon: <MessageSquare className="h-10 w-10" />,
    color: "from-purple-500 to-pink-500",
    image: "🛒"
  },
  {
    step: 4,
    title: "Collection Center",
    description: "Artisans deliver to local collection centers",
    details: "Quality check, packaging, and bulk shipping at 60% lower cost.",
    icon: <Truck className="h-10 w-10" />,
    color: "from-amber-500 to-orange-500",
    image: "📦"
  },
  {
    step: 5,
    title: "Quality Assurance",
    description: "Every product undergoes cultural authenticity check",
    details: "Traditional techniques preserved while ensuring durability and quality standards.",
    icon: <ShieldCheck className="h-10 w-10" />,
    color: "from-green-500 to-emerald-500",
    image: "✅"
  },
  {
    step: 6,
    title: "Direct Payment",
    description: "Transparent pricing and payment to artisans",
    details: "5-10% platform fee only. Payment goes directly to artisan's bank account.",
    icon: <Banknote className="h-10 w-10" />,
    color: "from-red-500 to-orange-500",
    image: "💰"
  }
]

const keyFeatures = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Multilingual Support",
    description: "Interface in 10+ Indian languages with voice assistance"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Assisted Commerce",
    description: "Field coordinators help artisans at every step"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Fair Pricing Model",
    description: "Artisans earn 70-80% of product value directly"
  }
]

export default function HowItWorks() {
  return (
    <div className="space-y-8 px-4 py-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          How It Works
        </h1>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto">
          A simple, transparent process designed specifically for artisans with limited digital access.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {keyFeatures.map((feature, index) => (
          <Card key={index} className="border-blue-100 text-center">
            <CardContent className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <div className="text-blue-600">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Workflow */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Complete Platform Workflow
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step) => (
            <Card key={step.step} className="border-blue-100 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  {/* Step Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center text-white font-bold text-xl`}>
                      {step.step}
                    </div>
                    <div className="text-3xl">{step.image}</div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-blue-700 bg-blue-50 p-3 rounded-lg mt-auto">
                    {step.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Visual Timeline */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold text-center mb-8">
          From Artisan Hands to Your Home
        </h3>
        
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:flex items-center justify-between">
            {workflowSteps.slice(0, 4).map((step, index) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-2xl mb-4`}>
                  {step.step}
                </div>
                <h4 className="font-bold text-lg">{step.title}</h4>
                {index < 3 && (
                  <ArrowRight className="h-8 w-8 text-white/50 mt-4" />
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {workflowSteps.slice(0, 4).map((step) => (
              <div key={step.step} className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                  {step.step}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{step.title}</h4>
                  <p className="text-blue-100 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-emerald-100">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Benefits for Artisans
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">50-70% Higher Income</h4>
                  <p className="text-sm text-gray-600">By eliminating middlemen</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">National Market Access</h4>
                  <p className="text-sm text-gray-600">Reach customers across India</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Digital Empowerment</h4>
                  <p className="text-sm text-gray-600">Without needing digital skills</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Benefits for Buyers
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Authentic Products</h4>
                  <p className="text-sm text-gray-600">Direct from master artisans</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fair Prices</h4>
                  <p className="text-sm text-gray-600">Support artisans directly</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cultural Connection</h4>
                  <p className="text-sm text-gray-600">Learn stories behind crafts</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Whether you're an artisan or a buyer, join our platform and be part of the fair trade revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pilot-program">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Join as Artisan
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 px-8">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}