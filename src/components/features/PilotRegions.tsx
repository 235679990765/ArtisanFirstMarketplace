import { Card, CardContent } from '../ui/card'
import { 
  MapPin,
  Users,
  Target,
  Calendar,
  CheckCircle
} from 'lucide-react'
import { Button } from '../ui/button'

const pilotRegions = [
  {
    state: "Odisha",
    crafts: ["Handloom Textiles", "Silver Filigree", "Pattachitra"],
    artisans: "5,000+ weavers",
    partners: "10 SHGs, 2 NGOs",
    status: "Planning",
    color: "from-purple-500 to-pink-500"
  },
  {
    state: "Rajasthan",
    crafts: ["Blue Pottery", "Block Printing", "Tribal Jewelry"],
    artisans: "3,000+ artisans",
    partners: "15 artisan cooperatives",
    status: "Planning",
    color: "from-amber-500 to-orange-500"
  },
  {
    state: "Assam",
    crafts: ["Bamboo Crafts", "Silk Weaving", "Cane Products"],
    artisans: "2,500+ craftsmen",
    partners: "8 tribal federations",
    status: "Planning",
    color: "from-emerald-500 to-teal-500"
  }
]

const implementationPhases = [
  {
    phase: "Phase 1: Foundation",
    duration: "Months 1-3",
    activities: [
      "Partner identification",
      "Artisan registration",
      "Collection center setup"
    ]
  },
  {
    phase: "Phase 2: Launch",
    duration: "Months 4-6",
    activities: [
      "Platform testing",
      "First 100 products",
      "Initial customer feedback"
    ]
  },
  {
    phase: "Phase 3: Scale",
    duration: "Months 7-12",
    activities: [
      "Expand to 500 artisans",
      "Add more craft categories",
      "Optimize operations"
    ]
  }
]

export default function PilotRegions() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Target className="h-5 w-5" />
            <span className="font-semibold">Pilot Implementation</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Starting with Strategic Regions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're launching our pilot in regions with strong artisan communities 
            and existing ecosystem support for maximum impact.
          </p>
        </div>

        {/* Pilot Regions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pilotRegions.map((region, index) => (
            <Card 
              key={index}
              className="border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                        <h3 className="text-xl font-bold text-gray-900">
                          {region.state}
                        </h3>
                      </div>
                      <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {region.status} Phase
                      </div>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${region.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Crafts */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Featured Crafts</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.crafts.map((craft, idx) => (
                        <span 
                          key={idx}
                          className="bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {craft}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="space-y-3 mb-6 mt-auto">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{region.artisans}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                      <span>{region.partners}</span>
                    </div>
                  </div>
                  
                  {/* Action */}
                  <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                    Express Interest
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Implementation Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {implementationPhases.map((phase, index) => (
                <div 
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full z-10"></div>
                  
                  {/* Timeline Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="border-blue-100">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                            <span className="font-bold text-blue-600">{phase.duration}</span>
                          </div>
                          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {phase.phase}
                          </div>
                        </div>
                        
                        <ul className="space-y-2">
                          {phase.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Target className="h-3 w-3 text-blue-400 mr-2" />
                              {activity}
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

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Our Pilot Program?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              We're looking for artisan groups, NGO partners, and regional 
              collaborators for our pilot implementation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Apply as Artisan Group
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 px-8">
                Partner with Us
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-gray-500">
              Currently accepting applications for Q1 2024 pilot
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}