import { useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Add a slight delay to ensure smooth scrolling works properly
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    },
    []
  );

  const navigateToSection = useCallback(
    (href: string) => {
      if (href.startsWith("/#")) {
        const sectionId = href.substring(2);
        
        if (location.pathname !== "/") {
          // Navigate to home page first, then scroll
          navigate("/");
          // Wait for navigation to complete before scrolling
          setTimeout(() => {
            scrollToSection(sectionId);
          }, 450);
        } else {
          // Already on home page, just scroll
          scrollToSection(sectionId);
        }
      } else {
        // Regular navigation
        navigate(href);
      }
    },
    [navigate, location.pathname, scrollToSection]
  );

  return { navigateToSection, scrollToSection };
};
