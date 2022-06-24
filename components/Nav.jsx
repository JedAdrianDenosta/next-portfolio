import React from "react";
import Link from "next/link";
import navbarLinks from "../data/navbarLinks";

const Nav = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto w-full px-10 flex justify-between gap-x-5 h-32 items-center">
        <Link href="/">
          <a className="">jed adrian</a>
        </Link>
        <ul className="flex gap-x-8">
          {navbarLinks.map((navbarLink, i) => {
            return (
              <Link href={navbarLink.route} key={i}>
                <a>
                  <li>{navbarLink.name}</li>
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
