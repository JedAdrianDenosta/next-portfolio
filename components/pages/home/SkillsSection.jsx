import React from "react";
import skills from "../../../data/skills";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 70,
        transition: { duration: 2, ease: "easeInOut" },
      });
    }
  }, [inView]);

  return (
    <div className="relative" id="skills">
      <div className="mx-auto w-full h-1/4 lg:h-1/2 absolute bg-indigo-500 right-0 left-0"></div>
      <motion.div ref={ref} className="max-w-7xl mx-auto w-full px-10 relative">
        <span className="text-white flex flex-col items-center py-20">
          <h1 className="text-3xl font-bold mb-2">Skills</h1>
          <p className=" font-light max-w-xl text-center text-sm opacity-75">
            {'"'}I really believe that everyone has a talent, ability, or skill
            that he can mine to support himself and to succeed in life.{'"'}
            —Dean Koontz
          </p>
        </span>
        <motion.div
          animate={animation}
          className="grid lg:grid-cols-3 place-content-center gap-10"
        >
          {skills.map((skill, i) => {
            return (
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                header={skill.header}
                list={skill.list}
                titleTwo={skill.titleTwo}
                tools={skill.tools}
                key={i}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

const SkillCard = ({
  icon,
  title,
  description,
  header,
  titleTwo,
  list,
  tools,
}) => {
  return (
    <div className="bg-white max-w-lg p-14 border rounded-lg border-indigo-50/50 space-y-24 shadow-2xl shadow-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/50">
      <div className="flex flex-col items-center gap-y-6">
        <span className="text-6xl text-indigo-500">{icon}</span>
        <h1 className="text-center font-semibold text-xl">{title}</h1>
        <p className="text-center font-light">{description}</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-center text-indigo-500 mb-2">{header}</h1>
        <p className="text-center font-light">{list}</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-center text-indigo-500 mb-2">{titleTwo}</h1>
        <p className="text-center font-light">{tools}</p>
      </div>
    </div>
  );
};

export default SkillsSection;
