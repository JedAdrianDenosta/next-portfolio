import React from "react";
import Link from "next/link";
import projects from "../../../data/projects";
import { FaGithub as GitHubIcon } from "react-icons/fa";

const ProjectsSection = () => {
  return (
    <div className="relative my-36 lg:my-72" id="projects">
      <div className="mx-auto w-full h-1/4 lg:h-1/2 absolute bg-indigo-50 right-0 left-0"></div>
      <div className="max-w-7xl mx-auto w-full px-10 relative">
        <span className="text-indigo-900 flex flex-col items-center py-20">
          <h1 className="text-3xl font-bold mb-2">My Projects</h1>
          <p className=" font-light max-w-xl text-center">
            "Productivity is never an accident. It is always the result of a
            commitment to excellence, intelligent planning, and focused effort."
            —Paul J. Meyer
          </p>
        </span>
        <div className="grid lg:grid-cols-2 place-content-center gap-10">
          {projects.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                index={i}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                url={project.url}
                images={project.images}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  index,
  projectName,
  projectDescription,
  url,
  images,
}) => {
  return (
    <div className="flex gap-8">
      {/* Description */}
      <div className="rounded-md flex flex-col justify-around gap-y-5 bg-white shadow-2xl shadow-indigo-500/20 p-10 group-hover:opacity-95">
        <h1 className="text-indigo-500 text-4xl font-semibold">
          {projectName}
        </h1>
        <div className="text-gray-800 text-sm font-light flex flex-col gap-y-4">
          {projectDescription}
        </div>
        <div className="flex gap-5 justify-between items-center">
          <button className="hover:shadow-xl hover:shadow-indigo-500/30 text-white font-semibold bg-indigo-500 text-sm px-5 py-3 rounded-full">
            Take a look
          </button>
          <Link href="https://github.com/">
            <a>
              <GitHubIcon size="1.5rem" className="text-gray-800" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
