import React, { useState } from "react";
import "../../styles/Checkout.css";

export const CheckoutPresencial = () => {

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

  if (!form.name || !form.email || !form.phone) {
    alert("Completa todos los campos");
  return;
  }

  try {

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
            "Curso Presencial - Creación de contenido",
          price: 3646,
        }),
      }
    );

    const data = await response.json();

    console.log(data);


    if (data.init_point) {


      window.location.href = data.init_point;

    } else {

      alert("NO SE RECIBIÓ INIT POINT");

    }

  } catch (error) {

  console.log(error);

  alert(error.message);

}

};

  return (

    <section className="checkout-page">

      <div className="checkout-wrapper">

        {/* INFO */}
        <div className="checkout-info">

          <span className="checkout-badge-presencial">
            Curso Presencial
          </span>

          <h1>
            Reserva tu lugar
          </h1>

          <p>
            Vive una experiencia intensiva
            donde aprenderás fotografía,
            video, estrategia y ventas
            junto al equipo VCreative.
          </p>

          <div className="checkout-points">

            <div>
              🔵 Taller práctico
            </div>

            <div>
              🔵 Networking
            </div>

            <div>
              🔵 Material físico
            </div>

            <div>
              🔵 Cupos limitados
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

            <h3>$3,646 MXN</h3>

          </div>

          <button
          className="checkout-btn-presencial"
            type="button"
            onClick={handlePay}
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