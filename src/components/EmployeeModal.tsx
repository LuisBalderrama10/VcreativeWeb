import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { X, Mail, Phone, MapPin, Briefcase, Award, Calendar } from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  description: string;
  email?: string;
  phone?: string;
  location?: string;
  joinDate?: string;
  experience?: string;
  skills?: string[];
  achievements?: string[];
}

interface EmployeeModalProps {
  employee: Employee | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EmployeeModal: React.FC<EmployeeModalProps> = ({
  employee,
  isOpen,
  onClose
}) => {
  if (!employee) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-0 shadow-2xl">
        <DialogHeader className="relative pb-6">
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* Profile Picture */}
            <div className="relative mb-6 flex justify-center">
              <div className="relative">
                <ImageWithFallback
                  src={employee.image}
                  alt={employee.name}
                  className="w-32 h-32 rounded-2xl object-cover shadow-lg ring-4 ring-primary/20"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
              {employee.name}
            </DialogTitle>
            
            <div className="flex justify-center gap-2 mb-4">
              <Badge className="bg-primary text-white px-4 py-1 text-sm">
                {employee.role}
              </Badge>
              <Badge variant="outline" className="border-gray-300 text-gray-700 px-4 py-1 text-sm">
                {employee.department}
              </Badge>
            </div>
          </motion.div>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-6"
        >
          {/* Description */}
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700 leading-relaxed text-center">
              {employee.description}
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {employee.email && (
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">{employee.email}</p>
                </div>
              </div>
            )}

            {employee.phone && (
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <Phone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Teléfono</p>
                  <p className="font-medium text-gray-900">{employee.phone}</p>
                </div>
              </div>
            )}

            {employee.location && (
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <MapPin className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Ubicación</p>
                  <p className="font-medium text-gray-900">{employee.location}</p>
                </div>
              </div>
            )}

            {employee.joinDate && (
              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                <Calendar className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-600">En la empresa desde</p>
                  <p className="font-medium text-gray-900">{employee.joinDate}</p>
                </div>
              </div>
            )}
          </div>

          {/* Experience */}
          {employee.experience && (
            <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-gray-900">Experiencia</h4>
              </div>
              <p className="text-gray-700">{employee.experience}</p>
            </div>
          )}

          {/* Skills */}
          {employee.skills && employee.skills.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Habilidades
              </h4>
              <div className="flex flex-wrap gap-2">
                {employee.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-white border-primary/30 text-primary hover:bg-primary/10"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {employee.achievements && employee.achievements.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Logros Destacados</h4>
              <ul className="space-y-2">
                {employee.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};