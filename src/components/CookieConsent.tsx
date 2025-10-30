import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const { t } = useLanguage();
  
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always enabled
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent);
        if (saved.preferences) {
          setPreferences(saved.preferences);
        }
      } catch (e) {
        // Old format, ignore
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem("cookieConsent", JSON.stringify({ 
      accepted: true, 
      preferences: allAccepted 
    }));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({ 
      accepted: true, 
      preferences 
    }));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <>
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

      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{t("cookie.preferencesTitle")}</DialogTitle>
            <DialogDescription>
              {t("cookie.preferencesDesc")}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-medium text-sm mb-1">
                  {t("cookie.necessary")}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t("cookie.necessaryDesc")}
                </p>
              </div>
              <Switch
                checked={preferences.necessary}
                disabled
                className="opacity-50"
              />
            </div>

            {/* Functional Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-medium text-sm mb-1">
                  {t("cookie.functional")}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t("cookie.functionalDesc")}
                </p>
              </div>
              <Switch
                checked={preferences.functional}
                onCheckedChange={() => togglePreference("functional")}
              />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-medium text-sm mb-1">
                  {t("cookie.analytics")}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t("cookie.analyticsDesc")}
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={() => togglePreference("analytics")}
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-medium text-sm mb-1">
                  {t("cookie.marketing")}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t("cookie.marketingDesc")}
                </p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={() => togglePreference("marketing")}
              />
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={handleSavePreferences}>
              {t("cookie.savePreferences")}
            </Button>
            <Button onClick={handleAcceptAll}>
              {t("cookie.acceptAll")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
