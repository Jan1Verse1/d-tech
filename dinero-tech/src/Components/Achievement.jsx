import React from "react";

const Achievement = () => {
  return (
    <div className="flex flex-col p-12 h-auto bg-[#FAF7F2] items-center xs:p-4">
      <div className=" flex flex-col w-3/4 items-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 xs:text-center">
          At a Glance
        </h2>
        <p className="text-lg font-normal text-black text-center">
          By leveraging technology, we’ve helped businesses navigate challenges,
          develop scalable solutions, and achieve their goals. Together, we’re
          building a future defined by innovation and excellence.
        </p>
      </div>
      <div className="grid grid-cols-3 w-3/4 items-center xs:grid-cols-1 gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-black mb-4">+10</h1>
          <p className="text-lg font-normal text-black text-center">Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-black mb-4">+5</h1>
          <p className="text-lg font-normal text-black text-center">Projects</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-black mb-4">+5</h1>
          <p className="text-lg font-normal text-black text-center">
            Products sShipped
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
