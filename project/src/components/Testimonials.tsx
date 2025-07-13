import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif">Lo que dicen nuestros clientes</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Descubre las experiencias de quienes ya han adquirido obras en nuestra galería.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-300 mb-6">
              "La obra que adquirí superó todas mis expectativas. Los colores son aún más vibrantes en persona y ha transformado completamente mi sala de estar. El proceso de compra fue sencillo y el envío llegó perfectamente protegido."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                alt="Laura García" 
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h4 className="font-medium">Laura García</h4>
                <p className="text-sm text-gray-400">Cali, Colombia</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-300 mb-6">
              "Como coleccionista, valoro la autenticidad y calidad de las obras. Esta galería ofrece piezas verdaderamente únicas con certificados de autenticidad. La atención personalizada y el asesoramiento fueron excepcionales."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                alt="Javier Rodríguez" 
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h4 className="font-medium">Javier Rodríguez</h4>
                <p className="text-sm text-gray-400">Bogata, Colombia</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
              <Star size={20} className="text-gray-500" />
            </div>
            <p className="text-gray-300 mb-6">
              "Buscaba una pieza especial para regalar en un aniversario y encontré la obra perfecta. El equipo me ayudó a elegir según mis preferencias y presupuesto. La presentación fue impecable y el regalo fue un éxito total."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                alt="Elena Martín" 
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h4 className="font-medium">Elena Martín</h4>
                <p className="text-sm text-gray-400">Medellin, Colombia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;