import { Service } from '../types';

export const mockServices: Service[] = [
  // Creando Comunidad - 3 paquetes
  {
    id: '1',
    name: 'Creando Comunidad - Básico',
    price: 0, // Consulta gratuita
    appointmentPrice: 0,
    packageType: 'Básico',
    description: 'Gestión básica de redes sociales para construir tu comunidad digital con contenido estratégico.',
    image: 'https://images.unsplash.com/photo-1572814392266-1620040c58be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NTUyNjg4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Creando Comunidad',
    duration: '1 mes',
    includes: [
      'Asesoramiento personalizado',
      'Planeación estratégica', 
      'Planificación de contenido',
      '3 Publicaciones (post, carrusel, infografías, etc.)',
      '3 Reels (siguiendo tendencias)',
      '12 Historias (fotografías, dinámicos, etc.)',
      'Mini sesión de fotos y video',
      '$800 pesos en Ads',
      'Reporte mensual de resultados'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1553013355-e962d4f0b30b?w=300&h=200&fit=crop'
    ]
  },
  {
    id: '2',
    name: 'Creando Comunidad - Medio',
    price: 0,
    appointmentPrice: 0,
    packageType: 'Medio',
    description: 'Gestión intermedia de redes sociales con más contenido y mejor alcance publicitario.',
    image: 'https://images.unsplash.com/photo-1572814392266-1620040c58be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NTUyNjg4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Creando Comunidad',
    duration: '1 mes',
    includes: [
      'Asesoramiento personalizado',
      'Planeación estratégica',
      'Planificación de contenido', 
      '2 Publicaciones (post, carrusel, infografías, etc.)',
      '4 Reels (siguiendo tendencias)',
      '15 Historias (fotografías, dinámicos, etc.)',
      'Sesión de fotos y video',
      '$800 pesos en Ads',
      'Reporte mensual de resultados'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1553013355-e962d4f0b30b?w=300&h=200&fit=crop'
    ]
  },
  {
    id: '3',
    name: 'Creando Comunidad - Premium',
    price: 0,
    appointmentPrice: 0,
    packageType: 'Premium',
    description: 'Gestión premium de redes sociales con máximo contenido y presupuesto publicitario extendido.',
    image: 'https://images.unsplash.com/photo-1572814392266-1620040c58be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NTUyNjg4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Creando Comunidad',
    duration: '1 mes',
    includes: [
      'Asesoramiento personalizado',
      'Planeación estratégica',
      'Planificación de contenido',
      '4 Publicaciones (post, carrusel, infografías, etc.)',
      '5 Reels (siguiendo tendencias)', 
      '20 Historias (fotografías, dinámicos, etc.)',
      'Sesión de fotos y video',
      '$1,200 pesos en Ads',
      'Reporte mensual de resultados'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1553013355-e962d4f0b30b?w=300&h=200&fit=crop'
    ]
  },

  // Reels Creativos + Fotografías - 3 paquetes
  {
    id: '4',
    name: 'Reels Creativos + Fotografías - Básico',
    price: 0,
    appointmentPrice: 0,
    packageType: 'Básico',
    description: 'Combinación perfecta de reels creativos y fotografías profesionales para tu contenido digital.',
    image: 'https://images.unsplash.com/photo-1719241842868-8a22b99bc7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbnRlbnQlMjByZWVscyUyMGNyZWF0aXZlfGVufDF8fHx8MTc1NTM3NzEwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Reels + Fotografías',
    duration: '1 semana',
    includes: [
      'Planeación estratégica',
      '10 Fotografías profesionales',
      '1 Reel creativo',
      'Entrega lista para publicar'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop'
    ]
  },
  {
    id: '5',
    name: 'Reels Creativos + Fotografías - Medio',
    price: 0,
    appointmentPrice: 0,
    packageType: 'Medio',
    description: 'Paquete intermedio con más variedad de contenido visual para maximizar tu presencia digital.',
    image: 'https://images.unsplash.com/photo-1719241842868-8a22b99bc7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbnRlbnQlMjByZWVscyUyMGNyZWF0aXZlfGVufDF8fHx8MTc1NTM3NzEwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Reels + Fotografías',
    duration: '1-2 semanas',
    includes: [
      'Planeación estratégica',
      '10 Fotografías profesionales',
      '2 Reels creativos',
      'Entrega lista para publicar'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop'
    ]
  },
  {
    id: '6',
    name: 'Reels Creativos + Fotografías - Premium',
    price: 0,
    appointmentPrice: 0,
    packageType: 'Premium',
    description: 'Paquete premium con máxima producción de contenido visual de alta calidad.',
    image: 'https://images.unsplash.com/photo-1719241842868-8a22b99bc7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbnRlbnQlMjByZWVscyUyMGNyZWF0aXZlfGVufDF8fHx8MTc1NTM3NzEwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Reels + Fotografías',
    duration: '2 semanas',
    includes: [
      'Planeación estratégica',
      '20 Fotografías profesionales',
      '3 Reels creativos',
      'Entrega lista para publicar'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop'
    ]
  },

  // Reels Creativos - 3 paquetes
  {
    id: '7',
    name: 'Reels Creativos - Básico',
    price: 0,
    appointmentPrice: 0,
    packageType: 'Básico',
    description: 'Producción de reels creativos para potenciar tu presencia en redes sociales.',
    image: 'https://images.unsplash.com/photo-1719241842868-8a22b99bc7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbnRlbnQlMjByZWVscyUyMGNyZWF0aXZlfGVufDF8fHx8MTc1NTM3NzEwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Reels Creativos',
    duration: '1 semana',
    includes: [
      'Planeación estratégica',
      'Grabación y edición de video',
      '1 Reel',
      'Entrega lista para publicar'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop'
    ]
  },
  {
    id: '8',
    name: 'Reels Creativos - Medio',
    price: 0,
    appointmentPrice: 0,
    packageType: 'Medio',
    description: 'Producción de múltiples reels creativos para mantener tu contenido fresco y atractivo.',
    image: 'https://images.unsplash.com/photo-1719241842868-8a22b99bc7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbnRlbnQlMjByZWVscyUyMGNyZWF0aXZlfGVufDF8fHx8MTc1NTM3NzEwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Reels Creativos',
    duration: '1-2 semanas',
    includes: [
      'Planeación estratégica',
      'Grabación y edición de video',
      '2 Reels',
      'Entrega lista para publicar'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop'
    ]
  },
  {
    id: '9',
    name: 'Reels Creativos - Premium',
    price: 0,
    appointmentPrice: 0,
    packageType: 'Premium',
    description: 'Producción premium de reels creativos con máxima calidad y variedad.',
    image: 'https://images.unsplash.com/photo-1719241842868-8a22b99bc7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbnRlbnQlMjByZWVscyUyMGNyZWF0aXZlfGVufDF8fHx8MTc1NTM3NzEwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Reels Creativos',
    duration: '2 semanas',
    includes: [
      'Planeación estratégica',
      'Grabación y edición de video',
      '4 Reels',
      'Entrega lista para publicar'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop'
    ]
  },

  // Diseño de Marca - 1 paquete único
  {
    id: '10',
    name: 'Diseño de Marca',
    price: 0,
    appointmentPrice: 0,
    packageType: 'Único',
    description: 'Desarrollo completo de identidad visual para tu marca con todos los elementos esenciales.',
    image: 'https://images.unsplash.com/photo-1749104953185-d171e149ccb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGxvZ28lMjBpZGVudGl0eXxlbnwxfHx8fDE3NTUzNzcwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Diseño de Marca',
    duration: '2-3 semanas',
    includes: [
      'Asesoría personalizada',
      'Planeación estratégica',
      'Identidad de la marca sólida',
      'Logo full HD',
      'Formatos PNG, JPG y PDF',
      'Variantes de logo',
      'Archivo editable'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=300&h=200&fit=crop'
    ]
  },

  // Sesión Fotográfica del Producto - 3 paquetes
  {
    id: '11',
    name: 'Sesión Fotográfica del Producto - Básico',
    price: 0,
    appointmentPrice: 0,
    packageType: 'Básico',
    description: 'Fotografía profesional de productos básica para e-commerce y catálogos.',
    image: 'https://images.unsplash.com/photo-1677260304441-e2d8ebb0d4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBjb21tZXJjaWFsfGVufDF8fHx8MTc1NTM3NzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fotografía de Producto',
    duration: '1 día',
    includes: [
      'Planeación estratégica',
      'Sesión fotográfica y edición',
      '15 fotografías del producto',
      'Entrega lista para publicar'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop'
    ]
  },
  {
    id: '12',
    name: 'Sesión Fotográfica del Producto - Medio',
    price: 0,
    appointmentPrice: 0,
    packageType: 'Medio',
    description: 'Sesión fotográfica intermedia con mayor cantidad de fotos y variedad.',
    image: 'https://images.unsplash.com/photo-1677260304441-e2d8ebb0d4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBjb21tZXJjaWFsfGVufDF8fHx8MTc1NTM3NzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fotografía de Producto',
    duration: '1 día',
    includes: [
      'Planeación estratégica',
      'Sesión fotográfica y edición',
      '25 fotografías del producto',
      'Entrega lista para publicar'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop'
    ]
  },
  {
    id: '13',
    name: 'Sesión Fotográfica del Producto - Premium',
    price: 0,
    appointmentPrice: 0,
    packageType: 'Premium',
    description: 'Sesión fotográfica premium con máxima cantidad de fotografías de alta calidad.',
    image: 'https://images.unsplash.com/photo-1677260304441-e2d8ebb0d4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBjb21tZXJjaWFsfGVufDF8fHx8MTc1NTM3NzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fotografía de Producto',
    duration: '1-2 días',
    includes: [
      'Planeación estratégica',
      'Sesión fotográfica y edición',
      '35 fotografías del producto',
      'Entrega lista para publicar'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop'
    ]
  },

  // Full Creativo - 1 paquete único
  {
    id: '14',
    name: 'Full Creativo',
    price: 0,
    appointmentPrice: 0,
    packageType: 'Único',
    description: 'Servicio completo de marketing digital con gestión integral de redes sociales y publicidad.',
    image: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1hcmtldGluZyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc1NTM3NzA5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Full Creativo',
    duration: '1 mes',
    includes: [
      'Asesoría personalizada',
      'Planeación estratégica',
      'Planificación de contenido',
      'Manejo de redes sociales (Facebook, Instagram y TikTok)',
      'Administración de campañas publicitarias en Ads Manager (Meta for Business)',
      'Administración de campañas publicitarias en Ads Manager (TikTok)',
      'Reporte mensual con resultados'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1553013355-e962d4f0b30b?w=300&h=200&fit=crop'
    ]
  }
];

export const serviceCategories = [
  'Todos', 
  'Creando Comunidad', 
  'Reels + Fotografías', 
  'Reels Creativos', 
  'Diseño de Marca', 
  'Fotografía de Producto', 
  'Full Creativo'
];