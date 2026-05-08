import React from "react";
import "../../styles/PaymentStatus.css";
import { useNavigate } from "react-router-dom";

export const PagoError = () => {

  const navigate = useNavigate();

  return (
    <section className="payment-page error">

      <div className="payment-card">

        <div className="payment-icon">
          ❌
        </div>

        <h1>No se pudo completar el pago</h1>

        <p>
          Ocurrió un problema durante el pago.
          Puedes volver a intentarlo.
        </p>

        <button onClick={() => navigate("/cursos")}>
          Intentar de nuevo
        </button>

      </div>

    </section>
  );
};