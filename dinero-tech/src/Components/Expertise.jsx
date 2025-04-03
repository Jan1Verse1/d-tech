import React from "react";
import figma from "../assets/images/figmalogo.png";
import angular from "../assets/images/angular.png";
import azure from "../assets/images/azure.png";
import cplus from "../assets/images/c++logo.jpg";
import flutter from "../assets/images/flutterlogo.png";
import andriod from "../assets/images/andriod.png";
import ios from "../assets/images/ios.png";
import phyton from "../assets/images/phyton.png";
import react from "../assets/images/reactlogo.png";
import vue from "../assets/images/vuelogo.png";
import javalogo from "../assets/images/javalogo.jpg";
import javascrptlogo from "../assets/images/jslogo.jpg";

const ExpertiseCard = ({ icon, title }) => (
  <div className="bg-white w-24 h-24 col-span-1 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center justify-center">
    <img src={icon} alt={title} className="h-12 w-12 object-contain" />
    <p className="mt-2 text-xs text-center">{title}</p>
  </div>
);

const Expertise = () => {
  const expertise = [
    { icon: figma, title: "Figma" },
    { icon: javalogo, title: "Java" },
    { icon: javascrptlogo, title: "JavaScript" },
    { icon: angular, title: "Angular" },
    { icon: azure, title: "Azure" },
    { icon: cplus, title: "C++" },
    { icon: flutter, title: "Flutter" },
    { icon: andriod, title: "Android" },
    { icon: ios, title: "iOS" },
    { icon: phyton, title: "Python" },
    { icon: react, title: "React" },
    { icon: vue, title: "Vue" },
  ];

  return (
    <section className="p-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Skill Set</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {expertise.map((item, index) => (
            <ExpertiseCard key={index} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
