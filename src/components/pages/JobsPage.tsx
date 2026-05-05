import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Alert, AlertDescription } from '../ui/alert';
import { useApp } from '../../context/AppContext';
import { Camera, Upload, CheckCircle, Star, Users, Award, Zap, Heart, ImagePlus, X } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { AuthModal } from '../AuthModal';
import { motion } from 'motion/react';

export const JobsPage: React.FC = () => {
  const { state, navigateToPage } = useApp();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    ciudad: '',
    altura: '',
    experiencia: '',
    especialidades: [] as string[],
    disponibilidad: '',
    instagram: ''
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const especialidadesOptions = [
    'Moda/Fashion',
    'Belleza/Beauty',
    'Comercial/Advertising',
    'Editorial',
    'Fitness/Deportes',
    'Lingerie/Swimwear',
    'Plus Size',
    'Petite',
    'Glamour',
    'Arte/Conceptual'
  ];

  const stats = [
    { icon: Users, value: '300+', label: 'Modelos Registradas', color: 'text-blue-500' },
    { icon: Award, value: '120+', label: 'Campañas Exitosas', color: 'text-green-500' },
    { icon: Star, value: '4.9', label: 'Valoración Promedio', color: 'text-yellow-500' },
    { icon: Zap, value: '95%', label: 'Tasa de Contratación', color: 'text-purple-500' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEspecialidadToggle = (especialidad: string) => {
    setFormData(prev => ({
      ...prev,
      especialidades: prev.especialidades.includes(especialidad)
        ? prev.especialidades.filter(e => e !== especialidad)
        : [...prev.especialidades, especialidad]
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    // Limit to 3 photos maximum
    const totalPhotos = photos.length + files.length;
    if (totalPhotos > 3) {
      alert('Máximo 3 fotografías permitidas');
      return;
    }

    // Create previews
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhotoPreviews(prev => [...prev, event.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });

    setPhotos(prev => [...prev, ...files]);
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
    setPhotoPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!state.user) {
      setShowAuthModal(true);
      return;
    }

    if (photos.length < 3) {
      alert('Por favor, sube al menos 3 fotografías');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-3xl font-bold mb-4 text-green-600">¡Postulación Enviada!</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Gracias por tu interés en unirte a nuestra agencia. Hemos recibido tu postulación y 
              nuestro equipo la revisará cuidadosamente. Te contactaremos pronto con más información.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigateToPage('home')}
                className="px-8"
              >
                Volver al Inicio
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    edad: '',
                    ciudad: '',
                    altura: '',
                    experiencia: '',
                    especialidades: [],
                    disponibilidad: '',
                    instagram: ''
                  });
                  setPhotos([]);
                  setPhotoPreviews([]);
                }}
                className="px-8"
              >
                Nueva Postulación
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4 font-[Playfair_Display]">Modelos VCreative</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6 font-[Syne]">
            ¿Sueñas con ser modelo profesional? Estamos buscando talentos únicos para unirse a nuestra familia. 
            Completa el formulario y da el primer paso hacia una carrera exitosa en el modelaje.
          </p>

          {/* Call to Action Banner */}
          <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Heart className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-primary font-[Syne]">¡Tu oportunidad te está esperando!</h3>
            </div>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto font-[Syne]">
              Trabajamos con las mejores marcas y fotógrafos. Sin costos de inscripción, 
              sin compromisos. Solo tu talento y nuestra experiencia.
            </p>
          </div>
        </motion.div>



        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-b">
              <CardTitle className="text-2xl text-center flex items-center justify-center space-x-2">
                <Camera className="h-6 w-6 text-primary" />
                <span className="font-[Syne]">Formulario de Postulación para Modelos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Información Personal */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-primary border-b border-primary/20 pb-2 font-[Syne]">
                    Información Personal
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 font-[Syne]">Nombre Completo *</label>
                      <Input
                        value={formData.nombre}
                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                        placeholder="Tu nombre completo"
                        required
                        className="h-12 font-[Syne]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 font-[Syne]">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tu@email.com"
                        required
                        className="h-12 font-[Syne]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 font-[Syne]">Teléfono *</label>
                      <Input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange('telefono', e.target.value)}
                        placeholder="+52 123 456 7890"
                        required
                        className="h-12 font-[Syne]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 font-[Syne]">Edad *</label>
                      <Input
                        type="number"
                        value={formData.edad}
                        onChange={(e) => handleInputChange('edad', e.target.value)}
                        placeholder="18"
                        min="16"
                        max="50"
                        required
                        className="h-12 font-[Syne]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 font-[Syne]">Ciudad *</label>
                      <Input
                        value={formData.ciudad}
                        onChange={(e) => handleInputChange('ciudad', e.target.value)}
                        placeholder="Ciudad de México"
                        required
                        className="h-12 font-[Syne]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 font-[Syne]">Instagram</label>
                      <Input
                        value={formData.instagram}
                        onChange={(e) => handleInputChange('instagram', e.target.value)}
                        placeholder="@tuusuario"
                        className="h-12 font-[Syne]"
                      />
                    </div>
                  </div>
                </div>

                {/* Información Física y Fotografías */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-primary border-b border-primary/20 pb-2 font-[Syne]">
                    Información Física y Fotografías
                  </h3>
                  <div className="space-y-8">
                    {/* Altura */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 font-[Syne]">Altura (cm) *</label>
                        <Input
                          type="number"
                          value={formData.altura}
                          onChange={(e) => handleInputChange('altura', e.target.value)}
                          placeholder="170"
                          min="150"
                          max="200"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    {/* Fotografías */}
                    <div>
                      <label className="block text-sm font-medium mb-4 font-[Syne]">Fotografías (Mínimo 3 fotos) *</label>
                      <div className="space-y-4">
                        {/* Upload Area */}
                        <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center bg-primary/5 hover:bg-primary/10 transition-colors">
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="hidden"
                            id="photo-upload"
                            disabled={photos.length >= 3}
                          />
                          <label 
                            htmlFor="photo-upload" 
                            className={`cursor-pointer flex flex-col items-center space-y-3 ${photos.length >= 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            <ImagePlus className="w-12 h-12 text-primary" />
                            <div>
                              <p className="text-lg font-medium text-primary font-[Syne]">
                                {photos.length >= 3 ? 'Máximo 3 fotos alcanzado' : 'Sube tus fotografías'}
                              </p>
                              <p className="text-sm text-muted-foreground mt-2 font-[Syne]">
                                Incluye: 1 foto de rostro, 1 foto de cuerpo completo, 1 foto adicional
                              </p>
                              <p className="text-xs text-muted-foreground mt-1 font-[Syne]">
                                Formatos: JPG, PNG, WebP (máx. 5MB cada una)
                              </p>
                            </div>
                          </label>
                        </div>

                        {/* Photo Previews */}
                        {photoPreviews.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {photoPreviews.map((preview, index) => (
                              <div key={index} className="relative">
                                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
                                  <img
                                    src={preview}
                                    alt={`Foto ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removePhoto(index)}
                                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                                <p className="text-xs text-center mt-2 text-muted-foreground">
                                  Foto {index + 1}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Requirements */}
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <h4 className="font-medium text-amber-800 mb-2 font-[Syne]">Requisitos de las fotografías:</h4>
                          <ul className="text-sm text-amber-700 space-y-1">
                            <li className="font-[Syne]">• Buena iluminación natural</li>
                            <li className="font-[Syne]">• Fondo neutro preferible</li>
                            <li className="font-[Syne]">• Sin filtros ni edición excesiva</li>
                            <li className="font-[Syne]">• Ropa ajustada para foto de cuerpo completo</li>
                            <li className="font-[Syne]">• Expresión natural para foto de rostro</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experiencia y Especialidades */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-primary border-b border-primary/20 pb-2 font-[Syne]">
                    Experiencia Profesional
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 font-[Syne]">Nivel de Experiencia *</label>
                      <Select value={formData.experiencia} onValueChange={(value) => handleInputChange('experiencia', value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Selecciona tu nivel de experiencia" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="principiante">Principiante (Sin experiencia profesional)</SelectItem>
                          <SelectItem value="amateur">Amateur (Algunas sesiones casuales)</SelectItem>
                          <SelectItem value="semiprofesional">Semi-profesional (1-2 años de experiencia)</SelectItem>
                          <SelectItem value="profesional">Profesional (3+ años de experiencia)</SelectItem>
                          <SelectItem value="veterano">Veterano (5+ años de experiencia)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 font-[Syne]">Disponibilidad *</label>
                      <Select value={formData.disponibilidad} onValueChange={(value) => handleInputChange('disponibilidad', value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="¿Cuándo estás disponible?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tiempo-completo">Tiempo Completo</SelectItem>
                          <SelectItem value="medio-tiempo">Medio Tiempo</SelectItem>
                          <SelectItem value="fines-semana">Solo Fines de Semana</SelectItem>
                          <SelectItem value="flexible">Horario Flexible</SelectItem>
                          <SelectItem value="eventos">Solo Eventos Especiales</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Important Note */}
                <Alert className="border-blue-200 bg-blue-50">
                  <Camera className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800 font-[Syne]">
                    <strong>Importante:</strong> Nuestro equipo revisará tu postulación en un plazo de 48-72 horas. 
                    Si tu perfil coincide con nuestros proyectos actuales, te contactaremos para programar una cita presencial.
                  </AlertDescription>
                </Alert>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || !state.user || photos.length < 3}
                    className="px-12 py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Camera className="w-5 h-5 mr-2" />
                        Enviar Postulación
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Section */}
        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 ${stat.color}`}
                  animate={{
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm font-[Syne]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Auth Modal */}
        <AuthModal 
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          type="service"
        />
      </div>
    </div>
  );
};