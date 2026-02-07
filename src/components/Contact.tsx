import { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { 
  Mail,
  Phone,
  MapPin,
  User,
  Building,
  Send,
  MessageSquare,
  Clock,
  CheckCircle
} from 'lucide-react'
import { useToast } from '../hooks/use-toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    interest: 'partnership'
  })

  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would connect to a backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
      variant: "default",
    })
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      message: '',
      interest: 'partnership'
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "hello@artisanmarket.in",
      description: "General inquiries"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Helpline",
      details: "1800-ARTISAN (278-4726)",
      description: "Monday to Saturday, 9 AM - 6 PM"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Ahmedabad, India",
      description: "Working Pan-India"
    }
  ]

  const partnershipTypes = [
    {
      type: "Artisan Groups",
      description: "SHGs, Cooperatives, Craft Clusters"
    },
    {
      type: "NGO Partners",
      description: "Field implementation & training"
    },
    {
      type: "Corporate CSR",
      description: "Funding and program support"
    },
    {
      type: "Government Agencies",
      description: "TRIFED, MoTA, State Departments"
    },
    {
      type: "Logistics Partners",
      description: "Collection center operations"
    },
    {
      type: "Tech Volunteers",
      description: "Platform development support"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <MessageSquare className="h-5 w-5" />
            <span className="font-semibold">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Build This Together
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're looking for partners, collaborators, and supporters who 
            believe in our vision of empowering India's artisans.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-emerald-100 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
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
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Organization
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Your organization"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    I'm interested in *
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  >
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="artisan-onboarding">Artisan Onboarding</option>
                    <option value="investment">Investment/CSR</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="press">Press/Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest in partnering with us..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 24 hours
                </p>
              </form>

            {/* Founder Information */}
            <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white top-8 mt-12">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Founder's Note
                </h3>
                <div className="space-y-3">
                  <p className="text-emerald-100">
                    "This platform is born from a simple belief: every artisan deserves 
                    fair compensation for their skill and heritage. We're not just building 
                    a marketplace; we're creating a movement for economic dignity."
                  </p>
                  <div className="pt-3 border-t border-emerald-500">
                    <p className="font-semibold">Rot Anil</p>
                    <p className="text-sm text-emerald-200">Founder, ArtisanMarket</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </CardContent>
          </Card>

          {/* Contact Information & Partnerships */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-emerald-100 p-3 rounded-lg">
                        <div className="text-emerald-600">{info.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-lg text-emerald-600 font-medium">{info.details}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <span className="font-semibold text-amber-700">Response Time</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    We aim to respond to all inquiries within 24 hours. 
                    For urgent matters, please call our helpline.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Partnership Opportunities */}
            <Card className="border-amber-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Partnership Opportunities
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {partnershipTypes.map((partner, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-lg border border-emerald-100 hover:border-emerald-300 transition-colors"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <h4 className="font-semibold text-emerald-700">{partner.type}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{partner.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Currently inviting partners for our pilot phase across India
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-emerald-100 to-amber-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're an artisan, partner, volunteer, or supporter, 
              there's a place for you in our mission.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Join as Artisan
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600">
                Become a Partner
              </Button>
              <Button size="lg" variant="ghost" className="text-gray-600">
                Volunteer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}