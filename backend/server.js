import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import axios from "axios";
import nodemailer from "nodemailer";

import { MercadoPagoConfig, Preference } from "mercadopago";

dotenv.config();

console.log("Token loaded:", process.env.ACCESS_TOKEN ? "YES" : "NO");
console.log("Token starts with TEST:", process.env.ACCESS_TOKEN?.startsWith("TEST"));

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN,
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/create-preference", async (req, res) => {
  try {
    const { name, email, phone, courseTitle, price } = req.body;

    // =========================
    // CREAR PAGO
    // =========================

    const preference = new Preference(client);

    console.log(req.body);
    const response = await preference.create({
      body: {
        notification_url: "https://vcreativeweb-backend.onrender.com/webhook",

        back_urls: {
          success: `https://vcreative-lac.vercel.app/pago-exitoso?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&course=${encodeURIComponent(courseTitle)}&amount=${price}`,
          failure: "https://vcreative-lac.vercel.app/pago-error",
          pending: "https://vcreative-lac.vercel.app/pago-pendiente",
        },
        auto_return: "approved",

        payer: {
          name,
          email,
        },

        metadata: {
          name,
          email,
          phone,
          courseTitle,
        },


        items: [
          {
            title: courseTitle,
            quantity: 1,
            unit_price: Number(price),
            currency_id: "MXN",
          },
        ],
      },
    });

    res.json({
      init_point: response.init_point,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Error creando pago",
    });
  }
});

app.post("/webhook", async (req, res) => {

  try {

    console.log("========== WEBHOOK ==========");
    console.log(JSON.stringify(req.body, null, 2));

    let paymentId = null;

    // FORMATO NUEVO
    if (req.body.type === "payment") {
      paymentId = req.body.data.id;
    }

    // FORMATO VIEJO
    if (req.body.topic === "payment") {
      paymentId = req.body.resource;
    }

    if (!paymentId) {
      console.log("NO ES UN PAYMENT");
      return res.sendStatus(200);
    }

    console.log("PAYMENT ID:", paymentId);

    await new Promise(resolve =>
      setTimeout(resolve, 3000)
    );


    const response = await axios.get(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    );

    const paymentData = response.data;

    console.log("STATUS:", paymentData.status);

    if (paymentData.status === "approved") {

      const metadata = paymentData.metadata;

      console.log("PAGO APROBADO");
      console.log(metadata);

      await transporter.sendMail({

        from: process.env.EMAIL_USER,

        to: metadata.email,

        subject: "Pago confirmado - VCreative",

        html: `
          <h2>Hola ${metadata.name}</h2>

          <p>
            Tu pago fue aprobado correctamente.
          </p>

          <p>
            Curso:
            <strong>${metadata.courseTitle}</strong>
          </p>

          <p>
            En las próximas horas recibirás más información.
          </p>

          <br>

          <p>Equipo VCreative</p>
        `,
      });

      console.log("CORREO ENVIADO");
    }

    res.sendStatus(200);

  } catch (error) {

    console.log(error.response?.data || error);

    res.sendStatus(500);

  }

});

app.listen(3001, () => {
  console.log("Servidor backend 3001");
});
