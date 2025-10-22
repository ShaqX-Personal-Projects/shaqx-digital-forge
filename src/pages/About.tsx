import { LanguageProvider } from "@/contexts/LanguageContext";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Shield, Users, Target, Heart, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutContent = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {t("about.page.heading")} <span className="text-gradient">{t("about.page.headingGradient")}</span>
              </h1>
              <p className="text-xl text-foreground/90 leading-relaxed mb-8">
                {t("about.page.intro")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.page.mission")}
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {t("about.page.values.heading")} <span className="text-gradient">{t("about.page.values.headingGradient")}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("about.page.values.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="glass p-8 rounded-lg animate-scale-in hover:glow-primary transition-all" style={{ animationDelay: "0ms" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t("about.page.innovation.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("about.page.innovation.desc")}</p>
              </div>

              <div className="glass p-8 rounded-lg animate-scale-in hover:glow-primary transition-all" style={{ animationDelay: "100ms" }}>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t("about.page.security.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("about.page.security.desc")}</p>
              </div>

              <div className="glass p-8 rounded-lg animate-scale-in hover:glow-primary transition-all" style={{ animationDelay: "200ms" }}>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t("about.page.client.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("about.page.client.desc")}</p>
              </div>

              <div className="glass p-8 rounded-lg animate-scale-in hover:glow-secondary transition-all" style={{ animationDelay: "300ms" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t("about.page.quality.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("about.page.quality.desc")}</p>
              </div>

              <div className="glass p-8 rounded-lg animate-scale-in hover:glow-secondary transition-all" style={{ animationDelay: "400ms" }}>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t("about.page.speed.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("about.page.speed.desc")}</p>
              </div>

              <div className="glass p-8 rounded-lg animate-scale-in hover:glow-secondary transition-all" style={{ animationDelay: "500ms" }}>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t("about.page.transparency.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("about.page.transparency.desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t("about.page.cta.heading")}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t("about.page.cta.subtitle")}
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => navigate("/#contact")}
              >
                {t("about.page.cta.button")}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const About = () => {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
};

export default About;
