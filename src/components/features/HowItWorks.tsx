import { Card, CardContent } from '../ui/card'
import { 
  UserPlus, 
  Package, 
  Truck, 
  ShieldCheck, 
  Banknote,
  MessageSquare,
  ChevronRight
} from 'lucide-react'

const steps = [
  {
    icon: <UserPlus className="h-10 w-10" />,
    title: "Artisan Onboarding",
    description: "Local coordinators assist artisans with registration",
    details: "No digital skills required. We handle everything in local languages.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Package className="h-10 w-10" />,
    title: "Product Listing",
    description: "Coordinator helps take photos and list products",
    details: "Artisans set their own prices with fair wage guidance.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: <Truck className="h-10 w-10" />,
    title: "Collection Center",
    description: "Local centers handle quality check and shipping",
    details: "Centers reduce logistics costs by 60% through bulk shipping.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Quality Assurance",
    description: "Every product undergoes cultural authenticity check",
    details: "Traditional techniques preserved while ensuring durability.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "Direct Communication",
    description: "Buyers can message artisans and learn about crafts",
    details: "Voice messages and regional language support available.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: <Banknote className="h-10 w-10" />,
    title: "Direct Payment",
    description: "100% transparent pricing and payment system",
    details: "5-10% platform fee only. No hidden charges, no middlemen.",
    color: "from-green-500 to-emerald-500"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <ChevronRight className="h-5 w-5" />
            <span className="font-semibold">Platform Workflow</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Our Platform Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A simple, transparent process designed for artisans with limited digital access
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                      {index + 1}
                    </div>
                    <div className={`p-2 bg-gradient-to-br ${step.color} rounded-lg`}>
                      <div className="text-white">{step.icon}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg mt-auto">
                    {step.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Workflow Visualization */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Complete Journey: From Artisan to Customer
          </h3>
          
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:flex items-center justify-between relative">
              {steps.slice(0, 3).map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg`}>
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{step.description}</p>
                  
                  {index < 2 && (
                    <div className="absolute top-10 left-1/4 w-1/2 h-1 bg-emerald-200"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile Steps */}
            <div className="md:hidden space-y-6">
              {steps.slice(0, 3).map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0`}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom Stats */}
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