import { useState } from 'react'
import ProductGrid from '../components/features/marketplace/ProductGrid'
import ProductFilters from '../components/features/marketplace/ProductFilters'
import CartPreview from '../components/features/marketplace/CartPreview'
import { Button } from '../components/ui/button'
import { Filter, Grid, List, Sliders } from 'lucide-react'

export default function Marketplace() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filters, setFilters] = useState({
    category: 'all',
    region: 'all',
    priceRange: [0, 10000],
    artisanType: 'all'
  })
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="space-y-8 px-4 py-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
          Artisan Marketplace
        </h1>
        <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
          Shop directly from tribal artisans. Every purchase supports traditional crafts and fair wages.
        </p>
      </div>

      <div className="flex lg:hidden mb-4">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Sliders className="h-4 w-4 mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar - Desktop */}
        <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="sticky top-24">
            <ProductFilters filters={filters} onFilterChange={setFilters} />
          </div>
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Handcrafted Treasures
                <span className="text-emerald-600 ml-2">(128 products)</span>
              </h2>
              <p className="text-gray-600">Direct from artisans across India</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Sort By
              </Button>
            </div>
          </div>

          <ProductGrid viewMode={viewMode} filters={filters} />
        </div>
      </div>

      {/* Cart Preview */}
      <CartPreview />
    </div>
  )
}