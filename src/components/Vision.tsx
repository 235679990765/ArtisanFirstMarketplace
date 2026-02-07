import { Card, CardContent } from './ui/card'
import { Target, Heart, Globe, Users, Sparkles, Star } from 'lucide-react'

export default function Vision() {
  const visionPoints = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Artisans as Entrepreneurs",
      description: "Transforming artisans from laborers to business owners with market access",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Cultural Preservation",
      description: "Keeping traditional crafts alive and valued in modern markets",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Technology as Enabler",
      description: "Using tech to bridge gaps, not create new barriers",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community-Led Growth",
      description: "Platform owned and shaped by the artisan communities",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const futureGoals = [
    "500,000 artisans empowered within 5 years",
    "50% average income increase for artisans",
    "100+ traditional crafts preserved digitally",
    "Pan-India network of collection centers",
    "Export partnerships for international markets"
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Sparkles className="h-5 w-5" />
            <span className="font-bold">Our Vision for the Future</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Reimagining the Future of Indian Crafts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We envision a future where every artisan can thrive with dignity, 
            where tradition meets opportunity, and where technology serves communities.
          </p>
        </div>

        {/* Vision Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {visionPoints.map((point, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-xl flex items-center justify-center mb-6`}>
                  <div className="text-white">{point.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Philosophy */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Our Core Philosophy
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-amber-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-200">Artisan = Owner, not labour</h4>
                    <p className="text-emerald-100">We treat artisans as entrepreneurs, not workers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-amber-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-200">Culture = Asset, not commodity</h4>
                    <p className="text-emerald-100">Traditional crafts are cultural treasures to preserve</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-amber-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-200">Market = Fair & transparent</h4>
                    <p className="text-emerald-100">Every transaction should benefit the creator fairly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-amber-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-200">Technology = Service, not exploitation</h4>
                    <p className="text-emerald-100">Tech should empower, not extract value</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-6 text-center">
                The Future We're Building
              </h4>
              <div className="space-y-4">
                {futureGoals.map((goal, index) => (
                  <div 
                    key={index} 
                    className="flex items-center bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-emerald-100">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Impact Visualization */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Expected Impact Over 5 Years
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-b from-emerald-50 to-white rounded-xl border border-emerald-100">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500K+</div>
              <p className="text-gray-600 font-semibold">Artisans Empowered</p>
              <div className="mt-4 h-2 bg-emerald-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-3/4"></div>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-amber-50 to-white rounded-xl border border-amber-100">
              <div className="text-4xl font-bold text-amber-600 mb-2">50%</div>
              <p className="text-gray-600 font-semibold">Income Increase</p>
              <div className="mt-4 h-2 bg-amber-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full w-2/3"></div>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-teal-50 to-white rounded-xl border border-teal-100">
              <div className="text-4xl font-bold text-teal-600 mb-2">100+</div>
              <p className="text-gray-600 font-semibold">Crafts Preserved</p>
              <div className="mt-4 h-2 bg-teal-100 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 rounded-full w-4/5"></div>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-white rounded-xl border border-purple-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">1M+</div>
              <p className="text-gray-600 font-semibold">Sustainable Livelihoods</p>
              <div className="mt-4 h-2 bg-purple-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full w-1/2"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              "This platform is not just a marketplace — it is a livelihood bridge 
              between tradition and opportunity."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}