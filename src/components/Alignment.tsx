import { Card, CardContent } from './ui/card'
import { 
  Building, 
  Users, 
  Handshake, 
  Target,
  Shield,
  TrendingUp,
  FileText,
  Network
} from 'lucide-react'

const governmentInitiatives = [
  {
    icon: <Building className="h-8 w-8" />,
    title: "TRIFED (Tribal Cooperative Marketing Development Federation)",
    alignment: [
      "Supports fair trade for tribal products",
      "Provides market access through Tribes India outlets",
      "Aligns with our direct-to-consumer model"
    ]
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Ministry of Tribal Affairs (MoTA)",
    alignment: [
      "Livelihood creation and skill development",
      "Cultural preservation objectives",
      "Digital empowerment of tribal communities"
    ]
  },
  {
    icon: <Handshake className="h-8 w-8" />,
    title: "Ministry of Textiles",
    alignment: [
      "Handloom and handicraft promotion",
      "GI tag support and branding",
      "Export market development"
    ]
  }
]

const ecosystemPartners = [
  {
    name: "Self-Help Groups (SHGs)",
    role: "Local coordination and artisan mobilization",
    icon: "👥"
  },
  {
    name: "Tribal Cooperatives",
    role: "Collective bargaining and quality control",
    icon: "🤝"
  },
  {
    name: "State Handicraft Boards",
    role: "Craft documentation and training support",
    icon: "🏛️"
  },
  {
    name: "NGOs & CSR Partners",
    role: "Field implementation and funding support",
    icon: "🌱"
  }
]

export default function Alignment() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">Government & Ecosystem Alignment</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built to Complement National Initiatives
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform is designed to integrate with and strengthen existing 
            government programs and ecosystem partners working for artisan welfare.
          </p>
        </div>

        {/* Government Alignment */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Alignment with Government Initiatives
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governmentInitiatives.map((initiative, index) => (
              <Card 
                key={index}
                className="border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <div className="text-emerald-600">{initiative.icon}</div>
                    </div>
                    <h4 className="font-bold text-lg text-gray-900">
                      {initiative.title}
                    </h4>
                  </div>
                  
                  <ul className="space-y-3">
                    {initiative.alignment.map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Target className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ecosystem Integration */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Ecosystem Integration Framework
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemPartners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl mb-3">{partner.icon}</div>
                <h4 className="font-bold text-lg mb-2">{partner.name}</h4>
                <p className="text-sm text-emerald-100">{partner.role}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-emerald-100 italic">
              "This platform is designed to complement, not replace, existing systems."
            </p>
          </div>
        </div>

        {/* Integration Model */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            How We Integrate with Existing Systems
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-emerald-700 mb-4">
                Data & Resource Sharing
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FileText className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-600">Artisan database integration with government portals</span>
                </li>
                <li className="flex items-center">
                  <Network className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-600">Real-time reporting to monitoring agencies</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-600">Impact metrics aligned with SDG goals</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-emerald-700 mb-4">
                Collaborative Benefits
              </h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-emerald-700 mb-1">
                    For Government Programs
                  </h5>
                  <p className="text-sm text-gray-600">
                    Enhanced reach and impact measurement for existing initiatives
                  </p>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-amber-700 mb-1">
                    For Ecosystem Partners
                  </h5>
                  <p className="text-sm text-gray-600">
                    Technology platform to amplify ground-level efforts
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Partnership Model */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-xl font-bold text-center text-gray-900 mb-6">
              Partnership Opportunities
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-emerald-200 rounded-xl">
                <div className="text-emerald-600 font-bold mb-2">Phase 1</div>
                <p className="text-sm text-gray-600">Pilot Implementation Partners</p>
              </div>
              <div className="text-center p-4 border border-amber-200 rounded-xl">
                <div className="text-amber-600 font-bold mb-2">Phase 2</div>
                <p className="text-sm text-gray-600">Scale-up Funding Partners</p>
              </div>
              <div className="text-center p-4 border border-blue-200 rounded-xl">
                <div className="text-blue-600 font-bold mb-2">Phase 3</div>
                <p className="text-sm text-gray-600">National Expansion Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}