import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Smartphone Pro Max',
    price: 999.99,
    description: 'El último smartphone con tecnología avanzada, cámara de 108MP y batería de larga duración.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop',
    category: 'Electrónicos',
    stock: 25,
    rating: 4.8,
    reviews: 234
  },
  {
    id: '2',
    name: 'Laptop Gaming Elite',
    price: 1599.99,
    description: 'Laptop de alta gama para gaming con RTX 4080, procesador Intel i9 y 32GB RAM.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop',
    category: 'Electrónicos',
    stock: 12,
    rating: 4.9,
    reviews: 189
  },
  {
    id: '3',
    name: 'Auriculares Inalámbricos',
    price: 299.99,
    description: 'Auriculares premium con cancelación de ruido activa y sonido de alta fidelidad.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
    category: 'Audio',
    stock: 45,
    rating: 4.7,
    reviews: 567
  },
  {
    id: '4',
    name: 'Reloj Inteligente',
    price: 399.99,
    description: 'Reloj inteligente con monitor de salud, GPS y resistencia al agua.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    category: 'Wearables',
    stock: 33,
    rating: 4.6,
    reviews: 445
  },
  {
    id: '5',
    name: 'Cámara Profesional',
    price: 2299.99,
    description: 'Cámara DSLR profesional con lente de 50mm incluido, perfecta para fotografía profesional.',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop',
    category: 'Fotografía',
    stock: 8,
    rating: 4.9,
    reviews: 123
  },
  {
    id: '6',
    name: 'Tablet Pro',
    price: 799.99,
    description: 'Tablet de 12.9 pulgadas con stylus incluido, ideal para trabajo creativo.',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop',
    category: 'Electrónicos',
    stock: 20,
    rating: 4.8,
    reviews: 298
  },
  {
    id: '7',
    name: 'Altavoz Bluetooth',
    price: 149.99,
    description: 'Altavoz portátil con sonido 360° y resistencia al agua IPX7.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop',
    category: 'Audio',
    stock: 67,
    rating: 4.5,
    reviews: 789
  },
  {
    id: '8',
    name: 'Drone 4K',
    price: 899.99,
    description: 'Drone con cámara 4K, gimbal de 3 ejes y autonomía de 30 minutos.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=600&fit=crop',
    category: 'Fotografía',
    stock: 15,
    rating: 4.7,
    reviews: 156
  }
];

export const categories = ['Todos', 'Electrónicos', 'Audio', 'Wearables', 'Fotografía'];