import React from "react";

const Achievement = () => {
  return (
    <div className="flex flex-col p-12 h-auto bg-[#FAF7F2] items-center xs:p-4">
      <div className=" flex flex-col w-3/4 items-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 xs:text-center">
          Our Achievements
        </h2>
        <p className="text-lg font-normal text-black text-center">
          Every milestone tells a story of dedication and transformation.
          Through the power of sports, we’ve inspired young adults to overcome
          challenges, develop essential life skills, and achieve their goals.
          Together, we’re building a legacy of excellence
        </p>
      </div>
      <div className="grid grid-cols-3 w-3/4 items-center xs:grid-cols-1 gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-black mb-4">+200</h1>
          <p className="text-lg font-normal text-black text-center">
            Humans impacted
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-black mb-4">+10</h1>
          <p className="text-lg font-normal text-black text-center">Sponsors</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-black mb-4">+100</h1>
          <p className="text-lg font-normal text-black text-center">
            Prizes Won
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
