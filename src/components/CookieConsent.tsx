import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleManagePreferences = () => {
    // For now, accepting all. In a real app, this would open a preferences dialog
    localStorage.setItem("cookieConsent", "managed");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-in-up">
      <div className="container mx-auto max-w-4xl">
        <div className="glass rounded-xl p-6 shadow-2xl border border-border/50">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {t("cookie.title")}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t("cookie.message")}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={handleAcceptAll} size="sm">
                  {t("cookie.acceptAll")}
                </Button>
                <Button onClick={handleManagePreferences} variant="outline" size="sm">
                  {t("cookie.managePreferences")}
                </Button>
              </div>
            </div>
            <button
              onClick={handleAcceptAll}
              className="p-2 hover:bg-muted/50 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
