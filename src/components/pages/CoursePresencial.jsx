import React from "react";
import "../../styles/CourseDetail.css";
import Banner1 from "../../assets/BANNER_1.png";
import { useNavigate } from "react-router-dom";

export const CoursePresencial = () => {
  const navigate = useNavigate();
  
  return (
    <section className="course-detail">

      {/* HERO */}
      <div className="cd-hero">
        <div className="cd-hero-text">
          <span className="cd-badge">Presencial</span>
          <h1>La creación de contenido como negocio</h1>
          <p>
            Vive una experiencia intensiva donde aprenderás a crear contenido
            estratégico que conecta, posiciona y vende.
          </p>

          <div className="cd-actions">
            <button onClick={() => navigate("/checkout-presencial")}>
              Inscribirme ahora
            </button>
            
          </div>
        </div>

        <div className="cd-hero-img">
          <img src={Banner1} alt="Curso presencial" />
        </div>
      </div>


{/* SECCIÓN DOBLE */}
<div className="cd-two-columns">

  {/* APRENDERÁS */}
  <div className="cd-section">
    <h2>¿Qué temas verás?</h2>

    <div className="cd-features">
      <div>
        <h2>Día 1</h2>

        <p>Investigación de mercado objetivo.</p>

        <p>Análisis, trucos y estrategias para redes sociales.</p>

        <p>Metodología para recolectar contenido.</p>
      </div>

      <div>
        <h2>Día 2</h2>

        <p>Taller fotográfico.</p>

        <p>Taller de video.</p>

        <p>Aprende a cobrar.</p>
      </div>
    </div>
  </div>

  {/* DETALLES */}
  <div className="cd-section cd-details">
    <h2>¿Qué incluye?</h2>

    <div className="cd-details-grid">
      <div>
        <p>🔵 7 horas de curso intensivo presencial en 2 días.</p>
        <p>🔵 Refrigerios y coffee break.</p>
        <p>🔵 Kit de notas.</p>
        <p>🔵 Reconocimiento.</p>
      </div>

      <div>
        <span>Ubicación</span>
        <p>C. Sufragio Efectivo #143, Centro, Fundo Legal, 85000 Cdad. Obregón, Son.</p>
      </div>

      <div>
        <span>Fechas</span>
        <p>1 y 2 de Junio 2026</p>
      </div>

      <div>
        <span>Cupos</span>
        <p>Cupos limitados.</p>
      </div>

    </div>
  </div>

</div>

      {/* CTA FINAL */}
      <div className="cd-cta">
        <h2>Asegura tu lugar</h2>
        {/* <p style={{ color: "#4dabff", fontWeight: "500" }}>
          ⚠️ Últimos lugares disponibles
        </p> */}
        <button onClick={() => navigate("/checkout-presencial")}>
          Inscribirme
        </button>
      </div>

    </section>
  );
};