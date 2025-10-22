import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <div className="absolute inset-0 bg-background animate-fade-out" />
      <div className="absolute inset-0 flex items-center justify-center animate-fade-out">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gradient">S</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
