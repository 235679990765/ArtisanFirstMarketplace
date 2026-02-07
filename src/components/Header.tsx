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
import { Input } from './ui/input'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { path: '/marketplace', label: 'Marketplace', icon: <Store className="h-4 w-4 mr-2" /> },
    { path: '/artisans', label: 'Artisans', icon: <User className="h-4 w-4 mr-2" /> },
    { path: '/crafts', label: 'Crafts', icon: <Heart className="h-4 w-4 mr-2" /> },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/vision', label: 'Our Vision' },
    // { path: '/pilot-program', label: 'Join Pilot' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <img
              src="/icon.png"
              alt="ArtisanMarket Logo"
              className="h-10 w-10"
            />
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-emerald-900">
                ArtisanMarket
              </div>
              <div className="text-xs text-amber-600">
                Fair Trade • Direct Selling
              </div>
            </div>
          </Link>

          {/* Desktop Navigation (>=1024px) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                  ${isActive
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

          {/* Desktop Search (>=1024px) */}
          <div className="hidden lg:block relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search crafts..."
              className="pl-9 w-64 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          {/* Mobile / iPad Menu Button (<1024px) */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile & iPad Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4 animate-in slide-in-from-top duration-300">
            
            {/* Search */}
            <div className="relative mb-4 px-2">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search crafts..."
                className="pl-9 w-full"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-1 px-2">
              {navLinks.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 text-base rounded-lg transition-colors
                    ${isActive
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
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
