import { Card, CardContent } from '../../ui/card'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Slider } from '../../ui/slider'
import { 
  Filter,
  Search,
  X
} from 'lucide-react'
import { useState } from 'react'

interface ProductFiltersProps {
  filters: any
  onFilterChange: (filters: any) => void
}

const categories = [
  'All Categories',
  'Handloom Textiles',
  'Tribal Jewelry',
  'Pottery & Terracotta',
  'Bamboo Crafts',
  'Metal Crafts',
  'Natural Fiber Crafts',
  'Wood Crafts'
]

const regions = [
  'All Regions',
  'North India',
  'South India',
  'East India',
  'West India',
  'North-East India'
]

const artisanTypes = [
  'All Artisans',
  'Women Artisans',
  'Tribal Artisans',
  'Home-Based Artisans',
  'SHG Members'
]

export default function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000])
  const [searchQuery, setSearchQuery] = useState('')

  const handleCategoryChange = (category: string) => {
    onFilterChange({
      ...filters,
      category: category === 'All Categories' ? 'all' : category
    })
  }

  const handleRegionChange = (region: string) => {
    onFilterChange({
      ...filters,
      region: region === 'All Regions' ? 'all' : region
    })
  }

  const handleArtisanTypeChange = (type: string) => {
    onFilterChange({
      ...filters,
      artisanType: type === 'All Artisans' ? 'all' : type
    })
  }

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]])
    onFilterChange({
      ...filters,
      priceRange: [value[0], value[1]]
    })
  }

  const handleSearch = () => {
    onFilterChange({
      ...filters,
      search: searchQuery
    })
  }

  const clearFilters = () => {
    setPriceRange([0, 10000])
    setSearchQuery('')
    onFilterChange({
      category: 'all',
      region: 'all',
      priceRange: [0, 10000],
      artisanType: 'all',
      search: ''
    })
  }

  return (
    <Card className="border-gray-200">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <h3 className="font-semibold text-gray-900">Filters</h3>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          </div>

          {/* Search */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Categories</label>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                    (category === 'All Categories' && filters.category === 'all') ||
                    filters.category === category
                      ? 'bg-emerald-50 text-emerald-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-gray-700">Price Range</label>
              <span className="text-sm text-gray-500">
                ₹{priceRange[0]} - ₹{priceRange[1]}
              </span>
            </div>
            <Slider
              defaultValue={[0, 10000]}
              max={10000}
              step={100}
              value={[priceRange[0], priceRange[1]]}
              onValueChange={(value) => handlePriceChange(value)}
              className="my-4"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>₹0</span>
              <span>₹5,000</span>
              <span>₹10,000</span>
            </div>
          </div>

          {/* Regions */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Region</label>
            <div className="space-y-1">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => handleRegionChange(region)}
                  className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                    (region === 'All Regions' && filters.region === 'all') ||
                    filters.region === region
                      ? 'bg-emerald-50 text-emerald-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Artisan Type */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Artisan Type</label>
            <div className="space-y-1">
              {artisanTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleArtisanTypeChange(type)}
                  className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                    (type === 'All Artisans' && filters.artisanType === 'all') ||
                    filters.artisanType === type
                      ? 'bg-emerald-50 text-emerald-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <Button 
            className="w-full bg-emerald-600 hover:bg-emerald-700"
            onClick={handleSearch}
          >
            Apply Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}