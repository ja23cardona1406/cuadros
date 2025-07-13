import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

const ShopPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  // Get unique styles
  const styles = Array.from(new Set(products.map(product => product.style)));
  
  // Handle style filter change
  const handleStyleChange = (style: string) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter(s => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };
  
  // Apply filters
  const applyFilters = () => {
    let result = [...products];
    
    // Filter by price
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by style
    if (selectedStyles.length > 0) {
      result = result.filter(product => selectedStyles.includes(product.style));
    }
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // In a real app, you would sort by date
        result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  };
  
  // Apply filters when dependencies change
  React.useEffect(() => {
    applyFilters();
  }, [priceRange, selectedStyles, sortBy]);
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 font-serif">Nuestra Colección</h1>
          <p className="mt-2 text-lg text-gray-600">
            Explora nuestra selección de obras de arte únicas y originales.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Mobile Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="w-full flex items-center justify-between bg-white p-4 rounded-md shadow-sm"
            >
              <div className="flex items-center">
                <Filter size={20} className="mr-2" />
                <span>Filtros</span>
              </div>
              {filtersOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${filtersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Filtros</h2>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Precio</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">${priceRange[0]}</span>
                  <span className="text-sm text-gray-600">${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1300000"
                  step="100000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
              
              {/* Style Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Estilo</h3>
                <div className="space-y-2">
                  {styles.map(style => (
                    <div key={style} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`style-${style}`}
                        checked={selectedStyles.includes(style)}
                        onChange={() => handleStyleChange(style)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`style-${style}`} className="ml-2 text-sm text-gray-600">
                        {style}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Availability Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Disponibilidad</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="in-stock"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="in-stock" className="ml-2 text-sm text-gray-600">
                    En stock
                  </label>
                </div>
              </div>
              
              {/* Reset Filters Button */}
              <button
                onClick={() => {
                  setPriceRange([0, 2000]);
                  setSelectedStyles([]);
                  setSortBy('featured');
                }}
                className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Restablecer Filtros
              </button>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="lg:w-3/4">
            {/* Sort Options */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? 'resultado' : 'resultados'}
              </span>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
                  Ordenar por:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border-gray-300 rounded-md text-sm focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="featured">Destacados</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="newest">Más Recientes</option>
                </select>
              </div>
            </div>
            
            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <p className="text-gray-600">No se encontraron productos que coincidan con los filtros seleccionados.</p>
                <button
                  onClick={() => {
                    setPriceRange([0, 2000]);
                    setSelectedStyles([]);
                    setSortBy('featured');
                  }}
                  className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                >
                  Restablecer Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;