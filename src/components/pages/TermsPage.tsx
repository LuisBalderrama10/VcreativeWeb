import React from 'react';
import { Card, CardContent } from '../ui/card';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Términos y Condiciones</h1>
        <p className="text-gray-600">
          Última actualización: 25 de enero de 2025
        </p>
      </div>

      <Card>
        <CardContent className="p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700">
              Al acceder y utilizar el sitio web de TechStore, usted acepta estar sujeto a estos 
              términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos 
              términos, no debe utilizar nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Uso del Sitio Web</h2>
            <p className="text-gray-700 mb-3">
              El contenido de las páginas de este sitio web es solo para su información general y uso. 
              Está sujeto a cambios sin previo aviso.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>No debe usar el sitio web para fines ilegales o no autorizados</li>
              <li>Debe proporcionar información precisa y actualizada</li>
              <li>Es responsable de mantener la confidencialidad de su cuenta</li>
              <li>No debe interferir con el funcionamiento del sitio web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Productos y Servicios</h2>
            <p className="text-gray-700">
              Todos los productos están sujetos a disponibilidad. Nos reservamos el derecho de 
              discontinuar cualquier producto en cualquier momento. Los precios pueden cambiar 
              sin previo aviso. Todos los precios están en pesos mexicanos e incluyen IVA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Pedidos y Pagos</h2>
            <p className="text-gray-700 mb-3">
              Al realizar un pedido, usted se compromete a proporcionar información actual, 
              completa y precisa sobre la compra y la cuenta.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Nos reservamos el derecho de rechazar o cancelar cualquier pedido</li>
              <li>Los pagos deben realizarse en el momento de la compra</li>
              <li>Los precios no incluyen gastos de envío salvo que se indique lo contrario</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Envíos y Entregas</h2>
            <p className="text-gray-700">
              Los tiempos de entrega son estimados y pueden variar según la ubicación y 
              disponibilidad del producto. TechStore no se hace responsable por retrasos 
              en la entrega causados por terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Devoluciones y Reembolsos</h2>
            <p className="text-gray-700">
              Aceptamos devoluciones dentro de los 30 días posteriores a la entrega. 
              Los productos deben estar en su estado original y sin usar. Los gastos 
              de envío para devoluciones corren por cuenta del cliente, excepto en 
              casos de productos defectuosos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Garantías</h2>
            <p className="text-gray-700">
              Todos los productos incluyen la garantía del fabricante. TechStore ofrece 
              garantía adicional según se especifique para cada producto. Las garantías 
              no cubren daños por mal uso o desgaste normal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Limitación de Responsabilidad</h2>
            <p className="text-gray-700">
              TechStore no será responsable por daños directos, indirectos, incidentales 
              o consecuenciales que resulten del uso de nuestros productos o servicios. 
              Nuestra responsabilidad se limita al valor del producto comprado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Propiedad Intelectual</h2>
            <p className="text-gray-700">
              Todo el contenido del sitio web, incluyendo textos, gráficos, logotipos, 
              imágenes y software, es propiedad de TechStore y está protegido por 
              derechos de autor y otras leyes de propiedad intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">10. Modificaciones</h2>
            <p className="text-gray-700">
              TechStore se reserva el derecho de revisar estos términos y condiciones 
              en cualquier momento. Los cambios entrarán en vigor inmediatamente 
              después de su publicación en el sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">11. Contacto</h2>
            <p className="text-gray-700">
              Si tiene preguntas sobre estos términos y condiciones, puede contactarnos en:
            </p>
            <div className="mt-3 text-gray-700">
              <p>Email: legal@techstore.com</p>
              <p>Teléfono: +1 (555) 123-4567</p>
              <p>Dirección: 123 Tech Street, Ciudad, Estado 12345</p>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};