import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles, Info } from "lucide-react";
import { projects } from "@/lib/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full border border-primary/30">
              Championship Projects
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="chrome-text">RACE TRACK</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projects that showcase speed, precision, and performance. Built to win.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-primary/50 hover:border-primary transition-all duration-500 group relative">
              {/* Racing Stripes Background */}
              <div className="racing-stripes absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity" />
              
              <div className="relative z-10">
                {/* Project Header */}
                <div className="bg-gradient-to-r from-primary to-primary/50 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-black text-xl text-background border-4 border-primary-foreground">
                          {95 - index}
                        </div>
                        {index === 0 && (
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-accent animate-pulse" fill="currentColor" />
                            <span className="text-accent font-bold uppercase tracking-wider text-sm">Featured Project</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-4xl font-black text-primary-foreground mb-2">{project.title}</h3>
                      <p className="text-xl text-primary-foreground/80 font-semibold">{project.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-accent font-black mt-1">⚡</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-secondary/20 to-secondary/10 border-2 border-secondary/30 rounded-lg font-bold text-secondary hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_15px_hsl(207,82%,48%/0.5)]"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <Button variant="racing" size="lg" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group">
                          <ExternalLink className="mr-2 group-hover:rotate-45 transition-transform" />
                          View Live Site
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="chrome" size="lg" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2" />
                          Source Code
                        </a>
                      </Button>
                    )}
                    <Button variant="glow" size="lg" asChild>
                      <a href={`/project/${project.id}`} rel="noopener noreferrer">
                        <Info className="mr-2" />
                        View Details
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Checkered Flag Decoration */}
              <div className="absolute bottom-4 right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                🏁
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-br from-muted/20 to-transparent border-2 border-dashed border-muted">
            <div className="text-5xl mb-4">🏎️</div>
            <h3 className="text-2xl font-bold text-muted-foreground mb-2">More Projects Coming Soon</h3>
            <p className="text-muted-foreground">Currently tuning more high-performance applications for the track!</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
