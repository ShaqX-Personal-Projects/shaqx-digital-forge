import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("nav.home"), href: "#" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.cases"), href: "#cases" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
  ];

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

          {/* Column 4: Social & Newsletter */}
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
            
            <div>
              <p className="text-sm text-muted-foreground mb-3">{t("footer.newsletter")}</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder={t("footer.emailPlaceholder")}
                  className="h-9 text-sm"
                />
                <Button size="sm" className="whitespace-nowrap">
                  {t("footer.subscribe")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ShaqX. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
