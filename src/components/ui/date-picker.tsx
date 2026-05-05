import React, { useState } from 'react';
import { Button } from './button';
import { Card, CardContent } from './card';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DatePickerProps {
  value?: string;
  onChange: (date: string) => void;
  minDate?: string;
  className?: string;
}

const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

export const DatePicker: React.FC<DatePickerProps> = ({ 
  value, 
  onChange, 
  minDate,
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const today = new Date();
  const minDateObj = minDate ? new Date(minDate) : today;
  
  const selectedDate = value ? new Date(value) : null;
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    
    const days = [];
    
    // Días del mes anterior
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const prevDay = new Date(year, month, -i);
      days.push({
        date: prevDay,
        isCurrentMonth: false,
        isDisabled: true
      });
    }
    
    // Días del mes actual
    for (let day = 1; day <= daysInMonth; day++) {
      const dayDate = new Date(year, month, day);
      const isDisabled = dayDate < minDateObj;
      const isWeekend = dayDate.getDay() === 0 || dayDate.getDay() === 6;
      
      days.push({
        date: dayDate,
        isCurrentMonth: true,
        isDisabled: isDisabled || isWeekend, // Deshabilitar fines de semana
        isToday: dayDate.toDateString() === today.toDateString(),
        isSelected: selectedDate && dayDate.toDateString() === selectedDate.toDateString()
      });
    }
    
    // Completar la última semana
    const remainingDays = 42 - days.length; // 6 semanas * 7 días
    for (let day = 1; day <= remainingDays; day++) {
      const nextDay = new Date(year, month + 1, day);
      days.push({
        date: nextDay,
        isCurrentMonth: false,
        isDisabled: true
      });
    }
    
    return days;
  };
  
  const handleDateSelect = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    onChange(dateString);
    setIsOpen(false);
  };
  
  const goToPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };
  
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };
  
  const formatDisplayDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const days = getDaysInMonth(currentDate);
  
  return (
    <div className={`relative ${className}`}>
      <Button
        type="button"
        variant="outline"
        className="w-full justify-start text-left font-normal"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Calendar className="mr-2 h-4 w-4" />
        {value ? formatDisplayDate(value) : 'Selecciona una fecha'}
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 z-50 mt-2 w-full min-w-[320px]"
          >
            <Card className="border-primary/20 shadow-xl">
              <CardContent className="p-4">
                {/* Header del calendario */}
                <div className="flex items-center justify-between mb-4">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={goToPrevMonth}
                    className="h-8 w-8 p-0"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <div className="text-center">
                    <div className="text-sm font-semibold">
                      {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </div>
                  </div>
                  
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={goToNextMonth}
                    className="h-8 w-8 p-0"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Días de la semana */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {weekDays.map((day) => (
                    <div
                      key={day}
                      className="h-8 w-8 flex items-center justify-center text-xs font-medium text-muted-foreground"
                    >
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendario */}
                <div className="grid grid-cols-7 gap-1">
                  {days.map((day, index) => (
                    <motion.button
                      key={index}
                      type="button"
                      onClick={() => !day.isDisabled && handleDateSelect(day.date)}
                      disabled={day.isDisabled}
                      className={`
                        h-8 w-8 text-xs rounded-md transition-all duration-200
                        ${day.isCurrentMonth 
                          ? 'text-foreground hover:bg-accent' 
                          : 'text-muted-foreground/30'
                        }
                        ${day.isSelected 
                          ? 'bg-primary text-primary-foreground font-semibold' 
                          : ''
                        }
                        ${day.isToday && !day.isSelected 
                          ? 'bg-accent border border-primary/50 font-medium' 
                          : ''
                        }
                        ${day.isDisabled 
                          ? 'cursor-not-allowed opacity-30' 
                          : 'cursor-pointer hover:bg-accent'
                        }
                      `}
                      whileHover={!day.isDisabled ? { scale: 1.1 } : {}}
                      whileTap={!day.isDisabled ? { scale: 0.95 } : {}}
                    >
                      {day.date.getDate()}
                    </motion.button>
                  ))}
                </div>
                
                {/* Nota informativa */}
                <div className="mt-4 text-xs text-muted-foreground text-center border-t border-border pt-3">
                  Solo días laborables disponibles (Lun-Vie)
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay para cerrar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};