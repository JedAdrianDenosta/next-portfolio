import Head from "../components/Head";
import HeroSection from "../components/pages/home/HeroSection";
import SkillsSection from "../components/pages/home/SkillsSection";
import ProjectsSection from "../components/pages/home/ProjectsSection";
import AboutSection from "../components/pages/home/AboutSection";

export default function Home() {
  return (
    <div className="flex-grow">
      <Head />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
}
