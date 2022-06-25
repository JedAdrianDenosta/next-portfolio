import React from "react";
import Link from "next/link";
import navbarLinks from "../data/navbarLinks";

const Nav = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto w-full px-10 flex justify-between gap-x-5 h-32 items-center">
        <Link href="/">
          <a className=" text-lg font-medium tracking-wide text-sky-500">
            Jed Adrian
          </a>
        </Link>
        <ul className="flex gap-x-10">
          {navbarLinks.map((navbarLink, i) => {
            return (
              <Link href={navbarLink.route} key={i}>
                <a>
                  <li className="text-md text-gray-500 hover:text-indigo-500 focus:text-indigo-500 focus:bg-gray-200 focus:outline-none focus:shadow-outline no-underline">
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
