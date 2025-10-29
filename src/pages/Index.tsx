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
    "@type": "SoftwareApplication",
    name: "ShaqX AI Marketing Platform",
    description: "AI-drevet marketing platform til sociale medier, email, SEO og Google My Business indlæg",
    url: "https://shaqx.com",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "DKK"
    },
    featureList: "AI content generation, social media posts, email marketing, SEO optimization, Google My Business posts",
    inLanguage: "da",
    operatingSystem: "Web Browser",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150"
    }
  };

  return (
    <>
      <SEO
        title={t("hero.title") + " " + t("hero.titleGradient")}
        description={t("hero.subtitle")}
        keywords="AI marketing, sociale medier, email marketing, SEO tekster, Google My Business, marketing automatisering, content marketing, Danmark, Copenhagen"
        ogTitle="ShaqX - AI Marketing Platform | Start Gratis"
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
