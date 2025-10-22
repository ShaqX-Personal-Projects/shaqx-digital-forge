import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/BookMeeting";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
      <CookieConsent />
    </LanguageProvider>
  );
};

export default Index;
