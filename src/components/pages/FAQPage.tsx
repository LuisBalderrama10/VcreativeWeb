import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { faqData } from '../../data/faq';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = faqData.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h1>
        <p className="text-gray-600">
          Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios
        </p>
      </div>

      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Buscar en preguntas frecuentes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-6">
        {filteredFAQs.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-xl font-semibold mb-4 text-primary">{category.title}</h2>
            <div className="space-y-2">
              {category.faqs.map((faq, faqIndex) => {
                const itemIndex = categoryIndex * 100 + faqIndex;
                const isOpen = openItems.includes(itemIndex);
                
                return (
                  <Card key={faqIndex} className="overflow-hidden">
                    <CardContent className="p-0">
                      <Button
                        variant="ghost"
                        onClick={() => toggleItem(itemIndex)}
                        className="w-full p-4 text-left justify-between hover:bg-gray-50"
                      >
                        <span className="font-medium">{faq.question}</span>
                        <ChevronDown 
                          className={`h-5 w-5 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </Button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-gray-600 border-t">
                          <p className="pt-2">{faq.answer}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">No se encontraron preguntas que coincidan con tu búsqueda.</p>
          <Button 
            variant="outline" 
            onClick={() => setSearchQuery('')}
          >
            Limpiar búsqueda
          </Button>
        </div>
      )}

      <div className="mt-12 text-center">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">¿No encontraste lo que buscas?</h3>
            <p className="text-gray-600 mb-4">
              Nuestro equipo de soporte está disponible para ayudarte
            </p>
            <Button>
              Contactar Soporte
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};