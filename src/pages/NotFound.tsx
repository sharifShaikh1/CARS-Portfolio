import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-20">
      <div className="text-center px-6 max-w-2xl">
        {/* Warning Sign */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-destructive to-destructive/50 flex items-center justify-center animate-rev-engine shadow-[0_0_50px_hsl(0,84%,60%/0.5)]">
              <AlertTriangle className="w-16 h-16 text-destructive-foreground" />
            </div>
            <div className="absolute -top-4 -right-4 text-6xl animate-bounce">
              🚧
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-8xl font-black mb-6 chrome-text">404</h1>
        <h2 className="text-4xl font-bold text-primary mb-4">WRONG TURN!</h2>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Looks like you took a wrong turn at the pit stop. This route doesn't exist in the race track. 
          Let's get you back on course! 🏁
        </p>

        {/* Back to Home Button */}
        <Link to="/">
          <Button variant="racing" size="lg" className="group">
            <Home className="mr-2 group-hover:scale-110 transition-transform" />
            Back to Starting Line
          </Button>
        </Link>

        {/* Decoration */}
        <div className="mt-12 text-6xl opacity-50">
          🏎️💨
        </div>
      </div>
    </div>
  );
};

export default NotFound;
