import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useTheme } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";
import logoBlack from "@/assets/ShaqX-black.png";
import logoWhite from "@/assets/ShaqX-white.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { navigateToSection } = useScrollToSection();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

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
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src={mounted && theme === "dark" ? logoWhite : logoBlack}
              alt="ShaqX Logo" 
              className="h-12 w-auto transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => navigateToSection(link.href)}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors min-w-[44px] min-h-[44px] justify-center"
              aria-label="Toggle language"
            >
              <Languages className="w-5 h-5 md:w-4 md:h-4" />
              <span className="text-sm font-medium hidden sm:inline">{language.toUpperCase()}</span>
            </button>

            {/* CTA Button - Desktop */}
            <Button
              className="hidden lg:inline-flex"
              onClick={() => navigateToSection("/#contact")}
            >
              {t("nav.getInTouch")}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors min-w-[44px] min-h-[44px]"
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
          <div className="lg:hidden mt-4 glass rounded-xl p-6 animate-scale-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigateToSection(link.href);
                  }}
                  className="text-foreground/80 hover:text-foreground transition-colors py-3 px-4 text-left rounded-lg hover:bg-secondary/50 min-h-[44px]"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                className="w-full mt-4 min-h-[48px]"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigateToSection("/#contact");
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
