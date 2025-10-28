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
    description: "Modern web and mobile applications, AI-powered tools, and business platforms",
    url: "https://shaqx.com",
    telephone: "+45-XXXXXXXX",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DK"
    },
    areaServed: ["DK", "EU", "Global"],
    serviceType: ["Web Development", "Mobile App Development", "AI Solutions", "Business Platforms"],
  };

  return (
    <>
      <SEO
        title={t("hero.title") + " " + t("hero.titleGradient")}
        description={t("hero.subtitle")}
        keywords="web development, mobile apps, AI solutions, business platforms, digital transformation, SaaS, Denmark, Copenhagen, fintech, healthcare tech"
        ogTitle="ShaqX - Modern Web & AI Solutions"
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
