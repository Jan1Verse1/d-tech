import React from "react";
//import { Code, Palette, Settings, TrendingUp } from "react-feather"; // Using react-icons for visuals

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      //   icon: <Code size={32} />,
      title: "Software Engineering",
      description:
        "Custom web & mobile applications designed for seamless functionality.",
    },
    {
      //   icon: <Palette size={32} />,
      title: "Product Design",
      description:
        "Intuitive, user-centered designs that enhance digital experiences",
    },
    {
      //   icon: <Settings size={32} />,
      title: "Social Media Management",
      description:
        "Building brand awareness and engagement across digital platforms.",
    },
    {
      //   icon: <TrendingUp size={32} />,
      title: "Graphics Design",
      description: "Creative visuals that bring your brand identity to life.",
    },
    {
      //   icon: <TrendingUp size={32} />,
      title: "Digital Marketing",
      description:
        "Data-driven strategies to maximize online visibility and conversions.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
