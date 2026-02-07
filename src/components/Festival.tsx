import { Card, CardContent } from './ui/card'
import { 
  Calendar,
  MapPin,
  Users,
  Target,
  ShoppingBag,
  MessageSquare,
  Handshake,
  Award
} from 'lucide-react'
import { Button } from './ui/button'

export default function Festival() {
  const festivalObjectives = [
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Showcase Artisan Products",
      description: "Live demonstration of crafts and direct buyer interaction",
      color: "bg-emerald-100 text-emerald-700"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Validate Market Demand",
      description: "Test pricing, product appeal, and customer preferences",
      color: "bg-amber-100 text-amber-700"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Collect Direct Feedback",
      description: "Real-time feedback from both artisans and buyers",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Build Partnerships",
      description: "Connect with government, institutions, and NGOs",
      color: "bg-purple-100 text-purple-700"
    }
  ]

  const festivalHighlights = [
    "Live craft demonstrations by master artisans",
    "Direct buying opportunity from tribal artisans",
    "Platform demonstration and sign-up counter",
    "Cultural performances and craft stories",
    "Artisan-buyer interaction sessions",
    "Workshops on traditional craft techniques"
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
            <Calendar className="h-5 w-5" />
            <span className="font-semibold">Bharat Tribes Festival Participation</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Live Showcase at Bharat Tribes Fest
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The festival serves as our live testing ground to validate the marketplace 
            concept with real artisans and buyers.
          </p>
        </div>

        {/* Festival Overview */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-orange-200" />
              <div className="text-2xl font-bold mb-2">Proposed Dates</div>
              <p className="text-orange-100">3-5 Day Festival</p>
              <p className="text-sm text-orange-200">Q4 2024 / Q1 2025</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-orange-200" />
              <div className="text-2xl font-bold mb-2">Location</div>
              <p className="text-orange-100">Major Indian City</p>
              <p className="text-sm text-orange-200">Delhi / Mumbai / Bangalore</p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-orange-200" />
              <div className="text-2xl font-bold mb-2">Expected Reach</div>
              <p className="text-orange-100">10,000+ Visitors</p>
              <p className="text-sm text-orange-200">200+ Artisans Showcasing</p>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {festivalObjectives.map((objective, index) => (
            <Card 
              key={index}
              className="border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className={`p-3 rounded-lg ${objective.color} w-fit mb-4`}>
                  {objective.icon}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {objective.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {objective.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Festival Highlights */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Festival Highlights & Activities
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-orange-700 mb-4">
                What Visitors Will Experience
              </h4>
              <ul className="space-y-3">
                {festivalHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-orange-700 mb-4">
                Platform Demonstration Zone
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-3">
                    <ShoppingBag className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Live Order Placement</h5>
                    <p className="text-sm text-gray-600">See how easy it is to buy directly from artisans</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-3">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Artisan Stories</h5>
                    <p className="text-sm text-gray-600">Meet the makers and hear their stories</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-3">
                    <MessageSquare className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Direct Feedback Collection</h5>
                    <p className="text-sm text-gray-600">Share your thoughts to improve the platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Participating?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Whether you're an artisan, buyer, partner, or supporter, 
              join us in making this festival a success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Register as Artisan
              </Button>
              
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8">
                <Handshake className="mr-2 h-5 w-5" />
                Partner with Us
              </Button>
              
              <Button size="lg" variant="ghost" className="text-gray-600 hover:bg-orange-100 px-8">
                <Users className="mr-2 h-5 w-5" />
                Volunteer at Festival
              </Button>
            </div>
          </div>
          
          <p className="mt-8 text-gray-500 text-sm">
            The festival is not just an event — it's a movement to bring artisans 
            and conscious buyers together on one platform.
          </p>
        </div>
      </div>
    </section>
  )
}