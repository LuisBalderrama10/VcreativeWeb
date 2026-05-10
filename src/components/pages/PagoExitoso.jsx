import React from "react";

export const PagoExitoso = () => {

  const whatsappLink =
    "https://wa.me/526442362708?text=Hola%20VCreative,%20ya%20realicé%20mi%20pago%20del%20curso%20✅";

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