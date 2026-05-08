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
              Pagar ahora
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
    <h2>¿Que temas verás?</h2>

    <div className="cd-features">
      <div>
        <h2>Dia 1</h2>
        <p>Investigacion de mercado objetivo.</p>
        <p>Analisis, trucos y estrategias para redes sociales.</p>
        <p>Metodologia para recolectar contenido.</p>
      </div>

      <div>
        <h2>Dia 2</h2>
        <p>Taller fotografico.</p>
        <p>Taller de video.</p>
        <p>Aprende a cobrar.</p>
      </div>
    </div>
  </div>

  {/* DETALLES */}
  <div className="cd-section cd-details">
    <h2>¿Que incluye?</h2>

    <div className="cd-details-grid">
      <div>
        <p>🔵 7 horas de curso intensivo presencial en 2 dias.</p>
        <p>🔵 Refrigerios y coffee break.</p>
        <p>🔵 Kit de notas.</p>
        <p>🔵 Reconocimiento.</p>
      </div>

      <div>
        <span>Ubicación</span>
        <p>Ciudad Obregón</p>
      </div>

      <div>
        <span>Cupos</span>
        <p>Limitados</p>
      </div>
    </div>
  </div>

</div>

      {/* CTA FINAL */}
      <div className="cd-cta">
        <h2>Asegura tu lugar</h2>
        <p style={{ color: "#4dabff", fontWeight: "500" }}>
          ⚠️ Últimos lugares disponibles
        </p>
        <button onClick={() => navigate("/checkout-presencial")}>
          Pagar ahora
        </button>
      </div>

    </section>
  );
};