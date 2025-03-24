import React from "react";
import partakeImg from "../assets/images/partakeIMG.jpg";

const Partake = () => {
  return (
    <div>
      <div
        className="flex flex-col bg-white h-[480px] p-24  w-full justify-items-center bg-cover bg-center bg-no-repeat  xs:p-10"
        style={{ backgroundImage: `url(${partakeImg})` }}
      ></div>
    </div>
  );
};

export default Partake;
