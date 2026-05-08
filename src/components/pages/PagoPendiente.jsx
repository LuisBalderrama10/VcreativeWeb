import React from "react";
import "../../styles/PaymentStatus.css";
import { useNavigate } from "react-router-dom";

export const PagoPendiente = () => {

  const navigate = useNavigate();

  return (
    <section className="payment-page pending">

      <div className="payment-card">

        <div className="payment-icon">
          ⏳
        </div>

        <h1>Pago pendiente</h1>

        <p>
          Tu pago está siendo procesado.
          Te notificaremos cuando sea aprobado.
        </p>

        <button onClick={() => navigate("/cursos")}>
          Volver
        </button>

      </div>

    </section>
  );
};