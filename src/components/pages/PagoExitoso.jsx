import React from "react";
import "../../styles/PaymentStatus.css";
import { useNavigate } from "react-router-dom";

export const PagoExitoso = () => {

  const navigate = useNavigate();

  return (
    <section className="payment-page success">

      <div className="payment-card">

        <div className="payment-icon">
          ✅
        </div>

        <h1>Pago realizado con éxito</h1>

        <p>
          Tu lugar ya quedó reservado.
          En breve recibirás información
          en tu correo.
        </p>

        <button onClick={() => navigate("/cursos")}>
          Volver a cursos
        </button>

      </div>

    </section>
  );
};