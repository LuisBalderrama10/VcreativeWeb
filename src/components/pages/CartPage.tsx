import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { useApp } from '../../context/AppContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';

export const CartPage: React.FC = () => {
  const { state, removeFromCart, updateCartQuantity, navigateToPage } = useApp();

  // Calculate totals with safe checks
  const subtotal = state.cart.reduce((total, item) => {
    const price = item?.price || 0;
    const quantity = item?.quantity || 0;
    return total + (price * quantity);
  }, 0);
  
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  if (state.cart.length === 0) {
    return (
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ShoppingBag className="h-24 w-24 text-primary/30 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4 text-primary">Tu carrito está vacío</h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
            Explora nuestros cursos y servicios para comenzar tu journey digital.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => navigateToPage('catalog')}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              Explorar Cursos
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          variant="ghost"
          onClick={() => navigateToPage('catalog')}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continuar comprando
        </Button>
      </motion.div>

      <motion.h1 
        className="text-4xl font-bold mb-8 text-primary"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Carrito de Compras ({state.cart.length})
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence>
            {state.cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Item Image */}
                      <motion.div 
                        className="w-full sm:w-24 h-24 flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </motion.div>

                      {/* Item Details */}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-lg text-primary">{item.name}</h3>
                          <Badge variant="outline" className="border-primary text-primary">
                            {item.type === 'course' ? 'Curso' : 'Servicio'}
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          {item.price ? `${item.price}€` : 'Precio no disponible'}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col sm:items-end gap-3">
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateCartQuantity(item.id, (item.quantity || 1) - 1)}
                              className="border-primary/20 hover:bg-primary hover:text-white"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          </motion.div>
                          <span className="w-12 text-center font-bold text-lg bg-accent rounded px-2 py-1">
                            {item.quantity || 1}
                          </span>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateCartQuantity(item.id, (item.quantity || 1) + 1)}
                              className="border-primary/20 hover:bg-primary hover:text-white"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </motion.div>
                        </div>
                        
                        <div className="text-xl font-bold text-primary">
                          {item.price ? `${(item.price * (item.quantity || 1)).toFixed(2)}€` : '0€'}
                        </div>
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Eliminar
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="sticky top-8 border-primary/20 bg-gradient-to-br from-white to-accent/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Resumen del Pedido</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-lg">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="font-medium">{subtotal.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-muted-foreground">IVA (10%):</span>
                    <span className="font-medium">{tax.toFixed(2)}€</span>
                  </div>
                  <div className="border-t border-primary/20 pt-4">
                    <div className="flex justify-between font-bold text-2xl text-primary">
                      <span>Total:</span>
                      <span>{total.toFixed(2)}€</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={() => navigateToPage('checkout')}
                      className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                      size="lg"
                    >
                      Proceder al Checkout
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      onClick={() => navigateToPage('services')}
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Ver Servicios
                    </Button>
                  </motion.div>
                </div>

                {/* Benefits */}
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/10 rounded-lg">
                  <div className="text-sm space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="font-medium">Acceso inmediato a cursos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="font-medium">Certificados incluidos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="font-medium">Soporte 24/7</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="font-medium">Garantía de satisfacción</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};