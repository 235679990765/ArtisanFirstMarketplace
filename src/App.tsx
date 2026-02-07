import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { CartProvider } from './contexts/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from './components/ui/sonner'

// Pages
import Index from './pages/Index'
import Marketplace from './pages/Marketplace'
import Artisans from './pages/Artisans'
import Crafts from './pages/Crafts'
import HowItWorks from './pages/HowItWorks'
import Vision from './pages/Vision'
import Pilot from './pages/Pilot'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import About from './pages/About'
import Blog from './pages/Blog'
import Partner from './pages/Partner'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <ThemeProvider>
          <CartProvider>
            <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
              <Header />
              <main className="w-full">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/artisans" element={<Artisans />} />
                  <Route path="/crafts" element={<Crafts />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/vision" element={<Vision />} />
                  <Route path="/pilot-program" element={<Pilot />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/partner" element={<Partner />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <Toaster />
            </div>
          </CartProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App