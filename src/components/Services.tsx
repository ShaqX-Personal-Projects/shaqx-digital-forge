import { Smartphone, Building2, Brain, BarChart3, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Smartphone,
      titleKey: "services.web.title",
      descKey: "services.web.desc",
    },
    {
      icon: Building2,
      titleKey: "services.business.title",
      descKey: "services.business.desc",
    },
    {
      icon: Brain,
      titleKey: "services.ai.title",
      descKey: "services.ai.desc",
    },
    {
      icon: BarChart3,
      titleKey: "services.tools.title",
      descKey: "services.tools.desc",
    },
    {
      icon: Briefcase,
      titleKey: "services.industry.title",
      descKey: "services.industry.desc",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("services.heading")} <span className="text-gradient">{t("services.headingGradient")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.subheading")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.titleKey}
              className="glass p-8 rounded-xl hover:glow-primary transition-all duration-300 hover:scale-105 animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(service.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
