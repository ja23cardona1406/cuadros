import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-serif text-2xl font-bold text-primary-700">Galería de Arte</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Inicio
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              Tienda
            </Link>
           
          </div>
          
          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-700 hover:text-primary-600"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </button>
            
            <Link to="/wishlist" className="text-gray-700 hover:text-primary-600">
              <Heart size={20} />
            </Link>
            
            <Link to="/account" className="text-gray-700 hover:text-primary-600">
              <User size={20} />
            </Link>
            
            <Link to="/cart" className="text-gray-700 hover:text-primary-600 relative">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
              Inicio
            </Link>
            <Link to="/shop" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
              Tienda
            </Link>
            <Link to="/artists" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
              Artistas
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
              Conócenos
            </Link>
            <Link to="/forum" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
              Foro
            </Link>
            <Link to="/blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
              Blog
            </Link>
          </div>
        </div>
      )}
      
      {/* Search bar */}
      {isSearchOpen && (
        <div className="bg-white shadow-md p-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar obras de arte, artistas, estilos..."
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;