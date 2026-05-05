import { useEffect } from 'react';
import { useApp } from '../context/AppContext';

export const ScrollToTop: React.FC = () => {
  const { state } = useApp();

  useEffect(() => {
    // Cada vez que cambia la página en el estado, hacer scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [state.currentPage]); // Se ejecuta cuando cambia la página

  return null; // Este componente no renderiza nada
};