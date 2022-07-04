import Image from "next/image";
import React from "react";
import Link from "next/link";
import { AiFillGithub as GitHub } from "react-icons/ai";
import { AiFillLinkedin as LinkedIn } from "react-icons/ai";
import { AiFillFacebook as Facebook } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-10 py-12 lg:py-0 lg:pb-28">
      {/* GRID CONTAINER */}
      <div className="grid lg:grid-cols-2">
        {/* COL 1 */}
        <div className="flex flex-col gap-y-10 justify-center">
          <h1 className="font-extrabold text-6xl md:text-7xl lg:text-6xl text-indigo-500">
            👋 Hello, <br /> I am Jed.
          </h1>
          <div className="text-2xl flex gap-x-5 text-gray-500">
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
          </div>
          <div className="max-w-md text-sm font-light text-gray-500 ">
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
          </div>
          <div className=" space-x-4">
            <Link href={"#about"}>
              <a className="text-indigo-500 border border-indigo-500 px-5 py-2 rounded-full hover:bg-indigo-500/90 hover:text-white">
                {" "}
                Get in touch
              </a>
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1MpeEtfQljjV19Z3vQRlPQmwcoNc9JMw1/view?usp=sharing"
              }
            >
              <a className="text-white border border-indigo-500 bg-indigo-500 px-5 py-2 rounded-full hover:shadow-xl hover:shadow-indigo-500/30 transition hover:-translate-y-2">
                View Resumé
              </a>
            </Link>
          </div>
        </div>
        {/* COL 2 */}
        <div className="pt-12 lg:pt-0 flex justify-center w-fit h-fit">
          <Image
            src="/hero-image.svg"
            alt="Jed's hero image"
            width={650}
            height={650}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
