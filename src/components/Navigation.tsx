import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "🏆" },
    { path: "/skills", label: "Skills", icon: "⚡" },
    { path: "/projects", label: "Projects", icon: "🏁" },
    { path: "/contact", label: "Contact", icon: "📞" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b-2 border-primary/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-black text-xl text-primary-foreground border-4 border-primary/30 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
              95
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-black chrome-text">SHARIF SHAIKH</div>
              <div className="text-xs text-accent font-bold uppercase tracking-wider">Full-Stack Racer</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "racing" : "ghost"}
                  className={`relative group ${
                    isActive(link.path) 
                      ? "shadow-[0_0_20px_hsl(0,76%,55%/0.5)]" 
                      : "hover:text-primary"
                  }`}
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.label}
                  {isActive(link.path) && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-full" />
                  )}
                </Button>
              </Link>
            ))}
          </div>

          {/* Racing Indicator */}
          <div className="hidden md:flex items-center gap-2 text-accent">
            <Zap className="w-5 h-5 animate-pulse" fill="currentColor" />
            <span className="font-bold text-sm uppercase tracking-wider">Online</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-primary/30 bg-background/95 backdrop-blur-lg animate-slide-up">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant={isActive(link.path) ? "racing" : "ghost"}
                    className="w-full justify-start text-lg"
                  >
                    <span className="mr-3 text-xl">{link.icon}</span>
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
