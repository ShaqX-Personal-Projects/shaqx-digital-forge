import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "da";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.ai": "AI Solutions",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.getInTouch": "Get in Touch",
    
    // Hero
    "hero.title": "Building the Future of",
    "hero.titleGradient": "Digital Innovation",
    "hero.subtitle": "Modern web and mobile applications, AI-powered tools, and business platforms that transform how companies work.",
    "hero.cta": "Get in Touch",
    
    // Services
    "services.heading": "What We",
    "services.headingGradient": "Offer",
    "services.subheading": "Comprehensive digital solutions that scale with your business",
    "services.web.title": "Web & Mobile Apps",
    "services.web.desc": "Modern, responsive applications built for any device with seamless user experiences.",
    "services.business.title": "Business Platforms",
    "services.business.desc": "Custom SaaS, e-commerce, and management systems tailored to your workflow.",
    "services.ai.title": "AI-Powered Solutions",
    "services.ai.desc": "Intelligent chatbots, automation, and document intelligence that work for you.",
    "services.tools.title": "Smart Tools for Teams",
    "services.tools.desc": "Intuitive dashboards, CRMs, and data visualization tools that drive decisions.",
    "services.industry.title": "Industry-Ready Applications",
    "services.industry.desc": "Specialized solutions for Fintech, Healthcare, Education, Real Estate, and more.",
    
    // About
    "about.heading": "About",
    "about.headingGradient": "ShaqX",
    "about.intro": "We design and develop modern web and mobile applications, AI-powered tools, and business platforms that help companies automate workflows, enhance user experiences, and scale their operations.",
    "about.mission": "Our mission is to deliver smart, secure, and high-performing digital products that transform how businesses operate in the modern world.",
    "about.innovation.title": "Innovation First",
    "about.innovation.desc": "Cutting-edge technology that keeps you ahead",
    "about.security.title": "Secure & Reliable",
    "about.security.desc": "Enterprise-grade security you can trust",
    "about.client.title": "Client-Focused",
    "about.client.desc": "Your success is our priority",
    
    // Contact
    "contact.heading": "Let's Work",
    "contact.headingGradient": "Together",
    "contact.subheading": "Ready to transform your digital presence? Get in touch with us today.",
    "contact.sales": "Sales",
    "contact.support": "Support",
    "contact.general": "General Inquiries",
    "contact.cvr": "CVR",
    
    // Footer
    "footer.copyright": "All rights reserved.",
  },
  da: {
    // Navbar
    "nav.home": "Hjem",
    "nav.services": "Tjenester",
    "nav.projects": "Projekter",
    "nav.ai": "AI-Løsninger",
    "nav.blog": "Blog",
    "nav.contact": "Kontakt",
    "nav.getInTouch": "Kontakt Os",
    
    // Hero
    "hero.title": "Bygger Fremtidens",
    "hero.titleGradient": "Digitale Innovation",
    "hero.subtitle": "Moderne web- og mobilapplikationer, AI-drevne værktøjer og forretningsplatforme, der transformerer hvordan virksomheder arbejder.",
    "hero.cta": "Kontakt Os",
    
    // Services
    "services.heading": "Hvad Vi",
    "services.headingGradient": "Tilbyder",
    "services.subheading": "Omfattende digitale løsninger der skalerer med din virksomhed",
    "services.web.title": "Web & Mobile Apps",
    "services.web.desc": "Moderne, responsive applikationer bygget til enhver enhed med problemfri brugeroplevelser.",
    "services.business.title": "Forretningsplatforme",
    "services.business.desc": "Tilpassede SaaS, e-handel og styringssystemer skræddersyet til dit workflow.",
    "services.ai.title": "AI-Drevne Løsninger",
    "services.ai.desc": "Intelligente chatbots, automatisering og dokumentintelligens der arbejder for dig.",
    "services.tools.title": "Smarte Værktøjer til Teams",
    "services.tools.desc": "Intuitive dashboards, CRM'er og datavisualiseringsværktøjer der driver beslutninger.",
    "services.industry.title": "Industriklare Applikationer",
    "services.industry.desc": "Specialiserede løsninger til Fintech, Sundhed, Uddannelse, Ejendomme og mere.",
    
    // About
    "about.heading": "Om",
    "about.headingGradient": "ShaqX",
    "about.intro": "Vi designer og udvikler moderne web- og mobilapplikationer, AI-drevne værktøjer og forretningsplatforme, der hjælper virksomheder med at automatisere workflows, forbedre brugeroplevelser og skalere deres operationer.",
    "about.mission": "Vores mission er at levere smarte, sikre og højtydende digitale produkter, der transformerer hvordan virksomheder opererer i den moderne verden.",
    "about.innovation.title": "Innovation Først",
    "about.innovation.desc": "Banebrydende teknologi der holder dig foran",
    "about.security.title": "Sikker & Pålidelig",
    "about.security.desc": "Virksomhedssikkerhed du kan stole på",
    "about.client.title": "Kundefokuseret",
    "about.client.desc": "Din succes er vores prioritet",
    
    // Contact
    "contact.heading": "Lad Os Arbejde",
    "contact.headingGradient": "Sammen",
    "contact.subheading": "Klar til at transformere din digitale tilstedeværelse? Kontakt os i dag.",
    "contact.sales": "Salg",
    "contact.support": "Support",
    "contact.general": "Generelle Henvendelser",
    "contact.cvr": "CVR",
    
    // Footer
    "footer.copyright": "Alle rettigheder forbeholdes.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "da" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
