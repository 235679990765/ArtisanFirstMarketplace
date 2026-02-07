import { Card, CardContent } from '../ui/card'
import { 
  User,
  MapPin,
  Heart,
  Star,
  Quote
} from 'lucide-react'

const artisanStories = [
  {
    name: "Lakshmi Devi",
    craft: "Handloom Weaver",
    location: "Odisha",
    story: "For 30 years, I've woven sarees that middlemen would buy for ₹800 and sell for ₹4000. Now I earn ₹3000 directly for the same work.",
    impact: "Income increased by 275%",
    image: "🧵"
  },
  {
    name: "Rajeshwar Meena",
    craft: "Tribal Jewelry Maker",
    location: "Rajasthan",
    story: "My silver jewelry was sold in city boutiques at 5x my price. Now buyers appreciate my craft and pay me fairly.",
    impact: "Customers in 15+ cities",
    image: "💎"
  },
  {
    name: "Sunita Bai",
    craft: "Pottery Artisan",
    location: "Madhya Pradesh",
    story: "As a widow, pottery was my only skill. Middlemen exploited my situation. Now I support my children's education.",
    impact: "Two children in school",
    image: "🏺"
  },
  {
    name: "Arjun Munda",
    craft: "Bamboo Craftsman",
    location: "Jharkhand",
    story: "Youth in my village were migrating for work. Now 15 young people are learning bamboo crafts and earning locally.",
    impact: "15 youth employed locally",
    image: "🎋"
  }
]

export default function ArtisanStories() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <Heart className="h-5 w-5" />
            <span className="font-semibold">Artisan Stories</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Lives, Real Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the artisans whose lives are transformed by direct market access 
            and fair compensation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {artisanStories.map((artisan, index) => (
            <Card 
              key={index}
              className="border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Artisan Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-3xl">
                      {artisan.image}
                    </div>
                  </div>
                  
                  {/* Story Content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {artisan.name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {artisan.location} • {artisan.craft}
                        </div>
                      </div>
                      <Quote className="h-6 w-6 text-purple-300" />
                    </div>
                    
                    <p className="text-gray-600 mb-4 italic">
                      "{artisan.story}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1.5 rounded-full">
                        <Star className="h-4 w-4 text-purple-500 mr-2" />
                        <span className="text-sm font-semibold text-purple-700">
                          {artisan.impact}
                        </span>
                      </div>
                      
                      <User className="h-5 w-5 text-purple-300" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">
            Collective Impact Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl font-bold mb-2">275%</div>
              <p className="text-purple-100">Average Income Increase</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl font-bold mb-2">85%</div>
              <p className="text-purple-100">Women Artisans Empowered</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl font-bold mb-2">60%</div>
              <p className="text-purple-100">Reduced Migration</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-purple-100">Direct Customer Connection</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="italic text-purple-200">
              "Every number represents a life changed, a family sustained, 
              and a tradition preserved."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}