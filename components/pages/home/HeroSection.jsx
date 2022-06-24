import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-5xl mx-auto w-full px-10">
      {/* GRID CONTAINER */}
      <div className="grid grid-cols-2">
        {/* COL 1 */}
        <div className="flex flex-col gap-y-10 justify-center">
          <h1 className="font-bold text-6xl">
            Hello 👋
            <br />
            I'm Jed!
          </h1>
          <div>
            <p>Photographer</p>
            <p>UX</p>
            <p>Web D</p>
          </div>
          <div>
            <button
              className="text-white bg-indigo-500 px-5 py-2 rounded-full"
              type="button"
            >
              Get in touch
            </button>
          </div>
        </div>
        {/* COL 2 */}
        <div>
          <img src="https://jedadriandenosta.netlify.app/img/Saly-13.svg" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
