import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/BookMeeting";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const IndexContent = () => {
  const location = useLocation();
  const { scrollToSection } = useScrollToSection();
  const { t } = useLanguage();

  useEffect(() => {
    // Handle section scrolling from navigation state
    const state = location.state as { scrollToSection?: string } | null;
    if (state?.scrollToSection) {
      setTimeout(() => {
        scrollToSection(state.scrollToSection);
      }, 100);
    }
  }, [location.state, scrollToSection]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ShaqX",
    description: "Softwareløsning, app udvikling, hjemmeside udvikling og AI-løsninger til virksomheder",
    url: "https://shaqx.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DK",
      addressLocality: "Copenhagen"
    },
    telephone: "+45-XXXXXXXX",
    email: "info@shaqx.com",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Denmark"
    },
    serviceType: [
      "Softwareløsning",
      "App Udvikling", 
      "Hjemmeside Udvikling",
      "AI-Løsninger",
      "Digital Markedsføring"
    ],
    knowsAbout: [
      "Software Development",
      "Mobile App Development",
      "Web Development",
      "AI Integration",
      "Digital Marketing"
    ],
    inLanguage: "da"
  };

  return (
    <>
      <SEO
        title={t("hero.title") + " " + t("hero.titleGradient")}
        description={t("hero.subtitle")}
        keywords="softwareløsning, app udvikling, hjemmeside udvikling, AI løsning, digital markedsføring, webdesign, software udvikling, mobile app, web app, Danmark"
        ogTitle="ShaqX - Softwareløsning, App Udvikling & AI-Løsninger"
        ogDescription={t("hero.subtitle")}
        structuredData={structuredData}
      />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <IndexContent />
      <Footer />
      <CookieConsent />
    </LanguageProvider>
  );
};

export default Index;
