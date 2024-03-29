import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

// Adjust some duration on motion library

import { AiFillGithub as GitHub } from "react-icons/ai";
import { AiFillLinkedin as LinkedIn } from "react-icons/ai";
import { AiFillFacebook as Facebook } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div id="hero" className="max-w-7xl mx-auto w-full px-10 lg:py-0 lg:pb-28">
      {/* GRID CONTAINER */}
      <div className="grid lg:grid-cols-2">
        {/* COL 1 */}
        <div className="flex flex-col gap-y-10 justify-center">
          <motion.span
            className=" space-y-2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.3,
              delay: 1.3,
              ease: "easeInOut",
              damping: 100,
              stiffness: 100,
            }}
          >
            <h1 className="text-gray-500">👋 Hello mate! I am,</h1>
            <h2 className="font-extrabold text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-600 tracking-tight">
              Jed Adrian
            </h2>
          </motion.span>
          <motion.div
            className="text-2xl flex gap-x-5 text-gray-500"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 1.5,
              ease: "easeInOut",
              damping: 100,
              stiffness: 100,
            }}
          >
            <a
              className="hover:text-gray-800"
              href="https://www.facebook.com/jedadrian.denosta"
            >
              <Facebook />
            </a>

            <a
              className="hover:text-gray-800"
              href="https://github.com/JedAdrianDenosta"
            >
              <GitHub />
            </a>

            <a
              className="hover:text-gray-800"
              href="https://www.linkedin.com/in/jed-adrian-denosta-6b409720a/"
            >
              <LinkedIn />
            </a>
          </motion.div>
          <motion.div
            className="max-w-md text-sm font-light text-gray-500 "
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              delay: 2,
              ease: "easeInOut",
              damping: 100,
              stiffness: 100,
            }}
          >
            <p>
              Working with{" "}
              <a className="underline underline-offset-1 decoration-sky-500">
                User Experience and User Interfaces
              </a>{" "}
              is something I value since it allows me to understand people{"'"}s
              current problems and translate their pain points to deliver the
              most captivating experience.{" "}
              <a className="underline underline-offset-1 decoration-sky-500">
                Web development
              </a>{" "}
              piques my interest since it streamlines concerns and connects many
              people online.{" "}
              <a className="underline underline-offset-1 decoration-sky-500">
                Photography
              </a>{" "}
              is one of my passions, and I aspire to convey an emotion and a
              portrayal to people through photographs.
            </p>
          </motion.div>
          <motion.div
            className=" gap-4 pt-4 flex flex-wrap"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2.5,
              delay: 2.5,
              ease: "easeInOut",
              damping: 100,
              stiffness: 100,
            }}
          >
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="cursor-pointer text-indigo-500 border border-indigo-500 px-5 sm:px-7 py-4 rounded-xl hover:bg-indigo-500/90 hover:text-white"
            >
              Get In Touch
            </Link>

            <a
              href={
                "https://drive.google.com/file/d/17-Gm702rjJTmzVM1K3md2VZ8rG58PtOL/view?usp=sharing"
              }
              className="cursor-pointer text-white border border-indigo-500 bg-indigo-500 px-5 sm:px-7 py-4 rounded-xl hover:shadow-xl hover:shadow-indigo-500/30 transition hover:-translate-y-3 hover:ease-linear "
            >
              View Resume
            </a>
          </motion.div>
        </div>
        {/* COL 2 */}
        <motion.div
          className="pt-12 lg:pt-0 flex items-center justify-center w-full h-fit"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2.5,
            delay: 2.5,
            ease: "easeInOut",
            damping: 100,
            stiffness: 100,
          }}
        >
          <Image
            layout="intrinsic"
            src="/hero-image.svg"
            alt="Jed's hero image"
            width={600}
            height={600}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
