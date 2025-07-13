import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  const handleIncrement = () => {
    if (quantity < product.inStock) {
      updateQuantity(product.id, quantity + 1);
    }
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };
  
  return (
    <div className="flex items-center py-6 border-b border-gray-200">
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
        <p className="text-sm text-gray-500">por {product.artist}</p>
        <p className="text-sm text-gray-500">{product.dimensions}</p>
      </div>
      
      <div className="flex items-center ml-4">
        <button 
          onClick={handleDecrement}
          className="p-1 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
        >
          <Minus size={16} />
        </button>
        
        <span className="mx-2 w-8 text-center">{quantity}</span>
        
        <button 
          onClick={handleIncrement}
          disabled={quantity >= product.inStock}
          className={`p-1 rounded-full border border-gray-300 text-gray-600 ${
            quantity >= product.inStock ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
          }`}
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="ml-6 text-right">
        <p className="text-lg font-medium text-gray-900">${(product.price * quantity).toLocaleString()}</p>
        <button 
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 hover:text-red-700 mt-1 flex items-center justify-end"
        >
          <Trash2 size={16} className="mr-1" />
          <span className="text-sm">Eliminar</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;