import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
    </LanguageProvider>
  );
};

export default Index;
