import { Zap, Shield, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("about.heading")} <span className="text-gradient">{t("about.headingGradient")}</span>
            </h2>
            <p className="text-xl text-foreground leading-relaxed mb-8">
              {t("about.intro")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.mission")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-scale-in" style={{ animationDelay: "0ms" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("about.innovation.title")}</h3>
              <p className="text-muted-foreground">{t("about.innovation.desc")}</p>
            </div>

            <div className="text-center animate-scale-in" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("about.security.title")}</h3>
              <p className="text-muted-foreground">{t("about.security.desc")}</p>
            </div>

            <div className="text-center animate-scale-in" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("about.client.title")}</h3>
              <p className="text-muted-foreground">{t("about.client.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
