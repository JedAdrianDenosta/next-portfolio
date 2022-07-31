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
      <div className="max-w-7xl mx-auto w-full px-10 mb-36 lg:mb-56 relative">
        <span className="text-white flex flex-col items-center py-20">
          <h1 className="text-3xl font-bold mb-2">About Me</h1>
          <p className=" font-light max-w-xl text-center text-sm opacity-75">
            {'"'}Yesterday is history. Tomorrow is a mystery. And today? Today
            is a gift. That{"'"}s why we call it the present.{'"'}—Eleanor
            Roosevelt
          </p>
        </span>
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <div className="bg-white rounded-lg shadow-2xl shadow-indigo-500/10 lg:max-w-sm h-full space-y-5 p-10">
            <span className="flex justify-center">
              <Image
                className="rounded"
                alt="Jed's profile image"
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
                <a className="hover:text-gray-800 text-gray-500">
                  <Facebook />
                </a>
              </Link>
              <Link href="https://github.com/JedAdrianDenosta">
                <a className="hover:text-gray-800 text-gray-500">
                  <GitHub />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/jed-adrian-denosta-6b409720a/">
                <a className="hover:text-gray-800 text-gray-500">
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
                Mabuhay! ✨ I am Jed Adrian Denosta, 21 years of age, and I
                reside in Capiz, Philippines.
              </p>
              <p>
                I am a 🧑‍💻 Junior student at West Visayas State University
                pursuing a Bachelor of Science in Computer Science specializing
                in Artificial Intelligence. My hobbies are ✏️ UX and UI Design,
                📷 Photography, and 🏸 Badminton.
              </p>

              <p>
                Technology has been a massive part of my life; it is where my
                interest thrives, mainly in 🏥 medical care, and I aim to assist
                as it benefits individuals even with the slight help by saving
                lives. Artificial Intelligence makes society evolve as it seeks
                to solve concerns much faster and more accurately.
              </p>
              <p>
                With my passion for technology, our current thesis study assists
                first responders in expediting their workflow where emergency
                cases are streamlined with the use of AI. Through our
                application, the algorithm we built recommends a list of
                hospitals and helps transport patients to the nearest and best
                hospital for the patient{"'"}s needs.
              </p>
              <p>
                Poor health services in my country really push me to work in
                healthcare technology to help Filipinos and people worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
