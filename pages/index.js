import Head from "../components/Head";
import Image from "next/image";
import HeroSection from "../components/pages/home/HeroSection";
import SkillsSection from "../components/pages/home/SkillsSection";
import ProjectsSection from "../components/pages/home/ProjectsSection";

export default function Home() {
  return (
    <div className="flex-grow">
      <Head />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
