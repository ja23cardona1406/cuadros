import React from 'react';
import { Link } from 'react-router-dom';

const ArtistSpotlight: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Artistas Destacados</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce a los talentosos creadores detrás de nuestras obras más impresionantes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Artist 1 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative pb-[100%]">
              <img 
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="María González" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">María González</h3>
              <p className="text-gray-600 mb-4">Especialista en paisajes impresionistas que capturan la luz y la atmósfera de escenas naturales con una sensibilidad única.</p>
              <Link 
                to="/artist/maria-gonzalez" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Ver perfil y obras →
              </Link>
            </div>
          </div>
          
          {/* Artist 2 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative pb-[100%]">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Carlos Mendoza" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Carlos Mendoza</h3>
              <p className="text-gray-600 mb-4">Artista abstracto cuyas obras exploran la relación entre el color, la forma y el espacio, creando composiciones dinámicas y expresivas.</p>
              <Link 
                to="/artist/carlos-mendoza" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Ver perfil y obras →
              </Link>
            </div>
          </div>
          
          {/* Artist 3 */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative pb-[100%]">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Ana Martínez" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Ana Martínez</h3>
              <p className="text-gray-600 mb-4">Pintora realista que se especializa en naturalezas muertas y composiciones florales, con un dominio excepcional de la luz y el detalle.</p>
              <Link 
                to="/artist/ana-martinez" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Ver perfil y obras →
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/artists" 
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Conocer a Todos los Artistas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;