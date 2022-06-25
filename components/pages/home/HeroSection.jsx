import Image from "next/image";
import React from "react";
import Link from "next/link";
import { AiFillGithub as GitHub } from "react-icons/ai";
import { AiFillLinkedin as LinkedIn } from "react-icons/ai";
import { AiFillFacebook as Facebook } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto w-full px-10 py-10">
      {/* GRID CONTAINER */}
      <div className="grid grid-cols-2 mb-10">
        {/* COL 1 */}
        <div className="flex flex-col gap-y-10 justify-center">
          <h1 className="font-extrabold text-6xl text-indigo-500">
            👋 Hello, <br /> I am Jed
          </h1>
          <div className="text-2xl flex gap-x-5 text-gray-600">
            <Link href="https://www.facebook.com/jedadrian.denosta">
              <a>
                <Facebook />
              </a>
            </Link>
            <Link href="https://github.com/JedAdrianDenosta">
              <a>
                <GitHub />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/jed-adrian-denosta-6b409720a/">
              <a>
                <LinkedIn />
              </a>
            </Link>
          </div>
          <div className="max-w-md text-sm font-light text-gray-500 ">
            <p>
              Working with User Interfaces and User Experience is something I
              enjoy since it adds beauty to the product's UI and encourages
              people to utilize it. Web development piques my interest since it
              streamlines problems and connects many people online. DC
              Portraitures is a client-focused photography firm that I
              co-founded.
            </p>
          </div>
          <div className=" space-x-4">
            <button
              className="text-indigo-500 border border-indigo-500 px-5 py-2 rounded-full hover:bg-indigo-500/95 hover:text-white"
              type="button"
            >
              CTA
            </button>
            <button
              className="text-white bg-indigo-500 px-5 py-2 rounded-full hover:shadow-xl hover:shadow-indigo-500/30"
              type="button"
            >
              Get in touch
            </button>
          </div>
        </div>
        {/* COL 2 */}
        <Image src={"/hero-image.svg"} width={1000} height={1000} />
      </div>
    </div>
  );
};

export default HeroSection;
