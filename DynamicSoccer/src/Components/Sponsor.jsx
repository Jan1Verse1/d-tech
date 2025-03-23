import React from "react";
import sponsorImg from "../assets/images/image00015.jpeg";

const Sponsor = () => {
  return (
    <div className="p-20 xs:p-4">
      <div
        className="flex flex-col bg-white h-[480px] p-24  w-full justify-items-center bg-cover bg-center bg-no-repeat items-center rounded-xl xs:p-10"
        style={{ backgroundImage: `url(${sponsorImg})` }}
      >
        <div className="flex flex-col w-full items-center">
          <h2 className="text-5xl font-bold text-white text-center mb-4 xs:text-lg">
            Join us in creating a brighter future for young adult everywhere
          </h2>
          <p className="text-lg font-normal text-white text-center xs:text-sm">
            Together, we can change lives through the power of sports. Join our
            mission to empower young adults, nurture their potential, and create
            lasting opportunities for growth and development. Your support as a
            sponsor will help provide the resources, training, and platforms
            needed to inspire the next generation of leaders. Let’s make a
            difference, one game at a time.
          </p>
          <button className="flex flex-row px-3 py-2 rounded-lg items-center justify-center text-sm text-white border-2 border-gray-100 h-10 w-max mt-12">
            <a href=" https://wa.me/2347080226755" target="blank">
              {" "}
              Become a sponsor
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
