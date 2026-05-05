import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { DatePicker } from '../ui/date-picker';
import { TimePicker } from '../ui/time-picker';
import { useApp } from '../../context/AppContext';
import { Clock, CheckCircle, ArrowLeft, Calendar, Phone, Mail, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion } from 'motion/react';

export const ServicePage: React.FC = () => {
  const { state, navigateToPage, bookAppointment } = useApp();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    notes: ''
  });
  
  if (!state.selectedService) {
    navigateToPage('services');
    return null;
  }

  const service = state.selectedService;

  const getPackageColor = (packageType: string) => {
    switch (packageType) {
      case 'Básico': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Medio': return 'bg-green-100 text-green-800 border-green-200';
      case 'Premium': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Único': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!state.user) {
      alert('Debes iniciar sesión para agendar una cita');
      navigateToPage('login');
      return;
    }

    if (!bookingData.date || !bookingData.time || !bookingData.clientName || !bookingData.clientEmail) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    // Validación específica para consulta personalizada
    if (service.id === 'custom-consultation' && !bookingData.notes.trim()) {
      alert('Para la consulta personalizada es obligatorio describir tu proyecto o necesidad específica');
      return;
    }

    bookAppointment({
      serviceId: service.id,
      serviceName: service.name,
      date: bookingData.date,
      time: bookingData.time,
      clientName: bookingData.clientName,
      clientEmail: bookingData.clientEmail,
      clientPhone: bookingData.clientPhone,
      status: 'scheduled',
      notes: bookingData.notes
    });

    alert('¡Cita agendada exitosamente! Te contactaremos pronto para confirmar los detalles.');
    setShowBookingForm(false);
    setBookingData({
      date: '',
      time: '',
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      notes: ''
    });
  };

  return (
    <motion.div 
      className="min-h-screen py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigateToPage('services')}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a servicios
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Service header */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-primary/10 text-primary border-primary/20">{service.category}</Badge>
                  {service.packageType && (
                    <Badge className={`${getPackageColor(service.packageType)}`}>
                      Paquete {service.packageType}
                    </Badge>
                  )}
                  <Badge variant="outline" className="border-muted-foreground/20 text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {service.duration}
                  </Badge>
                </div>
                <motion.h1 
                  className="text-4xl lg:text-5xl font-semibold mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {service.name}
                </motion.h1>
                <motion.p 
                  className="text-lg text-muted-foreground mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {service.description}
                </motion.p>
              </div>

              {/* Service image */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.01 }}
              >
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>

              {/* What's included */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-6">¿Qué incluye este servicio?</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {service.includes.map((item, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-start space-x-4 p-4 rounded-lg bg-muted/20 border border-border/50"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                          whileHover={{ backgroundColor: 'var(--accent)' }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Portfolio preview */}
              {service.portfolio && service.portfolio.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold mb-6">Trabajos Anteriores</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {service.portfolio.map((image, index) => (
                          <motion.div 
                            key={index}
                            className="relative rounded-lg overflow-hidden group cursor-pointer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <ImageWithFallback
                              src={image}
                              alt={`Portfolio ${index + 1}`}
                              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="sticky top-8 border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <motion.div 
                      className="text-4xl font-bold text-primary mb-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      $800 MXN
                    </motion.div>
                    <p className="text-muted-foreground">Consulta + Servicio</p>
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                      <div className="flex items-center justify-center space-x-2 text-sm text-primary">
                        <Star className="w-4 h-4" />
                        <span className="font-medium">Consulta personalizada incluida</span>
                      </div>
                    </div>
                  </div>
                  
                  {!showBookingForm ? (
                    <div className="space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          size="lg" 
                          className="w-full bg-primary hover:bg-primary/90"
                          onClick={() => setShowBookingForm(true)}
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Agendar Consulta
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="w-full"
                          onClick={() => navigateToPage('contact')}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Más Información
                        </Button>
                      </motion.div>
                    </div>
                  ) : (
                    <form onSubmit={handleBookAppointment} className="space-y-4">
                      <h4 className="font-semibold text-lg mb-4">Agendar Consulta</h4>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <Label htmlFor="date">Fecha preferida</Label>
                          <DatePicker
                            value={bookingData.date}
                            onChange={(date) => setBookingData({ ...bookingData, date })}
                            minDate={new Date().toISOString().split('T')[0]}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="time">Hora preferida</Label>
                          <TimePicker
                            value={bookingData.time}
                            onChange={(time) => setBookingData({ ...bookingData, time })}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="clientName">Nombre completo</Label>
                        <Input
                          id="clientName"
                          value={bookingData.clientName}
                          onChange={(e) => setBookingData({ ...bookingData, clientName: e.target.value })}
                          placeholder="Tu nombre"
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="clientEmail">Email</Label>
                        <Input
                          id="clientEmail"
                          type="email"
                          value={bookingData.clientEmail}
                          onChange={(e) => setBookingData({ ...bookingData, clientEmail: e.target.value })}
                          placeholder="tu@email.com"
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="clientPhone">Teléfono</Label>
                        <Input
                          id="clientPhone"
                          type="tel"
                          value={bookingData.clientPhone}
                          onChange={(e) => setBookingData({ ...bookingData, clientPhone: e.target.value })}
                          placeholder="Tu teléfono"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="notes">
                          Describe tu proyecto o necesidad específica
                          {service.id === 'custom-consultation' && <span className="text-destructive ml-1">*</span>}
                        </Label>
                        <Textarea
                          id="notes"
                          rows={4}
                          value={bookingData.notes}
                          onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                          placeholder={
                            service.id === 'custom-consultation' 
                              ? "Explica detalladamente qué tipo de servicio necesitas, cuáles son tus objetivos y cualquier requisito específico que tengas..."
                              : "Cuéntanos sobre tu proyecto, expectativas y cualquier detalle que consideres importante..."
                          }
                          required={service.id === 'custom-consultation'}
                          className="mt-1"
                        />
                        {service.id === 'custom-consultation' && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Entre más detalles nos proporciones, mejor podremos preparar una propuesta personalizada para ti.
                          </p>
                        )}
                      </div>

                      <div className="flex space-x-2">
                        <Button 
                          type="submit" 
                          className="flex-1"
                        >
                          Confirmar Cita
                        </Button>
                        <Button 
                          type="button"
                          variant="outline"
                          onClick={() => setShowBookingForm(false)}
                        >
                          Cancelar
                        </Button>
                      </div>
                    </form>
                  )}

                  <div className="space-y-4 text-sm border-t border-border pt-6 mt-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Categoría:</span>
                      <span className="font-medium">{service.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duración:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Incluye:</span>
                      <span className="font-medium">{service.includes.length} elementos</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold mb-3">¿Cómo funciona?</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      {[
                        '1. Agenda tu consulta personalizada',
                        '2. Analizamos tus necesidades específicas',
                        '3. Desarrollamos la estrategia perfecta',
                        '4. Ejecutamos el proyecto con calidad',
                        '5. Entregamos resultados excepcionales'
                      ].map((step, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-start space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                        >
                          <span className="font-medium text-primary">{step.charAt(0)}</span>
                          <span>{step.substring(2)}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};