import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { 
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Package,
  Shield,
  Truck,
  CreditCard
} from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items, total, itemCount, updateQuantity, removeItem, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingCart className="h-12 w-12 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Looks like you haven't added any handcrafted treasures to your cart yet.
        </p>
        <Link to="/marketplace">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Start Shopping
          </Button>
        </Link>
      </div>
    )
  }

  const subtotal = total
  const shipping = subtotal > 2000 ? 0 : 100
  const platformFee = subtotal * 0.05 // 5% platform fee
  const artisanEarnings = subtotal - platformFee
  const grandTotal = subtotal + shipping

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
          Shopping Cart
        </h1>
        <p className="text-lg text-emerald-700">
          {itemCount} item{itemCount > 1 ? 's' : ''} in your cart
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Your Items</h2>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearCart}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-center border-b pb-4"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-2xl">{item.image}</div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">by {item.artisanName}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">
                          ₹{item.price * item.quantity}
                        </div>
                        <div className="text-sm text-emerald-600">
                          ₹{(item.price * 0.7).toFixed(0)} to artisan
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Remove Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-4 text-gray-400 hover:text-red-600"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Promo Code
              </label>
              <div className="flex gap-2">
                <Input placeholder="Enter promo code" />
                <Button variant="outline" className="border-emerald-600 text-emerald-600">
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          {/* Summary Card */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">₹{subtotal}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className={shipping === 0 ? 'text-emerald-600 font-semibold' : ''}>
                  {shipping === 0 ? 'FREE' : `₹${shipping}`}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Platform Fee (5%)</span>
                <span className="text-gray-600">₹{platformFee.toFixed(0)}</span>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{grandTotal}</span>
                </div>
                <p className="text-sm text-emerald-600 mt-2">
                  Artisans will earn: ₹{artisanEarnings.toFixed(0)}
                </p>
              </div>
            </div>
            
            <Link to="/checkout">
              <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
              <Package className="h-5 w-5 text-emerald-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">Free Shipping</div>
                <div className="text-sm text-gray-600">On orders above ₹2000</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
              <Shield className="h-5 w-5 text-amber-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">Quality Guarantee</div>
                <div className="text-sm text-gray-600">30-day returns</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <Truck className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">Direct to Artisan</div>
                <div className="text-sm text-gray-600">70% goes to maker</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <CreditCard className="h-5 w-5 text-purple-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">Secure Payment</div>
                <div className="text-sm text-gray-600">100% secure checkout</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="text-center">
        <Link to="/marketplace">
          <Button variant="outline" className="border-emerald-600 text-emerald-600">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  )
}