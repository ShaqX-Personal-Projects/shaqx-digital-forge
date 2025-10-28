import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useTheme } from "next-themes";
import logoBlack from "@/assets/ShaqX-black.png";
import logoWhite from "@/assets/ShaqX-white.png";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const { navigateToSection } = useScrollToSection();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // Already on home, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home
      navigateToSection("/");
    }
  };

  const quickLinks = [
    { label: t("nav.home"), href: "/", onClick: handleHomeClick },
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.cases"), href: "/cases" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  const policyLinks = [
    { label: t("footer.privacyPolicy"), href: "/policies#privacy" },
    { label: t("footer.cookiePolicy"), href: "/policies#cookies" },
    { label: t("footer.termsOfService"), href: "/policies#terms" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 py-12 md:py-16 px-4 md:px-6 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Column 1: About ShaqX */}
          <div className="space-y-4">
            <img 
              src={mounted && theme === "dark" ? logoWhite : logoBlack}
              alt="ShaqX Logo" 
              className="h-10 w-auto mb-3"
            />
            <p className="text-sm md:text-sm text-muted-foreground leading-relaxed">
              {t("footer.tagline")}
            </p>
            <p className="text-sm md:text-xs text-muted-foreground font-medium">
              {t("footer.location")}
            </p>
            <p className="text-sm md:text-xs text-muted-foreground">
              {t("footer.cvr")}: 45847136
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => link.onClick ? link.onClick() : navigateToSection(link.href)}
                    className="text-sm md:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-2 md:py-0"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.legal")}</h4>
            <ul className="space-y-2.5">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm md:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-2 md:py-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.contactTitle")}</h4>
            <div className="space-y-3">
              <a
                href="mailto:sales@shaqx.com"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-muted-foreground/70">{t("footer.sales")}</div>
                  <div className="font-medium">sales@shaqx.com</div>
                </div>
              </a>
              <a
                href="mailto:support@shaqx.com"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-muted-foreground/70">{t("footer.support")}</div>
                  <div className="font-medium">support@shaqx.com</div>
                </div>
              </a>
              <a
                href="mailto:info@shaqx.com"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-muted-foreground/70">{t("footer.general")}</div>
                  <div className="font-medium">info@shaqx.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 5: Stay Connected */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.stayConnected")}</h4>
            
            {/* Social Media */}
            <div className="flex gap-3 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-muted/50 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-muted/50 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-muted/50 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm md:text-xs text-muted-foreground mb-3">
                {t("footer.newsletterShort")}
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  type="email" 
                  placeholder={t("footer.emailPlaceholder")}
                  className="h-11 md:h-9 text-sm"
                />
                <Button size="sm" className="whitespace-nowrap px-4 h-11 md:h-9">
                  {t("footer.subscribe")}
                </Button>
              </div>
            </div>

            {/* Language & Back to Top */}
            <div className="space-y-3">
              <button
                onClick={toggleLanguage}
                className="px-4 py-2.5 md:py-1.5 rounded-lg bg-muted/50 hover:bg-primary transition-all text-sm md:text-xs font-medium w-full min-h-[44px] md:min-h-0"
              >
                {language === "en" ? "EN" : "DA"}
              </button>
              <button
                onClick={scrollToTop}
                className="flex items-center justify-center gap-2 text-sm md:text-xs text-muted-foreground hover:text-primary transition-colors group w-full min-h-[44px] md:min-h-0 py-2.5 md:py-0"
              >
                <ArrowUp className="w-4 h-4 md:w-3.5 md:h-3.5 group-hover:-translate-y-1 transition-transform" />
                {t("footer.backToTop")}
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mb-8"></div>

        {/* Bottom Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ShaqX. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
