import { useParams } from "react-router-dom";
import { projects } from "@/lib/projectsData";
import ReactMarkdown from "react-markdown";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";


const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <Card className="p-8">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
              <p className="text-xl text-muted-foreground mb-4">{project.subtitle}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Site
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              </div>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <ReactMarkdown>{project.readme}</ReactMarkdown>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;