import React from "react";
import Header from "../Components/Header";
import Sponsor from "../Components/Sponsor";
import Footer from "../Components/Footer";
import BackgroundImage from "../assets/images/image00076.jpeg";

const Who = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row w-2/4 p-10 xs:flex-col w-full">
        <div className="h-[1px] w-1/4 bg-black mr-2"></div>
        <div className="flex flex-col align-baseline">
          <p className="text-lg font-normal text-black">WHO WE ARE</p>
          <h1 className="text-5xl font-bold text-black mb-4">
            We are a non-governmental organization focused on developing and
            empowering the youths through sports.
          </h1>
        </div>
      </div>
      <div className="p-20 xs:p-8">
        <div
          className="flex flex-col  bg-white h-[720px] w-full  rounded-xl bg-cover bg-center bg-no-repeat items-center xs:h-[400px]  "
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        ></div>
      </div>

      <div className="grid grid-cols-2 w-full p-20 items-center justify-around gap-12 h-auto bg-[#FAF7F2] xs:grid-cols-1  p-8">
        <div className="flex flex-col xs: w-full">
          <p className="text-base font-light text-black">our mission</p>
          <h2 className="text-4xl font-bold text-black mb-4 xs:text-3xl">
            To empower the youth through health, sports and entertainment for a
            better future.
          </h2>
          <p className="text-xl font-normal text-black">
            Our mission is to equip young individuals with the tools they need
            to succeed—on and off the field. By combining the power of sports,
            health education, and entertainment, we’re fostering growth,
            resilience, and a sense of community among today’s youth.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-base font-light text-black">our Vision</p>
          <h2 className="text-4xl font-bold text-black mb-4">
            To harness sports and entertainment for a better society.
          </h2>
          <p className="text-xl font-normal text-black">
            We will contribute to a healthier, happier and more connected
            society, using the power of sport and entertainment to identify
            talents, engage the youths physically and morally with a view to
            reduce crime, drug abuse as well as corruption.
          </p>
        </div>
      </div>

      <Sponsor />
      <Footer />
    </div>
  );
};

export default Who;
