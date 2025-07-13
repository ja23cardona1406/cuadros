import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Galería de arte" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif">
          Arte que transforma espacios
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Descubre piezas únicas creadas por artistas talentosos de todo el mundo. 
          Cada obra cuenta una historia y aporta belleza a tu hogar u oficina.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link 
            to="/shop" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Explorar Colección
          </Link>
          <Link 
            to="/about" 
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10"
          >
            Conocer Artistas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;