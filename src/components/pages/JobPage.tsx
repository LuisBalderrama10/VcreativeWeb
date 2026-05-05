import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';
import { useApp } from '../../context/AppContext';
import { MapPin, Calendar, DollarSign, ArrowLeft, CheckCircle, AlertCircle, Clock, User } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion } from 'motion/react';

export const JobPage: React.FC = () => {
  const { state, navigateToPage } = useApp();
  
  if (!state.selectedJob) {
    navigateToPage('jobs');
    return null;
  }

  const job = state.selectedJob;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Abierto</Badge>;
      case 'in-review':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">En Revisión</Badge>;
      case 'closed':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Cerrado</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-review':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'closed':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const canApply = state.user && job.status === 'open';

  return (
    <motion.div 
      className="min-h-screen py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigateToPage('jobs')}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a trabajos
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Job header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-primary text-primary-foreground">{job.category}</Badge>
                  {getStatusBadge(job.status)}
                </div>
                <motion.h1 
                  className="text-4xl font-bold mb-4 text-primary"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {job.title}
                </motion.h1>
                <motion.p 
                  className="text-lg text-muted-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  por <span className="font-semibold text-primary">{job.client}</span>
                </motion.p>
              </div>

              {/* Job details */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div 
                  className="flex items-center space-x-3 p-4 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(66, 190, 252, 0.1)' }}
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-medium">{job.location}</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 p-4 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(66, 190, 252, 0.1)' }}
                >
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Fecha</p>
                    <p className="font-medium">{new Date(job.date).toLocaleDateString('es-ES')}</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 p-4 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(66, 190, 252, 0.1)' }}
                >
                  <DollarSign className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Pago</p>
                    <p className="font-medium text-green-600 text-xl">{job.payment}€</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Job image */}
              <motion.div 
                className="relative rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <ImageWithFallback
                  src={job.image}
                  alt={job.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-primary font-bold text-lg">
                    {job.category}
                  </Badge>
                </div>
              </motion.div>

              {/* Job description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">Descripción del Trabajo</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {job.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">Requisitos</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {job.requirements.map((requirement, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-start space-x-3 p-3 rounded-lg border border-primary/10 bg-white/50 backdrop-blur-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                          whileHover={{ scale: 1.01, backgroundColor: 'rgba(66, 190, 252, 0.05)' }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{requirement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Application card */}
              <Card className="sticky top-8 border-primary/20 bg-gradient-to-br from-white to-accent/20">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <motion.div 
                      className="text-4xl font-bold text-green-600 mb-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {job.payment}€
                    </motion.div>
                    <p className="text-muted-foreground">Pago por el trabajo</p>
                    <div className="flex items-center justify-center mt-2">
                      {getStatusIcon(job.status)}
                      <span className="ml-2 text-sm font-medium">
                        {job.status === 'open' ? 'Abierto para aplicaciones' : 
                         job.status === 'in-review' ? 'En proceso de selección' : 'Trabajo cerrado'}
                      </span>
                    </div>
                  </div>

                  {!state.user ? (
                    <Alert className="mb-4 border-amber-200 bg-amber-50">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <button 
                          onClick={() => navigateToPage('login')}
                          className="text-primary underline hover:no-underline font-medium"
                        >
                          Inicia sesión
                        </button>{' '}
                        para aplicar a este trabajo.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <div className="space-y-3 mb-6">
                      <motion.div
                        whileHover={{ scale: canApply ? 1.02 : 1 }}
                        whileTap={{ scale: canApply ? 0.98 : 1 }}
                      >
                        <Button 
                          size="lg" 
                          className="w-full"
                          disabled={!canApply}
                        >
                          {job.status === 'open' ? 'Aplicar al Trabajo' : 
                           job.status === 'in-review' ? 'En Revisión' : 'Trabajo Cerrado'}
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          Guardar Trabajo
                        </Button>
                      </motion.div>
                    </div>
                  )}

                  <div className="space-y-3 text-sm border-t border-border pt-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cliente:</span>
                      <span className="font-medium text-primary">{job.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Categoría:</span>
                      <span className="font-medium">{job.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ubicación:</span>
                      <span className="font-medium">{job.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estado:</span>
                      {getStatusBadge(job.status)}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tips card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-blue-900">💡 Consejos para aplicar</h4>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li>• Revisa todos los requisitos cuidadosamente</li>
                      <li>• Prepara un portfolio actualizado</li>
                      <li>• Sé puntual en las comunicaciones</li>
                      <li>• Mantén un perfil profesional</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};