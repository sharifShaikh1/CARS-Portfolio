import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dashboardBg from "@/assets/dashboard-bg.jpg";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      color: "primary",
      skills: ["JavaScript", "Python", "React.js", "React Native", "Express.js", "HTML", "CSS"],
    },
    {
      title: "Cloud & DevOps",
      color: "secondary",
      skills: ["AWS S3", "AWS Elastic Beanstalk", "AWS ACM", "Git & GitHub"],
    },
    {
      title: "Databases & APIs",
      color: "accent",
      skills: ["MongoDB", "MySQL", "Google Maps API", "REST APIs"],
    },
    {
      title: "Tools & Environment",
      color: "muted",
      skills: ["VS Code", "Postman", "Windows", "Linux", "MS Office"],
    },
  ];

  const softSkills = [
    { 
      name: "Problem Solving", 
      description: "I excel at breaking down complex problems into manageable parts and finding creative, efficient solutions."
    },
    { 
      name: "Communication", 
      description: "I am adept at communicating technical concepts to both technical and non-technical audiences, ensuring clear understanding and collaboration."
    },
    { 
      name: "Team Collaboration", 
      description: "I thrive in team environments, contributing to a positive and productive atmosphere through open communication and mutual respect."
    },
    { 
      name: "Quick Learning", 
      description: "I have a strong ability to quickly grasp new technologies and concepts, allowing me to adapt to new challenges and contribute to projects faster."
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      {/* Dashboard Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${dashboardBg})` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-secondary text-sm font-bold uppercase tracking-widest bg-secondary/10 px-4 py-2 rounded-full border border-secondary/30">
              Performance Stats
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="chrome-text">TECH GARAGE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-performance tools and technologies in my arsenal. Tuned for maximum efficiency.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full bg-${category.color} animate-pulse`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-muted to-muted/50 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 hover:scale-110 cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills - Dashboard Style */}
        <Card className="p-8 bg-gradient-to-br from-card to-card/30 border-2 border-accent/30 relative overflow-hidden">
          <div className="racing-stripes absolute inset-0 opacity-20" />
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-8 text-accent flex items-center gap-3">
              <span className="text-4xl">⚡</span>
              Soft Skills Dashboard
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-muted/20 p-6 rounded-lg border-2 border-transparent hover:border-accent/50 transition-all duration-300">
                  <h4 className="text-xl font-bold text-accent mb-2">{skill.name}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Racing Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold italic text-primary">
            "I am speed. I am a precision instrument of speed and code."
          </blockquote>
          <p className="text-muted-foreground mt-2">- Lightning McQueen (adapted for developers)</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
