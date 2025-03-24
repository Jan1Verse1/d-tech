import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThreads,
  faLinkedinIn,
  faXTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const Facebook = "https://www.facebook.com/dsscompetiton";
  const X = "https://twitter.com/@DynamicStreets ";
  const IG = "https://www.instagram.com/dssempowerment/";

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col p-12  bg-black mt-4 justify-between xs:flex-col p-4">
      <div className="flex flex-row w-full justify-between xs:flex-col mb-8">
        <div className="flex flex-col">
          <p className="text-base  font-normal text-white">
            +234 916 603 2718{" "}
          </p>
          <p className="text-base  font-normal text-white">
            dinerotechnologieslimited@gmail.com
          </p>
        </div>

        <div className="flex flex-row ">
          <Link to={Facebook} target="_blank">
            {" "}
            <FontAwesomeIcon
              icon={faFacebookF}
              className="w-6 h-6 mr-4 text-white"
            />
          </Link>
          <Link to={IG} target="_blank">
            {" "}
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-6 h-6 mr-4 text-white"
            />
          </Link>
          <Link to={X} target="_blank">
            {" "}
            <FontAwesomeIcon
              icon={faXTwitter}
              className="w-6 h-6 mr-4 text-white"
            />
          </Link>
        </div>
      </div>
      <h4 className="text-base font-normal text-white xs:text-xs mb-4">
        © {currentYear} Dinero Technologies. All rights reserved.
      </h4>
    </div>
  );
};

export default Footer;
