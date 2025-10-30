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
    "hero.title": "Digital Innovation with",
    "hero.titleGradient": "AI & Software",
    "hero.subtitle":
      "We develop apps, websites, and AI solutions that help businesses grow. Professional software solutions tailored to your needs.",
    "hero.cta": "Get a Free Consultation",

    // Services
    "services.heading": "Our",
    "services.headingGradient": "Solutions",
    "services.subheading": "Professional software development and AI integration for modern businesses",
    "services.web.title": "App Development",
    "services.web.desc": "We develop mobile apps and web applications with modern technology. User-friendly solutions for iOS, Android, and web.",
    "services.business.title": "Software Solutions",
    "services.business.desc": "Custom software solutions for your business needs. CRM systems, business platforms, and specialized systems.",
    "services.ai.title": "AI Solutions & Integration",
    "services.ai.desc": "AI integration into your existing software. Chatbots, automation, data analysis, and intelligent AI solutions.",
    "services.tools.title": "Digital Marketing",
    "services.tools.desc": "SEO optimization, digital strategy, and marketing automation. We help your business grow online.",
    "services.industry.title": "Consulting & Support",
    "services.industry.desc": "Technical consulting and ongoing support. We are your digital partner throughout the process.",
    "services.website.title": "Website Development",
    "services.website.desc":
      "Modern, fast, and SEO-optimized websites. We build responsive web design with focus on conversion and user experience.",

    // About
    "about.heading": "About",
    "about.headingGradient": "ShaqX",
    "about.intro":
      "ShaqX is your partner in software development, app development, and AI solutions. We deliver professional digital solutions that help Danish businesses grow and digitize their processes.",
    "about.mission":
      "We combine modern technology with business understanding to create software solutions, apps, and websites that deliver measurable results and strengthen your competitiveness.",
    "about.innovation.title": "Modern Technology",
    "about.innovation.desc": "We use the latest technologies and frameworks",
    "about.security.title": "Security & Quality",
    "about.security.desc": "High code quality and data security in all projects",
    "about.client.title": "Danish Company",
    "about.client.desc": "Local service with international experience",

    // Contact
    "contact.heading": "Get in",
    "contact.headingGradient": "Touch",
    "contact.subheading": "Get a non-binding consultation about your next app, website, or AI solution. We're ready to help.",
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
    "cookie.message":
      "We use cookies to improve your experience on our site. By continuing, you accept our use of cookies for analytics and user experience enhancement.",
    "cookie.acceptAll": "Accept All",
    "cookie.managePreferences": "Manage Preferences",
    "cookie.preferencesTitle": "Cookie Preferences",
    "cookie.preferencesDesc": "Choose which cookies you want to allow. You can change these settings at any time.",
    "cookie.necessary": "Necessary Cookies",
    "cookie.necessaryDesc": "Required for the website to function. Cannot be disabled.",
    "cookie.functional": "Functional Cookies",
    "cookie.functionalDesc": "Enable enhanced functionality and personalization.",
    "cookie.analytics": "Analytics Cookies",
    "cookie.analyticsDesc": "Help us understand how visitors interact with our website.",
    "cookie.marketing": "Marketing Cookies",
    "cookie.marketingDesc": "Used to track visitors and display relevant ads.",
    "cookie.savePreferences": "Save Preferences",
    "cookie.acceptSelected": "Accept Selected",

    // Footer
    "footer.copyright": "All rights reserved.",
    "footer.cvr": "CVR",
    "footer.tagline": "Professional software solutions, apps, websites & AI integration.",
    "footer.location": "Proudly built in Denmark",
    "footer.mission":
      "ShaqX delivers professional software development, app development, and AI solutions to businesses in Denmark and internationally.",
    "footer.quickLinks": "Quick Links",
    "footer.legal": "Legal",
    "footer.contactTitle": "Contact Us",
    "footer.sales": "Sales",
    "footer.support": "Support",
    "footer.general": "General",
    "footer.followUs": "Follow Us",
    "footer.stayConnected": "Stay Connected",
    "footer.newsletter": "Stay Updated",
    "footer.newsletterShort": "Get ShaqX updates and insights.",
    "footer.newsletterDesc": "Get the latest ShaqX insights, updates, and digital innovation tips.",
    "footer.emailPlaceholder": "your@email.com",
    "footer.subscribe": "Subscribe",
    "footer.policies": "Policies",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.cookiePolicy": "Cookie Policy",
    "footer.termsOfService": "Terms of Service",
    "footer.language": "Language",
    "footer.backToTop": "Back to Top",

    // About Page
    "about.page.heading": "About",
    "about.page.headingGradient": "ShaqX",
    "about.page.intro":
      "We are a team of passionate technologists who believe in the power of digital innovation to transform businesses and improve lives.",
    "about.page.mission":
      "Our mission is to deliver cutting-edge, secure, and scalable digital solutions that empower companies to thrive in the modern digital landscape.",
    "about.page.values.heading": "Our Core",
    "about.page.values.headingGradient": "Values",
    "about.page.values.subtitle": "These principles guide everything we do at ShaqX.",
    "about.page.innovation.title": "Innovation First",
    "about.page.innovation.desc":
      "We stay ahead of the curve, using the latest technologies and methodologies to deliver solutions that give you a competitive edge.",
    "about.page.security.title": "Security & Reliability",
    "about.page.security.desc":
      "Your data and users are our top priority. We build with enterprise-grade security standards and ensure maximum uptime.",
    "about.page.client.title": "Client-Focused",
    "about.page.client.desc":
      "Your success is our success. We listen, collaborate, and deliver tailored solutions that meet your unique business needs.",
    "about.page.quality.title": "Quality Excellence",
    "about.page.quality.desc":
      "We never compromise on quality. Every line of code, every design element, every feature is crafted with precision and care.",
    "about.page.speed.title": "Speed & Agility",
    "about.page.speed.desc":
      "In the fast-paced digital world, timing matters. We deliver rapidly without sacrificing quality or security.",
    "about.page.transparency.title": "Transparency",
    "about.page.transparency.desc":
      "We believe in open communication, honest pricing, and clear expectations. You'll always know where your project stands.",
    "about.page.cta.heading": "Ready to Build Something Amazing?",
    "about.page.cta.subtitle": "Let's turn your vision into reality with ShaqX's expertise.",
    "about.page.cta.button": "Get in Touch",

    // Cases Page
    "cases.heading": "Success",
    "cases.headingGradient": "Stories",
    "cases.subtitle":
      "Real projects, real results. See how ShaqX has helped businesses scale, innovate, and succeed.",
    "cases.results": "Results",
    "cases.cta.heading": "Start Your Project with ShaqX",
    "cases.cta.subtitle": "Let's create your success story together.",
    "cases.cta.button": "Get Started",
    "cases.case1.title": "Fintech Platform Transformation",
    "cases.case1.client": "Nordic Financial Services",
    "cases.case1.description":
      "Built a secure, scalable fintech platform with real-time payment processing, advanced fraud detection, and seamless user experience across web and mobile.",
    "cases.case1.metric1": "Faster Transactions",
    "cases.case1.metric2": "User Growth",
    "cases.case1.tags": "Fintech, Web App, Mobile App, Security",
    "cases.case2.title": "Healthcare Patient Management",
    "cases.case2.client": "MediCare Solutions",
    "cases.case2.description":
      "Developed a comprehensive patient management system with appointment scheduling, electronic health records, and HIPAA-compliant data handling.",
    "cases.case2.metric1": "Active Users",
    "cases.case2.metric2": "Efficiency Gain",
    "cases.case2.tags": "Healthcare, SaaS, Data Security",
    "cases.case3.title": "E-Commerce Platform Redesign",
    "cases.case3.client": "Retail Innovators AS",
    "cases.case3.description":
      "Redesigned and optimized an e-commerce platform, improving page load speeds, checkout flow, and integrating AI-powered product recommendations.",
    "cases.case3.metric1": "Faster Load Times",
    "cases.case3.metric2": "Revenue Increase",
    "cases.case3.tags": "E-commerce, AI, Performance",

    // Policies Page
    "policies.heading": "Legal &",
    "policies.headingGradient": "Policies",
    "policies.intro":
      "ShaqX values transparency and data protection. Here's how we handle information, privacy, and compliance.",
    "policies.lastUpdated": "Last updated",
    "policies.date": "January 2025",
    "policies.privacy.title": "Privacy Policy",
    "policies.privacy.titleShort": "Privacy",
    "policies.privacy.section1.title": "1. Information We Collect",
    "policies.privacy.section1.content":
      "We collect information you provide directly to us, such as your name, email address, company name, and any messages you send through our contact forms. We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, and usage data.",
    "policies.privacy.section2.title": "2. How We Use Your Information",
    "policies.privacy.section2.content":
      "We use the information we collect to respond to your inquiries, provide our services, improve our website, send you updates and marketing communications (with your consent), and comply with legal obligations. We never sell your personal information to third parties.",
    "policies.privacy.section3.title": "3. Data Security",
    "policies.privacy.section3.content":
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
    "policies.privacy.section4.title": "4. Your Rights",
    "policies.privacy.section4.content":
      "You have the right to access, correct, delete, or restrict the processing of your personal information. You may also object to processing or request data portability. To exercise these rights, please contact us at info@shaqx.com.",
    "policies.privacy.section5.title": "5. Contact Us",
    "policies.privacy.section5.content":
      "If you have any questions about this Privacy Policy or our data practices, please contact us at info@shaqx.com or write to us at our registered business address.",
    "policies.cookies.title": "Cookie Policy",
    "policies.cookies.titleShort": "Cookies",
    "policies.cookies.section1.title": "1. What Are Cookies",
    "policies.cookies.section1.content":
      "Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.",
    "policies.cookies.section2.title": "2. Types of Cookies We Use",
    "policies.cookies.section2.content":
      "We use essential cookies (required for the website to function), analytics cookies (to understand how visitors interact with our site), and preference cookies (to remember your settings and choices). We do not use advertising or tracking cookies without your explicit consent.",
    "policies.cookies.section3.title": "3. Managing Cookies",
    "policies.cookies.section3.content":
      "You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website. Most browsers allow you to refuse cookies or delete cookies that have already been set.",
    "policies.cookies.section4.title": "4. Third-Party Cookies",
    "policies.cookies.section4.content":
      "We may use third-party services such as Google Analytics to help us understand website usage. These services may set their own cookies. Please refer to their respective privacy policies for more information.",
    "policies.terms.title": "Terms of Service",
    "policies.terms.titleShort": "Terms",
    "policies.terms.section1.title": "1. Acceptance of Terms",
    "policies.terms.section1.content":
      "By accessing and using the ShaqX website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
    "policies.terms.section2.title": "2. Services Description",
    "policies.terms.section2.content":
      "ShaqX provides web and mobile application development, AI-powered solutions, business platforms, and related digital services. The specific scope of work for each project will be defined in a separate agreement or statement of work.",
    "policies.terms.section3.title": "3. Intellectual Property",
    "policies.terms.section3.content":
      "All content, trademarks, and materials on our website are owned by ShaqX or our licensors. Unless otherwise agreed in writing, deliverables created for clients become the property of the client upon full payment, while ShaqX retains the right to showcase work in our portfolio.",
    "policies.terms.section4.title": "4. Limitation of Liability",
    "policies.terms.section4.content":
      "ShaqX will not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our services. Our total liability shall not exceed the amount paid by you for the specific service in question.",
    "policies.terms.section5.title": "5. Governing Law",
    "policies.terms.section5.content":
      "These Terms of Service are governed by the laws of Denmark. Any disputes arising from these terms or our services shall be resolved in Danish courts. If any provision is found to be unenforceable, the remaining provisions shall remain in full effect.",
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
    "hero.title": "Digital Innovation med",
    "hero.titleGradient": "AI og Software",
    "hero.subtitle":
      "Vi udvikler apps, hjemmesider og AI-løsninger, der får virksomheder til at vokse. Professionelle softwareløsninger skræddersyet til dine behov.",
    "hero.cta": "Få en Gratis Konsultation",

    // Services
    "services.heading": "Vores",
    "services.headingGradient": "Løsninger",
    "services.subheading": "Professionel softwareudvikling og AI-integration til moderne virksomheder",
    "services.web.title": "App Udvikling",
    "services.web.desc": "Vi udvikler mobile apps og web-applikationer med moderne teknologi. Brugervenlige løsninger til iOS, Android og web.",
    "services.business.title": "Softwareløsninger",
    "services.business.desc": "Skræddersyede softwareløsninger til dit forretningsbehov. CRM-systemer, forretningsplatforme og specialudviklede systemer.",
    "services.ai.title": "AI-Løsninger & Integration",
    "services.ai.desc": "AI-integration i din eksisterende software. Chatbots, automatisering, dataanalyse og intelligente AI-løsninger.",
    "services.tools.title": "Digital Markedsføring",
    "services.tools.desc": "SEO-optimering, digital strategi og marketing automation. Vi hjælper din virksomhed med at vokse online.",
    "services.industry.title": "Rådgivning & Support",
    "services.industry.desc": "Teknisk rådgivning og løbende support. Vi er din digitale partner gennem hele processen.",
    "services.website.title": "Hjemmeside Udvikling",
    "services.website.desc":
      "Moderne, hurtige og SEO-optimerede hjemmesider. Vi bygger responsivt webdesign med fokus på konvertering og brugeroplevelse.",

    // About
    "about.heading": "Om",
    "about.headingGradient": "ShaqX",
    "about.intro":
      "ShaqX er din partner inden for softwareudvikling, app udvikling og AI-løsninger. Vi leverer professionelle digitale løsninger, der hjælper danske virksomheder med at vokse og digitalisere deres processer.",
    "about.mission":
      "Vi kombinerer moderne teknologi med forretningsmæssig forståelse for at skabe softwareløsninger, apps og hjemmesider, der leverer målbare resultater og styrker din konkurrenceevne.",
    "about.innovation.title": "Moderne Teknologi",
    "about.innovation.desc": "Vi bruger de nyeste teknologier og frameworks",
    "about.security.title": "Sikkerhed & Kvalitet",
    "about.security.desc": "Høj kodekvalitet og datasikkerhed i alle projekter",
    "about.client.title": "Dansk Virksomhed",
    "about.client.desc": "Lokal service med international erfaring",

    // Contact
    "contact.heading": "Kontakt",
    "contact.headingGradient": "Os",
    "contact.subheading": "Få en uforpligtende konsultation om din næste app, hjemmeside eller AI-løsning. Vi er klar til at hjælpe.",
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
    "cookie.message":
      "Vi bruger cookies til at forbedre din oplevelse på vores side. Ved at fortsætte accepterer du vores brug af cookies til analytik og brugeroplevelse.",
    "cookie.acceptAll": "Accepter Alle",
    "cookie.managePreferences": "Administrer Præferencer",
    "cookie.preferencesTitle": "Cookie Præferencer",
    "cookie.preferencesDesc": "Vælg hvilke cookies du vil tillade. Du kan ændre disse indstillinger når som helst.",
    "cookie.necessary": "Nødvendige Cookies",
    "cookie.necessaryDesc": "Kræves for at hjemmesiden kan fungere. Kan ikke deaktiveres.",
    "cookie.functional": "Funktionelle Cookies",
    "cookie.functionalDesc": "Aktiverer forbedret funktionalitet og personalisering.",
    "cookie.analytics": "Analyse Cookies",
    "cookie.analyticsDesc": "Hjælper os med at forstå hvordan besøgende interagerer med vores hjemmeside.",
    "cookie.marketing": "Marketing Cookies",
    "cookie.marketingDesc": "Bruges til at spore besøgende og vise relevante annoncer.",
    "cookie.savePreferences": "Gem Præferencer",
    "cookie.acceptSelected": "Accepter Valgte",

    // Footer
    "footer.copyright": "Alle rettigheder forbeholdes.",
    "footer.cvr": "CVR",
    "footer.tagline": "Professionelle softwareløsninger, apps, hjemmesider og AI-integration.",
    "footer.location": "Stolt bygget i Danmark",
    "footer.mission":
      "ShaqX leverer professionel softwareudvikling, app udvikling og AI-løsninger til virksomheder i Danmark og internationalt.",
    "footer.quickLinks": "Hurtige Links",
    "footer.legal": "Juridisk",
    "footer.contactTitle": "Kontakt Os",
    "footer.sales": "Salg",
    "footer.support": "Support",
    "footer.general": "Generelt",
    "footer.followUs": "Følg Os",
    "footer.stayConnected": "Hold Kontakten",
    "footer.newsletter": "Bliv Opdateret",
    "footer.newsletterShort": "Få ShaqX opdateringer og indsigter.",
    "footer.newsletterDesc": "Få de seneste ShaqX indsigter, opdateringer og tips om digital innovation.",
    "footer.emailPlaceholder": "din@email.dk",
    "footer.subscribe": "Tilmeld",
    "footer.policies": "Politikker",
    "footer.privacyPolicy": "Privatlivspolitik",
    "footer.cookiePolicy": "Cookie Politik",
    "footer.termsOfService": "Servicevilkår",
    "footer.language": "Sprog",
    "footer.backToTop": "Tilbage til Top",

    // About Page
    "about.page.heading": "Om",
    "about.page.headingGradient": "ShaqX",
    "about.page.intro":
      "Vi er et team af passionerede teknologer, der tror på digital innovations kraft til at transformere virksomheder og forbedre liv.",
    "about.page.mission":
      "Vores mission er at levere banebrydende, sikre og skalerbare digitale løsninger, der giver virksomheder mulighed for at trives i det moderne digitale landskab.",
    "about.page.values.heading": "Vores Kerne",
    "about.page.values.headingGradient": "Værdier",
    "about.page.values.subtitle": "Disse principper styrer alt, hvad vi gør hos ShaqX.",
    "about.page.innovation.title": "Innovation Først",
    "about.page.innovation.desc":
      "Vi er altid foran kurven og bruger de nyeste teknologier og metoder til at levere løsninger, der giver dig en konkurrencefordel.",
    "about.page.security.title": "Sikkerhed & Pålidelighed",
    "about.page.security.desc":
      "Dine data og brugere er vores højeste prioritet. Vi bygger med virksomhedssikkerhedsstandarder og sikrer maksimal oppetid.",
    "about.page.client.title": "Kundefokuseret",
    "about.page.client.desc":
      "Din succes er vores succes. Vi lytter, samarbejder og leverer skræddersyede løsninger, der opfylder dine unikke forretningsbehov.",
    "about.page.quality.title": "Kvalitetsekspertise",
    "about.page.quality.desc":
      "Vi går aldrig på kompromis med kvalitet. Hver kodelinje, hvert designelement, hver funktion er skabt med præcision og omhu.",
    "about.page.speed.title": "Hastighed & Agilitet",
    "about.page.speed.desc":
      "I den hurtige digitale verden betyder timing noget. Vi leverer hurtigt uden at gå på kompromis med kvalitet eller sikkerhed.",
    "about.page.transparency.title": "Gennemsigtighed",
    "about.page.transparency.desc":
      "Vi tror på åben kommunikation, ærlige priser og klare forventninger. Du vil altid vide, hvor dit projekt står.",
    "about.page.cta.heading": "Klar til at Bygge Noget Fantastisk?",
    "about.page.cta.subtitle": "Lad os omdanne din vision til virkelighed med ShaqX's ekspertise.",
    "about.page.cta.button": "Kontakt Os",

    // Cases Page
    "cases.heading": "Succeshistorier",
    "cases.headingGradient": "",
    "cases.subtitle":
      "Rigtige projekter, rigtige resultater. Se hvordan ShaqX har hjulpet virksomheder med at skalere, innovere og få succes.",
    "cases.results": "Resultater",
    "cases.cta.heading": "Start Dit Projekt med ShaqX",
    "cases.cta.subtitle": "Lad os skabe din succeshistorie sammen.",
    "cases.cta.button": "Kom i Gang",
    "cases.case1.title": "Fintech Platform Transformation",
    "cases.case1.client": "Nordiske Finansielle Tjenester",
    "cases.case1.description":
      "Byggede en sikker, skalerbar fintech-platform med realtidsbetalingsbehandling, avanceret svindeldetektering og problemfri brugeroplevelse på tværs af web og mobil.",
    "cases.case1.metric1": "Hurtigere Transaktioner",
    "cases.case1.metric2": "Brugervækst",
    "cases.case1.tags": "Fintech, Web App, Mobil App, Sikkerhed",
    "cases.case2.title": "Sundhedspatient Styring",
    "cases.case2.client": "MediCare Løsninger",
    "cases.case2.description":
      "Udviklede et omfattende patientstyringssystem med aftalebestilling, elektroniske sundhedsjournaler og HIPAA-kompatibel datahåndtering.",
    "cases.case2.metric1": "Aktive Brugere",
    "cases.case2.metric2": "Effektivitetsgevinst",
    "cases.case2.tags": "Sundhed, SaaS, Datasikkerhed",
    "cases.case3.title": "E-handel Platform Redesign",
    "cases.case3.client": "Retail Innovatorer AS",
    "cases.case3.description":
      "Redesignede og optimerede en e-handelsplatform, forbedrede sideindlæsningstider, checkout-flow og integrerede AI-drevne produktanbefalinger.",
    "cases.case3.metric1": "Hurtigere Indlæsningstider",
    "cases.case3.metric2": "Omsætningsstigning",
    "cases.case3.tags": "E-handel, AI, Ydeevne",

    // Policies Page
    "policies.heading": "Juridisk &",
    "policies.headingGradient": "Politikker",
    "policies.intro":
      "ShaqX værdsætter gennemsigtighed og databeskyttelse. Her er hvordan vi håndterer information, privatliv og compliance.",
    "policies.lastUpdated": "Sidst opdateret",
    "policies.date": "Januar 2025",
    "policies.privacy.title": "Privatlivspolitik",
    "policies.privacy.titleShort": "Privatliv",
    "policies.privacy.section1.title": "1. Information Vi Indsamler",
    "policies.privacy.section1.content":
      "Vi indsamler oplysninger, du giver direkte til os, såsom dit navn, e-mailadresse, firmanavn og eventuelle beskeder, du sender gennem vores kontaktformularer. Vi indsamler også automatisk visse oplysninger om din enhed og hvordan du interagerer med vores hjemmeside, herunder IP-adresse, browsertype og brugsdata.",
    "policies.privacy.section2.title": "2. Hvordan Vi Bruger Dine Oplysninger",
    "policies.privacy.section2.content":
      "Vi bruger de oplysninger, vi indsamler, til at besvare dine henvendelser, levere vores tjenester, forbedre vores hjemmeside, sende dig opdateringer og marketingkommunikation (med dit samtykke) og overholde juridiske forpligtelser. Vi sælger aldrig dine personlige oplysninger til tredjeparter.",
    "policies.privacy.section3.title": "3. Datasikkerhed",
    "policies.privacy.section3.content":
      "Vi implementerer passende tekniske og organisatoriske foranstaltninger for at beskytte dine personlige oplysninger mod uautoriseret adgang, ændring, videregivelse eller ødelæggelse. Men ingen transmissionsmetode over internettet er 100% sikker, og vi kan ikke garantere absolut sikkerhed.",
    "policies.privacy.section4.title": "4. Dine Rettigheder",
    "policies.privacy.section4.content":
      "Du har ret til at få adgang til, rette, slette eller begrænse behandlingen af dine personlige oplysninger. Du kan også gøre indsigelse mod behandling eller anmode om dataportabilitet. For at udøve disse rettigheder, kontakt os venligst på info@shaqx.com.",
    "policies.privacy.section5.title": "5. Kontakt Os",
    "policies.privacy.section5.content":
      "Hvis du har spørgsmål om denne privatlivspolitik eller vores datapraksis, kontakt os venligst på info@shaqx.com eller skriv til os på vores registrerede forretningsadresse.",
    "policies.cookies.title": "Cookie Politik",
    "policies.cookies.titleShort": "Cookies",
    "policies.cookies.section1.title": "1. Hvad Er Cookies",
    "policies.cookies.section1.content":
      "Cookies er små tekstfiler, der placeres på din enhed, når du besøger vores hjemmeside. De hjælper os med at give dig en bedre oplevelse ved at huske dine præferencer og forstå, hvordan du bruger vores side.",
    "policies.cookies.section2.title": "2. Typer af Cookies Vi Bruger",
    "policies.cookies.section2.content":
      "Vi bruger essentielle cookies (nødvendige for at hjemmesiden fungerer), analysecookies (for at forstå hvordan besøgende interagerer med vores side) og præferencecookies (for at huske dine indstillinger og valg). Vi bruger ikke reklame- eller sporingscookies uden dit udtrykkelige samtykke.",
    "policies.cookies.section3.title": "3. Håndtering af Cookies",
    "policies.cookies.section3.content":
      "Du kan kontrollere og administrere cookies gennem dine browserindstillinger. Bemærk venligst, at deaktivering af visse cookies kan påvirke funktionaliteten af vores hjemmeside. De fleste browsere giver dig mulighed for at afvise cookies eller slette cookies, der allerede er sat.",
    "policies.cookies.section4.title": "4. Tredjepartscookies",
    "policies.cookies.section4.content":
      "Vi kan bruge tredjepartstjenester såsom Google Analytics til at hjælpe os med at forstå hjemmesidens brug. Disse tjenester kan sætte deres egne cookies. Se venligst deres respektive privatlivspolitikker for mere information.",
    "policies.terms.title": "Servicevilkår",
    "policies.terms.titleShort": "Vilkår",
    "policies.terms.section1.title": "1. Acceptering af Vilkår",
    "policies.terms.section1.content":
      "Ved at få adgang til og bruge ShaqX's hjemmeside og tjenester accepterer du at være bundet af disse servicevilkår. Hvis du ikke accepterer disse vilkår, bedes du ikke bruge vores tjenester.",
    "policies.terms.section2.title": "2. Beskrivelse af Tjenester",
    "policies.terms.section2.content":
      "ShaqX leverer web- og mobilapplikationsudvikling, AI-drevne løsninger, forretningsplatforme og relaterede digitale tjenester. Det specifikke omfang af arbejde for hvert projekt vil blive defineret i en separat aftale eller arbejdserklæring.",
    "policies.terms.section3.title": "3. Intellektuel Ejendom",
    "policies.terms.section3.content":
      "Alt indhold, varemærker og materialer på vores hjemmeside ejes af ShaqX eller vores licensgivere. Medmindre andet er aftalt skriftligt, bliver leverancer skabt til kunder kundens ejendom ved fuld betaling, mens ShaqX bevarer retten til at fremvise arbejde i vores portefølje.",
    "policies.terms.section4.title": "4. Ansvarsbegrænsning",
    "policies.terms.section4.content":
      "ShaqX vil ikke være ansvarlig for nogen indirekte, tilfældige, særlige eller følgeskader, der opstår fra eller i forbindelse med vores tjenester. Vores samlede ansvar skal ikke overstige det beløb, du har betalt for den specifikke tjeneste i spørgsmål.",
    "policies.terms.section5.title": "5. Gældende Lovgivning",
    "policies.terms.section5.content":
      "Disse servicevilkår er underlagt dansk lovgivning. Eventuelle tvister, der opstår fra disse vilkår eller vores tjenester, skal løses i danske domstole. Hvis en bestemmelse findes at være uhåndhævelig, forbliver de resterende bestemmelser i fuld kraft.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("da");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "da" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
