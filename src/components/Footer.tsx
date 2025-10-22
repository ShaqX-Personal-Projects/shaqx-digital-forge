import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("nav.home"), href: "/" },
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
    <footer className="border-t border-border/50 py-16 px-6 bg-background/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">ShaqX</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {t("footer.mission")}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("footer.cvr")}: 45847136
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      if (link.href.startsWith("/#")) {
                        e.preventDefault();
                        const id = link.href.substring(2);
                        if (window.location.pathname !== "/") {
                          window.location.href = link.href;
                        } else {
                          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold mt-8 mb-4 text-foreground">{t("footer.policies")}</h4>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.contactTitle")}</h4>
            <div className="space-y-2">
              <a
                href="mailto:sales@shaqx.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-muted-foreground/70">{t("footer.sales")}</div>
                  <div>sales@shaqx.com</div>
                </div>
              </a>
              <a
                href="mailto:support@shaqx.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-muted-foreground/70">{t("footer.support")}</div>
                  <div>support@shaqx.com</div>
                </div>
              </a>
              <a
                href="mailto:info@shaqx.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-muted-foreground/70">{t("footer.general")}</div>
                  <div>info@shaqx.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 4: Social & Language */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.followUs")}</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            {/* Language Toggle */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-foreground text-sm">{t("footer.language")}</h4>
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 rounded-lg bg-muted/50 hover:bg-primary transition-all text-sm font-medium"
              >
                {language === "en" ? "🇬🇧 English" : "🇩🇰 Dansk"}
              </button>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              {t("footer.backToTop")}
            </button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-border/50">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-semibold mb-3 text-foreground">{t("footer.newsletter")}</h4>
            <p className="text-sm text-muted-foreground mb-4">
              {t("footer.newsletterDesc")}
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder={t("footer.emailPlaceholder")}
                className="h-10 text-sm"
              />
              <Button size="default" className="whitespace-nowrap">
                {t("footer.subscribe")}
              </Button>
            </div>
          </div>
        </div>

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
