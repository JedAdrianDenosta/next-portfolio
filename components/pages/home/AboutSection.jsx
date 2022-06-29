import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub as GitHub } from "react-icons/ai";
import { AiFillLinkedin as LinkedIn } from "react-icons/ai";
import { AiFillFacebook as Facebook } from "react-icons/ai";

const AboutSection = () => {
  return (
    <div className="relative" id="about">
      <div className="mx-auto w-full h-1/4 lg:h-1/2 absolute bg-indigo-500 right-0 left-0"></div>
      <div className="max-w-7xl mx-auto w-full px-10 mb-36 lg:mb-72 relative">
        <span className="text-white flex flex-col items-center py-20">
          <h1 className="text-3xl font-bold mb-2">About Me</h1>
          <p className=" font-light max-w-xl text-center">
            {'"'}Yesterday is history. Tomorrow is a mystery. And today? Today
            is a gift. That's why we call it the present.{'"'} —Eleanor
            Roosevelt
          </p>
        </span>
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <div className="bg-white rounded-lg shadow-2xl shadow-indigo-500/10 lg:max-w-sm h-full space-y-5 p-10">
            <span className="flex justify-center">
              <Image
                className="rounded"
                src={"/myProfile.jpg"}
                width={350}
                height={350}
              />
            </span>

            <h1 className="text-lg font-extrabold text-indigo-400">
              Jed Adrian Denosta
            </h1>
            <p className="text-sm text-gray-500">
              UX and UI Designer / Web Designer and Developer / Photographer
            </p>
            <p className="text-sm font-normal text-gray-600">
              In Jed{"'"}s view, a design must address a concern, encourage
              users, and illuminate in a pleasant, trustworthy, and
              human-centered way.
            </p>
            <p className="text-base font-medium text-gray-700">
              Make contact with him! Below, you{"'"}ll find his contact
              information.
            </p>
            <p className="text-sm font-normal text-gray-600">
              Email: jedadrian.denosta@wvsu.edu.ph
            </p>
            <div className="text-2xl flex gap-x-5">
              <Link href="https://www.facebook.com/jedadrian.denosta">
                <a className="hover:text-indigo-500/80">
                  <Facebook />
                </a>
              </Link>
              <Link href="https://github.com/JedAdrianDenosta">
                <a className="hover:text-indigo-500/80">
                  <GitHub />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/jed-adrian-denosta-6b409720a/">
                <a className="hover:text-indigo-500/80">
                  <LinkedIn />
                </a>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-2xl shadow-indigo-500/10 w-full h-full space-y-8 p-10 lg:col-span-2">
            <h1 className="text-indigo-500 text-2xl font-extrabold">
              My Story
            </h1>
            <div className="text-gray-600 space-y-6">
              <p>
                Mabuhay! ✨ I am Jed Adrian Denosta, and I am from the
                Philippines. I am a Junior student at West Visayas State
                University pursuing a Bachelor of Science in Computer Science
                specializing in Artificial Intelligence.
              </p>
              <p>
                I grew up in a humble beginning where we lived in a small house.
                I always look up to my mother as she is the strongest person I
                have ever known, and she taught me the value of setting goals
                and having a life mission, which is to treat others with
                kindness and compassion.
              </p>
              <p>
                In my childhood, I{"'"}ve enjoyed pretending to be a doctor or a
                nurse with my cousins and friends; our patients were teddy
                bears. Because of my numerous hospitalizations due to asthma, I
                have always paid much attention to my health. When I was
                hospitalized last 2019, it saddened me to see patients
                struggling from a lack of medical care. I observed poor
                healthcare in my country, which motivates me to engage in
                technology, especially in the healthcare industry, that aims to
                assist Filipinos and people across the globe. With my passion
                for technology, our current thesis study assists first
                responders in expediting their workflow where emergency cases
                are streamlined. Through an application, an algorithm recommends
                a list of hospitals and helps transport patients to the nearest
                and most reliable hospital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
