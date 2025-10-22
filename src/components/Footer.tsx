import { Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">ShaqX</h3>
            <p className="text-sm text-muted-foreground">
              {t("footer.cvr")}: 45847136
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="font-semibold mb-3 text-foreground">{t("footer.contactTitle")}</h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:sales@shaqx.com"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t("footer.sales")}: sales@shaqx.com
              </a>
              <a
                href="mailto:support@shaqx.com"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t("footer.support")}: support@shaqx.com
              </a>
              <a
                href="mailto:info@shaqx.com"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                {t("footer.general")}: info@shaqx.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-3 text-foreground">{t("footer.followUs")}</h4>
            <div className="flex gap-4 justify-center md:justify-end">
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
          </div>
        </div>

        {/* Copyright */}
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
