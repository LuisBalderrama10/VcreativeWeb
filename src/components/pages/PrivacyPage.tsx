import React from 'react';
import { Card, CardContent } from '../ui/card';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
        <p className="text-gray-600">
          Última actualización: 25 de enero de 2025
        </p>
      </div>

      <Card>
        <CardContent className="p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-700 mb-3">
              Recopilamos información que usted nos proporciona directamente y información 
              que recopilamos automáticamente cuando utiliza nuestros servicios.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-2">Información Personal:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Nombre completo y información de contacto</li>
                  <li>Dirección de facturación y envío</li>
                  <li>Información de pago (procesada de forma segura)</li>
                  <li>Historial de compras y preferencias</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Información Técnica:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Dirección IP y ubicación geográfica</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Páginas visitadas y tiempo de permanencia</li>
                  <li>Cookies y tecnologías similares</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Cómo Utilizamos su Información</h2>
            <p className="text-gray-700 mb-3">
              Utilizamos la información recopilada para los siguientes propósitos:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Procesar y cumplir con sus pedidos</li>
              <li>Proporcionar servicio al cliente y soporte técnico</li>
              <li>Personalizar su experiencia de compra</li>
              <li>Enviar comunicaciones promocionales (con su consentimiento)</li>
              <li>Mejorar nuestros productos y servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Compartir Información</h2>
            <p className="text-gray-700 mb-3">
              No vendemos, alquilamos o compartimos su información personal con terceros, 
              excepto en las siguientes circunstancias:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
              <li>Para cumplir con leyes, regulaciones o procesos legales</li>
              <li>Para proteger nuestros derechos o la seguridad de nuestros usuarios</li>
              <li>En caso de fusión, adquisición o venta de activos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Seguridad de los Datos</h2>
            <p className="text-gray-700">
              Implementamos medidas de seguridad técnicas, administrativas y físicas 
              para proteger su información personal contra acceso no autorizado, uso 
              indebido o divulgación. Sin embargo, ningún método de transmisión por 
              internet es 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-700 mb-3">
              Utilizamos cookies y tecnologías similares para:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Mantener su sesión activa</li>
              <li>Recordar sus preferencias</li>
              <li>Analizar el uso del sitio web</li>
              <li>Personalizar contenido y anuncios</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Puede controlar las cookies a través de la configuración de su navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Sus Derechos</h2>
            <p className="text-gray-700 mb-3">
              Usted tiene los siguientes derechos con respecto a su información personal:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Acceder a su información personal</li>
              <li>Corregir información inexacta</li>
              <li>Eliminar su información personal</li>
              <li>Restringir el procesamiento de sus datos</li>
              <li>Portabilidad de datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Retención de Datos</h2>
            <p className="text-gray-700">
              Conservamos su información personal durante el tiempo necesario para 
              cumplir con los propósitos descritos en esta política, a menos que 
              la ley requiera o permita un período de retención más largo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Menores de Edad</h2>
            <p className="text-gray-700">
              Nuestros servicios no están dirigidos a menores de 18 años. No 
              recopilamos intencionalmente información personal de menores. Si 
              descubrimos que hemos recopilado información de un menor, la 
              eliminaremos inmediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Cambios a esta Política</h2>
            <p className="text-gray-700">
              Podemos actualizar esta política de privacidad periódicamente. 
              Le notificaremos sobre cambios significativos publicando la nueva 
              política en nuestro sitio web y actualizando la fecha de "última 
              actualización".
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">10. Contacto</h2>
            <p className="text-gray-700">
              Si tiene preguntas sobre esta política de privacidad o sobre cómo 
              manejamos su información personal, puede contactarnos en:
            </p>
            <div className="mt-3 text-gray-700">
              <p>Email: privacy@techstore.com</p>
              <p>Teléfono: +1 (555) 123-4567</p>
              <p>Dirección: 123 Tech Street, Ciudad, Estado 12345</p>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};