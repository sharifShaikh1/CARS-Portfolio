import { useParams } from "react-router-dom";
import { projects } from "@/lib/projectsData";
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const ProjectComponent = project.component;


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
                {project.liveUrl && <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Site
                  </a>
                </Button>}
                {project.githubUrl && <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>}
              </div>

              {ProjectComponent ? (
                <ProjectComponent project={project} />
              ) : (
                <>
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {/* Markdown content: use Tailwind Typography (prose) but disable the default max-width
                          and make images/code/tables responsive to avoid overflow inside the card. */}
                      <div className="w-full overflow-hidden">
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <ReactMarkdown
                            components={{
                              img: (props: any) => (
                                // make images responsive
                                // eslint-disable-next-line jsx-a11y/alt-text
                                <img className="max-w-full h-auto rounded" {...props} />
                              ),
                              pre: (props: any) => (
                                <pre className="overflow-auto rounded bg-muted px-4 py-3 my-2">{props.children}</pre>
                              ),
                              code: (props: any) => {
                                const { inline, children } = props;
                                return inline ? (
                                  <code className="bg-muted px-1 rounded text-sm">{children}</code>
                                ) : (
                                  <code className="block overflow-auto rounded bg-muted p-2 my-2">{children}</code>
                                );
                              },
                              table: (props: any) => (
                                <div className="overflow-auto my-2">
                                  <table className="min-w-full">{props.children}</table>
                                </div>
                              ),
                              a: (props: any) => (
                                <a className="text-primary underline" {...props}>{props.children}</a>
                              ),
                            }}
                          >
                            {project.readme || project.description}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {project.features && project.features.length > 0 && (
                    <Card className="mb-8">
                      <CardHeader>
                        <CardTitle>Features</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;