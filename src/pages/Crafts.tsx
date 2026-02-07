import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { 
  Palette,
  Gem,
  Home,
  Leaf,
  Sparkles,
  Droplets,
  Users,
  MapPin,
  TrendingUp
} from 'lucide-react'
import { Link } from 'react-router-dom'

const craftCategories = [
  {
    id: 1,
    name: "Handloom Textiles",
    description: "Traditional weaves including sarees, dupattas, and fabrics from across India",
    icon: <Palette className="h-10 w-10" />,
    artisans: "500K+ weavers",
    regions: ["Odisha", "West Bengal", "Tamil Nadu", "Andhra Pradesh"],
    priceRange: "₹800 - ₹50,000",
    popularProducts: ["Banarasi Silk Sarees", "Kanjivaram Silk", "Pochampally Ikat", "Bhagalpuri Silk"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    name: "Tribal Jewelry",
    description: "Traditional jewelry with tribal motifs in silver, beads, and natural materials",
    icon: <Gem className="h-10 w-10" />,
    artisans: "200K+ artisans",
    regions: ["Rajasthan", "Gujarat", "Jharkhand", "Chhattisgarh"],
    priceRange: "₹500 - ₹25,000",
    popularProducts: ["Dhokra Jewelry", "Silver Tribal Sets", "Bead Work", "Lac Bangles"],
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 3,
    name: "Pottery & Terracotta",
    description: "Traditional clay pottery, terracotta artifacts, and decorative items",
    icon: <Home className="h-10 w-10" />,
    artisans: "300K+ potters",
    regions: ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "West Bengal"],
    priceRange: "₹200 - ₹10,000",
    popularProducts: ["Blue Pottery", "Terracotta Sculptures", "Clay Cookware", "Decorative Tiles"],
    color: "from-red-500 to-orange-500"
  },
  {
    id: 4,
    name: "Bamboo & Cane Crafts",
    description: "Eco-friendly products made from sustainable bamboo and cane",
    icon: <Leaf className="h-10 w-10" />,
    artisans: "150K+ craftsmen",
    regions: ["Assam", "Tripura", "Manipur", "Nagaland"],
    priceRange: "₹300 - ₹15,000",
    popularProducts: ["Bamboo Furniture", "Cane Baskets", "Bamboo Decor", "Eco-friendly Utensils"],
    color: "from-emerald-500 to-green-500"
  },
  {
    id: 5,
    name: "Metal Crafts",
    description: "Traditional metal work in brass, copper, and bell metal",
    icon: <Sparkles className="h-10 w-10" />,
    artisans: "100K+ metal workers",
    regions: ["Tamil Nadu", "Kerala", "Rajasthan", "Uttar Pradesh"],
    priceRange: "₹500 - ₹30,000",
    popularProducts: ["Brware Items", "Copper Utensils", "Metal Sculptures", "Bell Metal Crafts"],
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 6,
    name: "Natural Fiber Crafts",
    description: "Products made from jute, coir, grass, and other natural fibers",
    icon: <Droplets className="h-10 w-10" />,
    artisans: "250K+ artisans",
    regions: ["Kerala", "West Bengal", "Bihar", "Odisha"],
    priceRange: "₹150 - ₹8,000",
    popularProducts: ["Jute Bags", "Coir Mats", "Grass Baskets", "Palm Leaf Products"],
    color: "from-teal-500 to-cyan-500"
  }
]

export default function Crafts() {
  return (
    <div className="space-y-8 px-4 py-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
          Craft Categories
        </h1>
        <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
          Explore India's rich heritage of traditional crafts, each with unique techniques and cultural significance.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border text-center">
          <div className="text-3xl font-bold text-emerald-600">2,000+</div>
          <div className="text-gray-600">Craft Varieties</div>
        </div>
        <div className="bg-white p-6 rounded-xl border text-center">
          <div className="text-3xl font-bold text-emerald-600">500+</div>
          <div className="text-gray-600">GI Tagged Crafts</div>
        </div>
        <div className="bg-white p-6 rounded-xl border text-center">
          <div className="text-3xl font-bold text-emerald-600">7M+</div>
          <div className="text-gray-600">Artisans Employed</div>
        </div>
      </div>

      {/* Crafts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {craftCategories.map((craft) => (
          <Card key={craft.id} className="border-emerald-100 hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${craft.color} rounded-xl flex items-center justify-center`}>
                    <div className="text-white">{craft.icon}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-emerald-600">From</span>
                    <div className="text-lg font-bold text-gray-900">{craft.priceRange.split(' - ')[0]}</div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {craft.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {craft.description}
                </p>

                {/* Stats */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{craft.artisans}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{craft.regions.join(', ')}</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{craft.priceRange}</span>
                  </div>
                </div>

                {/* Popular Products */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Products</h4>
                  <div className="flex flex-wrap gap-2">
                    {craft.popularProducts.slice(0, 3).map((product, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <div className="mt-auto pt-4 border-t">
                  <Link to={`/crafts/${craft.id}`}>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      View Collection
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cultural Significance */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold text-center mb-8">
          Cultural Significance of Indian Crafts
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/10 rounded-xl">
            <div className="text-4xl mb-4">🏺</div>
            <h4 className="font-bold text-lg mb-2">Heritage Preservation</h4>
            <p className="text-emerald-100 text-sm">
              Crafts preserve centuries-old techniques and cultural identity
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/10 rounded-xl">
            <div className="text-4xl mb-4">👥</div>
            <h4 className="font-bold text-lg mb-2">Community Livelihood</h4>
            <p className="text-emerald-100 text-sm">
              Supports millions of families across rural India
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/10 rounded-xl">
            <div className="text-4xl mb-4">🌍</div>
            <h4 className="font-bold text-lg mb-2">Sustainable Development</h4>
            <p className="text-emerald-100 text-sm">
              Eco-friendly materials and sustainable production methods
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <div className="inline-block bg-gradient-to-r from-white to-emerald-50 border-2 border-emerald-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Support Traditional Crafts
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Every purchase helps preserve India's cultural heritage and supports artisan communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/marketplace">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                Shop Now
              </Button>
            </Link>
            <Link to="/artisans">
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 px-8">
                Meet Artisans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}