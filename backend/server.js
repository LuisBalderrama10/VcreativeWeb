import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import axios from "axios";
import nodemailer from "nodemailer";

import {
  MercadoPagoConfig,
  Preference
} from "mercadopago";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/create-preference", async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      courseTitle,
      price
    } = req.body;

    // =========================
    // GUARDAR ALUMNO
    // =========================

    const alumnos = JSON.parse(
      fs.readFileSync("./data/alumnos.json")
    );

    const nuevoAlumno = {
      id: Date.now(),
      name,
      email,
      phone,
      courseTitle,
      price,
      date: new Date(),
    };

    alumnos.push(nuevoAlumno);

    fs.writeFileSync(
      "./data/alumnos.json",
      JSON.stringify(alumnos, null, 2)
    );

    // =========================
    // ENVIAR CORREO
    // =========================

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Tu registro al curso VCreative",
      html: `
        <h2>Hola ${name}</h2>

        <p>
          Gracias por registrarte al curso:
          <strong>${courseTitle}</strong>
        </p>

        <p>
          En cuanto tu pago sea confirmado,
          recibirás más información.
        </p>

        <p>
          Equipo VCreative
        </p>
      `,
    });

    app.post("/webhook", async (req, res) => {

  try {

    const payment = req.body;

    console.log("WEBHOOK RECIBIDO");

    if (payment.type === "payment") {

      const paymentId = payment.data.id;

      const response = await axios.get(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );

      const paymentData = response.data;

      console.log(paymentData);

      // SOLO SI ESTÁ APROBADO
      if (paymentData.status === "approved") {

        const alumnos = JSON.parse(
          fs.readFileSync("./data/alumnos.json")
        );

        const alumno = {

          id: paymentData.id,

          email:
            paymentData.payer.email,

          amount:
            paymentData.transaction_amount,

          status:
            paymentData.status,

          date:
            paymentData.date_created,

          course:
            paymentData.additional_info.items[0].title,

        };

        alumnos.push(alumno);

        fs.writeFileSync(
          "./data/alumnos.json",
          JSON.stringify(alumnos, null, 2)
        );

        console.log("ALUMNO GUARDADO");

      }

    }

    res.sendStatus(200);

  } catch (error) {

    console.log(error);

    res.sendStatus(500);

  }

});

    // =========================
    // CREAR PAGO
    // =========================

    const preference = new Preference(client);

    console.log(req.body);

    const response = await preference.create({
      body: {

        notification_url:
        "https://distinct-gloomy-nebula.ngrok-free.dev/webhook",

        back_urls: {
          success: "http://localhost:3000/pago-exitoso",
          failure: "http://localhost:3000/pago-error",
          pending: "http://localhost:3000/pago-pendiente",
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
      error: "Error"
    });

  }

});

app.listen(3001, () => {
  console.log("Servidor backend 3001");
});