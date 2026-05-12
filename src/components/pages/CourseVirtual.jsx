import React from "react";
import "../../styles/CourseDetail.css";
import Banner2 from "../../assets/BANNER_2.png";
import { useNavigate } from "react-router-dom";

export const CourseVirtual = () => {

const navigate = useNavigate();

  return (
    <section className="course-detail virtual">

      {/* HERO */}
      <div className="cd-hero">
        <div className="cd-hero-text">
          <span className="cd-badge">Virtual</span>
          <h1>La creación de contenido como negocio</h1>
          <p>
            Vive una experiencia intensiva donde aprenderás a crear contenido
            estratégico que conecta, posiciona y vende.
          </p>

          <div className="cd-actions">
            <button onClick={() => navigate("/checkout-virtual")}>
              Inscribirme ahora
            </button>
          </div>
        </div>

        <div className="cd-hero-img">
          <img src={Banner2} alt="Curso virtual" />
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

        <p>Técnica fotográfica básica, ajustes y material recomendado.</p>

        <p>Metodología para crear un video.</p>

        <p>Aprende a cobrar.</p>
      </div>
    </div>
  </div>

  {/* DETALLES */}
  <div className="cd-section cd-details">
    <h2>¿Qué incluye?</h2>

    <div className="cd-details-grid">
      <div>
        <p>🟠 6 horas de curso intensivo virtual.</p>
        <p>🟠 Material digital del curso.</p>
        <p>🟠 Reconocimiento PDF digital.</p>
      </div>

      <div>
        <span>Ubicación</span>
        <p>Cd. Obregón, Son.</p>
      </div>

      <div>
        <span>Fechas</span>
        <p>16 y 17 de Julio 2026</p>
      </div>

      <div>
        <span>Cupos</span>
        <p>Cupos limitados.</p>
      </div>

      <div>
        <span>Precio: $3,765</span>
        <p>Precio en preventa con el 20% de descuento : $3,016</p>
        <p>Hasta el 6 de julio </p>
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
        <button onClick={() => navigate("/checkout-virtual")}>
          Inscribirme
        </button>
      </div>

    </section>
  );
};