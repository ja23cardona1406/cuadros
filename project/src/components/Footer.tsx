import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Galería de Arte</h3>
            <p className="text-gray-300 mb-4">
              Descubre arte único y original de artistas talentosos de todo el mundo. 
              Cada pieza cuenta una historia y trae belleza a tu espacio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white">Tienda</Link>
              </li>
              <li>
                <Link to="/artists" className="text-gray-300 hover:text-white">Artistas</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">Conócenos</Link>
              </li>
              <li>
                <Link to="/forum" className="text-gray-300 hover:text-white">Foro</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link>
              </li>
            </ul>
          </div>
          
          {/* Customer service */}
          <div>
            <h3 className="text-lg font-medium mb-4">Servicio al Cliente</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white">Envíos y Devoluciones</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">Términos y Condiciones</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contacto</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-300">Calle del Arte 123, Madrid, España</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-300">+34 912 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-300">info@galeriadearte.com</span>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Suscríbete a nuestro boletín</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="px-3 py-2 placeholder-gray-500 text-gray-900 rounded-l-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 flex-1"
                />
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-md">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Galería de Arte. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;