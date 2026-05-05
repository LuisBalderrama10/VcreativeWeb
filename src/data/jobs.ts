import { ModelJob } from '../types';

export const mockJobs: ModelJob[] = [
  {
    id: '1',
    title: 'Modelo para Campaña de Moda Juvenil',
    client: 'Fashion Forward',
    location: 'Madrid, España',
    date: '2024-02-15',
    payment: 800,
    description: 'Buscamos modelo femenina para campaña de moda juvenil. Sesión en estudio y exterior.',
    requirements: ['Altura: 1.70m - 1.80m', 'Edad: 18-25 años', 'Disponibilidad completa', 'Experiencia previa'],
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop',
    status: 'open'
  },
  {
    id: '2',
    title: 'Modelo Masculino para Productos de Belleza',
    client: 'GroomCorp',
    location: 'Barcelona, España',
    date: '2024-02-20',
    payment: 600,
    description: 'Campaña publicitaria para línea de productos de cuidado masculino. Ambiente clean y moderno.',
    requirements: ['Edad: 25-35 años', 'Piel cuidada', 'Experiencia en beauty', 'Portfolio actualizado'],
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop',
    status: 'open'
  },
  {
    id: '3',
    title: 'Editorial de Moda para Revista',
    client: 'Vogue España',
    location: 'Madrid, España',
    date: '2024-02-25',
    payment: 1200,
    description: 'Editorial de moda primavera-verano para revista de alta gama. Shoot de 2 días.',
    requirements: ['Modelo profesional', 'Altura mínima 1.75m', 'Book profesional', 'Experiencia editorial'],
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop',
    status: 'open'
  },
  {
    id: '4',
    title: 'Modelo Fitness para Ropa Deportiva',
    client: 'ActiveWear Co.',
    location: 'Valencia, España',
    date: '2024-03-01',
    payment: 500,
    description: 'Campaña para nueva línea de ropa deportiva. Se requiere modelo con físico atlético.',
    requirements: ['Físico atlético definido', 'Experiencia en fitness', 'Edad: 20-30 años', 'Flexibilidad horaria'],
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    status: 'open'
  },
  {
    id: '5',
    title: 'Campaña Publicitaria TV',
    client: 'MediaGroup',
    location: 'Sevilla, España',
    date: '2024-03-10',
    payment: 1500,
    description: 'Anuncio televisivo para marca de gran consumo. Proyecto de alto presupuesto.',
    requirements: ['Experiencia en TV/cine', 'Naturalidad ante cámara', 'Disponibilidad 3 días', 'Casting presencial'],
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=400&fit=crop',
    status: 'in-review'
  },
  {
    id: '6',
    title: 'Modelo para Joyería de Lujo',
    client: 'Diamond Elite',
    location: 'Madrid, España',
    date: '2024-03-15',
    payment: 900,
    description: 'Sesión elegante para nueva colección de joyería. Ambiente sofisticado y exclusivo.',
    requirements: ['Manos y rostro cuidados', 'Elegancia natural', 'Experiencia en luxury', 'Portfolio premium'],
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=400&fit=crop',
    status: 'closed'
  }
];

export const jobCategories = ['Todos', 'Fashion', 'Commercial', 'Editorial', 'Beauty', 'Fitness'];