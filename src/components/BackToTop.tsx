import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground border-4 border-primary/30 hover:scale-110 transition-all duration-300 shadow-[0_0_30px_hsl(0,76%,55%/0.5)] hover:shadow-[0_0_40px_hsl(0,76%,55%/0.8)] animate-bounce group"
      aria-label="Back to top"
    >
      <div className="relative">
        <ArrowUp className="w-6 h-6 group-hover:translate-y-[-4px] transition-transform" />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Ka-chow!
        </div>
      </div>
    </button>
  );
};

export default BackToTop;
