import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { 
  User,
  MapPin,
  Star,
  Heart,
  MessageCircle,
  Award,
  Users,
  Calendar
} from 'lucide-react'

const artisans = [
  {
    id: 1,
    name: "Lakshmi Devi",
    craft: "Handloom Weaver",
    location: "Varanasi, Uttar Pradesh",
    experience: "30+ years",
    specialty: "Banarasi Silk Sarees",
    rating: 4.9,
    products: 45,
    story: "Third generation weaver preserving traditional Banarasi techniques",
    image: "👵",
    achievements: ["National Award Winner", "GI Tag Certified"]
  },
  {
    id: 2,
    name: "Rajeshwar Meena",
    craft: "Tribal Jewelry Maker",
    location: "Jharkhand",
    experience: "25 years",
    specialty: "Dhokra Metal Crafts",
    rating: 4.8,
    products: 32,
    story: "Preserving ancient lost-wax casting techniques",
    image: "👨‍🎨",
    achievements: ["Tribal Heritage Award", "Export Excellence"]
  },
  {
    id: 3,
    name: "Sunita Bai",
    craft: "Pottery Artisan",
    location: "Bikaner, Rajasthan",
    experience: "20 years",
    specialty: "Blue Pottery",
    rating: 4.7,
    products: 28,
    story: "Reviving traditional blue pottery with natural pigments",
    image: "👩‍🎨",
    achievements: ["Women Artisan Award", "Eco-friendly Certification"]
  },
  {
    id: 4,
    name: "Arjun Munda",
    craft: "Bamboo Craftsman",
    location: "Assam",
    experience: "15 years",
    specialty: "Bamboo Furniture",
    rating: 4.6,
    products: 35,
    story: "Sustainable bamboo crafts supporting forest conservation",
    image: "👨‍🏭",
    achievements: ["Green Crafts Award", "Sustainable Development"]
  },
  {
    id: 5,
    name: "Meena Kumari",
    craft: "Block Print Artist",
    location: "Jaipur, Rajasthan",
    experience: "18 years",
    specialty: "Natural Dye Printing",
    rating: 4.9,
    products: 42,
    story: "Using traditional vegetable dyes for eco-friendly prints",
    image: "👩‍🎤",
    achievements: ["Natural Dye Expert", "Heritage Conservation"]
  },
  {
    id: 6,
    name: "Ram Singh",
    craft: "Metal Artisan",
    location: "Moradabad, UP",
    experience: "35 years",
    specialty: "Brware Crafts",
    rating: 4.5,
    products: 38,
    story: "Fifth generation metal worker specializing in brass artifacts",
    image: "👨‍🔧",
    achievements: ["Master Craftsman", "Export Quality Certified"]
  }
]

export default function Artisans() {
  return (
    <div className="space-y-8 px-4 py-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
          Meet Our Artisans
        </h1>
        <p className="text-lg text-purple-700 max-w-2xl mx-auto">
          Each artisan brings generations of skill, tradition, and cultural heritage to their craft.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border text-center">
          <div className="text-2xl font-bold text-purple-600">500+</div>
          <div className="text-sm text-gray-600">Artisans</div>
        </div>
        <div className="bg-white p-4 rounded-xl border text-center">
          <div className="text-2xl font-bold text-purple-600">75%</div>
          <div className="text-sm text-gray-600">Women Artisans</div>
        </div>
        <div className="bg-white p-4 rounded-xl border text-center">
          <div className="text-2xl font-bold text-purple-600">30+</div>
          <div className="text-sm text-gray-600">Years Average Experience</div>
        </div>
        <div className="bg-white p-4 rounded-xl border text-center">
          <div className="text-2xl font-bold text-purple-600">4.8</div>
          <div className="text-sm text-gray-600">Average Rating</div>
        </div>
      </div>

      {/* Artisans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artisans.map((artisan) => (
          <Card key={artisan.id} className="border-purple-100 hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-3xl">
                    {artisan.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{artisan.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {artisan.location}
                    </div>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(artisan.rating) 
                              ? 'text-amber-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">({artisan.rating})</span>
                    </div>
                  </div>
                </div>

                {/* Craft Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="font-semibold">{artisan.craft}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-sm">{artisan.experience}</span>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-purple-700">
                      <span className="font-semibold">Specialty:</span> {artisan.specialty}
                    </p>
                  </div>
                </div>

                {/* Story */}
                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {artisan.story}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Achievements</h4>
                  <div className="flex flex-wrap gap-2">
                    {artisan.achievements.map((achievement, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-2 py-1 rounded"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats & Actions */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{artisan.products} products</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="border-purple-200">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <div className="inline-block bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Are You an Artisan?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Join our community of artisans and showcase your craft to buyers worldwide.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
            <User className="mr-2 h-5 w-5" />
            Join as Artisan
          </Button>
        </div>
      </div>
    </div>
  )
}