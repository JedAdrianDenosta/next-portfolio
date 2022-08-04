import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <>
      <motion.div
        className="max-w-7xl mx-auto w-full px-10 flex justify-between gap-x-5 h-28 items-center"
        // initial={{ x: "-100vw", opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: "easeInOut",
          damping: 100,
          stiffness: 100,
        }}
      >
        <Link
          to="hero"
          smooth={true}
          duration={1000}
          className="cursor-pointer text-xl font-bold tracking-wide text-sky-500"
        >
          JAD
        </Link>

        <div className="flex gap-x-2 md:gap-x-10 ">
          <motion.div
            className="hidden md:inline-block"
            whileHover={{
              y: -5,
              textDecorationLine: "underline",
              textUnderlineOffset: "5px",
              textDecorationColor: "#6366f1",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              className="text-sm text-gray-500 hover:text-indigo-500 cursor-pointer"
              to="hero"
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            className="hidden md:inline-block"
            whileHover={{
              y: -5,
              textDecorationLine: "underline",
              textUnderlineOffset: "5px",
              textDecorationColor: "#6366f1",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              className="text-sm text-gray-500 hover:text-indigo-500 cursor-pointer"
              to="skills"
              smooth={true}
              duration={1000}
            >
              Skills
            </Link>
          </motion.div>
          <motion.div
            className="hidden md:inline-block"
            whileHover={{
              y: -5,
              textDecorationLine: "underline",
              textUnderlineOffset: "5px",
              textDecorationColor: "#6366f1",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              className="text-sm text-gray-500 hover:text-indigo-500 cursor-pointer"
              to="projects"
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
          </motion.div>
          <motion.div
            className="hidden md:inline-block"
            whileHover={{
              y: -5,
              textDecorationLine: "underline",
              textUnderlineOffset: "5px",
              textDecorationColor: "#6366f1",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              className="text-sm text-gray-500 hover:text-indigo-500 cursor-pointer"
              to="about"
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </motion.div>
        </div>
        {/* <motion.ul
          className="flex gap-x-2 md:gap-x-10 "
          whileHover={{
            y: -5,
            // type: "spring",
            // damping: 100,
            textDecorationLine: "underline",
            textUnderlineOffset: "5px",
            textDecorationColor: "#6366f1",
          }}
          whileTap={{ scale: 0.9 }}
        >
          {navbarLinks.map((navbarLink, i) => {
            return (
              <Link href={navbarLink.to} key={i}>
                <motion.a
                  className="hidden md:inline-block"
                  whileHover={{
                    y: -5,
                    // type: "spring",
                    // damping: 100,
                    textDecorationLine: "underline",
                    textUnderlineOffset: "5px",
                    textDecorationColor: "#6366f1",
                  }}
                  whileTap={{ scale: 0.9 }}
                > className="text-sm text-gray-500 hover:text-indigo-500 cursor-pointer"
                  <li >
                    {navbarLink.name}
                  </li>
                </motion.a>
              </Link>
            );
          })}
        </motion.ul> */}
      </motion.div>
    </>
  );
};

export default Nav;
