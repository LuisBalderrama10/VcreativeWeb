import React from 'react';
import { Button } from '../ui/button';
import { useApp } from '../../context/AppContext';
import { motion } from 'motion/react';
import { 
  Camera, 
  Video, 
  Palette, 
  Users, 
  TrendingUp, 
  Smartphone,
  Brush,
  GraduationCap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const ServicesPage: React.FC = () => {
  const { navigateToPage } = useApp();

  const timelineSteps = [
    {
      step: "PASO 1",
      title: "Diagnóstico de marca",
      description: "Analizamos la identidad, valores y presencia digital de tu marca para identificar oportunidades y definir el punto de partida estratégico.",
      color: "bg-primary"
    },
    {
      step: "PASO 2", 
      title: "Estrategia de comunicación y contenido",
      description: "Diseñamos un plan de comunicación enfocado en conectar con tu audiencia mediante mensajes y contenidos relevantes que potencien tu marca.",
      color: "bg-secondary"
    },
    {
      step: "PASO 3",
      title: "Ejecución creativa", 
      description: "Transformamos las ideas en piezas visuales y campañas atractivas, alineadas con los objetivos y la esencia de tu negocio.",
      color: "bg-accent"
    },
    {
      step: "PASO 4",
      title: "Medición y optimización",
      description: "Evaluamos los resultados obtenidos y realizamos ajustes continuos para maximizar el rendimiento y el impacto de cada acción.",
      color: "bg-muted-foreground"
    }
  ];

  const services = [
    {
      title: "Manejo de Redes Sociales",
      description: "Gestión integral de tus plataformas digitales para construir una comunidad sólida y generar engagement auténtico.",
      features: [
        "Asesoría personalizada",
        "Planeación estratégica",
        "Creación de contenido",
        "Manejo de ADS", 
        "Reporte mensual",
        "Publicaciones diarias",
        "Historias interactivas"
      ],
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      title: "Sesión Fotográfica",
      description: "Capturamos la esencia de tu marca a través de fotografías profesionales que comunican tu mensaje de manera impactante.",
      features: [
        "Asesoría creativa",
        "Dirección de arte",
        "Edición profesional",
        "Entrega en alta calidad",
        "Múltiples formatos",
        "Concepto personalizado",
        "Post-producción avanzada"
      ],
      icon: Camera,
      image: "https://images.unsplash.com/photo-1554048612-b6a482b224ee?w=600&h=400&fit=crop"
    },
    {
      title: "Creación de Contenido (Fotos y Videos)",
      description: "Producción de contenido visual de alta calidad diseñado para destacar en todas las plataformas digitales.",
      features: [
        "Producción audiovisual",
        "Storytelling visual",
        "Contenido multiplataforma",
        "Edición cinematográfica",
        "Planificación creativa",
        "Optimización para redes",
        "Banco de contenido"
      ],
      icon: Video,
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&h=400&fit=crop"
    },
    {
      title: "Reels Creativos",
      description: "Contenido viral optimizado para maximizar tu alcance y conectar con tu audiencia de manera auténtica.",
      features: [
        "Trending topics",
        "Edición dinámica",
        "Música original",
        "Efectos especiales",
        "Optimización viral",
        "Storytelling creativo",
        "Análisis de tendencias"
      ],
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop"
    },
    {
      title: "Full Creativo",
      description: "Solución integral que abarca desde la conceptualización hasta la ejecución completa de tu estrategia creativa.",
      features: [
        "Estrategia 360°",
        "Branding completo",
        "Campaña integral",
        "Múltiples formatos",
        "Gestión completa",
        "Equipo dedicado",
        "Resultados garantizados"
      ],
      icon: Palette,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
    },
    {
      title: "Creando Comunidad",
      description: "Desarrollamos estrategias para construir y nutrir una comunidad leal alrededor de tu marca.",
      features: [
        "Community management",
        "Engagement strategies",
        "Eventos virtuales",
        "Contenido colaborativo",
        "Fidelización",
        "Interacción personalizada",
        "Crecimiento orgánico"
      ],
      icon: Users,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"
    },
    {
      title: "Diseño de Marca",
      description: "Creamos identidades visuales memorables que reflejan la personalidad única de tu empresa.",
      features: [
        "Logo y identidad",
        "Manual de marca",
        "Paleta de colores",
        "Tipografías corporativas",
        "Aplicaciones visuales",
        "Material promocional",
        "Brandbook completo"
      ],
      icon: Brush,
      image: "https://images.unsplash.com/photo-1558655146-364adaf768ac?w=600&h=400&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Timeline Section */}
      <motion.section 
        className="py-20 bg-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
              ¿Cómo <span className="text-accent">trabajamos</span>?
            </h2>
            <p className="font-syne text-lg text-muted-foreground max-w-2xl mx-auto">
              Así es como hacemos realidad tus ideas - El proceso VCreative
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-8 left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-1 lg:w-full lg:h-1 h-full bg-border" />
            
            <motion.div 
              className="space-y-12 lg:space-y-0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  variants={itemVariants}
                >
                  {/* Step Number */}
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold mb-4 lg:mb-0`}>
                    <span className="font-syne text-sm">{step.step.split(' ')[1]}</span>
                  </div>

                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-border">
                      <div className="mb-3">
                        <span className="font-syne text-sm font-medium text-primary uppercase tracking-wide">
                          {step.step}
                        </span>
                      </div>
                      <h3 className="font-playfair text-xl font-bold mb-3 text-foreground">
                        {step.title}
                      </h3>
                      <p className="font-syne text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
              Nuestros <span className="text-primary">Servicios</span>
            </h2>
            <p className="font-syne text-lg text-muted-foreground max-w-2xl mx-auto">
              Servicios especializados para hacer crecer tu presencia digital
            </p>
          </motion.div>

          <motion.div 
            className="space-y-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                variants={itemVariants}
              >
                {/* Image Side */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="font-playfair text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="font-syne text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-syne font-semibold text-foreground mb-4">
                      Lo que incluye:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="font-syne text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => navigateToPage('contact')}
                      className="font-syne gradient-primary text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      Descubre más
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Cursos - Coming Soon */}
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-12"
              variants={itemVariants}
            >
              {/* Image Side */}
              <div className="lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                    alt="Cursos VCreative"
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-6 right-6">
                    <span className="bg-accent text-white px-4 py-2 rounded-full font-syne font-semibold text-sm">
                      Próximamente
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="font-playfair text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                    Cursos
                  </h3>
                  <p className="font-syne text-lg text-muted-foreground leading-relaxed">
                    Próximamente disponibles. Cursos especializados en marketing digital y creación de contenido viral para emprendedores y empresas.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="font-syne font-semibold text-foreground mb-4">
                    Próximamente incluirá:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Marketing digital estratégico",
                      "Creación de contenido viral",
                      "Manejo de redes sociales",
                      "Branding personal",
                      "Fotografía para redes",
                      "Video marketing",
                      "Análisis de métricas"
                    ].map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center space-x-3 opacity-70"
                      >
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="font-syne text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => navigateToPage('contact')}
                    variant="outline"
                    className="font-syne border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 group"
                  >
                    Descubre más
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Final Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para hacer crecer tu{' '}
              <span className="text-primary">marca</span>?
            </h2>
            <p className="font-syne text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contáctanos hoy y descubre cómo podemos transformar tu presencia digital
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => navigateToPage('contact')}
                className="font-syne gradient-primary text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Empezar ahora
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};