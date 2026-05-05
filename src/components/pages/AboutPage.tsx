import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
import {
  Users,
  Target,
  Award,
  Heart,
  Zap,
  Globe,
  Camera,
  Video,
  Play,
  ExternalLink,
} from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { PortfolioModal } from "../PortfolioModal";
import { useApp } from "../../context/AppContext";

export const AboutPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "photos" | "videos"
  >("photos");
  const [currentTab, setCurrentTab] = useState("photos");
  const { navigateToPage } = useApp();

  const handleViewComplete = () => {
    setModalType(currentTab as "photos" | "videos");
    setModalOpen(true);
  };

  const handleStartTransformation = () => {
    navigateToPage("contact");
    // Scroll to contact form after navigation
    setTimeout(() => {
      const contactForm =
        document.getElementById("contact-form");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const values = [
    {
      icon: Target,
      title: "Excelencia",
      description:
        "Nos comprometemos a ofrecer la mejor calidad en todos nuestros cursos y servicios.",
    },
    {
      icon: Heart,
      title: "Pasión",
      description:
        "Amamos lo que hacemos y esa pasión se refleja en cada proyecto que realizamos.",
    },
    {
      icon: Zap,
      title: "Innovación",
      description:
        "Estamos siempre a la vanguardia de las últimas tendencias digitales.",
    },
    {
      icon: Globe,
      title: "Accesibilidad",
      description:
        "Hacemos el conocimiento digital accesible para todos, sin importar el nivel.",
    },
  ];

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Portfolio Section */}
      <motion.div
        className="mb-20 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4">
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold">
                  Nuestro Portafolio
                </h2>
              </div>
              <div className="w-24 h-1 gradient-secondary mx-auto rounded-full mb-6"></div>
              <p className="font-syne text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubre el trabajo creativo que realizamos para
                nuestros clientes
              </p>
            </motion.div>
          </div>

          <Tabs
            defaultValue="photos"
            value={currentTab}
            onValueChange={setCurrentTab}
            className="max-w-6xl mx-auto"
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-card/50 backdrop-blur-sm">
              <TabsTrigger
                value="photos"
                className="font-syne font-medium data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Camera className="w-4 h-4 mr-2" />
                Fotografías
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="font-syne font-medium data-[state=active]:bg-accent data-[state=active]:text-white"
              >
                <Video className="w-4 h-4 mr-2" />
                Videos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="photos" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[
                  {
                    src: "https://images.unsplash.com/photo-1758613654707-8bdab92f711d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGNyZWF0aXZlJTIwYWdlbmN5fGVufDF8fHx8MTc1OTYzNjgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
                    title: "Sesión Corporativa",
                    description:
                      "Fotografía profesional para empresas",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1758613656153-196ebbef97d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBwaG90b3Nob290fGVufDF8fHx8MTc1OTYzNjgyNXww&ixlib=rb-4.1.0&q=80&w=1080",
                    title: "Equipo Creativo",
                    description:
                      "Retrato profesional del equipo",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1617893604862-2462582254c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHBob3RvZ3JhcGh5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTYzNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080",
                    title: "Branding",
                    description:
                      "Fotografía de marca profesional",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1758613653298-738e98658e31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHBob3RvJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NTk2MzY4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
                    title: "Sesión Creativa",
                    description:
                      "Concepto artístico y original",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1664277497091-d4919922b55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBhZ2VuY3klMjBzdHVkaW98ZW58MXx8fHwxNzU5NjM2ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
                    title: "Estudio",
                    description:
                      "Behind the scenes del proceso",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWt0b2slMjB2aWRlbyUyMGZpbG1pbmclMjBzdHVkaW98ZW58MXx8fHwxNzU5NjM2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
                    title: "Producto",
                    description:
                      "Fotografía de producto premium",
                  },
                ].map((photo, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + index * 0.1,
                    }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative">
                        <ImageWithFallback
                          src={photo.src}
                          alt={photo.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="font-playfair text-lg font-bold mb-1">
                            {photo.title}
                          </h3>
                          <p className="font-syne text-sm opacity-90">
                            {photo.description}
                          </p>
                        </div>
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="videos" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[
                  {
                    src: "https://images.unsplash.com/photo-1664277497091-d4919922b55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBhZ2VuY3klMjBzdHVkaW98ZW58MXx8fHwxNzU5NjM2ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
                    title: "Reel Corporativo",
                    description: "Video promocional de marca",
                    duration: "0:15",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWt0b2slMjB2aWRlbyUyMGZpbG1pbmclMjBzdHVkaW98ZW58MXx8fHwxNzU5NjM2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
                    title: "TikTok Viral",
                    description:
                      "Contenido para redes sociales",
                    duration: "0:30",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1758613654707-8bdab92f711d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGNyZWF0aXZlJTIwYWdlbmN5fGVufDF8fHx8MTc1OTYzNjgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
                    title: "Behind the Scenes",
                    description: "Proceso creativo en acción",
                    duration: "1:00",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1758613656153-196ebbef97d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBwaG90b3Nob290fGVufDF8fHx8MTc1OTYzNjgyNXww&ixlib=rb-4.1.0&q=80&w=1080",
                    title: "Producto en Acción",
                    description: "Demostración creativa",
                    duration: "0:45",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1617893604862-2462582254c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHBob3RvZ3JhcGh5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTYzNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080",
                    title: "Instagram Reel",
                    description: "Formato vertical optimizado",
                    duration: "0:20",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1758613653298-738e98658e31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHBob3RvJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NTk2MzY4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
                    title: "Campaña Digital",
                    description: "Video para redes sociales",
                    duration: "0:25",
                  },
                ].map((video, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + index * 0.1,
                    }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative">
                        <ImageWithFallback
                          src={video.src}
                          alt={video.title}
                          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110 aspect-[9/16]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent/90 transition-all duration-300">
                            <Play className="w-6 h-6 text-white ml-1" />
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="font-syne text-xs text-white font-medium">
                            {video.duration}
                          </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="font-playfair text-lg font-bold mb-1">
                            {video.title}
                          </h3>
                          <p className="font-syne text-sm opacity-90">
                            {video.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onClick={handleViewComplete}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-syne font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver Portafolio Completo
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Portfolio Modal */}
        <PortfolioModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          type={modalType}
        />
      </motion.div>

      {/* Casos de Éxito Section */}
      <motion.div
        className="mb-20 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4">
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold">
                  Casos de Éxito
                </h2>
              </div>
              <div className="w-24 h-1 gradient-secondary mx-auto rounded-full mb-6"></div>
              <p className="font-syne text-lg text-muted-foreground max-w-2xl mx-auto">
                Transformaciones reales que generaron resultados
                excepcionales para nuestros clientes
              </p>
            </motion.div>
          </div>

          <div className="max-w-[1800px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {[
                {
                  brand: "Arbolitos de Cajeme",
                  company: "Arbolitos de Cajeme",
                  category: "Restaurante",
                  beforeImage:
                    "https://agencia-vcreative.my.canva.site/portafolio-vcreative/_assets/media/03d4dc52b45b7b4d5ea13792b237b75d.png",
                  afterImage:
                    "https://agencia-vcreative.my.canva.site/portafolio-vcreative/_assets/media/5820eff870947598d0567ed5e6e8ff2c.png",
                },
                {
                  brand: "Machia Cafe Brunch",
                  company: "Machia Cafe Brunch",
                  category: "Cafeteria",
                  beforeImage:
                    "https://agencia-vcreative.my.canva.site/portafolio-vcreative/_assets/media/908147ee4ba5a6a5c1c7a357b9a13ca5.png",
                  afterImage:
                    "https://agencia-vcreative.my.canva.site/portafolio-vcreative/_assets/media/dc8dc3e13c0bb5f29e0d1e954db7a988.png",
                },
                {
                  brand: "Moi Moi",
                  company: "Moi Moi",
                  category: "Restaurante",
                  beforeImage:
                    "https://agencia-vcreative.my.canva.site/portafolio-vcreative/_assets/media/c7ca633acecc707d90734869cd781f88.png",
                  afterImage:
                    "https://agencia-vcreative.my.canva.site/portafolio-vcreative/_assets/media/345e61ab8eed4edd18c005d7c33e6f45.png",
                },
                {
                  brand: "Lidias Tacos",
                  company: "Lidias Tacos",
                  category: "Restaurante",
                  beforeImage:
                    "https://agencia-vcreative.my.canva.site/portafolio-vcreative/_assets/media/d8c5c155d29ee2d5ea5032d6fb176737.png",
                  afterImage:
                    "https://agencia-vcreative.my.canva.site/portafolio-vcreative/_assets/media/5c2a9c4b8181480745f0be1cb0fca777.png",
                },
                {
                  brand: "La Michoacana",
                  company: "La Michoacana",
                  category: "Pasteleria",
                  beforeImage:
                    "https://agencia-vcreative.my.canva.site/portafolio-vcreative/_assets/media/bda24ab4c8adef2041142994c3f5c9e7.png",
                  afterImage:
                    "https://agencia-vcreative.my.canva.site/portafolio-vcreative/_assets/media/40e1250d22381c83961fe13c750d44b5.png",
                },
                {
                  brand: "Galette",
                  company: "Galette",
                  category: "Cafeteria",
                  beforeImage:
                    "https://agencia-vcreative.my.canva.site/portafolio-vcreative/_assets/media/545fb37e40a1c4a0d382ac170d63e888.png",
                  afterImage:
                    "https://agencia-vcreative.my.canva.site/portafolio-vcreative/_assets/media/8f8ea93989cc48233de5d449662fc4d8.png",
                },
              ].map((successCase, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.2,
                  }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500">
                      {/* Header */}
                      <div className="text-center mb-8">
                        <h3 className="font-playfair text-3xl font-bold text-primary mb-3">
                          {successCase.brand}
                        </h3>
                        <div className="bg-accent/10 text-accent font-syne font-medium px-5 py-2 rounded-full inline-block">
                          {successCase.category}
                        </div>
                      </div>

                      {/* Comparison Phones */}
                      <div className="grid grid-cols-2 gap-6">
                        {/* Before */}
                        <div className="text-center">
                          <div className="bg-muted/30 rounded-2xl p-2 mb-4 border border-border/30">
                            <div className="aspect-[9/20] rounded-xl overflow-hidden relative">
                              <ImageWithFallback
                                src={successCase.beforeImage}
                                alt={`Perfil de ${successCase.company} antes de la transformación`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                          <span className="font-syne text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Antes
                          </span>
                        </div>
                        {/* After */}
                        <div className="text-center">
                          <div className="bg-primary/10 rounded-2xl p-2 mb-4 border border-primary/30">
                            <div className="aspect-[9/20] rounded-xl overflow-hidden relative">
                              <ImageWithFallback
                                src={successCase.afterImage}
                                alt={`Perfil de ${successCase.company} después de la transformación`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                          <span className="font-syne text-sm font-semibold text-primary uppercase tracking-wider">
                            Después
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 border border-border/30">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                  ¿Listo para ser nuestro próximo caso de éxito?
                </h3>
                <p className="font-syne text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Transformemos juntos la presencia digital de
                  tu marca y llevémosla al siguiente nivel
                </p>
                <Button
                  onClick={handleStartTransformation}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-syne font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Comenzar mi transformación
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Sobre VCreative y Valores - Unified Section */}
      <motion.div
        className="mb-20 bg-gradient-to-br from-[#172940] via-[#1C4D8C] to-[#172940] rounded-3xl p-12 md:p-16 lg:p-20 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-white">
            Sobre VCreative
          </h1>
          <p className="font-syne text-xl text-white/90 max-w-3xl mx-auto leading-relaxed text-center">
            En nuestra agencia creativa, creemos firmemente que
            cada marca es única y ​merece una estrategia hecha a
            la medida de sus necesidades y objetivos. Con esta
            ​filosofía, hemos tenido el privilegio de colaborar
            con más de 30 marcas a nivel local y ​nacional,
            brindando soluciones creativas y personalizadas que
            reflejan la esencia de ​cada cliente.
          </p>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4 text-white">
              Nuestros Valores
            </h2>
            <p className="font-syne text-white/80 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y definen
              nuestra identidad como empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="font-syne text-white/80 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Organigrama Section */}
      <motion.div
        className="mb-20 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold">
                  Nuestro Equipo
                </h2>
              </div>
              <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
              <p className="font-syne text-lg text-muted-foreground max-w-2xl mx-auto">
                La estructura que impulsa la creatividad en
                VCreative
              </p>
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* CEO Level - Corona */}
            <motion.div
              className="flex justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative glass-effect backdrop-blur-xl rounded-2xl px-8 py-6 border-2 border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
                      CEO
                    </h3>
                    <p className="font-syne text-lg font-semibold text-foreground">
                      Valeria Castro
                    </p>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full shadow-lg animate-pulse"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Elegant Connection Lines */}
            <div className="flex justify-center mb-12">
              <motion.div
                className="w-px h-16 gradient-primary rounded-full"
                initial={{ height: 0 }}
                animate={{ height: 64 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </div>

            {/* Management Level - Triad */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* RRHH Manager */}
              <motion.div
                className="group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-card/90 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-playfair text-lg font-bold text-primary mb-1">
                        Gerente RRHH
                      </h3>
                      <p className="font-syne text-sm text-muted-foreground font-medium">
                        Kikey Ramírez
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Operations Manager - Special with dual roles */}
              <motion.div
                className="group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-accent/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-card/90 backdrop-blur-sm rounded-xl p-6 border-2 border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-playfair text-lg font-bold text-primary mb-1">
                        Gerente Operativo
                      </h3>
                      <p className="font-syne text-sm text-muted-foreground font-medium mb-3">
                        Kikey Ramírez
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Sales Manager */}
              <motion.div
                className="group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-card/90 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-playfair text-lg font-bold text-primary mb-1">
                        Gerente Ventas
                      </h3>
                      <p className="font-syne text-sm text-muted-foreground font-medium">
                        Valeria Castro
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Connection to Social Media */}
            <div className="flex justify-center mb-12">
              <motion.div
                className="w-px h-20 gradient-primary rounded-full"
                initial={{ height: 0 }}
                animate={{ height: 80 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
            </div>

            {/* Social Media - Strategic Center */}
            <motion.div
              className="flex justify-center mb-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="relative group">
                <div className="absolute -inset-6 gradient-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                <div className="relative glass-effect backdrop-blur-xl rounded-3xl px-10 py-8 border-2 border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                  <div className="text-center">
                    <div className="w-20 h-20 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <Globe className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
                      Social Media
                    </h3>
                    <p className="font-syne text-lg font-semibold text-foreground">
                      Mariel Rivera
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Branching Structure */}
            <div className="relative">
              {/* Central branching lines */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 gradient-primary rounded-full"></div>
              <div className="absolute top-16 left-1/4 right-1/4 h-px gradient-primary rounded-full"></div>
              <div className="absolute top-16 left-1/4 w-px h-12 gradient-primary rounded-full"></div>
              <div className="absolute top-16 right-1/4 w-px h-12 gradient-primary rounded-full"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-28">
                {/* ¿Cómo? Branch */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <div className="text-center mb-8">
                    <div className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      <h4 className="font-playfair text-3xl font-bold mb-4">
                        ¿Cómo?
                      </h4>
                    </div>
                    <div className="w-16 h-1 gradient-primary mx-auto rounded-full"></div>
                  </div>

                  {/* Creative Director */}
                  <motion.div
                    className="group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary/15 to-accent/15 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-card/95 backdrop-blur-sm rounded-xl p-5 border border-border/50 shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="text-center">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Award className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="font-playfair text-base font-bold text-primary mb-1">
                            Directora Creativa
                          </h3>
                          <p className="font-syne text-sm text-muted-foreground font-medium">
                            Daniela Sánchez
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Creative Assistant */}
                  <motion.div
                    className="group ml-8"
                    whileHover={{ y: -3 }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/30 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="text-center">
                          <h4 className="font-playfair text-sm font-semibold text-accent mb-1 text-[15px]">
                            Asistente D. Creativa
                          </h4>
                          <p className="font-syne text-xs text-muted-foreground font-medium text-[13px]">
                            July Carr
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Production Team Grid */}
                  <div className="grid grid-cols-2 gap-4 ml-12">
                    {[
                      {
                        role: "Fotógrafo",
                        name: "Luis Balderrama",
                        color:
                          "from-rose-400/20 to-rose-600/20",
                      },
                      {
                        role: "Videógrafo",
                        name: "Francisco García",
                        color:
                          "from-violet-400/20 to-violet-600/20",
                      },
                      {
                        role: "Multimedia",
                        name: "Oswaldo Mendoza",
                        color:
                          "from-emerald-400/20 to-emerald-600/20",
                      },
                      {
                        role: "Diseño",
                        name: "Martín Borgos",
                        color:
                          "from-amber-400/20 to-amber-600/20",
                      },
                    ].map((member, index) => (
                      <motion.div
                        key={member.role}
                        className="group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 1.2 + index * 0.1,
                        }}
                      >
                        <div className="relative">
                          <div
                            className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          ></div>
                          <div className="relative bg-card/70 backdrop-blur-sm rounded-lg p-3 border border-border/20 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="text-center">
                              <h5 className="font-playfair text-xs font-semibold text-accent mb-1 text-[15px]">
                                {member.role}
                              </h5>
                              <p className="font-syne text-xs text-muted-foreground text-[13px]">
                                {member.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* ¿Cuándo? Branch */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <div className="text-center mb-8">
                    <div className="inline-block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      <h4 className="font-playfair text-3xl font-bold mb-4">
                        ¿Cuándo?
                      </h4>
                    </div>
                    <div className="w-16 h-1 gradient-secondary mx-auto rounded-full"></div>
                  </div>

                  {/* Community Manager */}
                  <div className="space-y-6">
                    <motion.div
                      className="group"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-card/95 backdrop-blur-sm rounded-xl p-5 border border-border/50 shadow-md hover:shadow-lg transition-all duration-300">
                          <div className="text-center">
                            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Users className="w-5 h-5 text-accent" />
                            </div>
                            <h3 className="font-playfair text-base font-bold text-primary mb-1">
                              Community Manager
                            </h3>
                            <p className="font-syne text-sm text-muted-foreground font-medium">
                              Dayanne Parra
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Elegant Footer */}
            <motion.div
              className="text-center mt-20 pt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent h-px"></div>
                <div className="relative bg-background px-8">
                  <div className="flex justify-between items-center text-sm text-muted-foreground font-syne max-w-xs mx-auto">
                    <span className="font-medium">
                      @vcreative.mx
                    </span>
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="font-medium">2025</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      ></motion.div>
    </motion.div>
  );
};