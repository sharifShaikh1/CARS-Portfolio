import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Gauge, Flag } from "lucide-react";
import { Link } from "react-router-dom";
import heroRacing from "@/assets/hero-racing.jpg";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Hero Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
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
            <div className="inline-flex items-center gap-2 bg-primary/20 border-2 border-primary px-4 py-2 rounded-full mb-6 animate-rev-engine">
              <Zap className="w-5 h-5 text-accent" fill="currentColor" />
              <span className="text-accent font-bold tracking-wider">KA-CHOW!</span>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="chrome-text">SHARIF SHAIKH</span>
            </h1>
            
            <div className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Software Developer
            </div>
            
                          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Building high-performance web and mobile applications. I specialize in the MERN stack and React Native, always ready to tackle new challenges and technologies.
                          </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              <Link to="/about">
                <div className="racing-stripes p-6 rounded-lg border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_hsl(0,76%,55%/0.3)] group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                  <div className="text-2xl font-black text-primary mb-2">About Me</div>
                  <div className="text-sm text-muted-foreground">Learn about the driver</div>
                </div>
              </Link>

              <Link to="/skills">
                <div className="racing-stripes p-6 rounded-lg border-2 border-secondary/30 bg-card/50 backdrop-blur-sm hover:border-secondary hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_hsl(207,82%,48%/0.3)] group">
                  <div className="flex items-center justify-center mb-4">
                    <Gauge className="w-12 h-12 text-secondary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl font-black text-secondary mb-2">Tech Stack</div>
                  <div className="text-sm text-muted-foreground">Check my performance</div>
                </div>
              </Link>

              <Link to="/projects">
                <div className="racing-stripes p-6 rounded-lg border-2 border-accent/30 bg-card/50 backdrop-blur-sm hover:border-accent hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_hsl(45,100%,51%/0.3)] group">
                  <div className="flex items-center justify-center mb-4">
                    <Flag className="w-12 h-12 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl font-black text-accent mb-2">Projects</div>
                  <div className="text-sm text-muted-foreground">View race history</div>
                </div>
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="racing-stripes p-6 rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm">
                <div className="text-4xl font-black text-primary mb-2">95</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Racing Number</div>
              </div>
              <div className="racing-stripes p-6 rounded-lg border border-secondary/30 bg-card/50 backdrop-blur-sm">
                <div className="text-4xl font-black text-secondary mb-2">∞</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Speed Limit</div>
              </div>
              <div className="racing-stripes p-6 rounded-lg border border-accent/30 bg-card/50 backdrop-blur-sm">
                <div className="text-4xl font-black text-accent mb-2">2025</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Graduating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
