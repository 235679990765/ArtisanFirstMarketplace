import { Card, CardContent } from '../../ui/card'
import { Button } from '../../ui/button'
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  MapPin,
  Eye
} from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../../../contexts/CartContext'
import { useToast } from '../../../hooks/use-toast'

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    originalPrice?: number
    artisan: {
      name: string
      location: string
      rating: number
    }
    category: string
    image: string
    stock: number
    tags: string[]
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      artisanId: product.artisan.name,
      artisanName: product.artisan.name,
      image: product.image
    })
    
    toast({
      title: "Added to cart",
      description: `${product.name} added to your cart`,
    })
  }

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Card 
      className="border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl">{product.image}</div>
          </div>
          
          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {discount}% OFF
            </div>
          )}
          
          {/* Stock Status */}
          {product.stock < 10 && product.stock > 0 && (
            <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Only {product.stock} left
            </div>
          )}
          
          {/* Quick Actions */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex justify-between items-center">
              <Button 
                size="sm" 
                className="bg-white hover:bg-gray-100 text-gray-900"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              
              <Button 
                size="sm" 
                className="bg-white hover:bg-gray-100 text-gray-900"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        {/* Product Info */}
        <div className="space-y-2">
          {/* Category Tag */}
          <div className="inline-block">
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
          
          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 line-clamp-1">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
          
          {/* Artisan Info */}
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{product.artisan.location}</span>
          </div>
          
          {/* Rating */}
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${
                    i < Math.floor(product.artisan.rating) 
                      ? 'text-amber-400 fill-current' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product.artisan.rating})
            </span>
          </div>
          
          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <span className="text-lg font-bold text-gray-900">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through ml-2">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            
            {/* Quick Tags */}
            <div className="flex gap-1">
              {product.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Add to Cart Button */}
        <Button 
          className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
        
        {/* Direct Artisan Benefit */}
        <div className="mt-3 text-center">
          <p className="text-xs text-emerald-600">
            ₹{(product.price * 0.7).toFixed(0)} goes directly to {product.artisan.name}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}