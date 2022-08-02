import React from "react";
import Link from "next/link";
import navbarLinks from "../data/navbarLinks";
import { motion } from "framer-motion";

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
        <Link href="/">
          <a className=" text-xl font-bold tracking-wide text-sky-500">JAD</a>
        </Link>
        <ul className="flex gap-x-2 md:gap-x-10">
          {navbarLinks.map((navbarLink, i) => {
            return (
              <Link href={navbarLink.route} key={i}>
                <motion.a
                  className="hidden md:inline-block"
                  whileHover={{
                    y: -5,
                    type: "spring",
                    damping: 100,
                    textDecorationLine: "underline",
                    textUnderlineOffset: "5px",
                    textDecorationColor: "#6366f1",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <li className="text-sm text-gray-500 hover:text-indigo-500 cursor-pointer">
                    {/* hover:text-indigo-500 focus:text-indigo-500 focus:bg-gray-200 focus:outline-none focus:shadow-outline no-underline hover:underline hover:underline-offset-8 hover:font-semibold */}
                    {navbarLink.name}
                  </li>
                </motion.a>
              </Link>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
};

export default Nav;
