import React, { useState } from "react";
import "../../styles/Checkout.css";

export const CheckoutVirtual = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handlePay = async (e) => {

  e.preventDefault();

  try {

    alert("Conectando al servidor...");

    const response = await fetch(
      "https://vcreativeweb-backend.onrender.com/create-preference",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...form,
          courseTitle:
            "Curso Virtual - Creación de contenido",
          price: 2,
        }),
      }
    );

    const data = await response.json();
    debugger;
    window.location.href = data.init_point;

  } catch (error) {

    console.log(error);

    alert("Error conectando con el servidor");

  }

};

  return (

    <section className="checkout-page">

      <div className="checkout-wrapper">

        {/* INFO */}
        <div className="checkout-info">

          <span className="checkout-badge">
            Curso Virtual
          </span>

          <h1>
            Finaliza tu inscripción
          </h1>

          <p>
            Estás a un paso de entrar al curso
            donde aprenderás a convertir
            la creación de contenido en un negocio real.
          </p>

          <div className="checkout-points">

            <div>
              🟠 Acceso inmediato
            </div>

            <div>
              🟠 Estrategias reales
            </div>

            <div>
              🟠 Material exclusivo
            </div>

            <div>
              🟠 Comunidad privada
            </div>

          </div>

        </div>

        {/* FORM */}
        <div className="checkout-card">

          <h2>Tus datos</h2>

          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="WhatsApp"
            onChange={handleChange}
          />

          <div className="checkout-price">

            <span>Total</span>

            <h3>$2,900 MXN</h3>

          </div>

          <button
            type="button"
            onClick={handlePay}
            style={{
              background: "red",
              zIndex: 9999,
              position: "relative",
            }}
          >
            Continuar al pago
          </button>

          <p className="checkout-secure">
            🔒 Pago seguro con Mercado Pago
          </p>

        </div>

      </div>

    </section>

  );
};