import React from "react";
import Link from "next/link";
import navbarLinks from "../data/navbarLinks";

const Nav = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto w-full px-10 flex justify-between gap-x-5 h-28 items-center">
        <Link href="/">
          <a className=" text-xl font-bold tracking-wide text-sky-500">
            Jed Adrian
          </a>
        </Link>
        <ul className="flex gap-x-5 md:gap-x-10 ">
          {navbarLinks.map((navbarLink, i) => {
            return (
              <Link href={navbarLink.route} key={i}>
                <a className="">
                  <li className="text-sm text-gray-500 hover:text-indigo-500 focus:text-indigo-500 focus:bg-gray-200 focus:outline-none focus:shadow-outline no-underline hover:underline hover:underline-offset-8 hover:font-semibold">
                    {navbarLink.name}
                  </li>
                </a>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Nav;
