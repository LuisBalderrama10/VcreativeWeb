import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';

export const ContactPage: React.FC = () => {
  const { navigateToPage } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('¡Mensaje enviado! Te responderemos pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-20">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl lg:text-5xl font-semibold mb-6 font-[Playfair_Display]">
          Estamos aquí para ayudarte
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[Syne]">
          ¿Tienes alguna pregunta sobre nuestros cursos o servicios? 
          Contáctanos y te responderemos lo antes posible.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-0 shadow-lg" id="contact-form">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-[Syne]">Envíanos un mensaje</CardTitle>
              <p className="text-muted-foreground">
                Completa el formulario y nos pondremos en contacto contigo
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      required
                      className="mt-1 font-[Syne]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      required
                      className="mt-1 font-[Syne]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Tipo de consulta</Label>
                  <Select 
                    value={formData.subject} 
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecciona el tema de tu consulta" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Consulta General</SelectItem>
                      <SelectItem value="courses">Información sobre Cursos</SelectItem>
                      <SelectItem value="services">Servicios Creativos</SelectItem>
                      <SelectItem value="jobs">Bolsa de Trabajo</SelectItem>
                      <SelectItem value="technical">Soporte Técnico</SelectItem>
                      <SelectItem value="billing">Facturación y Pagos</SelectItem>
                      <SelectItem value="partnership">Colaboraciones</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe tu consulta o cuéntanos cómo podemos ayudarte..."
                    required
                    className="mt-1 font-[Syne]"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 font-[Syne]"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-[Syne]">Información de contacto</CardTitle>
              <p className="text-muted-foreground font-[Syne]">
                También puedes contactarnos directamente por estos medios
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 font-[Syne]">Email</h3>
                  <p className="text-muted-foreground text-sm font-[Syne]">mkt.agenciacreativa2023@gmail.com</p>
                  <p className="text-muted-foreground text-sm"></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 font-[Syne]">Teléfono</h3>
                  <p className="text-muted-foreground text-sm font-[Syne]">644 234 8071</p>
                  <p className="text-muted-foreground text-sm text-xs"></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 font-[Syne]">Oficina</h3>
                  <p className="text-muted-foreground text-sm font-[Syne]">
                    Calle Empalme 915, California<br />
                    85038 Cd. Obregon, Sonora
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 font-[Syne]">Horario de atención</h3>
                  <p className="text-muted-foreground text-sm font-[Syne]">
                    Lunes - Viernes: 9:00 - 15:00<br />
                    Sábados: 09:00 - 15:00<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3 mb-4">
                <MessageSquare className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-primary mb-2 font-[Syne]">
                    Respuesta rápida garantizada
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-[Syne]">
                    Nos comprometemos a responder todas las consultas en un máximo de 24 horas durante días laborables.
                  </p>
                </div>
              </div>
              <div className="text-xs text-muted-foreground border-t border-border pt-3 mt-3 font-[Syne]">
                Tiempo promedio de respuesta: 4 horas
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 font-[Syne]">
          ¿No encuentras lo que buscas?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto font-[Syne]">
          Revisa nuestra sección de preguntas frecuentes donde encontrarás respuestas a las consultas más comunes.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigateToPage('faq')} className="font-[Syne]"
          >
            Ver Preguntas Frecuentes
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};