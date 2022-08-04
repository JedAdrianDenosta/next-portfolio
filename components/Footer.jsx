import React from "react";
import Link from "next/link";
import { AiFillGithub as GitHub } from "react-icons/ai";
import { AiFillLinkedin as LinkedIn } from "react-icons/ai";
import { AiFillFacebook as Facebook } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <footer className="bg-indigo-500 mx-auto w-full">
        <div className="max-w-7xl mx-auto w-full py-10 space-y-10 text-white">
          <div className=" text-xl font-bold tracking-wide flex justify-center">
            <button
              to="hero"
              onClick={() => {
                scroll.scrollToTop();
              }}
            >
              JAD
            </button>
          </div>

          <div className="text-2xl flex justify-center gap-x-5">
            <Link href="https://www.facebook.com/jedadrian.denosta">
              <a className="hover:opacity-75">
                <Facebook />
              </a>
            </Link>
            <Link href="https://github.com/JedAdrianDenosta">
              <a className="hover:opacity-75">
                <GitHub />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/jed-adrian-denosta-6b409720a/">
              <a className="hover:opacity-75">
                <LinkedIn />
              </a>
            </Link>
          </div>
          <span className="flex justify-center">
            &#169; 2022 Jed Adrian Denosta. All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
