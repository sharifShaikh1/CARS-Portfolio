import Projects from "@/components/Projects";
import PageTransition from "@/components/PageTransition";

const ProjectsPage = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <Projects />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
