import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { useApp } from '../../context/AppContext';
import { Star, Users, Clock, PlayCircle, CheckCircle, ArrowLeft, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { AuthModal } from '../AuthModal';

export const CoursePage: React.FC = () => {
  const { state, navigateToPage, addToCart } = useApp();
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  if (!state.selectedCourse) {
    navigateToPage('catalog');
    return null;
  }

  const course = state.selectedCourse;

  const handleAddToCart = () => {
    if (!state.user) {
      setShowAuthModal(true);
      return;
    }
    
    addToCart({
      id: course.id,
      name: course.title,
      price: course.price,
      image: course.image,
      type: 'course'
    });
  };

  const courseModules = [
    'Introducción y fundamentos',
    'Técnicas avanzadas',
    'Herramientas profesionales',
    'Proyectos prácticos',
    'Portfolio y presentación'
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigateToPage('catalog')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al catálogo
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Course header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-primary">{course.level}</Badge>
                  <Badge variant="outline">{course.category}</Badge>
                </div>
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {course.description}
                </p>
                
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">({course.students} estudiantes)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span>{course.modules} módulos</span>
                  </div>
                </div>
              </div>

              {/* Course image */}
              <div className="relative rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90">
                    <PlayCircle className="w-6 h-6 mr-2" />
                    Vista previa del curso
                  </Button>
                </div>
              </div>

              {/* Course content */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Contenido del Curso</h3>
                  <div className="space-y-3">
                    {courseModules.map((module, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <span>{module}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* What you'll learn */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Lo que aprenderás</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Técnicas profesionales del sector',
                      'Uso de herramientas especializadas',
                      'Desarrollo de proyectos reales',
                      'Creación de portfolio profesional',
                      'Estrategias de marketing personal',
                      'Networking en la industria'
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {course.price}€
                  </div>
                  <p className="text-muted-foreground">Acceso de por vida</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={handleAddToCart}
                  >
                    Inscribirse al Curso
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                  >
                    Vista previa gratuita
                  </Button>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Instructor:</span>
                    <span className="font-medium">{course.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duración:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Módulos:</span>
                    <span className="font-medium">{course.modules}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nivel:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estudiantes:</span>
                    <span className="font-medium">{course.students}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3">Incluye:</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      'Acceso de por vida',
                      'Certificado de finalización',
                      'Recursos descargables',
                      'Soporte del instructor',
                      'Acceso desde móvil'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        type="course"
      />
    </div>
  );
};