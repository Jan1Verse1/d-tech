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
  const Facebook = "https://www.facebook.com/";
  const X = "https://twitter.com/ ";
  const IG = "https://www.instagram.com/";
  return (
    <div>
      <Header />

      <div className="flex flex-col w-full items-center p-2 xs:flex-col">
        <div className="flex flex-col align-baseline items-center">
          <h1 className="text-5xl font-bold text-black mb-4">
            We'd love to hear from you
          </h1>
          <p className="text-center">
            Have any question in mind or want to enquire about collaborations on
            projects? <br /> Please feel free to contact us.
          </p>
        </div>
        <div className="flex flex-col w-full items-center p-4">
          <div className="flex flex-col xs:flex-col">
            <div className="flex flex-row xs:flex-col">
              <p className="text-base  font-normal text-black mr-5">
                +234 916 603 2718
              </p>
              <p className="text-base  font-normal text-black  mr-5">
                +234 708 022 6755
              </p>
            </div>

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
      </div>

      {/* <div className="flex flex-row  ">
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
        </div> */}

      <Partake />
      <Footer />
    </div>
  );
};

export default Contact;
