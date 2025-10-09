import { useEffect, useState } from "react";
import pitStopIcon from "@/assets/pit-stop-icon.png";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        {/* Pit Stop Icon */}
        <div className="mb-8 flex justify-center">
          <img 
            src={pitStopIcon} 
            alt="Pit Stop" 
            className="w-40 h-40 animate-rev-engine drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]"
          />
        </div>

        {/* Racing Car Animation */}
        <div className="relative h-32 mb-8 overflow-hidden">
          {/* Road Marks */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent/30">
            <div className="flex gap-8">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-8 h-2 bg-accent flex-shrink-0" />
              ))}
            </div>
          </div>
          
          {/* Racing Car */}
          <div 
            className="absolute bottom-4 text-6xl transition-all duration-300 ease-out"
            style={{ left: `${progress}%`, transform: 'scaleX(-1) translateX(-50%)' }}
          >
            🏎️
          </div>
          
          {/* Speed Lines */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent speed-line"
              style={{
                top: `${30 + i * 20}%`,
                width: "100%",
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Racing Number Badge */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-black text-3xl text-primary-foreground border-4 border-primary/30 animate-pulse shadow-[0_0_30px_hsl(0,76%,55%/0.5)]">
            95
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl font-black mb-4 chrome-text">
          STARTING ENGINES
        </h2>
        
        {/* Progress Bar */}
        <div className="relative h-6 bg-muted rounded-full overflow-hidden border-2 border-primary/30 mb-4">
          <div
            className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[speed-in_1s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Speed Counter */}
        <div className="text-4xl font-black text-accent mb-2">
          {progress}%
        </div>
        
        {/* Loading Message */}
        <p className="text-muted-foreground font-semibold uppercase tracking-wider text-sm animate-pulse">
          {progress < 30 && "🔧 Revving up the engines..."}
          {progress >= 30 && progress < 60 && "🛞 Checking tire pressure..."}
          {progress >= 60 && progress < 90 && "🏁 Warming up the track..."}
          {progress >= 90 && "⚡ Ready to race! Ka-chow!"}
        </p>

        {/* Checkered Flag */}
        {progress >= 95 && (
          <div className="mt-6 text-6xl animate-bounce">
            🏁
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
