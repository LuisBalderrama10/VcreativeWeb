import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappNumber = "6442348071";   // Reemplaza con tu número de WhatsApp
  const message = "¡Hola! ¿Te interesa conocer más sobre nuestros servicios creativos? 🎨";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Mostrar el botón después de 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Mostrar tooltip después de 5 segundos si no se ha usado
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      // Ocultar tooltip después de 3 segundos
      const hideTooltip = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
      return () => clearTimeout(hideTooltip);
    }, 5000);

    return () => clearTimeout(tooltipTimer);
  }, []);

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
    setShowTooltip(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.1
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border border-border p-3 max-w-[200px] mb-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-foreground">¡Hablemos!</p>
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="text-muted-foreground hover:text-foreground p-1"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  ¿Tienes alguna pregunta? Escríbenos por WhatsApp 💬
                </p>
                {/* Arrow */}
                <div className="absolute -bottom-1 right-4 w-3 h-3 bg-white border-r border-b border-border transform rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            onClick={handleClick}
            className="relative group bg-[#25D366] hover:bg-[#1eb754] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <MessageCircle className="w-6 h-6" />
            
            {/* Pulse Effect */}
            <motion.div
              className="absolute inset-0 bg-[#25D366] rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />

            {/* Notification dot */}
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#25D366] rounded-full"
                animate={{
                  y: [0, -40],
                  x: [0, Math.random() * 20 - 10],
                  opacity: [1, 0],
                  scale: [1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: "easeOut"
                }}
                style={{
                  left: '50%',
                  top: '50%',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};