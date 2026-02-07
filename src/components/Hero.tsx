import { Button } from './ui/button'
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute px-(-4) py-(-8) inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-800/90">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 "
          style={{ backgroundImage: `url('/src/assets/hero-artisan.jpg')` }}
        />
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto py-16 px-4 flex flex-col items-start">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-sm text-white font-medium">Fair Trade • Direct Selling • Community Led</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            <span className="text-amber-300 bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text">
              Artisan First
            </span>{' '}
            Marketplace
            <br />
            <span className="text-emerald-200">for Tribal & Home Based</span>
            <br />
            <span className="text-amber-200">Artisans of India</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up delay-100">
            Empowering artisans to showcase, sell, and sustain their craft
            without middlemen, language barriers, or digital complexity.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up delay-200">
            <Link to="/marketplace">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold">
                <PlayCircle className="mr-2 h-5 w-5" />
                How It Works
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white animate-fade-in delay-300">
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-amber-300">0%</div>
              <div className="text-sm opacity-90">Middlemen Commission</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-amber-300">10+</div>
              <div className="text-sm opacity-90">Indian Languages</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-amber-300">100%</div>
              <div className="text-sm opacity-90">Direct Payment</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-amber-300">50%+</div>
              <div className="text-sm opacity-90">Higher Income</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}