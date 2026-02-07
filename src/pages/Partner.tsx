import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { 
  Handshake,
  Users,
  Building,
  Target,
  Award,
  Shield,
  TrendingUp,
  Mail,
  Phone
} from 'lucide-react'
import { useState } from 'react'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { useToast } from '../hooks/use-toast'

const partnershipTypes = [
  {
    title: "Artisan Groups & Cooperatives",
    description: "SHGs, artisan clusters, craft cooperatives",
    benefits: [
      "Direct market access for members",
      "Collective bargaining power",
      "Training and capacity building"
    ],
    icon: "👥",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "NGOs & Social Enterprises",
    description: "Organizations working in artisan development",
    benefits: [
      "Technology platform for your beneficiaries",
      "Impact measurement and reporting",
      "Program implementation support"
    ],
    icon: "🌱",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Corporate CSR Partners",
    description: "Companies with artisan-focused CSR programs",
    benefits: [
      "Proven impact model",
      "Transparent reporting",
      "Employee engagement opportunities"
    ],
    icon: "🏢",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Government Agencies",
    description: "TRIFED, MoTA, State Handicraft Boards",
    benefits: [
      "Complement existing programs",
      "Enhanced reach and impact",
      "Digital transformation support"
    ],
    icon: "🏛️",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Logistics & Supply Chain",
    description: "Last-mile delivery, collection centers",
    benefits: [
      "Scale operations with our network",
      "Cost-effective rural logistics",
      "Technology integration"
    ],
    icon: "🚚",
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Tech & Innovation Partners",
    description: "Tech companies, volunteers, researchers",
    benefits: [
      "Solve real-world problems",
      "Access to field data",
      "Social impact at scale"
    ],
    icon: "💻",
    color: "from-green-500 to-emerald-500"
  }
]

export default function Partner() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    partnershipType: '',
    organizationType: '',
    message: ''
  })

  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Partnership Request Sent!",
      description: "We'll contact you within 2 business days.",
      variant: "default",
    })
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      partnershipType: '',
      organizationType: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Partnership Opportunities
        </h1>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto">
          Join us in building a sustainable ecosystem for India's artisans. 
          Together, we can create greater impact.
        </p>
      </div>

      {/* Why Partner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Partner With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/10 rounded-xl">
            <Target className="h-12 w-12 mx-auto mb-4 text-blue-200" />
            <h3 className="font-bold text-lg mb-2">Proven Model</h3>
            <p className="text-blue-100 text-sm">
              Field-tested approach with 90% artisan retention
            </p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl">
            <Shield className="h-12 w-12 mx-auto mb-4 text-blue-200" />
            <h3 className="font-bold text-lg mb-2">Transparent Operations</h3>
            <p className="text-blue-100 text-sm">
              Complete visibility into impact and finances
            </p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 text-blue-200" />
            <h3 className="font-bold text-lg mb-2">Scalable Impact</h3>
            <p className="text-blue-100 text-sm">
              Replicable model across regions and crafts
            </p>
          </div>
        </div>
      </div>

      {/* Partnership Types */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Partnership Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnershipTypes.map((type, index) => (
            <Card key={index} className="border-blue-100 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-lg flex items-center justify-center text-2xl`}>
                      {type.icon}
                    </div>
                    <Award className="h-5 w-5 text-blue-400" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {type.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2 mb-6 mt-auto">
                    <h4 className="text-sm font-semibold text-gray-700">Benefits:</h4>
                    {type.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  {/* Action */}
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => setFormData(prev => ({ ...prev, partnershipType: type.title }))}
                  >
                    Express Interest
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partnership Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-blue-100">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Become a Partner
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Contact Person *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Organization *
                  </label>
                  <Input
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Organization Name"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Partnership Interest *
                  </label>
                  <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    required
                  >
                    <option value="">Select Type</option>
                    {partnershipTypes.map((type) => (
                      <option key={type.title} value={type.title}>
                        {type.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Organization Type *
                  </label>
                  <select
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="ngo">NGO / Non-Profit</option>
                    <option value="corporate">Corporate / CSR</option>
                    <option value="government">Government Agency</option>
                    <option value="cooperative">Artisan Cooperative</option>
                    <option value="logistics">Logistics Partner</option>
                    <option value="tech">Tech Company</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Tell us about your interest *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How would you like to partner with us? What impact are you looking to create?"
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Handshake className="mr-2 h-5 w-5" />
                Submit Partnership Request
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                We typically respond within 2 business days
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Partnership Benefits */}
        <div className="space-y-6">
          <Card className="border-emerald-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Commitment to Partners
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dedicated Support</h4>
                    <p className="text-sm text-gray-600">Assigned partnership manager</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Co-Branding Opportunities</h4>
                    <p className="text-sm text-gray-600">Joint marketing and visibility</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Impact Measurement</h4>
                    <p className="text-sm text-gray-600">Regular reports and analytics</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Current Partner Network
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">50+</div>
                  <div className="text-sm text-gray-600">NGO Partners</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">20+</div>
                  <div className="text-sm text-gray-600">Corporate Partners</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">10+</div>
                  <div className="text-sm text-gray-600">Government Agencies</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">5+</div>
                  <div className="text-sm text-gray-600">International Partners</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">
              Partnership Queries
            </h3>
            <p className="text-blue-100 mb-4">
              Have questions about partnership opportunities? Contact our 
              partnerships team directly.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>partners@artisanmarket.in</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 98765 43210 (Partnerships Desk)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Partner With Us?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Join our growing network of partners creating sustainable impact 
            for India's artisan communities.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Handshake className="mr-2 h-5 w-5" />
            Start Partnership Conversation
          </Button>
        </div>
      </div>
    </div>
  )
}