import { Button } from '../../ui/button'
import { ShoppingCart, ArrowRight } from 'lucide-react'
import { useCart } from '../../../contexts/CartContext'
import { Link } from 'react-router-dom'

export default function CartPreview() {
  const { total, itemCount } = useCart()

  if (itemCount === 0) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4">
      <div className="bg-white rounded-xl shadow-2xl border border-emerald-200 p-4 min-w-80">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-emerald-600" />
              <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </div>
            </div>
            <span className="ml-2 font-semibold text-gray-900">Your Cart</span>
          </div>
          <span className="text-lg font-bold text-emerald-600">
            ₹{total.toLocaleString()}
          </span>
        </div>
        
        <div className="space-y-3">
          <div className="text-sm text-gray-500">
            {itemCount} item{itemCount > 1 ? 's' : ''} ready for checkout
          </div>
          
          <div className="flex gap-2">
            <Link to="/cart" className="flex-1">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                View Cart
              </Button>
            </Link>
            
            <Link to="/checkout" className="flex-1">
              <Button variant="outline" className="w-full border-emerald-600 text-emerald-600">
                Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="text-xs text-center text-gray-400">
            Free shipping on orders above ₹2000
          </div>
        </div>
      </div>
    </div>
  )
}