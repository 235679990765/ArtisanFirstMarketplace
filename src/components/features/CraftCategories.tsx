import { Card, CardContent } from '../ui/card'
import { 
  Sparkles,
  Palette,
  Gem,
  Home,
  Leaf,
  Droplets
} from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const craftCategories = [
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Handloom Textiles",
    description: "Traditional weaves, sarees, dupattas, and fabrics",
    artisans: "500K+ weavers",
    regions: "Odisha, West Bengal, Tamil Nadu, Andhra Pradesh",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Gem className="h-10 w-10" />,
    title: "Tribal Jewelry",
    description: "Silver, bead, and metal jewelry with tribal motifs",
    artisans: "200K+ artisans",
    regions: "Rajasthan, Gujarat, Jharkhand, Chhattisgarh",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: <Home className="h-10 w-10" />,
    title: "Pottery & Terracotta",
    description: "Traditional clay pottery and decorative items",
    artisans: "300K+ potters",
    regions: "Uttar Pradesh, Madhya Pradesh, Rajasthan",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: <Leaf className="h-10 w-10" />,
    title: "Bamboo & Cane Crafts",
    description: "Eco-friendly furniture, decor, and utility items",
    artisans: "150K+ craftsmen",
    regions: "Assam, Tripura, Manipur, Nagaland",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Metal Crafts",
    description: "Brass, copper, and bell metal artifacts",
    artisans: "100K+ metal workers",
    regions: "Tamil Nadu, Kerala, Rajasthan, Uttar Pradesh",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: <Droplets className="h-10 w-10" />,
    title: "Natural Fiber Crafts",
    description: "Jute, coir, grass, and palm leaf products",
    artisans: "250K+ artisans",
    regions: "Kerala, West Bengal, Bihar, Odisha",
    color: "from-teal-500 to-cyan-500"
  }
]

export default function CraftCategories() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">Craft Categories</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            India's Rich Craft Heritage
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the diversity of traditional crafts preserved by artisans 
            across India's regions and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {craftCategories.map((craft, index) => (
            <Card 
              key={index}
              className="border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${craft.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">{craft.icon}</div>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {craft.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {craft.description}
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-3 mb-6 mt-auto">
                    <div className="flex items-start text-sm">
                      <div className="bg-emerald-100 text-emerald-600 rounded-full px-2 py-1 mr-2">
                        👥
                      </div>
                      <div>
                        <span className="font-semibold">{craft.artisans}</span>
                        <p className="text-gray-500">Artisans</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start text-sm">
                      <div className="bg-amber-100 text-amber-600 rounded-full px-2 py-1 mr-2">
                        🗺️
                      </div>
                      <div>
                        <span className="font-semibold">{craft.regions.split(', ').length}+</span>
                        <p className="text-gray-500">Regions • {craft.regions.split(', ')[0]}, {craft.regions.split(', ')[1]}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* View Button */}
                  <Link to={`/crafts/${craft.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                    <Button variant="outline" className="w-full border-emerald-200 text-emerald-600 hover:bg-emerald-50">
                      View Collection
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regional Diversity */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Craft Diversity Across India
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl mb-2">🏔️</div>
              <h4 className="font-bold mb-2">Himalayan Region</h4>
              <p className="text-sm text-emerald-100">Wood carving, woolen crafts, metalwork</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl mb-2">🏜️</div>
              <h4 className="font-bold mb-2">Desert Region</h4>
              <p className="text-sm text-emerald-100">Blue pottery, leatherwork, embroidery</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl mb-2">🌴</div>
              <h4 className="font-bold mb-2">Coastal Region</h4>
              <p className="text-sm text-emerald-100">Shell crafts, coir products, fishing net crafts</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl mb-2">🌳</div>
              <h4 className="font-bold mb-2">Forest Region</h4>
              <p className="text-sm text-emerald-100">Bamboo crafts, tribal art, natural dyes</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-white to-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Preserve Heritage, Support Artisans
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Every craft tells a story of cultural heritage and skilled 
              craftsmanship. Support artisans directly and keep traditions alive.
            </p>
            
            <Link to="/marketplace">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                Explore All Crafts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}