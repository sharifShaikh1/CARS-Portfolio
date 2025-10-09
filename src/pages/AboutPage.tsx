import About from "@/components/About";
import PageTransition from "@/components/PageTransition";

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <About />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
