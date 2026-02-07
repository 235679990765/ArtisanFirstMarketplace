import { Card, CardContent } from '../ui/card'
import { 
  Star,
  Quote,
  User,
  Building,
  Heart
} from 'lucide-react'

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Director, Tribal Development NGO",
    organization: "Gramin Vikas Trust",
    quote: "This platform addresses the core issues artisans face - digital access and fair pricing. It's exactly what the sector needs.",
    rating: 5,
    image: "👩‍⚕️"
  },
  {
    name: "Rajesh Kumar",
    role: "Handloom Weaver & SHG Leader",
    organization: "Odisha Weavers Collective",
    quote: "For the first time, we can set our own prices and talk directly to customers. This changes everything for us.",
    rating: 5,
    image: "👨‍🏭"
  },
  {
    name: "Anita Desai",
    role: "CSR Head",
    organization: "Future Group Foundation",
    quote: "The hybrid model makes it scalable and sustainable. We're excited to partner for our artisan empowerment program.",
    rating: 5,
    image: "👩‍💼"
  },
  {
    name: "Prof. Arvind Singh",
    role: "Cultural Heritage Expert",
    organization: "National Institute of Design",
    quote: "By making crafts economically viable, this platform does more for preservation than any museum could.",
    rating: 5,
    image: "👨‍🏫"
  }
]

const partnerLogos = [
  "TRIFED",
  "Ministry of Tribal Affairs",
  "State Handicraft Boards",
  "Artisan Cooperatives",
  "CSR Partners",
  "NGO Network"
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <Heart className="h-5 w-5" />
            <span className="font-semibold">What People Are Saying</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Artisans & Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from those who understand the challenges and opportunities 
            in India's artisan sector.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  {/* Quote */}
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-purple-300 mb-4" />
                    <p className="text-gray-600 italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Profile */}
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl mr-4">
                      {testimonial.image}
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-3 w-3 mr-1" />
                        <span>{testimonial.role}</span>
                        <Building className="h-3 w-3 ml-2 mr-1" />
                        <span>{testimonial.organization}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partners Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Ecosystem Partners & Supporters
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-lg font-semibold">{partner}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-purple-100 italic">
              "Building a better future for artisans requires collaboration across 
              government, private sector, and civil society."
            </p>
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Expected Pilot Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-purple-100 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-gray-600 font-semibold">Artisans in Pilot</p>
              <p className="text-sm text-gray-500 mt-2">First year target</p>
            </div>
            
            <div className="text-center p-6 border border-purple-100 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">50%+</div>
              <p className="text-gray-600 font-semibold">Income Increase</p>
              <p className="text-sm text-gray-500 mt-2">For participating artisans</p>
            </div>
            
            <div className="text-center p-6 border border-purple-100 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-gray-600 font-semibold">Digital Inclusion</p>
              <p className="text-sm text-gray-500 mt-2">Even without smartphones</p>
            </div>
            
            <div className="text-center p-6 border border-purple-100 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">0</div>
              <p className="text-gray-600 font-semibold">Upfront Cost</p>
              <p className="text-sm text-gray-500 mt-2">For artisans to join</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              These numbers represent real change in the lives of artisans and 
              their communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}