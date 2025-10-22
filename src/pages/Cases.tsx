import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle } from "lucide-react";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const CasesContent = () => {
  const { t } = useLanguage();
  const { navigateToSection } = useScrollToSection();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      id: "fintech-platform",
      icon: TrendingUp,
      metrics: [
        { label: t("cases.case1.metric1"), value: "85%" },
        { label: t("cases.case1.metric2"), value: "3x" },
      ],
    },
    {
      id: "healthcare-app",
      icon: Users,
      metrics: [
        { label: t("cases.case2.metric1"), value: "10K+" },
        { label: t("cases.case2.metric2"), value: "40%" },
      ],
    },
    {
      id: "ecommerce-solution",
      icon: Clock,
      metrics: [
        { label: t("cases.case3.metric1"), value: "60%" },
        { label: t("cases.case3.metric2"), value: "2.5x" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {t("cases.heading")} <span className="text-gradient">{t("cases.headingGradient")}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t("cases.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {cases.map((caseItem, index) => {
                const Icon = caseItem.icon;
                return (
                  <Card 
                    key={caseItem.id}
                    className="glass border-border/50 hover:glow-primary transition-all animate-scale-in overflow-hidden group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon className="w-20 h-20 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        {t(`cases.${caseItem.id}.title`)}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {t(`cases.${caseItem.id}.client`)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {t(`cases.${caseItem.id}.description`)}
                      </p>
                      
                      <div className="space-y-4 mb-6">
                        <h4 className="font-semibold flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          {t("cases.results")}
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {caseItem.metrics.map((metric, i) => (
                            <div key={i} className="bg-background/50 p-3 rounded-lg">
                              <div className="text-2xl font-bold text-primary mb-1">
                                {metric.value}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {t(`cases.${caseItem.id}.tags`).split(',').map((tag: string, i: number) => (
                          <span 
                            key={i}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t("cases.cta.heading")}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t("cases.cta.subtitle")}
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 group"
                onClick={() => navigateToSection("/#contact")}
              >
                {t("cases.cta.button")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const Cases = () => {
  return (
    <LanguageProvider>
      <CasesContent />
    </LanguageProvider>
  );
};

export default Cases;
