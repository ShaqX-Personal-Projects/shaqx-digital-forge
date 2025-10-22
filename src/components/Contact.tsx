import { Mail, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      labelKey: "contact.sales",
      value: "sales@shaqx.com",
      href: "mailto:sales@shaqx.com",
    },
    {
      icon: Mail,
      labelKey: "contact.support",
      value: "support@shaqx.com",
      href: "mailto:support@shaqx.com",
    },
    {
      icon: Mail,
      labelKey: "contact.general",
      value: "info@shaqx.com",
      href: "mailto:info@shaqx.com",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("contact.heading")} <span className="text-gradient">{t("contact.headingGradient")}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("contact.subheading")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <a
                key={contact.labelKey}
                href={contact.href}
                className="glass p-6 rounded-xl hover:glow-primary transition-all duration-300 hover:scale-105 animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <contact.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{t(contact.labelKey)}</h3>
                  <p className="text-primary hover:text-secondary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="glass p-8 rounded-xl text-center animate-fade-in">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Building className="w-5 h-5" />
              <span className="text-lg">
                <span className="font-semibold text-foreground">ShaqX</span> | {t("contact.cvr")}: 45847136
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
