import React from "react";
import {
  useSearchParams,
} from "react-router-dom";

export const PagoExitoso = () => {

  const [searchParams] =
    useSearchParams();

  const name =
    searchParams.get("name");

  const email =
    searchParams.get("email");

  const phone =
    searchParams.get("phone");

  const course =
    searchParams.get("course");

  const amount =
    searchParams.get("amount");

  const message = `
✅ NUEVA INSCRIPCIÓN

👤 Nombre:
${name}

📧 Correo:
${email}

📱 Teléfono:
${phone}

🎓 Curso:
${course}

💰 Monto:
$${amount} MXN
`;

  const whatsappLink =
    `https://wa.me/526442348071?text=${encodeURIComponent(message)}`;

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f7f7f7",
        padding: "20px",
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >

        <h1
          style={{
            fontSize: "32px",
            marginBottom: "15px",
          }}
        >
          Pago realizado ✅
        </h1>

        <p
          style={{
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          Tu pago fue procesado correctamente.
          Ahora envíanos un mensaje por WhatsApp
          para confirmar tu acceso al curso.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#25D366",
            color: "white",
            padding: "15px 25px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Ir a WhatsApp
        </a>

      </div>

    </div>

  );

};