import React from "react";
import skills from "../../../data/skills";

const SkillsSection = () => {
  return (
    <div className=" bg-indigo-50/75">
      <div className="max-w-6xl mx-auto w-full px-10 py-44">
        <h1 className="text-3xl font-medium mb-8">My skills...</h1>
        <div className="grid grid-cols-3 gap-8">
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
    <div className="bg-white border rounded-2xl overflow-hidden p-7 shadow-xl">
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
