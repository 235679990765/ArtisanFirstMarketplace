import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { 
  MapPin,
  Users,
  Target,
  Calendar,
  CheckCircle,
  Award,
  Mail,
  Phone
} from 'lucide-react'
import { useState } from 'react'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { useToast } from '../hooks/use-toast'

const pilotRegions = [
  {
    id: 1,
    name: "Odisha Cluster",
    crafts: ["Handloom Textiles", "Silver Filigree", "Pattachitra"],
    artisans: "5,000+ weavers",
    partners: "10 SHGs, 2 NGOs",
    timeline: "Q1 2024",
    status: "Accepting Applications",
    image: "🏺",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    name: "Rajasthan Cluster",
    crafts: ["Blue Pottery", "Block Printing", "Tribal Jewelry"],
    artisans: "3,000+ artisans",
    partners: "15 artisan cooperatives",
    timeline: "Q2 2024",
    status: "Planning Phase",
    image: "🕌",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 3,
    name: "Assam Cluster",
    crafts: ["Bamboo Crafts", "Silk Weaving", "Cane Products"],
    artisans: "2,500+ craftsmen",
    partners: "8 tribal federations",
    timeline: "Q3 2024",
    status: "Coming Soon",
    image: "🎋",
    color: "from-emerald-500 to-teal-500"
  }
]

const benefits = [
  {
    title: "Zero Upfront Cost",
    description: "No investment required from artisans to join",
    icon: "💰"
  },
  {
    title: "Complete Support",
    description: "Dedicated field coordinator assistance",
    icon: "🤝"
  },
  {
    title: "Fair Pricing",
    description: "Artisans earn 70-80% of product value",
    icon: "⚖️"
  },
  {
    title: "Market Access",
    description: "National customer base from day one",
    icon: "🌍"
  }
]

export default function Pilot() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    region: '',
    artisanCount: '',
    crafts: '',
    message: ''
  })

  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, this would connect to backend
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 3 business days.",
      variant: "default",
    })
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      region: '',
      artisanCount: '',
      crafts: '',
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
    <div className="space-y-8 px-4 py-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Pilot Program
        </h1>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto">
          Join our pilot program and be among the first artisan communities 
          to experience the future of fair trade.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border text-center">
          <div className="text-2xl font-bold text-blue-600">3</div>
          <div className="text-sm text-gray-600">Pilot Regions</div>
        </div>
        <div className="bg-white p-4 rounded-xl border text-center">
          <div className="text-2xl font-bold text-blue-600">500+</div>
          <div className="text-sm text-gray-600">Target Artisans</div>
        </div>
        <div className="bg-white p-4 rounded-xl border text-center">
          <div className="text-2xl font-bold text-blue-600">0</div>
          <div className="text-sm text-gray-600">Upfront Cost</div>
        </div>
        <div className="bg-white p-4 rounded-xl border text-center">
          <div className="text-2xl font-bold text-blue-600">6</div>
          <div className="text-sm text-gray-600">Months Support</div>
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Benefits for Pilot Participants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-blue-100 text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pilot Regions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Pilot Regions & Timeline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pilotRegions.map((region) => (
            <Card key={region.id} className="border-blue-100 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                        <h3 className="text-xl font-bold text-gray-900">{region.name}</h3>
                      </div>
                      <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {region.status}
                      </div>
                    </div>
                    <div className="text-3xl">{region.image}</div>
                  </div>
                  
                  {/* Crafts */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Featured Crafts</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.crafts.map((craft, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-2 py-1 rounded"
                        >
                          {craft}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{region.artisans}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                      <span>{region.partners}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-amber-500" />
                      <span>Launch: {region.timeline}</span>
                    </div>
                  </div>
                  
                  {/* Status */}
                  <div className="mt-auto pt-4 border-t">
                    {region.status === 'Accepting Applications' ? (
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Apply Now
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-blue-100">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Apply for Pilot Program
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
                    placeholder="SHG/Cooperative/NGO"
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
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Preferred Pilot Region *
                </label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  required
                >
                  <option value="">Select Region</option>
                  <option value="odisha">Odisha Cluster</option>
                  <option value="rajasthan">Rajasthan Cluster</option>
                  <option value="assam">Assam Cluster</option>
                  <option value="other">Other Region</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Number of Artisans *
                  </label>
                  <Input
                    name="artisanCount"
                    value={formData.artisanCount}
                    onChange={handleChange}
                    placeholder="e.g., 50"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Crafts/Specialties *
                  </label>
                  <Input
                    name="crafts"
                    value={formData.crafts}
                    onChange={handleChange}
                    placeholder="e.g., Handloom, Pottery, Jewelry"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Tell us about your artisan group *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Brief description of your artisan community, experience, and expectations..."
                  className="min-h-[100px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Submit Application
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                We'll respond within 3 business days
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Program Details */}
        <div className="space-y-6">
          <Card className="border-emerald-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What to Expect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Onboarding</h4>
                    <p className="text-sm text-gray-600">Dedicated coordinator for 6 months</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Training & Support</h4>
                    <p className="text-sm text-gray-600">Product photography, pricing, quality standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Collection Center Setup</h4>
                    <p className="text-sm text-gray-600">Local center for quality check and shipping</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Eligibility Criteria
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                  Minimum 20 artisans in group
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                  Established craft practice (1+ years)
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                  Local coordinator available
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                  Bank account for payments
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                  Commitment to quality standards
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">
              Need Help Applying?
            </h3>
            <p className="text-blue-100 mb-4">
              Contact our pilot program coordinator for assistance with your application.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>pilot@artisanmarket.in</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>1800-ARTISAN (278-4726)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Community?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Join our pilot program and be part of the fair trade revolution.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            Apply Now
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Limited spots available. Applications reviewed on rolling basis.
          </p>
        </div>
      </div>
    </div>
  )
}