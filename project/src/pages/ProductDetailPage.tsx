import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Minus, Plus, ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h2>
        <p className="text-gray-600 mb-6">Lo sentimos, el producto que estás buscando no existe o ha sido eliminado.</p>
        <Link to="/shop" className="text-primary-600 hover:text-primary-700 font-medium">
          Volver a la tienda
        </Link>
      </div>
    );
  }
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.inStock) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  // Find related products (same style or artist)
  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.style === product.style || p.artist === product.artist))
    .slice(0, 3);
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex mb-8">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700">Inicio</Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link to="/shop" className="text-gray-500 hover:text-gray-700">Tienda</Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900 font-medium">{product.title}</li>
          </ol>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={product.imageUrl} 
              alt={product.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-serif">{product.title}</h1>
            <p className="text-lg text-gray-600 mt-2">por {product.artist}</p>
            
            <div className="mt-6">
              <p className="text-3xl font-bold text-gray-900">${product.price.toLocaleString()}</p>
              
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">12 reseñas</span>
              </div>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700 font-medium">Disponibilidad:</span>
                {product.inStock > 0 ? (
                  <span className="text-green-600">En stock ({product.inStock} disponibles)</span>
                ) : (
                  <span className="text-red-600">Agotado</span>
                )}
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700 font-medium">Dimensiones:</span>
                <span className="text-gray-600">{product.dimensions}</span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700 font-medium">Estilo:</span>
                <span className="text-gray-600">{product.style}</span>
              </div>
              
              {product.inStock > 0 && (
                <div className="mt-8">
                  <div className="flex items-center mb-6">
                    <span className="text-gray-700 font-medium mr-4">Cantidad:</span>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button 
                        onClick={() => handleQuantityChange(quantity - 1)}
                        disabled={quantity <= 1}
                        className="p-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                      >
                        <Minus size={16} />
                      </button>
                      
                      <span className="px-4 py-2 text-gray-900">{quantity}</span>
                      
                      <button 
                        onClick={() => handleQuantityChange(quantity + 1)}
                        disabled={quantity >= product.inStock}
                        className="p-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button 
                      onClick={handleAddToCart}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center"
                    >
                      <ShoppingCart size={20} className="mr-2" />
                      Añadir al Carrito
                    </button>
                    
                    <button className="p-3 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                      <Heart size={20} />
                    </button>
                    
                    <button className="p-3 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-4 text-sm font-medium ${
                  activeTab === 'description'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Descripción
              </button>
              
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-4 text-sm font-medium ${
                  activeTab === 'details'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Detalles
              </button>
              
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-4 text-sm font-medium ${
                  activeTab === 'reviews'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Reseñas (12)
              </button>
            </nav>
          </div>
          
          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-600 mt-4">
                  Esta obra de arte original ha sido creada con técnicas tradicionales y materiales de la más alta calidad. 
                  Cada pincelada refleja la pasión y dedicación del artista, resultando en una pieza única que aportará 
                  carácter y belleza a cualquier espacio.
                </p>
              </div>
            )}
            
            {activeTab === 'details' && (
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Especificaciones Técnicas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Técnica:</strong> Óleo sobre lienzo</li>
                  <li><strong>Dimensiones:</strong> {product.dimensions}</li>
                  <li><strong>Año:</strong> 2023</li>
                  <li><strong>Firmado:</strong> Sí, en el frente</li>
                  <li><strong>Enmarcado:</strong> No, se entrega listo para colgar</li>
                  <li><strong>Certificado de Autenticidad:</strong> Incluido</li>
                </ul>
                
                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Cuidado y Mantenimiento</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Evitar la exposición directa a la luz solar</li>
                  <li>Mantener alejado de fuentes de humedad</li>
                  <li>Limpiar suavemente con un paño seco y suave</li>
                  <li>No utilizar productos químicos para su limpieza</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Valoraciones de Clientes</h3>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400 mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={24} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-gray-900 font-medium">4.9 de 5</span>
                    <span className="ml-2 text-gray-600">(12 reseñas)</span>
                  </div>
                </div>
                
                {/* Sample Reviews */}
                <div className="space-y-8">
                  <div className="border-b border-gray-200 pb-8">
                    <div className="flex items-center mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                        alt="Laura García" 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">Laura García</h4>
                        <div className="flex text-yellow-400 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                      <span className="ml-auto text-sm text-gray-500">Hace 2 semanas</span>
                    </div>
                    <p className="text-gray-600">
                      Esta obra es aún más impresionante en persona. Los colores son vibrantes y la técnica es impecable. 
                      Ha transformado completamente mi sala de estar y recibo muchos cumplidos de mis invitados. 
                      El envío fue rápido y la obra llegó perfectamente protegida.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                        alt="Javier Rodríguez" 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">Javier Rodríguez</h4>
                        <div className="flex text-yellow-400 mt-1">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                          <Star size={16} className="text-gray-300" />
                        </div>
                      </div>
                      <span className="ml-auto text-sm text-gray-500">Hace 1 mes</span>
                    </div>
                    <p className="text-gray-600">
                      Excelente pieza con gran atención al detalle. La calidad es excepcional y el certificado de autenticidad 
                      es un gran plus. Le doy 4 estrellas porque el color es ligeramente diferente al que se muestra en la foto, 
                      pero sigue siendo una obra hermosa que disfruto cada día.
                    </p>
                  </div>
                </div>
                
                <button className="mt-8 text-primary-600 hover:text-primary-700 font-medium">
                  Ver todas las reseñas
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 font-serif">También te puede interesar</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map(product => (
                <div key={product.id} className="group relative">
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.title} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      <Link to={`/product/${product.id}`}>
                        {product.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500">por {product.artist}</p>
                    <p className="mt-2 text-lg font-medium text-gray-900">${product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Back to Shop */}
        <div className="mt-16">
          <Link to="/shop" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
            <ArrowLeft size={16} className="mr-2" />
            Volver a la Tienda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;