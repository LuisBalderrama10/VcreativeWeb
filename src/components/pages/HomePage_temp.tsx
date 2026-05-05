import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { useApp } from '../../context/AppContext';
import { mockCourses } from '../../data/courses';
import { mockServices } from '../../data/services';
import { ArrowRight, Star, Users, Award, CheckCircle, Play, TrendingUp, Zap, Target, Palette } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { AuthModal } from '../AuthModal';
import { motion, useScroll, useTransform } from 'motion/react';


export const HomePage: React.FC = () => {
  const { navigateToPage, selectCourse, selectService, state } = useApp();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalType, setAuthModalType] = useState<'service' | 'course'>('course');
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 100]);

  const handleCourseSelect = (course: any) => {
    if (!state.user) {
      setAuthModalType('course');
      setShowAuthModal(true);
      return;
    }
    selectCourse(course);
  };

  const handleServiceSelect = (service: any) => {
    if (!state.user) {
      setAuthModalType('service');
      setShowAuthModal(true);
      return;
    }
    selectService(service);
  };
  
  // Featured images for marketing focus
  const marketingImages = [
    {
      url: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU1NDg1NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Analytics Dashboard'
    },
    {
      url: 'https://images.unsplash.com/photo-1626234736261-f50c9ff94bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljcyUyMGdyYXBoc3xlbnwxfHx8fDE3NTU0ODU2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Social Media Strategy'
    },
    {
      url: 'https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMGJyYW5kaW5nJTIwbW9ja3VwfGVufDF8fHx8MTc1NTQ4NTY2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Brand Design'
    }
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % marketingImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [marketingImages.length]);

  // Featured content
  const featuredCourses = mockCourses.slice(0, 3);
  const featuredServices = mockServices.slice(0, 3);

  const stats = [
    { icon: Users, value: '500+', label: 'Clientes Satisfechos', color: 'text-blue-500' },
    { icon: Award, value: '150+', label: 'Proyectos Completados', color: 'text-green-500' },
    { icon: Star, value: '4.9', label: 'Calificación Promedio', color: 'text-yellow-500' },
    { icon: TrendingUp, value: '98%', label: 'Tasa de Éxito', color: 'text-purple-500' }
  ];

  const features = [
    {
      icon: Target,
      title: 'Estrategias Personalizadas',
      description: 'Desarrollamos planes únicos para cada cliente'
    },
    {
      icon: Zap,
      title: 'Resultados Rápidos',
      description: 'Ve el impacto en tus métricas desde el primer mes'
    },
    {
      icon: Palette,
      title: 'Creatividad Sin Límites',
      description: 'Diseños innovadores que destacan tu marca'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-accent/10">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          />
          
          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Logo and Company Name */}
              <motion.div 
                className="flex flex-col items-center lg:items-start mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="flex items-center space-x-4 mb-4"
                >
                  {/* Logo de la empresa */}
                  <div className="relative">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="w-16 h-16 bg-gradient-to-br from-primary via-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden"
                    >
                      <motion.img
                        src="figma:asset/ca3aa84a38390cf14cc894dbe29dcf84bcecbb36.png"
                        alt="VCreative Logo"
                        className="w-10 h-10 object-contain"
                        animate={{
                          rotate: [0, -360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                    {/* Base ergonómica */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-primary/20 rounded-full blur-sm"></div>
                  </div>
                  
                  <div>
                    <motion.h1 
                      className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ['0%', '100%', '0%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      VCreative
                    </motion.h1>
                    <motion.p 
                      className="text-lg text-muted-foreground font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Agencia Creativa
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.h2 
                className="text-3xl lg:text-5xl font-semibold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Transformamos tu{' '}
                <motion.span
                  className="text-primary relative"
                  animate={{
                    color: ['#42BEFC', '#3b82f6', '#8b5cf6', '#42BEFC'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  presencia digital
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"
                    animate={{
                      scaleX: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.span>
              </motion.h2>

              <motion.p 
                className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Especialistas en marketing digital, diseño creativo y estrategias que impulsan tu marca al siguiente nivel.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg"
                    onClick={() => navigateToPage('services')}
                  >
                    Explorar Servicios
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="px-8 py-6 text-lg border-2 hover:bg-accent"
                    onClick={() => navigateToPage('catalog')}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Ver Cursos
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main rotating image */}
              <motion.div 
                className="relative w-full max-w-lg mx-auto"
                style={{ y: y1 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1 }}
                  >
                    <ImageWithFallback
                      src={marketingImages[currentImageIndex].url}
                      alt={marketingImages[currentImageIndex].title}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Floating cards */}
                <motion.div
                  className="absolute -top-8 -left-8"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Card className="bg-white/90 backdrop-blur-md border-0 shadow-xl">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium">Analytics en vivo</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -right-6"
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Card className="bg-primary/10 backdrop-blur-md border-0 shadow-xl">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">+127% Growth</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Secondary floating images */}
              <motion.div
                className="absolute top-10 right-10 w-24 h-24 rounded-2xl overflow-hidden shadow-lg"
                style={{ y: y2 }}
                animate={{
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1627542557169-5ed71c66ed85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnN8ZW58MXx8fHwxNzU1NDg1NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mobile Development"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-8 w-20 h-20 rounded-2xl overflow-hidden shadow-lg"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1721864428830-7417b93831b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY29udGVudCUyMGNyZWF0aW9uJTIwdG9vbHN8ZW58MXx8fHwxNzU1NDg1NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Content Tools"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 bg-muted/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
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
                <motion.div
                  className="text-3xl font-bold mb-2"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">¿Por qué elegirnos?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combinamos creatividad, estrategia y tecnología para crear experiencias digitales extraordinarias.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-accent/20">
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Services */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-primary/5 to-accent/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">Servicios Destacados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluciones creativas y estratégicas diseñadas para hacer crecer tu negocio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="overflow-hidden cursor-pointer group border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleServiceSelect(service)}
                >
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">
                        Consulta Gratuita
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{service.category}</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigateToPage('services')}
              className="px-8"
            >
              Ver Todos los Servicios
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Courses */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">Cursos Populares</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aprende las habilidades más demandadas en marketing digital con nuestros expertos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="overflow-hidden cursor-pointer group border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleCourseSelect(course)}
                >
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                      {course.level}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{course.rating}</span>
                        <span className="text-sm text-muted-foreground">({course.students})</span>
                      </div>
                      <span className="text-lg font-bold text-primary">${course.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{course.instructor}</span>
                      <span>{course.modules} módulos</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              onClick={() => navigateToPage('catalog')}
              className="px-8 bg-primary hover:bg-primary/90"
            >
              Ver Todos los Cursos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-primary/10 to-accent/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">¿Listo para Transformar tu Presencia Digital?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a cientos de empresas que ya confían en VCreative para impulsar su crecimiento digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
                  onClick={() => navigateToPage('contact')}
                >
                  Comenzar Ahora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 border-2"
                  onClick={() => navigateToPage('about')}
                >
                  Conocer Más
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        type={authModalType}
      />
    </div>
  );
};