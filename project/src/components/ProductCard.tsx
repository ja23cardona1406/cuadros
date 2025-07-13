import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <div className="relative pb-[100%] overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {product.inStock <= 0 && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-medium text-lg">Agotado</span>
            </div>
          )}
          
          {product.featured && (
            <div className="absolute top-2 left-2 bg-primary-600 text-white text-xs px-2 py-1 rounded">
              Destacado
            </div>
          )}
          
          <div className="absolute top-2 right-2">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
              <Heart size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1">{product.title}</h3>
          <p className="text-sm text-gray-500 mb-2">por {product.artist}</p>
          <p className="text-sm text-gray-600 mb-2">{product.style} • {product.dimensions}</p>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-bold text-gray-900">${product.price.toLocaleString()}</span>
            
            <button 
              onClick={handleAddToCart}
              disabled={product.inStock <= 0}
              className={`p-2 rounded-full ${
                product.inStock > 0 
                  ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                  : 'bg-gray-300 cursor-not-allowed text-gray-500'
              }`}
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;