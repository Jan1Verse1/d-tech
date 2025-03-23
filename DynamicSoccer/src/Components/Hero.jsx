// import React from "react";
// import BackgroundImage from "../assets/images/bgimg.png";

// const Hero = () => {
//   return (
//     <div
//       className="flex flex-col px-[3%] bg-white h-[720px] w-full p-20 justify-items-center bg-cover bg-center bg-no-repeat items-center  xs:h-auto p-10 "
//       style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       <div className="w-3/4 mb-24 sm:w-3/4 border border-red-600 ">
//         <h1 className="lg:text-7xl font-bold text-left text-white mb-4 leading-auto xs:text-4xl">
//           Targeted and Impactful Youth Development through Sport Competition
//         </h1>
//         <button className="flex flex-row px-3 py-2 bg-black rounded-lg items-center justify-center text-sm text-white border-none h-10 w-max mt-4">
//           What We Do
//         </button>
//       </div>
//       <div className="flex flex-row w-3/4 items-center  justify-between  mb-4 ">
//         <h5 className="text-xl font-bold text-white w-full xs:text-sm w-auto text-[8px] text-center">
//           Over 100+ young lives impacted
//         </h5>
//         <div className="h-[2px] w-full bg-white xs:hidden"></div>
//         <h5 className="text-xl font-bold text-white w-full xs:text-sm w-auto text-[8px] text-center">
//           10+ sponsors and supporters
//         </h5>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import BackgroundImage from "../assets/images/bgimg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="flex flex-col bg-white h-[720px] w-full p-20 justify-items-center bg-cover bg-center bg-no-repeat items-center xs:h-auto xs:p-4"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="w-3/4 mb-24 sm:w-3/4">
        <h1 className="text-7xl font-bold text-left text-white mb-4 xs:text-4xl">
          Targeted and Impactful Youth Development through Sport Competition
        </h1>
        <button className="flex px-3 py-2 bg-black rounded-lg text-sm text-white h-10 mt-4">
          <Link to="WhatWeDo" onClick={() => setNav(false)}>
            What We Do
          </Link>
        </button>
      </div>
      <div className="flex flex-row w-3/4 items-center justify-between mb-4 xs:flex-col">
        <h5 className="text-xl font-bold text-white w-full xs:text-sm text-center mb-2">
          Over 100+ young lives impacted
        </h5>
        <div className="h-[2px] w-full bg-white xs:hidden"></div>
        <h5 className="text-xl font-bold text-white w-full xs:text-sm text-center">
          10+ sponsors and supporters
        </h5>
      </div>
    </div>
  );
};

export default Hero;
