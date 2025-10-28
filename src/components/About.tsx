import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Rocket, Users, Trophy } from "lucide-react";

const About = () => {
  const traits = [
    {
      icon: Code2,
      title: "Full-Stack Racer",
      description: "Mastering the MERN track with React.js, Node.js, Express.js, and MongoDB at high speed.",
    },
    {
      icon: Rocket,
      title: "Cloud Tuner",
      description: "Optimized for AWS S3, Elastic Beanstalk, and ACM. Deploying at lightning speed.",
    },
    {
      icon: Users,
      title: "Team Driver",
      description: "Strong communication and problem-solving skills. Ready for the pit crew.",
    },
    {
      icon: Trophy,
      title: "Victory Mindset",
      description: "Motivated to build impactful applications and cross every finish line.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-bold uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full border border-accent/30">
              About The Driver
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="chrome-text">PIT CREW INFO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Computer Science graduate from University of Mumbai with a passion for racing through code challenges. 
            Currently seeking opportunities to join a championship team.
          </p>
        </div>

        {/* Career Objective Card */}
        <Card className="mb-12 p-4 sm:p-8 bg-gradient-to-br from-card to-card/50 border-2 border-primary/30 relative overflow-hidden">
          <div className="racing-stripes absolute inset-0 opacity-30" />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-0 flex items-center gap-3">
              <Trophy className="w-8 h-8" />
              Career Objective
            </h3>
            <div className="mt-3 sm:mt-0">
              <a href="/Sharif_chand_shaikh.pdf" download>
                <Button variant="racing" className="text-sm sm:text-base">Download Resume</Button>
              </a>
            </div>
            </div>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Motivated and detail-oriented Computer Science graduate with hands-on experience in full-stack development 
              using the MERN stack. Strong problem-solving abilities, effective communication skills, and a deep passion 
              for building impactful web applications. Seeking a challenging role in a growth-focused organization where 
              I can contribute and evolve as a full-stack developer.
            </p>
          </div>
        </Card>

        {/* Traits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(0,76%,55%/0.3)] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-primary">
                  <trait.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{trait.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{trait.description}</p>
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-br from-secondary/20 to-transparent border-2 border-secondary/30">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center flex-shrink-0 glow-secondary">
                <span className="text-3xl font-black text-secondary-foreground">🎓</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-secondary mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-lg text-foreground mb-2">Ismail Yusuf College, University of Mumbai</p>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Graduation: 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    CGPA: 6.85
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
