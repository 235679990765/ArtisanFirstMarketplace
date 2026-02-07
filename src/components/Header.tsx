import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from './ui/button'
import { 
  Menu, 
  X,  
  User,
  Search,
  Heart,
  Store
} from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Input } from './ui/input'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount } = useCart()

  const navLinks = [
    { path: '/marketplace', label: 'Marketplace', icon: <Store className="h-4 w-4 mr-2" /> },
    { path: '/artisans', label: 'Artisans', icon: <User className="h-4 w-4 mr-2" /> },
    { path: '/crafts', label: 'Crafts', icon: <Heart className="h-4 w-4 mr-2" /> },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/vision', label: 'Our Vision' },
    { path: '/pilot-program', label: 'Join Pilot' },
    { path: '/blog', label: 'Blog' }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">

            <div>
              <div className="font-bold text-xl text-emerald-900">ArtisanMarket</div>
              <div className="text-xs text-amber-600">Fair Trade • Direct Selling</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                  ${
                    isActive
                      ? 'text-emerald-700 border-b-2 border-emerald-600'
                      : 'text-gray-700 hover:text-emerald-600'
                  }`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
  
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search crafts..."
                className="pl-9 w-64 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              </DropdownMenuTrigger>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 animate-in slide-in-from-top duration-300">
            <div className="space-y-2 px-2">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search crafts..."
                  className="pl-9 w-full"
                />
              </div>

              {/* Mobile Navigation */}
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                    ${
                      isActive
                        ? 'text-emerald-700 border-b-2 border-emerald-600'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                    }`
                  }
                >
                  {link.icon}
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}