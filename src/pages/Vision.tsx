import { Card, CardContent } from '../components/ui/card'
import { 
  Target,
  Heart,
  Globe,
  Users,
  Sparkles,
  Star,
  TrendingUp,
  Award
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

const visionPillars = [
  {
    icon: <Target className="h-10 w-10" />,
    title: "Economic Empowerment",
    description: "Transform artisans from laborers to business owners",
    goals: [
      "50% average income increase",
      "Direct market access",
      "Financial independence"
    ],
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Cultural Preservation",
    description: "Keep traditional crafts alive for future generations",
    goals: [
      "Document 100+ craft techniques",
      "Digital craft archives",
      "Youth apprenticeship programs"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Technology as Enabler",
    description: "Bridge digital divide with appropriate technology",
    goals: [
      "Voice-based interfaces",
      "Offline-first design",
      "Regional language support"
    ],
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Community Ownership",
    description: "Platform shaped and owned by artisan communities",
    goals: [
      "Artisan governance board",
      "Community decision-making",
      "Profit sharing models"
    ],
    color: "from-amber-500 to-orange-500"
  }
]

const milestones = [
  {
    year: "2024",
    title: "Pilot Launch",
    achievements: ["500 artisans onboarded", "3 pilot regions", "MVP platform"]
  },
  {
    year: "2025",
    title: "Scale Phase 1",
    achievements: ["10,000 artisans", "10+ states", "Export partnerships"]
  },
  {
    year: "2026",
    title: "Scale Phase 2",
    achievements: ["100,000 artisans", "Pan-India presence", "Mobile app launch"]
  },
  {
    year: "2028",
    title: "Maturity",
    achievements: ["500,000+ artisans", "Global marketplace", "AI craft preservation"]
  }
]

export default function Vision() {
  return (
    <div className="space-y-8 px-4 py-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
          Our Vision & Philosophy
        </h1>
        <p className="text-lg text-emerald-700 max-w-3xl mx-auto">
          Reimagining the future where every artisan thrives with dignity, 
          tradition meets opportunity, and technology serves communities.
        </p>
      </div>

      {/* Core Philosophy */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Our Guiding Principles
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Star className="h-6 w-6 text-amber-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-amber-200">Artisan = Owner, not labour</h3>
                  <p className="text-emerald-100">We treat artisans as entrepreneurs, not workers</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="h-6 w-6 text-amber-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-amber-200">Culture = Asset, not commodity</h3>
                  <p className="text-emerald-100">Traditional crafts are cultural treasures to preserve</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="h-6 w-6 text-amber-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-amber-200">Market = Fair & transparent</h3>
                  <p className="text-emerald-100">Every transaction should benefit the creator fairly</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="h-6 w-6 text-amber-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-amber-200">Technology = Service, not exploitation</h3>
                  <p className="text-emerald-100">Tech should empower, not extract value</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-center mb-6">
              The Future We're Building
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-amber-300 mr-3" />
                <span className="text-emerald-100">500,000 artisans empowered within 5 years</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-amber-300 mr-3" />
                <span className="text-emerald-100">50% average income increase for artisans</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 text-amber-300 mr-3" />
                <span className="text-emerald-100">100+ traditional crafts preserved digitally</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-amber-300 mr-3" />
                <span className="text-emerald-100">Pan-India network of collection centers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Pillars */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Four Pillars of Our Vision
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visionPillars.map((pillar, index) => (
            <Card key={index} className="border-emerald-100 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-4`}>
                    <div className="text-white">{pillar.icon}</div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {pillar.description}
                  </p>
                  
                  {/* Goals */}
                  <div className="space-y-2 mt-auto">
                    {pillar.goals.map((goal, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          pillar.color.includes('emerald') ? 'bg-emerald-400' :
                          pillar.color.includes('purple') ? 'bg-purple-400' :
                          pillar.color.includes('blue') ? 'bg-blue-400' : 'bg-amber-400'
                        }`}></div>
                        {goal}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Our 5-Year Roadmap
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-400"></div>
          
          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-emerald-500 rounded-full z-10"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <Card className="border-emerald-100">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`text-2xl font-bold ${
                          index % 2 === 0 ? 'text-emerald-600' : 'text-teal-600'
                        }`}>
                          {milestone.year}
                        </div>
                        <Sparkles className="h-5 w-5 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {milestone.title}
                      </h3>
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Numbers */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-8">
          Expected Impact by 2028
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500K+</div>
            <p className="text-purple-100">Artisans Empowered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">₹500Cr+</div>
            <p className="text-purple-100">Additional Income</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">200+</div>
            <p className="text-purple-100">Crafts Preserved</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">1M+</div>
            <p className="text-purple-100">Sustainable Livelihoods</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Movement
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Help us build a future where artisans are celebrated, crafts are preserved, 
            and communities thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pilot-program">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                Partner with Us
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 px-8">
                Support Artisans
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="ghost" className="text-gray-600 hover:bg-emerald-100 px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}