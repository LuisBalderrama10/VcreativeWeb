import React from "react";
import { AppProvider, useApp } from "./context/AppContext";
import { ScrollToTop } from "./components/ScrollToTop";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
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
import { WhatsAppButton } from "./components/WhatsAppButton";

const AppContent: React.FC = () => {
  const { state } = useApp();

  const renderPage = () => {
    switch (state.currentPage) {
      case "home":
        return <HomePage />;
      case "services":
        return <ServicesPage />;
      case "service":
        return <ServicePage />;
      case "jobs":
        return <JobsPage />;
      case "job":
        return <JobPage />;
      case "contact":
        return <ContactPage />;
      case "about":
        return <AboutPage />;
      case "faq":
        return <FAQPage />;
      case "terms":
        return <TermsPage />;
      case "privacy":
        return <PrivacyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-16 sm:pt-20">
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}