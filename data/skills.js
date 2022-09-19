import { FiPenTool as Design } from "react-icons/fi";
import { FiCode as Code } from "react-icons/fi";
import { FiCamera as Camera } from "react-icons/fi";

const skills = [
  {
    icon: <Design />,
    title: "Design",
    description:
      "I favor clear design patterns, basic content organization, and intelligent interactions.",
    header: "Things I enjoy designing:",
    list: "UX, UI, UXR, Wireframes, Prototyping, Web, Mobile, Apps, Logos",
    titleTwo: "Design Tools:",
    tools: "Figma, Adobe XD, Photoshop, Illustrator, Pen & Paper",
  },
  {
    icon: <Code />,
    title: "Front-End Development",
    description:
      "I like making things from scratch with code and seeing how they work on the web.",
    header: "Languages I utilize:",
    list: "HTML, CSS, Javascript, TailwindCSS, React, Next.JS",
    titleTwo: "Developer Tools:",
    tools: "Visual Studio Code, Git, GitHub",
  },
  {
    icon: <Camera />,
    title: "Photography",
    description:
      "Through the use of pictures, I hope to evoke a feeling and tell a story in people's minds.",
    header: "Photography styles:",
    list: "Fashion, Portraits, Landscapes, Astro, Nature, Travel",
    titleTwo: "Design Tools:",
    tools: "Lightroom Classic, Photoshop, Illustrator",
  },
];

export default skills;
