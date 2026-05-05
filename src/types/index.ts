export interface Course {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  duration: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  instructor: string;
  rating: number;
  students: number;
  modules: number;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  appointmentPrice?: number;
  packageType?: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  includes: string[];
  portfolio: string[];
}

export interface ModelJob {
  id: string;
  title: string;
  client: string;
  location: string;
  date: string;
  payment: number;
  description: string;
  requirements: string[];
  category: 'Fashion' | 'Commercial' | 'Editorial' | 'Beauty' | 'Fitness';
  image: string;
  status: 'open' | 'closed' | 'in-review';
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  type: 'course' | 'service';
}

export interface Appointment {
  id: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  type: 'student' | 'model' | 'client';
  enrolledCourses?: string[];
  appliedJobs?: string[];
  appointments?: Appointment[];
}

export interface AppState {
  currentPage: string;
  user: User | null;
  cart: CartItem[];
  selectedCourse: Course | null;
  selectedService: Service | null;
  selectedJob: ModelJob | null;
  appointments: Appointment[];
}

export interface AppContextType {
  state: AppState;
  navigateToPage: (page: string) => void;
  selectCourse: (course: Course) => void;
  selectService: (service: Service) => void;
  selectJob: (job: ModelJob) => void;
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  bookAppointment: (appointment: Omit<Appointment, 'id'>) => void;
  cancelAppointment: (appointmentId: string) => void;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string, userType: 'student' | 'model' | 'client') => void;
  logout: () => void;
}