import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Obras Destacadas</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de obras más exclusivas, elegidas por su belleza y singularidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/shop" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Ver Toda la Colección
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;