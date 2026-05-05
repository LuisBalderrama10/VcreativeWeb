import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
import { useApp } from '../../context/AppContext';
import { CreditCard, Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const CheckoutPage: React.FC = () => {
  const { state, navigateToPage } = useApp();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = state.cart.reduce((total, item) => {
    const price = item?.price || 0;
    const quantity = item?.quantity || 0;
    return total + (price * quantity);
  }, 0);
  
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setOrderComplete(true);
  };

  if (state.cart.length === 0) {
    navigateToPage('cart');
    return null;
  }

  if (orderComplete) {
    return (
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4 text-primary">¡Pedido Completado!</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Gracias por tu compra. Recibirás un email de confirmación en breve.
          </p>
          <div className="space-y-4">
            <Button 
              onClick={() => navigateToPage('profile')}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              Ver Mis Cursos
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigateToPage('home')}
              size="lg"
            >
              Volver al Inicio
            </Button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
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
          onClick={() => navigateToPage('cart')}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al carrito
        </Button>
      </motion.div>

      <motion.h1 
        className="text-4xl font-bold mb-8 text-primary"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Checkout
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form onSubmit={handleSubmitOrder} className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellidos</Label>
                    <Input id="lastName" placeholder="Tus apellidos" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" type="tel" placeholder="+34 123 456 789" />
                </div>
              </CardContent>
            </Card>

            {/* Billing Address */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Dirección de Facturación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Dirección</Label>
                  <Input id="address" placeholder="Calle, número" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">Ciudad</Label>
                    <Input id="city" placeholder="Madrid" required />
                  </div>
                  <div>
                    <Label htmlFor="state">Provincia</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="madrid">Madrid</SelectItem>
                        <SelectItem value="barcelona">Barcelona</SelectItem>
                        <SelectItem value="valencia">Valencia</SelectItem>
                        <SelectItem value="sevilla">Sevilla</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zip">Código Postal</Label>
                    <Input id="zip" placeholder="28001" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Información de Pago
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                  <Input 
                    id="cardNumber" 
                    placeholder="1234 5678 9012 3456" 
                    required 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Fecha de Vencimiento</Label>
                    <Input id="expiry" placeholder="MM/AA" required />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cardName">Nombre en la Tarjeta</Label>
                  <Input id="cardName" placeholder="Como aparece en la tarjeta" required />
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                size="lg"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Procesando...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Completar Pedido - {total.toFixed(2)}€
                  </div>
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="sticky top-8 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Order Items */}
              <div className="space-y-3">
                {state.cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Cantidad: {item.quantity || 1}
                      </p>
                    </div>
                    <p className="font-medium">
                      {item.price ? `${(item.price * (item.quantity || 1)).toFixed(2)}€` : '0€'}
                    </p>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Totals */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span>IVA (10%):</span>
                  <span>{tax.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-primary">
                  <span>Total:</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
              </div>

              <Separator />

              {/* Security info */}
              <div className="text-xs text-muted-foreground space-y-2">
                <div className="flex items-center">
                  <Lock className="w-3 h-3 mr-1" />
                  <span>Pago seguro con SSL</span>
                </div>
                <p>Tus datos están protegidos y encriptados</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};