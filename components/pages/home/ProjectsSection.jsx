import React from "react";
import projects from "../../../data/projects";
import { FaGithub as GitHubIcon } from "react-icons/fa";
import Link from "next/link";
import { Slide } from "react-slideshow-image";

const ProjectsSection = () => {
  return (
    <div className="max-w-5xl mx-auto w-full px-10 py-12">
      <h1 className="text-4xl font-bold mb-8">My projects...</h1>
      <div className="flex flex-col gap-y-10">
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
    <div className="grid grid-cols-2 gap-8">
      {/* Description */}
      <div
        className={`rounded-md flex flex-col gap-y-5 bg-[#7876f7] p-10 ${
          index % 2 == 0 ? "order-first" : "order-last"
        }`}
      >
        <h1 className="text-white text-3xl font-bold">{projectName}</h1>
        <div className="text-white text-sm flex flex-col gap-y-3">
          {projectDescription}
        </div>
        <div className="flex gap-5 justify-between items-center">
          <button className="shadow text-[#7876f7] font-semibold bg-white text-sm px-5 py-3 rounded-full">
            View Website
          </button>
          <Link href="https://github.com/">
            <a>
              <GitHubIcon size="1.5rem" className="text-white" />
            </a>
          </Link>
        </div>
      </div>
      {/* Image Slideshow */}
      <div className="bg-red-400">
        <Slide>
          {images.map((image, i) => (
            <div className="each-slide w-full h-full" key={i}>
              <div
                className="w-full h-full"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <span>"hello"</span>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default ProjectsSection;
