import { LanguageProvider } from "@/contexts/LanguageContext";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Lock, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PoliciesContent = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("privacy");

  useEffect(() => {
    // Scroll to top on initial page load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Switch to the correct tab based on hash
    if (location.hash) {
      const tab = location.hash.substring(1); // Remove the #
      if (tab === 'privacy' || tab === 'cookies' || tab === 'terms') {
        setActiveTab(tab);
        // Scroll to top of page smoothly
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-24 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t("policies.heading")} <span className="text-gradient">{t("policies.headingGradient")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("policies.intro")}
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-1">
              <TabsTrigger value="privacy" className="flex items-center gap-2 py-3">
                <Lock className="w-4 h-4" />
                <span className="hidden sm:inline">{t("policies.privacy.title")}</span>
                <span className="sm:hidden">{t("policies.privacy.titleShort")}</span>
              </TabsTrigger>
              <TabsTrigger value="cookies" className="flex items-center gap-2 py-3">
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">{t("policies.cookies.title")}</span>
                <span className="sm:hidden">{t("policies.cookies.titleShort")}</span>
              </TabsTrigger>
              <TabsTrigger value="terms" className="flex items-center gap-2 py-3">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">{t("policies.terms.title")}</span>
                <span className="sm:hidden">{t("policies.terms.titleShort")}</span>
              </TabsTrigger>
            </TabsList>

            {/* Privacy Policy */}
            <TabsContent value="privacy" id="privacy" className="animate-fade-in">
              <div className="glass p-8 rounded-lg space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{t("policies.privacy.title")}</h2>
                  <p className="text-sm text-muted-foreground mb-6">{t("policies.lastUpdated")}: {t("policies.date")}</p>
                </div>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.privacy.section1.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.privacy.section1.content")}</p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.privacy.section2.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.privacy.section2.content")}</p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.privacy.section3.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.privacy.section3.content")}</p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.privacy.section4.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.privacy.section4.content")}</p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.privacy.section5.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.privacy.section5.content")}</p>
                </section>
              </div>
            </TabsContent>

            {/* Cookie Policy */}
            <TabsContent value="cookies" id="cookies" className="animate-fade-in">
              <div className="glass p-8 rounded-lg space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{t("policies.cookies.title")}</h2>
                  <p className="text-sm text-muted-foreground mb-6">{t("policies.lastUpdated")}: {t("policies.date")}</p>
                </div>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.cookies.section1.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.cookies.section1.content")}</p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.cookies.section2.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.cookies.section2.content")}</p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.cookies.section3.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.cookies.section3.content")}</p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.cookies.section4.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.cookies.section4.content")}</p>
                </section>
              </div>
            </TabsContent>

            {/* Terms of Service */}
            <TabsContent value="terms" id="terms" className="animate-fade-in">
              <div className="glass p-8 rounded-lg space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{t("policies.terms.title")}</h2>
                  <p className="text-sm text-muted-foreground mb-6">{t("policies.lastUpdated")}: {t("policies.date")}</p>
                </div>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.terms.section1.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.terms.section1.content")}</p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.terms.section2.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.terms.section2.content")}</p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.terms.section3.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.terms.section3.content")}</p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.terms.section4.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.terms.section4.content")}</p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">{t("policies.terms.section5.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("policies.terms.section5.content")}</p>
                </section>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

const Policies = () => {
  return (
    <LanguageProvider>
      <PoliciesContent />
    </LanguageProvider>
  );
};

export default Policies;
