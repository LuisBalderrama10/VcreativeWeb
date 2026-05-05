import React from 'react';
import { useApp } from '../context/AppContext';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import logoImage from 'figma:asset/cf3fe2989f5d418401847ee9f54d39220464c614.png';

export const Footer: React.FC = () => {
  const { navigateToPage } = useApp();

  const quickLinks = [
    { name: 'Servicios', page: 'services' },
    { name: 'Modelos', page: 'jobs' },
    { name: 'Sobre Nosotros', page: 'about' },
    { name: 'Contacto', page: 'contact' }
  ];

  const supportLinks = [
    { name: 'Centro de Ayuda', page: 'faq' },
    { name: 'Términos de Uso', page: 'terms' },
    { name: 'Privacidad', page: 'privacy' },
    { name: 'Soporte', page: 'contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/agencia-vcreative/' },
    { name: 'Instagram', href: 'https://www.instagram.com/vcreative.mx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground via-muted-foreground to-primary/20 text-white border-t border-border/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-1 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="https://i.ibb.co/B2fpLwR8/IMG-4684.png" 
                  alt="VCreative" 
                  className="w-15 h-15 object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">VCreative</h3>
                <p className="text-sm text-accent font-medium">Agencia Creativa</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-sm font-[Syne]">
              Creamos contenido viral y transformamos marcas con estrategias de marketing digital 
              innovadoras que realmente conectan.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-white/80 font-[Syne]">mkt.agenciacreativa2023@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-white/80">644 234 8071</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-white/80 font-[Syne]">Cd. Obregòn, Sonora</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white font-[Syne]">Servicios</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigateToPage(link.page)}
                    className="text-white/70 hover:text-accent transition-colors text-sm font-medium font-[Syne]"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4 text-white font-[Syne]">Soporte</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigateToPage(link.page)}
                    className="text-white/70 hover:text-accent transition-colors text-sm font-medium font-[Syne]"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 text-white font-[Syne]">Síguenos</h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm font-medium font-[Syne]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm font-[Syne]">
            © {new Date().getFullYear()} VCreative. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <button
              onClick={() => navigateToPage('terms')}
              className="text-white/60 hover:text-accent transition-colors font-medium font-[Syne]"
            >
              Términos
            </button>
            <button
              onClick={() => navigateToPage('privacy')}
              className="text-white/60 hover:text-accent transition-colors font-medium font-[Syne]"
            >
              Privacidad
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};