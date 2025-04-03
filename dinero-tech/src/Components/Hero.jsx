import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackgroundVideo1 from "../assets/images/bg-vid.mp4";
import BackgroundVideo2 from "../assets/images/bgvid2.mp4";
import BackgroundVideo3 from "../assets/images/bgvid3.mp4";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      background: "video",
      source: BackgroundVideo1,
      title: "Building the Future of Technology",
      description:
        "From cutting-edge software engineering to intuitive product design and strategic product management.",
      buttonText: "Contact Us",
    },
    {
      background: "video",
      source: BackgroundVideo2,
      title: "Innovative Solutions for Your Business",
      description:
        "We create custom solutions tailored to your specific needs and challenges.",
      buttonText: "Contact Us",
    },
    {
      background: "video",
      source: BackgroundVideo3,
      title: "Expert Team at Your Service",
      description:
        "Our experienced professionals are ready to bring your ideas to life.",
      buttonText: "Contact Us",
    },
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative flex flex-col h-[720px] w-full justify-center items-center overflow-hidden xs:h-auto xs:p-4">
      {/* Background Video */}
      {slides[currentSlide].background === "video" ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
          key={currentSlide}
        >
          <source src={slides[currentSlide].source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={slides[currentSlide].source}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
          key={currentSlide}
        />
      )}

      {/* Dark Overlay for better text contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1"></div>

      {/* Content Container */}
      <div className="relative z-10 w-3/4 mb-24 sm:w-3/4 text-center px-4">
        <h1 className="text-7xl font-bold text-white mb-6 xs:text-4xl sm:text-5xl md:text-6xl">
          {slides[currentSlide].title}
        </h1>
        <p className="text-2xl font-normal text-white mb-8 xs:text-lg sm:text-xl">
          {slides[currentSlide].description}
        </p>
        <button className="px-6 py-3 bg-white text-black rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-300">
          <Link to="Contact" className="hover:no-underline">
            {slides[currentSlide].buttonText}
          </Link>
        </button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-8 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
