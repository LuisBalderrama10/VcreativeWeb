import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, AppContextType, Course, Service, ModelJob, CartItem, User, Appointment } from '../types';

const initialState: AppState = {
  currentPage: 'home',
  user: null,
  cart: [],
  selectedCourse: null,
  selectedService: null,
  selectedJob: null,
  appointments: [],
};

type AppAction =
  | { type: 'NAVIGATE_TO_PAGE'; payload: string }
  | { type: 'SELECT_COURSE'; payload: Course }
  | { type: 'SELECT_SERVICE'; payload: Service }
  | { type: 'SELECT_JOB'; payload: ModelJob }
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'BOOK_APPOINTMENT'; payload: Appointment }
  | { type: 'CANCEL_APPOINTMENT'; payload: string }
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' };

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'NAVIGATE_TO_PAGE':
      return { ...state, currentPage: action.payload };
    
    case 'SELECT_COURSE':
      return { ...state, selectedCourse: action.payload, currentPage: 'course' };
    
    case 'SELECT_SERVICE':
      return { ...state, selectedService: action.payload, currentPage: 'service' };
    
    case 'SELECT_JOB':
      return { ...state, selectedJob: action.payload, currentPage: 'job' };
    
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return { ...state, cart: [...state.cart, action.payload] };
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    
    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    
    case 'BOOK_APPOINTMENT':
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };
    
    case 'CANCEL_APPOINTMENT':
      return {
        ...state,
        appointments: state.appointments.map(appointment =>
          appointment.id === action.payload
            ? { ...appointment, status: 'cancelled' as const }
            : appointment
        ),
      };
    
    case 'LOGIN':
      return { ...state, user: action.payload };
    
    case 'LOGOUT':
      return { ...state, user: null, appointments: [] };
    
    default:
      return state;
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const navigateToPage = (page: string) => {
    console.log("Navegando a:", page);
    dispatch({ type: 'NAVIGATE_TO_PAGE', payload: page });
    // Scroll to top cuando navegamos a una nueva página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectCourse = (course: Course) => {
    dispatch({ type: 'SELECT_COURSE', payload: course });
  };

  const selectService = (service: Service) => {
    dispatch({ type: 'SELECT_SERVICE', payload: service });
  };

  const selectJob = (job: ModelJob) => {
    dispatch({ type: 'SELECT_JOB', payload: job });
  };

  const addToCart = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    const cartItem: CartItem = {
      ...item,
      quantity: item.quantity || 1,
    };
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id, quantity } });
    }
  };

  const bookAppointment = (appointmentData: Omit<Appointment, 'id'>) => {
    const appointment: Appointment = {
      ...appointmentData,
      id: Date.now().toString(),
    };
    dispatch({ type: 'BOOK_APPOINTMENT', payload: appointment });
  };

  const cancelAppointment = (appointmentId: string) => {
    dispatch({ type: 'CANCEL_APPOINTMENT', payload: appointmentId });
  };

  const login = (email: string, password: string) => {
    // Mock login - en producción esto se conectaría a un backend
    const mockUser: User = {
      id: '1',
      name: email.split('@')[0],
      email,
      type: 'student',
      enrolledCourses: [],
      appliedJobs: [],
      appointments: [],
    };
    dispatch({ type: 'LOGIN', payload: mockUser });
  };

  const register = (name: string, email: string, password: string, userType: 'student' | 'model' | 'client') => {
    // Mock register - en producción esto se conectaría a un backend
    const mockUser: User = {
      id: Date.now().toString(),
      name,
      email,
      type: userType,
      enrolledCourses: [],
      appliedJobs: [],
      appointments: [],
    };
    dispatch({ type: 'LOGIN', payload: mockUser });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        navigateToPage,
        selectCourse,
        selectService,
        selectJob,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        bookAppointment,
        cancelAppointment,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};