import React from "react";
import { Routes, Route } from "react-router-dom";

import { AppProvider } from "./context/AppContext";
import { ScrollToTop } from "./components/ScrollToTop";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

import { HomePage } from "./components/pages/HomePage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { ServicePage } from "./components/pages/ServicePage";
import { JobsPage } from "./components/pages/JobsPage";
import { JobPage } from "./components/pages/JobPage";
import { ContactPage } from "./components/pages/ContactPage";
import { AboutPage } from "./components/pages/AboutPage";
import { FAQPage } from "./components/pages/FAQPage";
import { TermsPage } from "./components/pages/TermsPage";
import { PrivacyPage } from "./components/pages/PrivacyPage";

import { Courses } from "./components/pages/Course";
import { CourseVirtual } from "./components/pages/CourseVirtual";
import { CoursePresencial } from "./components/pages/CoursePresencial";
// @ts-ignore
import "./styles/Globals.css";
import { PagoExitoso } from "./components/pages/PagoExitoso";
import { PagoError } from "./components/pages/PagoError";
import { PagoPendiente } from "./components/pages/PagoPendiente";
import { CheckoutVirtual } from "./components/pages/CheckoutVirtual";
import { CheckoutPresencial } from "./components/pages/CheckoutPresencial";

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <ScrollToTop />
        <Header />

        <main className="flex-1 pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/job" element={<JobPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />

            <Route path="/courses" element={<Courses />} />
            <Route path="/curso-virtual" element={<CourseVirtual />} />
            <Route path="/curso-presencial" element={<CoursePresencial />}/>
            <Route path="/pago-exitoso" element={<PagoExitoso />} />
            <Route path="/pago-error" element={<PagoError />} />
            <Route path="/pago-pendiente" element={<PagoPendiente />} />
            <Route path="/checkout-virtual" element={<CheckoutVirtual />} />
            <Route path="/checkout-presencial" element={<CheckoutPresencial />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </AppProvider>
  );
}