import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, ArrowLeft, Plus, Minus } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { useApp } from '../../context/AppContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const ProductPage: React.FC = () => {
  const { state, dispatch } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');

  const product = state.selectedProduct;

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
          <Button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'catalog' })}>
            Volver al Catálogo
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    setQuantity(1);
  };

  const handleBackToCatalog = () => {
    dispatch({ type: 'SET_PAGE', payload: 'catalog' });
  };

  const relatedProducts = state.products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={handleBackToCatalog}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Volver al Catálogo
      </Button>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-lg">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg">{product.rating}</span>
              <span className="text-gray-600">({product.reviews} reseñas)</span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-primary mb-4">
              ${product.price}
            </div>

            {/* Stock */}
            <div className="mb-6">
              {product.stock > 0 ? (
                <Badge variant="outline" className="text-green-600 border-green-600">
                  En Stock ({product.stock} disponibles)
                </Badge>
              ) : (
                <Badge variant="destructive">
                  Agotado
                </Badge>
              )}
            </div>
          </div>

          {/* Quantity Selector */}
          {product.stock > 0 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Cantidad</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Agregar al Carrito
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setSelectedTab('description')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'description'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Descripción
          </button>
          <button
            onClick={() => setSelectedTab('specs')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'specs'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Especificaciones
          </button>
          <button
            onClick={() => setSelectedTab('reviews')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'reviews'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Reseñas
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mb-12">
        {selectedTab === 'description' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Descripción del Producto</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
        )}
        
        {selectedTab === 'specs' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Especificaciones Técnicas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Marca:</span>
                  <span>TechStore Pro</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Modelo:</span>
                  <span>{product.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Categoría:</span>
                  <span>{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Garantía:</span>
                  <span>2 años</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {selectedTab === 'reviews' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Reseñas de Clientes</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="font-medium">Juan Pérez</span>
                  <span className="text-gray-500 text-sm">hace 2 semanas</span>
                </div>
                <p className="text-gray-600">
                  Excelente producto, superó mis expectativas. La calidad es increíble y llegó muy rápido.
                </p>
              </div>
              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <span className="font-medium">María García</span>
                  <span className="text-gray-500 text-sm">hace 1 mes</span>
                </div>
                <p className="text-gray-600">
                  Muy buen producto, aunque tardó un poco en llegar. Lo recomiendo.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-6">Productos Relacionados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <ImageWithFallback
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold line-clamp-2">{relatedProduct.name}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">${relatedProduct.price}</span>
                      <Button
                        size="sm"
                        onClick={() => {
                          dispatch({ type: 'SET_SELECTED_PRODUCT', payload: relatedProduct });
                        }}
                      >
                        Ver
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};