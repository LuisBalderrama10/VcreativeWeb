import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/services" },
  { name: "Modelos", path: "/jobs" },
  { name: "Conocenos", path: "/about" },
  { name: "Contacto", path: "/contact" },
  { name: "Cursos", path: "/courses" },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className="fixed top-0 w-full z-50 glass-effect border-b border-border/50"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          
          {/* LOGO */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/"
              className="flex items-center space-x-2 sm:space-x-0 transition-opacity hover:opacity-80"
            >
              <div className="relative">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <ImageWithFallback
                    src="https://i.ibb.co/JjZ4YLvF/IMG-5551-removebg-preview.png"
                    alt="VCreative Logo"
                    className="w-10 h-10 sm:w-15 sm:h-15 object-contain bg-transparent"
                  />
                </motion.div>
                <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-6 h-1.5 sm:w-8 sm:h-2 bg-primary/20 rounded-full blur-sm"></div>
              </div>

              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-semibold tracking-tight text-foreground font-[Syne]">
                  VCreative
                </span>
                <span className="hidden sm:block text-xs text-muted-foreground font-[Syne]">
                  Agencia Creativa
                </span>
              </div>
            </Link>
          </motion.div>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <div key={item.path} className="relative">
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.name}

                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-md bg-primary/10 border border-primary/20"
                        layoutId="activeNavItem"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* MOBILE BUTTON */}
          <div className="flex items-center">
            <motion.button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 border border-border"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* NAV MOBILE */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border py-4"
            >
              <div className="space-y-1">
                {navigationItems.map((item, index) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2.5 rounded-lg font-medium ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};