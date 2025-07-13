import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';

const CartPage: React.FC = () => {
  const { cartItems, clearCart, totalItems } = useCart();
  
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 font-serif">Carrito de Compras</h1>
          <p className="mt-2 text-lg text-gray-600">
            Revisa tus artículos y procede al pago cuando estés listo.
          </p>
        </div>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-medium text-gray-900">
                    Artículos ({totalItems})
                  </h2>
                  <button 
                    onClick={clearCart}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Vaciar Carrito
                  </button>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {cartItems.map(item => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/shop" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                  <ArrowLeft size={16} className="mr-2" />
                  Continuar Comprando
                </Link>
              </div>
            </div>
            
            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="flex justify-center mb-6">
              <ShoppingCart size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-8">
              Parece que aún no has añadido ninguna obra a tu carrito.
              Explora nuestra colección y descubre piezas únicas que transformarán tu espacio.
            </p>
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Explorar Colección
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;