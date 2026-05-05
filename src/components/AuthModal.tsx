import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { useApp } from '../context/AppContext';
import { X, User, BookOpen, Calendar, Shield, Star, Heart } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'service' | 'course';
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, type }) => {
  const { navigateToPage } = useApp();

  if (!isOpen) return null;

  const handleLogin = () => {
    onClose();
    navigateToPage('login');
  };

  const handleRegister = () => {
    onClose();
    navigateToPage('register');
  };

  const getTitle = () => {
    return type === 'service' 
      ? '¡Inicia sesión para agendar tu cita!'
      : '¡Inicia sesión para ordenar cursos!';
  };

  const getDescription = () => {
    return type === 'service'
      ? 'Para agendar una cita de consulta y acceder a nuestros servicios creativos profesionales, necesitas tener una cuenta en VCreative.'
      : 'Para ordenar cursos y acceder a nuestro contenido educativo premium, necesitas tener una cuenta en VCreative.';
  };

  const getFeatures = () => {
    if (type === 'service') {
      return [
        { icon: Calendar, text: 'Agenda citas fácilmente' },
        { icon: User, text: 'Gestiona tus consultas' },
        { icon: Shield, text: 'Datos seguros y privados' },
        { icon: Star, text: 'Experiencia personalizada' }
      ];
    } else {
      return [
        { icon: BookOpen, text: 'Acceso a todos los cursos' },
        { icon: User, text: 'Progreso personalizado' },
        { icon: Shield, text: 'Datos seguros y privados' },
        { icon: Heart, text: 'Contenido exclusivo' }
      ];
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="relative overflow-hidden bg-card border-0 shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-50/30" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-muted/80 hover:bg-muted flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <CardHeader className="relative pb-4">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              {type === 'service' ? (
                <Calendar className="w-8 h-8 text-white" />
              ) : (
                <BookOpen className="w-8 h-8 text-white" />
              )}
            </div>

            {/* Title */}
            <h2 className="text-center text-xl font-semibold mb-2">
              {getTitle()}
            </h2>

            {/* Description */}
            <p className="text-center text-sm text-muted-foreground leading-relaxed">
              {getDescription()}
            </p>
          </CardHeader>

          <CardContent className="relative space-y-6">
            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {getFeatures().map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="flex items-center space-x-2 text-xs"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* VCreative Badge */}
            <div className="flex justify-center">
              <Badge className="bg-gradient-to-r from-primary to-blue-500 text-white px-4 py-1.5">
                ✨ VCreative - Tu agencia creativa
              </Badge>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 shadow-lg"
                size="lg"
              >
                Iniciar Sesión
              </Button>
              
              <Button
                onClick={handleRegister}
                variant="outline"
                className="w-full border-primary/20 text-primary hover:bg-primary/5"
                size="lg"
              >
                Crear Cuenta Gratis
              </Button>
            </div>

            {/* Benefits */}
            <div className="text-center text-xs text-muted-foreground space-y-1">
              <p>🚀 Registro gratuito y rápido</p>
              <p>🔒 Tus datos están 100% protegidos</p>
              <p>💝 Acceso inmediato después del registro</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};