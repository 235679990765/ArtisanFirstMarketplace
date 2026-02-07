import { Card, CardContent } from './ui/card'
import { 
  Heart,
  TrendingUp,
  Home,
  Shield,
  Users,
  Globe,
  Star,
  Target
} from 'lucide-react'

const impactAreas = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Economic Empowerment",
    impact: "50-70% income increase for artisans",
    description: "Direct market access eliminates middlemen exploitation",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Reduced Migration",
    impact: "Sustainable rural livelihoods",
    description: "Youth can stay in villages with craft-based income",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Cultural Preservation",
    impact: "Traditional crafts documented and valued",
    description: "Incentive for next generation to continue heritage",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Women's Empowerment",
    impact: "Financial independence for women artisans",
    description: "Home-based work with fair compensation",
    color: "from-blue-500 to-indigo-500"
  }
]

const longTermVision = [
  {
    year: "Year 1",
    goals: ["500 artisans onboarded", "Pilot in 3 states", "First collection centers"]
  },
  {
    year: "Year 3",
    goals: ["50,000 artisans active", "Pan-India presence", "Export partnerships"]
  },
  {
    year: "Year 5",
    goals: ["500,000+ artisans", "Global marketplace", "AI-powered craft preservation"]
  }
]

export default function WhyMatters() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <Heart className="h-5 w-5" />
            <span className="font-semibold">Why This Matters</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            More Than a Marketplace — A Livelihood Revolution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            When artisans earn fairly, entire communities transform. This platform 
            bridges tradition and opportunity for sustainable development.
          </p>
        </div>

        {/* Impact Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactAreas.map((area, index) => (
            <Card 
              key={index}
              className="border-purple-100 hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{area.icon}</div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {area.title}
                </h3>
                
                <div className="mb-3">
                  <div className="text-sm font-semibold text-purple-600 mb-1">
                    Impact
                  </div>
                  <p className="text-gray-800 font-bold">
                    {area.impact}
                  </p>
                </div>
                
                <p className="text-sm text-gray-600">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* The Ripple Effect */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            The Ripple Effect of Fair Artisan Income
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-4xl font-bold mb-2">1 Artisan</div>
              <p className="text-purple-100">Supports 3-4 family members</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-4xl font-bold mb-2">100 Artisans</div>
              <p className="text-purple-100">Revitalizes 1 craft cluster</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-4xl font-bold mb-2">10,000 Artisans</div>
              <p className="text-purple-100">Preserves regional cultural identity</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="italic text-purple-200">
              "Every craft sold sustains a family, preserves a tradition, 
              and strengthens a community."
            </p>
          </div>
        </div>

        {/* Long Term Vision */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Our 5-Year Vision for Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {longTermVision.map((vision, index) => (
              <div 
                key={index}
                className="text-center p-6 border border-purple-100 rounded-xl hover:bg-purple-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mb-4">
                  <span className="text-white text-xl font-bold">{vision.year}</span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {vision.year} Milestones
                </h4>
                
                <ul className="space-y-2">
                  {vision.goals.map((goal, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Target className="h-3 w-3 text-purple-500 mr-2" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-emerald-100 to-amber-100 rounded-2xl p-8 max-w-4xl">
            <Globe className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              This is Not Just Business — It's a Movement
            </h3>
            
            <div className="text-lg text-gray-600 mb-6 space-y-4">
              <p>
                We're building more than a platform. We're creating an ecosystem 
                where traditional crafts thrive, artisans prosper, and buyers 
                become partners in cultural preservation.
              </p>
              
              <p className="font-semibold text-emerald-700">
                When you support an artisan, you're not just buying a product — 
                you're investing in cultural heritage, sustainable livelihoods, 
                and a fairer world.
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <Star className="h-6 w-6 text-amber-500" />
              <span className="text-gray-700 font-medium">
                Join us in redefining the future of Indian crafts
              </span>
              <Star className="h-6 w-6 text-amber-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}