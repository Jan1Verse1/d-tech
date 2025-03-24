import React from "react";
import Header from "../Components/Header";
import Partake from "../Components/Partake";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThreads,
  faLinkedinIn,
  faXTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const Facebook = "https://www.facebook.com/dsscompetiton";
  const X = "https://twitter.com/@DynamicStreets ";
  const IG = "https://www.instagram.com/dssempowerment/";
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 w-full p-8 justify-around gap-12 h-auto bg-[#FAF7F2] xs:grid-cols-1">
        <div className="flex flex-row w-full p-2 xs:flex-col w-full">
          <div className="h-[1px] w-1/4 bg-black mr-2"></div>
          <div className="flex flex-col align-baseline">
            <p className="text-lg font-normal text-black">CONTACT US</p>
            <h1 className="text-5xl font-bold text-black mb-4">
              We'd love to hear from you
            </h1>
            <p>
              Have any question in mind or want to enquire about collaborations
              on projects? Please feel free to contact us.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-3 gap-12 ">
          <div className="flex flex-col w-full">
            <h2 className="text-xl font-bold text-black mb-4">Let's talk! </h2>
            <div className="flex flex-row xs:flex-col">
              <p className="text-lg font-normal text-black mr-8">09166032718</p>
              <p
                className="
                text-lg
                font-normal
                text-black"
              >
                dinerotechnologieslimited@gmail.com
              </p>
            </div>
          </div>

          <div className="flex flex-row  ">
            <Link to={Facebook} target="_blank">
              {" "}
              <FontAwesomeIcon
                icon={faFacebookF}
                className="w-6 h-6 mr-4 text-gray-800"
              />
            </Link>
            <Link to={IG} target="_blank">
              {" "}
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 h-6 mr-4 text-gray-800"
              />
            </Link>
            <Link to={X} target="_blank">
              {" "}
              <FontAwesomeIcon
                icon={faXTwitter}
                className="w-6 h-6 mr-4 text-gray-800"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <Partake /> */}
      <Footer />
    </div>
  );
};

export default Contact;
