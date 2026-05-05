import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PortfolioItem {
  src: string;
  title: string;
  description: string;
  duration?: string;
}

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "photos" | "videos";
  initialIndex?: number;
}

const photographyItems: PortfolioItem[] = [
  {
    src: "https://images.unsplash.com/photo-1758613654707-8bdab92f711d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGNyZWF0aXZlJTIwYWdlbmN5fGVufDF8fHx8MTc1OTYzNjgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Sesión Corporativa Ejecutiva",
    description: "Fotografía profesional para alta dirección empresarial"
  },
  {
    src: "https://images.unsplash.com/photo-1758613656153-196ebbef97d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBwaG90b3Nob290fGVufDF8fHx8MTc1OTYzNjgyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Equipo Creativo VCreative",
    description: "Retrato profesional del equipo de trabajo"
  },
  {
    src: "https://images.unsplash.com/photo-1617893604862-2462582254c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHBob3RvZ3JhcGh5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTYzNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Branding Premium",
    description: "Fotografía de marca para empresa de lujo"
  },
  {
    src: "https://images.unsplash.com/photo-1758613653298-738e98658e31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHBob3RvJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NTk2MzY4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Sesión Creativa Conceptual",
    description: "Concepto artístico y original para campaña"
  },
  {
    src: "https://images.unsplash.com/photo-1664277497091-d4919922b55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBhZ2VuY3klMjBzdHVkaW98ZW58MXx8fHwxNzU5NjM2ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Estudio de Grabación",
    description: "Behind the scenes del proceso creativo"
  },
  {
    src: "https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWt0b2slMjB2aWRlbyUyMGZpbG1pbmclMjBzdHVkaW98ZW58MXx8fHwxNzU5NjM2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Producto en Acción",
    description: "Fotografía de producto premium en uso"
  }
];

const videoItems: PortfolioItem[] = [
  {
    src: "https://images.unsplash.com/photo-1664277497091-d4919922b55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBhZ2VuY3klMjBzdHVkaW98ZW58MXx8fHwxNzU5NjM2ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Reel Corporativo Viral",
    description: "Video promocional que alcanzó 500K visualizaciones",
    duration: "0:15"
  },
  {
    src: "https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWt0b2slMjB2aWRlbyUyMGZpbG1pbmclMjBzdHVkaW98ZW58MXx8fHwxNzU5NjM2ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "TikTok Trending",
    description: "Contenido viral que generó 1M+ de interacciones",
    duration: "0:30"
  },
  {
    src: "https://images.unsplash.com/photo-1758613654707-8bdab92f711d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGNyZWF0aXZlJTIwYWdlbmN5fGVufDF8fHx8MTc1OTYzNjgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Behind the Scenes Premium",
    description: "Proceso creativo de campaña premiada",
    duration: "1:00"
  },
  {
    src: "https://images.unsplash.com/photo-1758613656153-196ebbef97d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBwaG90b3Nob290fGVufDF8fHx8MTc1OTYzNjgyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Demo Producto Innovador",
    description: "Demostración creativa que aumentó ventas 300%",
    duration: "0:45"
  },
  {
    src: "https://images.unsplash.com/photo-1617893604862-2462582254c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHBob3RvZ3JhcGh5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTYzNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Instagram Reel Top",
    description: "Formato vertical que se volvió tendencia",
    duration: "0:20"
  },
  {
    src: "https://images.unsplash.com/photo-1758613653298-738e98658e31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHBob3RvJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NTk2MzY4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Campaña Digital Award",
    description: "Video ganador de premio internacional",
    duration: "0:25"
  }
];

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  type,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const items = type === "photos" ? photographyItems : videoItems;

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 bg-background/95 backdrop-blur-xl border-2 border-border/20">
        {/* Header */}
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="font-playfair text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {type === "photos" ? "Galería de Fotografías" : "Colección de Videos"}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 rounded-full hover:bg-destructive/20 hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Main Content */}
        <div className="relative px-6 pb-6">
          <div className="relative">
            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevItem}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-white shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextItem}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-white shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image/Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <ImageWithFallback
                    src={currentItem.src}
                    alt={currentItem.title}
                    className={`w-full object-cover ${
                      type === "videos" ? "h-96 aspect-[9/16]" : "h-96 aspect-video"
                    }`}
                  />
                  
                  {/* Video Play Button */}
                  {type === "videos" && (
                    <>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent/90 transition-all duration-300 cursor-pointer">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      {currentItem.duration && (
                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="font-syne text-sm text-white font-medium">
                            {currentItem.duration}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Item Info */}
          <div className="mt-6 text-center">
            <motion.h3
              key={`title-${currentIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-playfair text-xl font-bold text-primary mb-2"
            >
              {currentItem.title}
            </motion.h3>
            <motion.p
              key={`desc-${currentIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-syne text-muted-foreground max-w-2xl mx-auto"
            >
              {currentItem.description}
            </motion.p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="font-syne text-sm text-muted-foreground">
              {currentIndex + 1} de {items.length}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};