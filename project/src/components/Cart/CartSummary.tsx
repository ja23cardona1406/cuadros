import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartSummary: React.FC = () => {
  const { totalItems, totalPrice } = useCart();
  
  // Shipping cost calculation (simplified)
  const shippingCost = totalPrice > 0 ? (totalPrice > 1500 ? 0 : 50) : 0;
  const tax = totalPrice * 0.21; // 21% VAT
  const orderTotal = totalPrice + shippingCost + tax;
  
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Resumen del Pedido</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal ({totalItems} {totalItems === 1 ? 'artículo' : 'artículos'})</span>
          <span className="font-medium">${totalPrice.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Envío</span>
          {shippingCost === 0 && totalPrice > 0 ? (
            <span className="text-green-600">Gratis</span>
          ) : (
            <span className="font-medium">${shippingCost.toLocaleString()}</span>
          )}
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Impuestos (21%)</span>
          <span className="font-medium">${tax.toLocaleString()}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-4 flex justify-between">
          <span className="text-lg font-medium text-gray-900">Total</span>
          <span className="text-lg font-bold text-gray-900">${orderTotal.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="mt-6">
        <Link
          to="/checkout"
          className={`w-full bg-primary-600 text-white py-3 px-4 rounded-md font-medium text-center block ${
            totalItems === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-700'
          }`}
          onClick={(e) => totalItems === 0 && e.preventDefault()}
        >
          Proceder al Pago
        </Link>
        
        <Link
          to="/shop"
          className="w-full mt-4 border border-gray-300 text-gray-700 py-3 px-4 rounded-md font-medium text-center block hover:bg-gray-50"
        >
          Continuar Comprando
        </Link>
      </div>
      
      <div className="mt-6 text-sm text-gray-500">
        <p>Aceptamos:</p>
        <div className="flex space-x-2 mt-2">
          <div className="bg-white p-2 rounded border border-gray-200">
            <span className="font-medium">Visa</span>
          </div>
          <div className="bg-white p-2 rounded border border-gray-200">
            <span className="font-medium">MasterCard</span>
          </div>
          <div className="bg-white p-2 rounded border border-gray-200">
            <span className="font-medium">PayPal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;