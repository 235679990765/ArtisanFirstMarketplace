import ProductCard from './ProductCard'
import { Product } from '../../../types/craft'
import { Skeleton } from '../../ui/skeleton'

interface ProductGridProps {
  viewMode: 'grid' | 'list'
  filters: any
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Handwoven Silk Saree',
    description: 'Traditional Banarasi silk saree with gold zari work, perfect for weddings and special occasions.',
    price: 4500,
    originalPrice: 6000,
    artisan: {
      name: 'Lakshmi Devi',
      location: 'Varanasi, Uttar Pradesh',
      rating: 4.8
    },
    category: 'Handloom Textiles',
    image: '🧵',
    stock: 15,
    tags: ['Silk', 'Zari', 'Wedding', 'Traditional']
  },
  {
    id: '2',
    name: 'Tribal Silver Necklace',
    description: 'Handcrafted silver necklace with tribal motifs, made by traditional Dhokra artisans.',
    price: 2500,
    artisan: {
      name: 'Rajeshwar Meena',
      location: 'Jharkhand',
      rating: 4.9
    },
    category: 'Tribal Jewelry',
    image: '💎',
    stock: 8,
    tags: ['Silver', 'Tribal', 'Handmade', 'Ethnic']
  },
  {
    id: '3',
    name: 'Terracotta Planter Set',
    description: 'Set of 3 hand-molded terracotta planters with traditional patterns, perfect for indoor plants.',
    price: 1200,
    originalPrice: 1800,
    artisan: {
      name: 'Sunita Bai',
      location: 'Bikaner, Rajasthan',
      rating: 4.7
    },
    category: 'Pottery',
    image: '🏺',
    stock: 25,
    tags: ['Terracotta', 'Eco-friendly', 'Handmade', 'Home Decor']
  },
  {
    id: '4',
    name: 'Bamboo Basket Set',
    description: 'Set of handwoven bamboo baskets in different sizes, sustainable and durable.',
    price: 800,
    artisan: {
      name: 'Arjun Munda',
      location: 'Assam',
      rating: 4.6
    },
    category: 'Bamboo Crafts',
    image: '🎋',
    stock: 30,
    tags: ['Bamboo', 'Eco-friendly', 'Storage', 'Natural']
  },
  {
    id: '5',
    name: 'Block Printed Cotton Kurti',
    description: 'Hand block printed cotton kurti with natural dyes, comfortable and stylish.',
    price: 1800,
    originalPrice: 2400,
    artisan: {
      name: 'Meena Kumari',
      location: 'Jaipur, Rajasthan',
      rating: 4.8
    },
    category: 'Handloom Textiles',
    image: '👚',
    stock: 12,
    tags: ['Cotton', 'Block Print', 'Casual', 'Eco-friendly']
  },
  {
    id: '6',
    name: 'Brass Decorative Bowl',
    description: 'Hand-beaten brass bowl with traditional engravings, perfect for home decor.',
    price: 2200,
    artisan: {
      name: 'Ram Singh',
      location: 'Moradabad, UP',
      rating: 4.5
    },
    category: 'Metal Crafts',
    image: '🥣',
    stock: 10,
    tags: ['Brass', 'Handmade', 'Decor', 'Traditional']
  }
]

export default function ProductGrid({ viewMode, filters }: ProductGridProps) {
  // Filter products based on filters
  const filteredProducts = mockProducts.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false
    }
    if (filters.priceRange && (product.price < filters.priceRange[0] || product.price > filters.priceRange[1])) {
      return false
    }
    return true
  })

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🛍️</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-600">Try adjusting your filters to find more products</p>
      </div>
    )
  }

  return (
    <div className={`${
      viewMode === 'grid' 
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        : 'space-y-4'
    }`}>
      {filteredProducts.map((product) => (
        viewMode === 'grid' ? (
          <ProductCard key={product.id} product={product} />
        ) : (
          <div key={product.id} className="flex border rounded-lg p-4 hover:border-emerald-300 transition-colors">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mr-4">
              <div className="text-3xl">{product.image}</div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-emerald-600 font-bold">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">{product.artisan.location}</div>
                  <div className="text-sm font-medium text-gray-900">{product.artisan.name}</div>
                </div>
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  )
}