import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { useApp } from '../../context/AppContext';
import { mockServices } from '../../data/services';
import { ArrowRight, Play, TrendingUp, Users, Award, Star, Palette, Zap, Target, Camera, Video, Heart, Eye } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';

export const HomePage: React.FC = () => {
  const { navigateToPage, selectService } = useApp();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 100]);


  
  // Portfolio videos grid (vertical format like Instagram/TikTok)
  // Define the interface for video objects
  interface PortfolioVideo {
    url: string;
    title: string;
    category: string;
    views: string;
    likes: string;
  }
  
  /**
   * 
   * 100 - Hallowen llegó a Galette
   * 101 - Sorpresa para tus peques
   * 102 - Tienes que controlar tu tomada
   * 103 - Vine por mi sandwich
   * 104 - A lo que yo vine fue a esto
   * 105 - Llevo casos de toda la republica
   * 106 - Nuevas bebidas en Machia
   * 107 - LCDLF versión Gourmazed
   * 108 - Preguntas a clientes
   * 109 - Termo Personalizado
   * 
   */
  // Function to get the encoded video URL
  const getVideoUrl = (filename: string) => `/videos/${encodeURIComponent(filename)}`;

  const portfolioVideos: PortfolioVideo[] = [
    {
      url:'https://res.cloudinary.com/dk9j89iey/video/upload/v1759991269/100_aj5bur.mp4',
      //url: getVideoUrl('100.mp4'),
      title: 'Hallowen llegó a Galette',
      category: 'Galette',
      views: '2.4k',
      likes: '187'
    },
    {
      url:'https://res.cloudinary.com/dk9j89iey/video/upload/v1759991270/101_zueu5a.mp4',
      //url: getVideoUrl('101.mp4'),
      title: 'Sorpresa para tus peques',
      category: 'Casa Trece',
      views: '5.1k',
      likes: '342'
    },
    {
      url:'https://res.cloudinary.com/dk9j89iey/video/upload/v1759991269/102_dqmypi.mp4',
      //url: getVideoUrl('102.mp4'),
      title: 'Tienes que controlar tu tomada',
      category: 'Los Arbolitos Cajeme',
      views: '3.8k',
      likes: '256'
    },
    {
      url:'https://res.cloudinary.com/dk9j89iey/video/upload/v1759991273/103_ghz4jf.mp4',
      //url: getVideoUrl('103.mp4'),
      title: 'Vine por mi sandwich',
      category: 'Michoacana',
      views: '6.2k',
      likes: '478'
    },
    {
      url:'https://res.cloudinary.com/dk9j89iey/video/upload/v1759991266/104_vd4yh3.mp4',
      //url: getVideoUrl('104.mp4'),
      title: 'A lo que yo vine fue a esto',
      category: 'Navy Door House',
      views: '4.3k',
      likes: '298'
    },
    {
      url:'https://res.cloudinary.com/dk9j89iey/video/upload/v1759991267/105_qis2zf.mp4',
      //url: getVideoUrl('105.mp4'),
      title: 'Llevo casos de toda la republica',
      category: 'Hector Beltrán',
      views: '12.7k',
      likes: '1.2k'
    },
    {
      url:'https://res.cloudinary.com/dk9j89iey/video/upload/v1759991271/106_y5amwo.mp4',
      //url: getVideoUrl('106.mp4'),
      title: 'Nuevas bebidas en Machia',
      category: 'Machia',
      views: '8.9k',
      likes: '567'
    },
    {
      url:'https://res.cloudinary.com/dk9j89iey/video/upload/v1759991273/107_yde0o4.mp4',
      //url: getVideoUrl('107.mp4'),
      title: 'LCDLF versión Gourmazed',
      category: 'Gourmazed',
      views: '15.2k',
      likes: '892'
    },
    {
      url:'https://res.cloudinary.com/dk9j89iey/video/upload/v1759991270/108_wcl8qw.mp4',
      //url: getVideoUrl('108.mp4'),
      title: 'Preguntas a clientes',
      category: 'Casa Lidias',
      views: '19.2k',
      likes: '1.2k'
    },
    {
      url:'https://res.cloudinary.com/dk9j89iey/video/upload/v1759991272/109_zszywi.mp4',
      //url: getVideoUrl('109.mp4'),
      title: 'Termo Personalizado',
      category: 'Matthews Shop',
      views: '19.2k',
      likes: '1.2k'
    }
  ];

  // Auto-rotate main video for hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % portfolioVideos.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [portfolioVideos.length]);

  const stats = [
    { icon: Users, value: '500+', label: 'Clientes Satisfechos', color: 'text-primary' },
    { icon: Award, value: '1,000+', label: 'Proyectos Completados', color: 'text-accent' },
    { icon: Star, value: '4.9', label: 'Calificación Promedio', color: 'text-secondary' },
    { icon: TrendingUp, value: '98%', label: 'Tasa de Éxito', color: 'text-muted-foreground' }
  ];

  const services = [
    {
      icon: Users,
      title: 'Creando Comunidad',
      description: 'Construimos comunidades sólidas y comprometidas'
    },
    {
      icon: Video,
      title: 'Reels Creativos',
      description: 'Contenido viral que impulsa tu alcance'
    },
    {
      icon: Palette,
      title: 'Diseño de Marca',
      description: 'Identidades visuales que conectan'
    },
    {
      icon: Camera,
      title: 'Sesión Fotográfica',
      description: 'Imágenes profesionales de tus productos'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Inspired by KOOL Studio */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with new color palette */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20" />
        
        {/* Animated elements */}
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
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Main Headline - Nuevo */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="mb-4">
                  
                </div>
                
                <h1 className="font-[Playfair_Display] text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  <motion.span
                    className="block text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Tu marca,
                  </motion.span>
                  <motion.span
                    className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    nuestra creatividad
                  </motion.span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-8"
              >
                <p className="font-[Syne] text-lg text-muted-foreground leading-relaxed max-w-lg m-[0px]">
                  En VCreative transformamos ideas en contenido{' '}
                  <span className="text-primary font-semibold">atractivo y estratégico</span> para redes sociales de negocios. 
                  Nuestra misión es ayudarte a{' '}
                  <span className="text-accent font-semibold">conectar con tu audiencia</span>,{' '}
                  generar confianza y lograr que tu marca se vuelva{' '}
                  <span className="text-primary font-semibold font-bold font-normal">inolvidable</span> en el mundo digital.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    onClick={() => navigateToPage('about')}
                    className="font-[Syne] gradient-primary text-white hover:opacity-90 px-10 py-6 text-lg font-semibold rounded-full shadow-2xl border-2 border-transparent hover:border-accent/30 transition-all duration-300"
                  >
                    Conoce más
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Vertical Video Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[600px] overflow-hidden"
            >
              <div className="grid grid-cols-3 gap-4 h-full">
                {/* Column 1 - Fastest */}
                <div className="relative h-full overflow-hidden">
                  <motion.div
                    className="flex flex-col gap-6"
                    animate={{
                      y: [600, -600]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {/* Duplicate videos for seamless loop */}
                    {[...portfolioVideos, ...portfolioVideos].map((video, index) => (
                      <div
                        key={`col1-${index}`}
                        className="relative rounded-2xl overflow-hidden shadow-lg aspect-[9/16] w-full flex-shrink-0 bg-black"
                      >
                        <video
                          src={video.url}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        {/* Video overlay with stats - Optimized for mobile */}
                        <div className="absolute bottom-1 left-1 right-1 md:bottom-2 md:left-2 md:right-2 bg-black/70 rounded-lg p-1 md:p-2 text-white text-xs">
                          <div className="flex items-center justify-between mb-0.5 md:mb-1">
                            <span className="flex items-center gap-1">
                              <Eye className="w-2.5 h-2.5 md:w-3 md:h-3" />
                              <span className="text-xs">{video.views}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="w-2.5 h-2.5 md:w-3 md:h-3" />
                              <span className="text-xs">{video.likes}</span>
                            </span>
                          </div>
                          <p className="font-medium truncate text-xs leading-tight font-[Syne]">{video.title}</p>
                          <p className="text-xs opacity-80 hidden md:block">{video.category}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Column 2 - Medium Speed */}
                <div className="relative h-full overflow-hidden">
                  <motion.div
                    className="flex flex-col gap-6"
                    animate={{
                      y: [600, -600]
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                      delay: -5
                    }}
                  >
                    {/* Reorder videos for variety */}
                    {[...portfolioVideos.slice(2), ...portfolioVideos.slice(0, 2), ...portfolioVideos.slice(2), ...portfolioVideos.slice(0, 2)].map((video, index) => (
                      <div
                        key={`col2-${index}`}
                        className="relative rounded-2xl overflow-hidden shadow-lg aspect-[9/16] w-full flex-shrink-0 bg-black"
                      >
                        <video
                          src={video.url}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        {/* Video overlay with stats - Optimized for mobile */}
                        <div className="absolute bottom-1 left-1 right-1 md:bottom-2 md:left-2 md:right-2 bg-black/70 rounded-lg p-1 md:p-2 text-white text-xs">
                          <div className="flex items-center justify-between mb-0.5 md:mb-1">
                            <span className="flex items-center gap-1">
                              <Eye className="w-2.5 h-2.5 md:w-3 md:h-3" />
                              <span className="text-xs">{video.views}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="w-2.5 h-2.5 md:w-3 md:h-3" />
                              <span className="text-xs">{video.likes}</span>
                            </span>
                          </div>
                          <p className="font-medium truncate text-xs leading-tight">{video.title}</p>
                          <p className="text-xs opacity-80 hidden md:block">{video.category}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Column 3 - Slowest */}
                <div className="relative h-full overflow-hidden">
                  <motion.div
                    className="flex flex-col gap-6"
                    animate={{
                      y: [600, -600]
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                      delay: -10
                    }}
                  >
                    {/* Another arrangement for variety */}
                    {[...portfolioVideos.slice(4), ...portfolioVideos.slice(0, 4), ...portfolioVideos.slice(4), ...portfolioVideos.slice(0, 4)].map((video, index) => (
                      <div
                        key={`col3-${index}`}
                        className="relative rounded-2xl overflow-hidden shadow-lg aspect-[9/16] w-full flex-shrink-0 bg-black"
                      >
                        <video
                          src={video.url}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        {/* Video overlay with stats - Optimized for mobile */}
                        <div className="absolute bottom-1 left-1 right-1 md:bottom-2 md:left-2 md:right-2 bg-black/70 rounded-lg p-1 md:p-2 text-white text-xs">
                          <div className="flex items-center justify-between mb-0.5 md:mb-1">
                            <span className="flex items-center gap-1">
                              <Eye className="w-2.5 h-2.5 md:w-3 md:h-3" />
                              <span className="text-xs">{video.views}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="w-2.5 h-2.5 md:w-3 md:h-3" />
                              <span className="text-xs">{video.likes}</span>
                            </span>
                          </div>
                          <p className="font-medium truncate text-xs leading-tight">{video.title}</p>
                          <p className="text-xs opacity-80 hidden md:block">{video.category}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-secondary/10 to-primary/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
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
                  className="text-3xl font-black mb-2"
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
                <p className="text-muted-foreground font-medium font-[Syne]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Preview */}
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
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
              Nuestros <span className="text-accent">Servicios</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[Syne]">
              Soluciones creativas diseñadas para hacer que tu contenido se vuelva viral.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-secondary/10">
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3 font-[Syne]">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-[Syne] text-[16px]">{service.description}</p>
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
              className="px-8 py-4 text-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 font-[Syne]"
            >
              Ver Todos los Servicios
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-32 bg-gradient-to-br from-foreground to-muted-foreground text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-black mb-8 font-[Playfair_Display]">
              ¿Listo para ser{' '}
              <motion.span
                className="text-accent"
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                VIRAL
              </motion.span>
              ?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 font-[Syne]">
              Únete a más de 500 marcas que ya confían en nosotros para crear contenido que realmente conecta.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => navigateToPage('contact')}
                className="bg-white text-foreground hover:bg-background px-12 py-6 text-xl font-bold rounded-full shadow-2xl font-[Syne]"
              >
                Empecemos Ahora
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Clients Section - Horizontal Carousel */}
      <motion.section 
        className="py-16 bg-white/50 backdrop-blur-sm border-y border-border/20 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 lg:px-8 mb-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground/80 text-[36px] font-[Playfair_Display] font-normal">
              Confían en <span className="text-accent font-normal font-bold">VCreative</span>
            </h2>
            <p className="text-muted-foreground text-[15px] font-[Syne]">
              Marcas que ya son parte de nuestra historia viral
            </p>
          </motion.div>
        </div>
        
        {/* Infinite Scrolling Logos */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center space-x-12 min-w-full"
              animate={{
                x: [0, -100 * 28] // Move 28 logos to the left
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 80,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {[
                { 
                  name: "Cliente 1", 
                  logo: "https://i.ibb.co/pjNg2LmR/imagen-2025-10-01-141626207.png"
                },
                { 
                  name: "Los Arbolitos", 
                  logo: "https://i.ibb.co/Rphk2gHn/logo-LOS-ARBOLITOS-page-0001.jpg"
                },
                { 
                  name: "Cliente 3", 
                  logo: "https://i.ibb.co/0R6Mzgqn/imagen-2025-10-02-111352913.png"
                },
                { 
                  name: "Logotipo", 
                  logo: "https://i.ibb.co/ycckY8ys/Logotipo.jpg"
                },
                { 
                  name: "Cliente 5", 
                  logo: "https://i.ibb.co/RTgbpRD4/images-1.jpg"
                },
                { 
                  name: "Cliente 6", 
                  logo: "https://i.ibb.co/35MwZYt1/imagen-2025-10-02-111759338.png"
                },
                { 
                  name: "Cliente 7", 
                  logo: "https://i.ibb.co/0yqGxWDp/images-2.jpg"
                },
                { 
                  name: "Cliente 8", 
                  logo: "https://i.ibb.co/nsb96BzB/images-3.jpg"
                },
                { 
                  name: "Mesa de Trabajo", 
                  logo: "https://i.ibb.co/fdYTTTZr/Mesa-de-trabajo-20-3x-100.jpg"
                },
                { 
                  name: "Gelas", 
                  logo: "https://i.ibb.co/Xx0cg2hh/Logo-Gelas.jpg"
                },
                { 
                  name: "Glenns", 
                  logo: "https://i.ibb.co/PzctTGcM/Glenns-Lockup-Full-Color.jpg"
                },
                { 
                  name: "Cliente 12", 
                  logo: "https://i.ibb.co/ZRbD38RY/imagen-2025-10-02-113412085.png"
                },
                { 
                  name: "Cliente 13", 
                  logo: "https://i.ibb.co/CKJYCW2N/imagen-2025-10-02-113946734.png"
                },
                { 
                  name: "Cliente 14", 
                  logo: "https://i.ibb.co/yBM6G4dW/imagen-2025-10-02-114122345.png"
                },
                { 
                  name: "Logo PNG", 
                  logo: "https://i.ibb.co/rfNyhDkk/logo-png1.png"
                },
                { 
                  name: "Cliente 16", 
                  logo: "https://i.ibb.co/5WH1hknK/imagen-2025-10-02-114233798.png"
                },
                { 
                  name: "Cliente 17", 
                  logo: "https://i.ibb.co/N2Y7FzJ3/imagen-2025-10-02-114313398.png"
                },
                { 
                  name: "Cliente 18", 
                  logo: "https://i.ibb.co/qYpwL8M3/imagen-2025-10-02-114408243.png"
                },
                { 
                  name: "Cliente 19", 
                  logo: "https://i.ibb.co/Y4jdK11Y/images-4.png"
                },
                { 
                  name: "WhatsApp Cliente", 
                  logo: "https://i.ibb.co/84rhf5jr/Imagen-de-Whats-App-2024-11-01-a-las-10-22-18-af191a75.jpg"
                },
                { 
                  name: "Logo PNG 2", 
                  logo: "https://i.ibb.co/6RGzYfcT/LOGOpng.png"
                },
                { 
                  name: "Cliente 22", 
                  logo: "https://i.ibb.co/9m5zqPyK/images-4.jpg"
                },
                { 
                  name: "Cliente 23", 
                  logo: "https://i.ibb.co/gZ9JcXXT/images-5.jpg"
                },
                { 
                  name: "Cliente 24", 
                  logo: "https://i.ibb.co/4ZH3X5ph/imagen-2025-10-02-120454163.png"
                },
                { 
                  name: "Cliente 25", 
                  logo: "https://i.ibb.co/398kBkPS/imagen-2025-10-02-120627705.png"
                },
                { 
                  name: "Cliente 26", 
                  logo: "https://i.ibb.co/Y4hWBQ3d/images-5.png"
                },
                { 
                  name: "Cliente 27", 
                  logo: "https://i.ibb.co/4RkRg8ck/images-7.jpg"
                },
                { 
                  name: "Cliente 28", 
                  logo: "https://i.ibb.co/TMMCycS1/images-6.png"
                }
              ].map((client, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center h-36 w-56 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 border border-border/10"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ImageWithFallback
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-28 w-48 object-contain opacity-60 hover:opacity-80 transition-opacity filter grayscale hover:grayscale-0"
                  />
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
                { 
                  name: "Cliente 1", 
                  logo: "https://i.ibb.co/pjNg2LmR/imagen-2025-10-01-141626207.png"
                },
                { 
                  name: "Los Arbolitos", 
                  logo: "https://i.ibb.co/Rphk2gHn/logo-LOS-ARBOLITOS-page-0001.jpg"
                },
                { 
                  name: "Cliente 3", 
                  logo: "https://i.ibb.co/0R6Mzgqn/imagen-2025-10-02-111352913.png"
                },
                { 
                  name: "Logotipo", 
                  logo: "https://i.ibb.co/ycckY8ys/Logotipo.jpg"
                },
                { 
                  name: "Cliente 5", 
                  logo: "https://i.ibb.co/RTgbpRD4/images-1.jpg"
                },
                { 
                  name: "Cliente 6", 
                  logo: "https://i.ibb.co/35MwZYt1/imagen-2025-10-02-111759338.png"
                },
                { 
                  name: "Cliente 7", 
                  logo: "https://i.ibb.co/0yqGxWDp/images-2.jpg"
                },
                { 
                  name: "Cliente 8", 
                  logo: "https://i.ibb.co/nsb96BzB/images-3.jpg"
                },
                { 
                  name: "Mesa de Trabajo", 
                  logo: "https://i.ibb.co/fdYTTTZr/Mesa-de-trabajo-20-3x-100.jpg"
                },
                { 
                  name: "Gelas", 
                  logo: "https://i.ibb.co/Xx0cg2hh/Logo-Gelas.jpg"
                },
                { 
                  name: "Glenns", 
                  logo: "https://i.ibb.co/PzctTGcM/Glenns-Lockup-Full-Color.jpg"
                },
                { 
                  name: "Cliente 12", 
                  logo: "https://i.ibb.co/ZRbD38RY/imagen-2025-10-02-113412085.png"
                },
                { 
                  name: "Cliente 13", 
                  logo: "https://i.ibb.co/CKJYCW2N/imagen-2025-10-02-113946734.png"
                },
                { 
                  name: "Cliente 14", 
                  logo: "https://i.ibb.co/yBM6G4dW/imagen-2025-10-02-114122345.png"
                },
                { 
                  name: "Logo PNG", 
                  logo: "https://i.ibb.co/rfNyhDkk/logo-png1.png"
                },
                { 
                  name: "Cliente 16", 
                  logo: "https://i.ibb.co/5WH1hknK/imagen-2025-10-02-114233798.png"
                },
                { 
                  name: "Cliente 17", 
                  logo: "https://i.ibb.co/N2Y7FzJ3/imagen-2025-10-02-114313398.png"
                },
                { 
                  name: "Cliente 18", 
                  logo: "https://i.ibb.co/qYpwL8M3/imagen-2025-10-02-114408243.png"
                },
                { 
                  name: "Cliente 19", 
                  logo: "https://i.ibb.co/Y4jdK11Y/images-4.png"
                },
                { 
                  name: "WhatsApp Cliente", 
                  logo: "https://i.ibb.co/84rhf5jr/Imagen-de-Whats-App-2024-11-01-a-las-10-22-18-af191a75.jpg"
                },
                { 
                  name: "Logo PNG 2", 
                  logo: "https://i.ibb.co/6RGzYfcT/LOGOpng.png"
                },
                { 
                  name: "Cliente 22", 
                  logo: "https://i.ibb.co/9m5zqPyK/images-4.jpg"
                },
                { 
                  name: "Cliente 23", 
                  logo: "https://i.ibb.co/gZ9JcXXT/images-5.jpg"
                },
                { 
                  name: "Cliente 24", 
                  logo: "https://i.ibb.co/4ZH3X5ph/imagen-2025-10-02-120454163.png"
                },
                { 
                  name: "Cliente 25", 
                  logo: "https://i.ibb.co/398kBkPS/imagen-2025-10-02-120627705.png"
                },
                { 
                  name: "Cliente 26", 
                  logo: "https://i.ibb.co/Y4hWBQ3d/images-5.png"
                },
                { 
                  name: "Cliente 27", 
                  logo: "https://i.ibb.co/4RkRg8ck/images-7.jpg"
                },
                { 
                  name: "Cliente 28", 
                  logo: "https://i.ibb.co/TMMCycS1/images-6.png"
                }
              ].map((client, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  className="flex items-center justify-center h-36 w-56 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 border border-border/10"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ImageWithFallback
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-28 w-48 object-contain opacity-60 hover:opacity-80 transition-opacity filter grayscale hover:grayscale-0"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/50 to-transparent pointer-events-none z-10" />
        </div>
      </motion.section>
    </div>
  );
};