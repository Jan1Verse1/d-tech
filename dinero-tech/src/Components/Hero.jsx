import React from "react";
import BackgroundVideo from "../assets/images/bg-vid.mp4"; // Renamed for clarity
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-[720px] w-full justify-center items-center overflow-hidden xs:h-auto xs:p-4">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 w-3/4 mb-24 sm:w-3/4 text-center">
        <h1 className="text-7xl font-bold text-black mb-4 xs:text-4xl">
          Building the Future of Technology, One Solution at a Time
        </h1>
        <p className="text-2xl font-normal s:text-sm">
          From cutting-edge software engineering to intuitive product design and
          strategic product management, we empower businesses to succeed in a
          competitive landscape.
        </p>
        <button className="px-3 py-2 bg-black rounded-lg text-sm text-white h-10 mt-4">
          <Link to="Contact" onClick={() => setNav(false)}>
            Reach Out to Us
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
