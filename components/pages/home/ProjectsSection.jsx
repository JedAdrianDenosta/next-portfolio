import React from "react";
import projects from "../../../data/projects";
import { FiGlobe as Globe } from "react-icons/fi";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 70,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
    }
  }, [inView]);
  return (
    <div className="relative my-28 lg:my-72" id="projects">
      <div className="mx-auto w-full h-1/2 lg:h-1/2 absolute bg-indigo-50 right-0 left-0"></div>
      <motion.div ref={ref} className="max-w-7xl mx-auto w-full px-10 relative">
        <span className="text-indigo-900 flex flex-col items-center py-20">
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className=" font-light max-w-xl text-center text-sm opacity-50">
            {'"'}Productivity is never an accident. It is always the result of a
            commitment to excellence, intelligent planning, and focused effort.
            {'"'}
            —Paul J. Meyer
          </p>
        </span>
        <motion.div
          animate={animation}
          className="grid lg:grid-cols-2 place-content-center gap-10"
        >
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
        </motion.div>
      </motion.div>
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
      <div className="rounded-md flex flex-col justify-around gap-y-5 bg-white shadow-2xl shadow-indigo-500/20 p-10 group-hover:opacity-95 hover:shadow-2xl hover:shadow-indigo-500/50">
        <h1 className="text-indigo-500 text-4xl font-semibold">
          {projectName}
        </h1>
        <div className="text-gray-800 text-sm font-light flex flex-col gap-y-4">
          {projectDescription}
        </div>
        <div className="flex gap-5 justify-between items-center">
          <button
            disabled
            className="cursor-not-allowed hover:shadow-xl hover:shadow-indigo-500/30 text-white font-semibold bg-indigo-500 text-sm px-5 py-3 rounded-full"
          >
            Take a look
          </button>

          <a>
            <Globe
              size="1.5rem"
              className="text-gray-800 cursor-not-allowed"
              disabled
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
