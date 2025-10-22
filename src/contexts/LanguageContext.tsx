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
    "nav.cases": "Cases",
    "nav.about": "About",
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
    "services.website.title": "Website Development",
    "services.website.desc": "We build fast, modern, and SEO-friendly websites designed to attract customers and perform flawlessly on every device. From simple landing pages to full-scale corporate websites, ShaqX delivers stunning, optimized experiences that rank high and convert effectively.",
    
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
    "contact.heading": "Get in",
    "contact.headingGradient": "Touch",
    "contact.subheading": "Ready to transform your digital presence? Let's start a conversation.",
    "contact.name": "Full Name",
    "contact.namePlaceholder": "John Doe",
    "contact.company": "Company Name (Optional)",
    "contact.companyPlaceholder": "Your Company",
    "contact.email": "Email Address",
    "contact.emailPlaceholder": "john@company.com",
    "contact.message": "Your Message",
    "contact.messagePlaceholder": "Tell us about your project, goals, and how we can help...",
    "contact.submit": "Send Message",
    "contact.orContact": "Or reach us directly at:",
    "contact.successTitle": "Message Sent!",
    "contact.successMessage": "Your email client should open. We'll get back to you soon.",
    
    // Cookie Consent
    "cookie.title": "Cookie Notice",
    "cookie.message": "We use cookies to improve your experience on our site. By continuing, you accept our use of cookies for analytics and user experience enhancement.",
    "cookie.acceptAll": "Accept All",
    "cookie.managePreferences": "Manage Preferences",
    
    // Footer
    "footer.copyright": "All rights reserved.",
    "footer.cvr": "CVR",
    "footer.mission": "ShaqX empowers businesses through intelligent digital solutions, combining innovation, speed, and quality.",
    "footer.quickLinks": "Quick Links",
    "footer.contactTitle": "Contact Us",
    "footer.sales": "Sales",
    "footer.support": "Support",
    "footer.general": "General",
    "footer.followUs": "Follow Us",
    "footer.newsletter": "Stay updated with ShaqX insights",
    "footer.emailPlaceholder": "your@email.com",
    "footer.subscribe": "Subscribe",
  },
  da: {
    // Navbar
    "nav.home": "Hjem",
    "nav.services": "Tjenester",
    "nav.cases": "Cases",
    "nav.about": "Om Os",
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
    "services.website.title": "Hjemmeside Udvikling",
    "services.website.desc": "Vi bygger hurtige, moderne og SEO-venlige hjemmesider designet til at tiltrække kunder og fungere fejlfrit på enhver enhed. Fra simple landingssider til fuldskala virksomhedshjemmesider leverer ShaqX imponerende, optimerede oplevelser der rangerer højt og konverterer effektivt.",
    
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
    "contact.heading": "Kontakt",
    "contact.headingGradient": "Os",
    "contact.subheading": "Klar til at transformere din digitale tilstedeværelse? Lad os starte en samtale.",
    "contact.name": "Fulde Navn",
    "contact.namePlaceholder": "Anders Hansen",
    "contact.company": "Firmanavn (Valgfrit)",
    "contact.companyPlaceholder": "Dit Firma",
    "contact.email": "E-mail Adresse",
    "contact.emailPlaceholder": "anders@firma.dk",
    "contact.message": "Din Besked",
    "contact.messagePlaceholder": "Fortæl os om dit projekt, mål, og hvordan vi kan hjælpe...",
    "contact.submit": "Send Besked",
    "contact.orContact": "Eller kontakt os direkte på:",
    "contact.successTitle": "Besked Sendt!",
    "contact.successMessage": "Din e-mail klient skulle åbne. Vi vender tilbage hurtigst muligt.",
    
    // Cookie Consent
    "cookie.title": "Cookie Meddelelse",
    "cookie.message": "Vi bruger cookies til at forbedre din oplevelse på vores side. Ved at fortsætte accepterer du vores brug af cookies til analytik og brugeroplevelse.",
    "cookie.acceptAll": "Accepter Alle",
    "cookie.managePreferences": "Administrer Præferencer",
    
    // Footer
    "footer.copyright": "Alle rettigheder forbeholdes.",
    "footer.cvr": "CVR",
    "footer.mission": "ShaqX styrker virksomheder gennem intelligente digitale løsninger, der kombinerer innovation, hastighed og kvalitet.",
    "footer.quickLinks": "Hurtige Links",
    "footer.contactTitle": "Kontakt Os",
    "footer.sales": "Salg",
    "footer.support": "Support",
    "footer.general": "Generelt",
    "footer.followUs": "Følg Os",
    "footer.newsletter": "Bliv opdateret med ShaqX indsigter",
    "footer.emailPlaceholder": "din@email.dk",
    "footer.subscribe": "Tilmeld",
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
