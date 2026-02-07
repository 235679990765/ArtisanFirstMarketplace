import { Card, CardContent } from '../components/ui/card'
import { 
  Users,
  Target,
  Heart,
  Globe,
  Award,
  TrendingUp,
  Shield,
  Sparkles
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

const team = [
  {
    name: "Priya Sharma",
    role: "Founder & CEO",
    bio: "15+ years in social entrepreneurship and tribal development",
    image: "👩‍💼",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Rajesh Kumar",
    role: "Head of Artisan Relations",
    bio: "Former SHG leader with deep grassroots connections",
    image: "👨‍🌾",
    color: "from-emerald-500 to-teal-500"
  },
  {
    name: "Anita Desai",
    role: "Technology Lead",
    bio: "Expert in building inclusive digital platforms",
    image: "👩‍💻",
    color: "from-blue-500 to-indigo-500"
  },
  {
    name: "Arvind Singh",
    role: "Cultural Heritage Advisor",
    bio: "Former NID professor, craft documentation expert",
    image: "👨‍🏫",
    color: "from-amber-500 to-orange-500"
  }
]

const values = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Empathy First",
    description: "We design from the artisan's perspective, not ours"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Transparency",
    description: "Complete visibility in pricing and operations"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community-Led",
    description: "Artisans shape the platform, we just build it"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Sustainability",
    description: "Environmental, economic, and cultural sustainability"
  }
]

export default function About() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
          About ArtisanMarket
        </h1>
        <p className="text-lg text-purple-700 max-w-3xl mx-auto">
          We're building more than a marketplace - we're creating an ecosystem 
          where traditional crafts thrive and artisans prosper.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-purple-100">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 mb-4">
              To empower India's tribal and home-based artisans with direct market access, 
              fair compensation, and digital tools that respect their cultural context and 
              traditional knowledge.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-purple-700 italic">
                "Technology should serve artisans, not exploit them."
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-100">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Sparkles className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 mb-4">
              A future where every artisan is an entrepreneur, every craft is valued, 
              and traditional knowledge is preserved for generations to come.
            </p>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="text-amber-700 italic">
                "Building livelihood bridges between tradition and opportunity."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Story */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-8">
          Our Story
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-emerald-100 mb-4">
              ArtisanMarket was born from a simple observation: despite creating 
              some of the world's most beautiful crafts, India's artisans remain 
              among its most economically vulnerable communities.
            </p>
            <p className="text-emerald-100 mb-4">
              After years of working with tribal communities and artisan groups, 
              we saw the same patterns: middlemen taking most of the profit, 
              digital platforms being inaccessible, and traditional crafts 
              disappearing as younger generations sought other work.
            </p>
            <p className="text-emerald-100">
              We asked: What if we could use technology to bridge these gaps? 
              What if we could build a platform designed specifically for 
              artisans, not adapted from urban e-commerce models?
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">The Turning Point</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-amber-300 mr-3" />
                <span className="text-emerald-100">2018: Research phase across 50+ artisan clusters</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-amber-300 mr-3" />
                <span className="text-emerald-100">2020: Pilot concept development with SHGs</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-amber-300 mr-3" />
                <span className="text-emerald-100">2022: Platform design with artisan feedback</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-amber-300 mr-3" />
                <span className="text-emerald-100">2024: Pilot launch preparation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="border-gray-200 text-center">
              <CardContent className="p-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}>
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-purple-100 text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <div className="text-purple-600">{value.icon}</div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-8">
          Our Impact Goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/10 rounded-xl">
            <div className="text-3xl font-bold mb-2">500K+</div>
            <p className="text-amber-100">Artisans Empowered</p>
            <p className="text-sm text-amber-200 mt-2">Within 5 years</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl">
            <div className="text-3xl font-bold mb-2">50%</div>
            <p className="text-amber-100">Income Increase</p>
            <p className="text-sm text-amber-200 mt-2">Average for artisans</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl">
            <div className="text-3xl font-bold mb-2">100+</div>
            <p className="text-amber-100">Crafts Preserved</p>
            <p className="text-sm text-amber-200 mt-2">Traditional techniques</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <div className="inline-block bg-gradient-to-r from-white to-purple-50 border-2 border-purple-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Journey
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Whether as an artisan, partner, or supporter, there's a place for 
            you in our mission to transform India's artisan economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pilot-program">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Join as Artisan
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 px-8">
                Partner with Us
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button size="lg" variant="ghost" className="text-gray-600 hover:bg-purple-100 px-8">
                Shop & Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}