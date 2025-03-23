import React from "react";
import partakeImg from "../assets/images/image00018.jpeg";

const Partake = () => {
  return (
    <div className="p-20 xs:p-4">
      <div
        className="flex flex-col bg-white h-[480px] p-24  w-full justify-items-center bg-cover bg-center bg-no-repeat items-center rounded-xl xs:p-10"
        style={{ backgroundImage: `url(${partakeImg})` }}
      >
        <div className="flex flex-col w-full items-center">
          <h2 className="text-5xl font-bold text-white text-center mb-4 xs:text-lg">
            You can partake in the next edition of the Dynamic Street Soccer.
          </h2>
          <p className="text-lg font-normal text-white text-center xs:text-sm">
            The next edition of Dynamic Street Soccer is here, and it’s bigger
            and better than ever! Sign up today and immerse yourself in a
            dynamic environment filled with action, camaraderie, and
            opportunities to shine.
          </p>
          <button className="flex flex-row px-3 py-2 rounded-lg items-center justify-center text-sm text-white border-2 border-gray-100 h-10 w-max mt-12">
            <a href=" https://wa.me/2347080226755" target="blank">
              {" "}
              Register for Dynamic Street Soccer
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partake;
