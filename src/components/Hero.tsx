import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBackgroundDark from "@/assets/hero-tech.jpg";
import heroBackgroundLight from "@/assets/hero-tech-light.jpg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden">
      {/* Light mode hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100 dark:opacity-0 transition-opacity duration-500"
        style={{ backgroundImage: `url(${heroBackgroundLight})` }}
      />
      
      {/* Dark mode hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-0 dark:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: `url(${heroBackgroundDark})` }}
      />
      
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background transition-opacity duration-500" />
      
      {/* Subtle animated accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.2]">
            {t("hero.title")}
            <span className="text-gradient block mt-3 pb-2">{t("hero.titleGradient")}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed pb-1">
            {t("hero.subtitle")}
          </p>
          
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 glow-primary hover:scale-105 transition-transform"
            asChild
          >
            <a href="#contact">
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
