import { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.cases"), href: "/cases" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-gradient">
            ShaqX
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    const id = link.href.substring(2);
                    if (window.location.pathname !== "/") {
                      window.location.href = link.href;
                    } else {
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors"
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>

            {/* CTA Button - Desktop */}
            <Button
              className="hidden md:inline-flex"
              onClick={() => {
                if (window.location.pathname !== "/") {
                  window.location.href = "/#contact";
                } else {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {t("nav.getInTouch")}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-xl p-6 animate-scale-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (link.href.startsWith("/#")) {
                      e.preventDefault();
                      const id = link.href.substring(2);
                      if (window.location.pathname !== "/") {
                        window.location.href = link.href;
                      } else {
                        setTimeout(() => {
                          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }
                    }
                  }}
                  className="text-foreground/80 hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                className="w-full mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (window.location.pathname !== "/") {
                    window.location.href = "/#contact";
                  } else {
                    setTimeout(() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }
                }}
              >
                {t("nav.getInTouch")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
