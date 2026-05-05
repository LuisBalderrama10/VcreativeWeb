import React, { useState } from 'react';
import { Button } from './button';
import { Card, CardContent } from './card';
import { Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TimePickerProps {
  value?: string;
  onChange: (time: string) => void;
  className?: string;
}

export const TimePicker: React.FC<TimePickerProps> = ({ 
  value, 
  onChange, 
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Horarios disponibles de 9:00 AM a 3:00 PM
  const availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00'
  ];
  
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour24 = parseInt(hours);
    const hour12 = hour24 > 12 ? hour24 - 12 : hour24;
    const ampm = hour24 >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minutes} ${ampm}`;
  };
  
  const handleTimeSelect = (time: string) => {
    onChange(time);
    setIsOpen(false);
  };
  
  return (
    <div className={`relative ${className}`}>
      <Button
        type="button"
        variant="outline"
        className="w-full justify-start text-left font-normal"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Clock className="mr-2 h-4 w-4" />
        {value ? formatTime(value) : 'Selecciona una hora'}
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 z-50 mt-2 w-full"
          >
            <Card className="border-primary/20 shadow-xl">
              <CardContent className="p-4">
                <div className="text-sm font-semibold mb-3 text-center text-primary">
                  Horarios Disponibles
                </div>
                
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {availableTimes.map((time) => (
                    <motion.button
                      key={time}
                      type="button"
                      onClick={() => handleTimeSelect(time)}
                      className={`
                        px-3 py-2 text-sm rounded-md transition-all duration-200 border
                        ${value === time 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'bg-background hover:bg-accent border-border hover:border-primary/50'
                        }
                      `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {formatTime(time)}
                    </motion.button>
                  ))}
                </div>
                
                <div className="mt-4 text-xs text-muted-foreground text-center border-t border-border pt-3">
                  Horario de atención: 9:00 AM - 3:00 PM
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