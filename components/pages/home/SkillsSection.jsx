import React from "react";
import skills from "../../../data/skills";

const SkillsSection = () => {
  return (
    <div className="bg-[#eeeffe]">
      <div className="max-w-5xl mx-auto w-full px-10 py-12">
        <h1 className="text-4xl font-bold mb-8">Here are my skills</h1>
        <div className="grid grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            return (
              <SkillCard
                title={skill.title}
                description={skill.description}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ image, title, description, learnMoreCallback }) => {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden p-5 shadow-xl">
      <div className="bg-gray-100 rounded-xl h-52"></div>
      <h2 className="mt-5 font-semibold text-xl">{title}</h2>
      <p className="mt-2">{description}</p>
      <button className="mt-3" type="button">
        Learn More
      </button>
    </div>
  );
};

export default SkillsSection;
