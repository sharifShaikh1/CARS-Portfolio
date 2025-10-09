import { cravecrafters } from "./projects/cravecrafters";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  detailsUrl: string;
  readme: string;
}

export const projects: Project[] = [cravecrafters];
