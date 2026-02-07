import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { 
  Calendar,
  User,
  Tag,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Heart
} from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "The Art of Banarasi Weaving: Preserving 500-Year-Old Techniques",
    excerpt: "How traditional Banarasi weavers are adapting to modern markets while preserving centuries-old techniques...",
    author: "Priya Sharma",
    date: "Dec 15, 2023",
    readTime: "5 min read",
    category: "Craft Stories",
    image: "🧵",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Digital Empowerment for Rural Artisans: Lessons from Our Pilot",
    excerpt: "Key insights from our first 100 artisans on making technology accessible without smartphones...",
    author: "Rajesh Kumar",
    date: "Dec 10, 2023",
    readTime: "7 min read",
    category: "Technology",
    image: "📱",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 3,
    title: "Fair Trade vs. Fair Price: Rethinking Artisan Compensation",
    excerpt: "Why paying artisans 70% of product value instead of 20% is both ethical and sustainable...",
    author: "Anita Desai",
    date: "Dec 5, 2023",
    readTime: "6 min read",
    category: "Economics",
    image: "💰",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    title: "Women Artisans of India: Stories of Resilience and Innovation",
    excerpt: "Celebrating the women who keep traditional crafts alive while breaking gender barriers...",
    author: "Meena Kumari",
    date: "Nov 28, 2023",
    readTime: "8 min read",
    category: "Women Empowerment",
    image: "👩‍🎨",
    color: "from-pink-500 to-red-500"
  },
  {
    id: 5,
    title: "Bamboo Crafts: Sustainable Livelihoods from Sustainable Materials",
    excerpt: "How bamboo crafts are creating eco-friendly livelihoods in Northeast India...",
    author: "Arjun Munda",
    date: "Nov 20, 2023",
    readTime: "4 min read",
    category: "Sustainability",
    image: "🎋",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 6,
    title: "The Future of Craft: How Technology Can Preserve Tradition",
    excerpt: "Exploring how AI and digital tools can help document and preserve endangered craft techniques...",
    author: "Dr. Arvind Singh",
    date: "Nov 15, 2023",
    readTime: "9 min read",
    category: "Innovation",
    image: "🤖",
    color: "from-amber-500 to-orange-500"
  }
]

const categories = [
  "All Topics",
  "Craft Stories",
  "Artisan Empowerment",
  "Technology",
  "Sustainability",
  "Market Insights",
  "Women in Crafts",
  "Cultural Heritage"
]

export default function Blog() {
  return (
    <div className="space-y-8 px-4 py-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
          Artisan Stories & Insights
        </h1>
        <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
          Discover the stories behind the crafts, insights on fair trade, 
          and innovations in artisan empowerment.
        </p>
      </div>

      {/* Featured Post */}
      <Card className="border-emerald-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <TrendingUp className="h-3 w-3 mr-1" />
              Featured Story
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Revolutionizing Rural Commerce: How Our Platform is Changing Lives
            </h2>
            <p className="text-gray-600 mb-6">
              A deep dive into how our hybrid digital-offline model is creating 
              sustainable livelihoods for thousands of artisans across India...
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  <span>Team ArtisanMarket</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Dec 20, 2023</span>
                </div>
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Read Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center p-8">
            <BookOpen className="h-24 w-24 text-white" />
          </div>
        </div>
      </Card>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            className={`rounded-full ${
              category === "All Topics" 
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'border-gray-300 text-gray-700'
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="border-gray-200 hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                {/* Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm font-medium text-emerald-600">
                      {post.category}
                    </span>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${post.color} rounded-lg flex items-center justify-center text-2xl`}>
                    {post.image}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-6 flex-1">
                  {post.excerpt}
                </p>
                
                {/* Meta */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-emerald-600">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-purple-100 mb-6">
              Get the latest stories, insights, and updates from the world of 
              artisan empowerment delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-purple-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-purple-600 hover:bg-purple-50">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="text-center">
            <Heart className="h-16 w-16 text-purple-200 mx-auto mb-4" />
            <p className="text-purple-200 italic">
              "Join our community of conscious readers"
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Have a Story to Share?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            We're always looking for authentic stories from artisans, partners, 
            and supporters in our ecosystem.
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Submit Your Story
          </Button>
        </div>
      </div>
    </div>
  )
}