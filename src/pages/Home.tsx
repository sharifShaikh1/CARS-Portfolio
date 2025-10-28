import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Gauge, Flag } from "lucide-react";
import { Link } from "react-router-dom";
import heroRacing from "@/assets/hero-racing.jpg";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
  <section className="relative md:min-h-screen min-h-[75vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Hero Background */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat opacity-20 bg-cover"
          style={{ backgroundImage: `url(${heroRacing})` }}
        />
        
        {/* Animated Speed Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent speed-line"
              style={{
                top: `${20 + i * 15}%`,
                width: "100%",
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="animate-zoom">
            {/* Racing Number Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 border-2 border-primary px-3 py-1.5 rounded-full mb-4 animate-rev-engine text-sm sm:text-base">
              <Zap className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-accent font-bold tracking-wider">KA-CHOW!</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-4xl md:text-8xl font-black mb-6 leading-tight sm:mb-3">
              <span className="chrome-text">SHARIF SHAIKH</span>
            </h1>
            
            <div className="text-lg sm:text-xl md:text-4xl font-bold mb-4 sm:mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Software Developer
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto sm:text-[12px] sm:mb-7">
              Building high-performance web and mobile applications. I specialize in the MERN stack and React Native, always ready to tackle new challenges and technologies.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link to="/projects">
                <Button 
                  variant="racing" 
                  size="lg"
                  className="group"
                >
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="speed" 
                  size="lg"
                >
                  Let's Connect
                </Button>
              </Link>
            </div>

            {/* Quick Nav Cards */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-10 items-stretch">
              <Link to="/about">
                <div className="racing-stripes p-2 sm:p-6 rounded-lg border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_hsl(0,76%,55%/0.3)] group min-h-[6rem] sm:min-h-[12rem] h-full flex flex-col items-center justify-center text-center">
                  <div className="text-2xl sm:text-4xl mb-1 sm:mb-4 group-hover:scale-110 transition-transform">🏆</div>
                  <div className="text-sm sm:text-2xl font-black text-primary mb-1 sm:mb-2">About Me</div>
                  <div className="text-[10px] sm:text-sm text-muted-foreground">Learn about the driver</div>
                </div>
              </Link>

              <Link to="/skills">
                <div className="racing-stripes p-2 sm:p-6 rounded-lg border-2 border-secondary/30 bg-card/50 backdrop-blur-sm hover:border-secondary hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_hsl(207,82%,48%/0.3)] group min-h-[6rem] sm:min-h-[12rem] h-full flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center mb-1 sm:mb-4">
                    <Gauge className="w-8 h-8 sm:w-12 sm:h-12 text-secondary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-sm sm:text-2xl font-black text-secondary mb-1 sm:mb-2">Tech Stack</div>
                  <div className="text-[10px] sm:text-sm text-muted-foreground">Check my performance</div>
                </div>
              </Link>

              <Link to="/projects">
                <div className="racing-stripes p-2 sm:p-6 rounded-lg border-2 border-accent/30 bg-card/50 backdrop-blur-sm hover:border-accent hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_hsl(45,100%,51%/0.3)] group min-h-[6rem] sm:min-h-[12rem] h-full flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center mb-1 sm:mb-4">
                    <Flag className="w-8 h-8 sm:w-12 sm:h-12 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-sm sm:text-2xl font-black text-accent mb-1 sm:mb-2">Projects</div>
                  <div className="text-[10px] sm:text-sm text-muted-foreground">View race history</div>
                </div>
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-3xl mx-auto items-stretch mb-5">
              <div className="racing-stripes p-2 sm:p-6 rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm text-center min-h-[5rem] sm:min-h-[10rem] h-full flex flex-col items-center justify-center">
                <div className="text-xl sm:text-4xl font-black text-primary mb-1">95</div>
                <div className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider">Racing Number</div>
              </div>
              <div className="racing-stripes p-2 sm:p-6 rounded-lg border border-secondary/30 bg-card/50 backdrop-blur-sm text-center min-h-[5rem] sm:min-h-[10rem] h-full flex flex-col items-center justify-center">
                <div className="text-xl sm:text-4xl font-black text-secondary mb-1">∞</div>
                <div className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider">Speed Limit</div>
              </div>
              <div className="racing-stripes p-2 sm:p-6 rounded-lg border border-accent/30 bg-card/50 backdrop-blur-sm text-center min-h-[5rem] sm:min-h-[10rem] h-full flex flex-col items-center justify-center">
                <div className="text-xl sm:text-4xl font-black text-accent mb-1">2025</div>
                <div className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider">Graduating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator removed per user request */}
      </section>
    </PageTransition>
  );
};

export default Home;
