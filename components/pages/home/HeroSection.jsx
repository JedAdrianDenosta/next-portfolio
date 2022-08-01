import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { AiFillGithub as GitHub } from "react-icons/ai";
import { AiFillLinkedin as LinkedIn } from "react-icons/ai";
import { AiFillFacebook as Facebook } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-10 py-4 lg:py-0 lg:pb-28">
      {/* GRID CONTAINER */}
      <div className="grid lg:grid-cols-2">
        {/* COL 1 */}
        <div className="flex flex-col gap-y-10 justify-center">
          <motion.span
            className=" space-y-2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 1.5,
              ease: "easeInOut",
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
              duration: 2,
              delay: 2,
              ease: "easeInOut",
            }}
          >
            <Link href="https://www.facebook.com/jedadrian.denosta">
              <a className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-gray-800">
                <Facebook />
              </a>
            </Link>
            <Link href="https://github.com/JedAdrianDenosta">
              <a className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-gray-800">
                <GitHub />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/jed-adrian-denosta-6b409720a/">
              <a className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-gray-800">
                <LinkedIn />
              </a>
            </Link>
          </motion.div>
          <motion.div
            className="max-w-md text-sm font-light text-gray-500 "
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2.5,
              delay: 2.5,
              ease: "easeInOut",
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
              duration: 3,
              delay: 3,
              ease: "easeInOut",
            }}
          >
            <Link href={"#about"}>
              <a className="text-indigo-500 border border-indigo-500 px-5 sm:px-7 py-4 rounded-xl hover:bg-indigo-500/90 hover:text-white">
                {" "}
                Get In Touch
              </a>
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1MpeEtfQljjV19Z3vQRlPQmwcoNc9JMw1/view?usp=sharing"
              }
            >
              <a className="text-white border border-indigo-500 bg-indigo-500 px-5 sm:px-7 py-4 rounded-xl hover:shadow-xl hover:shadow-indigo-500/30 transition hover:-translate-y-2">
                View Resume
              </a>
            </Link>
          </motion.div>
        </div>
        {/* COL 2 */}
        <motion.div
          className="pt-12 lg:pt-0 flex items-center justify-center w-full h-fit"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 3.5,
            delay: 2,
            ease: "easeInOut",
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
