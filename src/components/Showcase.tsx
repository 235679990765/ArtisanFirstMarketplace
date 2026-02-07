import { Card, CardContent } from './ui/card'
import { 
  Package, 
  Star, 
  Users, 
  Heart,
  ShoppingBag,
  Target
} from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const featuredCrafts = [
  {
    id: 1,
    name: "Handloom Textiles",
    description: "Traditional weaves from across India",
    artisan: "Women weavers from Odisha",
    price: "₹1,500 - ₹8,000",
    icon: "🧵",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    name: "Tribal Jewelry",
    description: "Silver and beadwork from tribal communities",
    artisan: "Tribal artisans from Jharkhand",
    price: "₹500 - ₹5,000",
    icon: "💎",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 3,
    name: "Terracotta Pottery",
    description: "Traditional clay pottery with natural colors",
    artisan: "Potter communities from Rajasthan",
    price: "₹300 - ₹3,000",
    icon: "🏺",
    color: "from-red-500 to-orange-500"
  },
  {
    id: 4,
    name: "Bamboo Crafts",
    description: "Eco-friendly bamboo products",
    artisan: "Bamboo artisans from Assam",
    price: "₹200 - ₹2,500",
    icon: "🎋",
    color: "from-emerald-500 to-green-500"
  }
]

export default function Showcase() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4">
            <ShoppingBag className="h-5 w-5" />
            <span className="font-semibold">Featured Crafts</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Handcrafted Treasures
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each product tells a story of tradition, skill, and cultural heritage. 
            Shop directly from the makers.
          </p>
        </div>

        {/* Featured Crafts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCrafts.map((craft) => (
            <Card 
              key={craft.id}
              className="border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${craft.color} rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  {craft.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {craft.name}
                </h3>
                
                <p className="text-gray-600 text-center mb-4">
                  {craft.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{craft.artisan}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Package className="h-4 w-4 mr-2" />
                    <span className="font-semibold text-amber-600">{craft.price}</span>
                  </div>
                </div>
                
                <Link to={`/crafts/${craft.id}`}>
                  <Button variant="outline" className="w-full border-amber-200 text-amber-600 hover:bg-amber-50">
                    <Heart className="h-4 w-4 mr-2" />
                    View Collection
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Why Buy Direct from Artisans?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Heart className="h-12 w-12 mx-auto mb-4 text-amber-200" />
              <h4 className="font-bold text-lg mb-2">Authentic Craftsmanship</h4>
              <p className="text-amber-100 text-sm">
                Each piece is handcrafted using traditional techniques
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Target className="h-12 w-12 mx-auto mb-4 text-amber-200" />
              <h4 className="font-bold text-lg mb-2">Fair Wages</h4>
              <p className="text-amber-100 text-sm">
                70-80% of price goes directly to the artisan
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Star className="h-12 w-12 mx-auto mb-4 text-amber-200" />
              <h4 className="font-bold text-lg mb-2">Cultural Preservation</h4>
              <p className="text-amber-100 text-sm">
                Supporting traditional crafts keeps heritage alive
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-white to-amber-50 border-2 border-amber-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Explore More?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Browse our full collection of handcrafted products from artisans 
              across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Browse Marketplace
                </Button>
              </Link>
              
              <Link to="/artisans">
                <Button size="lg" variant="outline" className="border-amber-500 text-amber-600 px-8">
                  <Users className="mr-2 h-5 w-5" />
                  Meet the Artisans
                </Button>
              </Link>
            </div>
          </div>
          
          <p className="mt-8 text-gray-500 text-sm">
            Every purchase makes a difference in an artisan's life
          </p>
        </div>
      </div>
    </section>
  )
}