import { Card, CardContent } from './ui/card'
import { 
  Lightbulb, 
  Map, 
  Users, 
  Building, 
  Target,
  Calendar,
  CheckCircle,
  Clock
} from 'lucide-react'

const stageDetails = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Concept Design Complete",
    status: "completed",
    items: [
      "Platform concept & workflow designed",
      "Artisan onboarding model planned",
      "Collection-center approach defined"
    ]
  },
  {
    icon: <Map className="h-8 w-8" />,
    title: "Pilot Planning Phase",
    status: "current",
    items: [
      "Selecting 2-3 artisan clusters",
      "Identifying 100-200 artisans",
      "Choosing 5-6 craft categories"
    ]
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Partner Identification",
    status: "next",
    items: [
      "SHG partnerships",
      "NGO collaborations",
      "Government tie-ups"
    ]
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "MVP Development",
    status: "future",
    items: [
      "Platform development",
      "Testing with pilot groups",
      "Feedback integration"
    ]
  }
]

const timeline = [
  { month: "Months 1-2", activity: "Finalize pilot clusters & partners" },
  { month: "Months 3-4", activity: "Onboard first 100 artisans" },
  { month: "Months 5-6", activity: "Launch MVP platform" },
  { month: "Months 7-9", activity: "Scale to 500 artisans" },
  { month: "Year 2", activity: "Expand to 5,000+ artisans" }
]

export default function CurrentStage() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Target className="h-5 w-5" />
            <span className="font-semibold">Current Stage</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Idea / Concept-to-MVP Stage
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are preparing for pilot implementation with artisan groups and 
            ecosystem partners. Here's where we are in our journey.
          </p>
        </div>

        {/* Progress Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stageDetails.map((stage, index) => (
            <Card 
              key={index}
              className={`border-2 ${
                stage.status === 'completed' 
                  ? 'border-emerald-200 bg-emerald-50' 
                  : stage.status === 'current'
                  ? 'border-blue-200 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-gray-50'
              } transition-all duration-300`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    stage.status === 'completed' 
                      ? 'bg-emerald-100 text-emerald-600' 
                      : stage.status === 'current'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {stage.icon}
                  </div>
                  
                  {stage.status === 'completed' && (
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                  )}
                  {stage.status === 'current' && (
                    <div className="flex items-center space-x-1 bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-semibold">Current</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {stage.title}
                </h3>
                
                <ul className="space-y-2">
                  {stage.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-2 ${
                        stage.status === 'completed' 
                          ? 'bg-emerald-400' 
                          : stage.status === 'current'
                          ? 'bg-blue-400'
                          : 'bg-gray-400'
                      }`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Implementation Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full z-10"></div>
                  
                  {/* Timeline Content */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'
                  }`}>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
                      <div className="flex items-center justify-between mb-2">
                        <Calendar className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {item.month}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.activity}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Need */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              What's Already Done
            </h3>
            
            <div className="space-y-4">
              {[
                "Complete business model & pricing structure",
                "Artisan onboarding workflow designed",
                "Collection center operational model",
                "Multi-language interface mockups",
                "Partnership framework with SHGs/NGOs",
                "Revenue model & sustainability plan"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-300 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              What We're Looking For
            </h3>
            
            <div className="space-y-4">
              {[
                "Artisan clusters for pilot (2-3 groups)",
                "NGO partners for field coordination",
                "Logistics partners for collection centers",
                "CSR partners for initial funding",
                "Government partnerships for scaling",
                "Tech volunteers for MVP development"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Target className="h-5 w-5 text-amber-300 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-center font-semibold">
                📢 Currently inviting artisan groups, partners, and ecosystem 
                collaborators for pilot phase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}