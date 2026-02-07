import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart
} from 'lucide-react'
import { Input } from './ui/input'

export default function Footer() {
  const footerLinks = {
    Marketplace: [
      { label: 'Handloom Textiles', path: '/crafts/textiles' },
      { label: 'Pottery & Ceramics', path: '/crafts/pottery' },
      { label: 'Jewelry & Accessories', path: '/crafts/jewelry' },
      { label: 'Wood & Bamboo Crafts', path: '/crafts/wood' },
      { label: 'Natural Fiber Products', path: '/crafts/fiber' }
    ],
    Support: [
      { label: 'Help Center', path: '/help' },
      { label: 'Artisan Support', path: '/artisan-support' },
      { label: 'Shipping Policy', path: '/shipping' },
      { label: 'Returns & Refunds', path: '/returns' },
      { label: 'FAQs', path: '/faq' }
    ],
    Company: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Vision', path: '/vision' },
      { label: 'Blog', path: '/blog' },
      { label: 'Careers', path: '/careers' },
      { label: 'Press Kit', path: '/press' }
    ],
    Legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
      { label: 'Accessibility', path: '/accessibility' }
    ]
  }

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, label: 'Facebook', url: '#' },
    { icon: <Instagram className="h-5 w-5" />, label: 'Instagram', url: '#' },
    { icon: <Twitter className="h-5 w-5" />, label: 'Twitter', url: '#' },
    { icon: <Youtube className="h-5 w-5" />, label: 'YouTube', url: '#' }
  ]

  return (
    <footer className="bg-emerald-900 text-white mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">ArtisanMarket</h2>
                <p className="text-emerald-200">Fair Trade • Direct Selling</p>
              </div>
            </div>
            <p className="text-emerald-200 mb-6 max-w-md">
              Empowering tribal and home-based artisans with a fair, simple, and 
              community-led marketplace. Every purchase supports traditional crafts 
              and sustainable livelihoods.
            </p>
            
            {/* Newsletter */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email address" 
                  className="bg-emerald-800 border-emerald-700 text-white placeholder:text-emerald-300"
                />
                <Button className="bg-amber-500 hover:bg-amber-600">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-emerald-300 mt-2">
                Join our community of conscious buyers
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.path}
                      className="text-emerald-200 hover:text-amber-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-emerald-800 mt-8 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-amber-300" />
            <div>
              <p className="text-sm text-emerald-300">Email</p>
              <p>support@artisanmarket.in</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-amber-300" />
            <div>
              <p className="text-sm text-emerald-300">Helpline</p>
              <p>1800-ARTISAN (1800-278-4726)</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-amber-300" />
            <div>
              <p className="text-sm text-emerald-300">Headquarters</p>
              <p>Ahmedabad, India • Working Pan-India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-emerald-300">
              © {new Date().getFullYear()} ArtisanMarket. All rights reserved.
            </p>
            <p className="text-sm text-emerald-400">
              Made with ❤️ for India's artisans
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="bg-emerald-800 hover:bg-emerald-700 p-2 rounded-full transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Partnership Badges */}
            <div className="flex items-center space-x-2">
              <div className="bg-white text-emerald-900 px-3 py-1 rounded-full text-xs font-semibold">
                TRIFED Partner
              </div>
              <div className="bg-white text-emerald-900 px-3 py-1 rounded-full text-xs font-semibold">
                Fair Trade Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}