import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useScrollToSection } from "@/hooks/useScrollToSection";
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

  useEffect(() => {
    // Handle section scrolling from navigation state
    const state = location.state as { scrollToSection?: string } | null;
    if (state?.scrollToSection) {
      setTimeout(() => {
        scrollToSection(state.scrollToSection);
      }, 100);
    }
  }, [location.state, scrollToSection]);

  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
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
