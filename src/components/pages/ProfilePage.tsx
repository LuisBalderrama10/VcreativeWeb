import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { useApp } from '../../context/AppContext';
import { User, BookOpen, Star, Calendar, Award, Settings } from 'lucide-react';
import { motion } from 'motion/react';

export const ProfilePage: React.FC = () => {
  const { state, navigateToPage } = useApp();

  if (!state.user) {
    navigateToPage('login');
    return null;
  }

  const mockEnrolledCourses = [
    { id: '1', name: 'Marketing Digital para Principiantes', progress: 75, rating: 4.8 },
    { id: '2', name: 'Instagram para Empresas', progress: 100, rating: 4.9 },
    { id: '3', name: 'Facebook Ads Avanzado', progress: 30, rating: null },
  ];

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-8 text-primary"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Mi Perfil
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <motion.div 
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-primary/20">
            <CardContent className="p-6 text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {state.user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold mb-2 text-primary">{state.user.name}</h2>
              <p className="text-muted-foreground mb-4">{state.user.email}</p>
              <Badge className="mb-4 bg-primary text-primary-foreground">
                {state.user.type === 'student' ? 'Estudiante' : 
                 state.user.type === 'model' ? 'Modelo' : 'Cliente'}
              </Badge>
              <Button 
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Settings className="w-4 h-4 mr-2" />
                Editar Perfil
              </Button>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card className="mt-6 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Estadísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cursos completados:</span>
                <span className="font-bold">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cursos en progreso:</span>
                <span className="font-bold">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Certificados:</span>
                <span className="font-bold">1</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* My Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Mis Cursos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockEnrolledCourses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      className="p-4 border border-primary/10 rounded-lg hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-primary">{course.name}</h3>
                        {course.progress === 100 && (
                          <Badge className="bg-green-100 text-green-800">
                            <Award className="w-3 h-3 mr-1" />
                            Completado
                          </Badge>
                        )}
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progreso</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {course.rating && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                            <span className="text-sm">Mi calificación: {course.rating}</span>
                          </div>
                        </div>
                      )}

                      <Button 
                        size="sm" 
                        className="mt-3"
                        onClick={() => navigateToPage('catalog')}
                      >
                        {course.progress === 100 ? 'Revisar' : 'Continuar'}
                      </Button>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <Button 
                    variant="outline"
                    onClick={() => navigateToPage('catalog')}
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Explorar Más Cursos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Calendar className="w-5 h-5 mr-2" />
                  Actividad Reciente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Completaste "Instagram para Empresas"</p>
                      <p className="text-sm text-muted-foreground">Hace 2 días</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Iniciaste "Facebook Ads Avanzado"</p>
                      <p className="text-sm text-muted-foreground">Hace 1 semana</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="font-medium">Te registraste en VCreative</p>
                      <p className="text-sm text-muted-foreground">Hace 2 semanas</p>
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