// import React from "react";
// import BackgroundVideo from "../assets/images/bg-vid.mp4"; // Renamed for clarity
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <div className="relative flex flex-col h-[720px] w-full justify-center items-center overflow-hidden xs:h-auto xs:p-4">
//       {/* Video Background */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src={BackgroundVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Content */}
//       <div className="relative z-10 w-3/4 mb-24 sm:w-3/4 text-center">
//         <h1 className="text-7xl font-bold text-black mb-4 xs:text-4xl">
//           Building the Future of Technology, One Solution at a Time
//         </h1>
//         <p className="text-2xl font-normal s:text-sm">
//           From cutting-edge software engineering to intuitive product design and
//           strategic product management, we empower businesses to succeed in a
//           competitive landscape.
//         </p>
//         <button className="px-3 py-2 bg-black rounded-lg text-sm text-white h-10 mt-4">
//           <Link to="Contact" onClick={() => setNav(false)}>
//             Reach Out to Us
//           </Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import your background videos/images
import BackgroundVideo1 from "../assets/images/bg-vid.mp4";
import BackgroundVideo2 from "../assets/images/bgvid2.mp4";
import BackgroundImage1 from "../assets/images/image.jpg";
//import BackgroundImage1 from "../assets/images/bg-img-1.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      background: "video",
      source: BackgroundVideo1,
      title: "Building the Future of Technology",
      description:
        "From cutting-edge software engineering to intuitive product design and strategic product management.",
      buttonText: "Learn More",
    },
    {
      background: "video",
      source: BackgroundVideo2,
      title: "Innovative Solutions for Your Business",
      description:
        "We create custom solutions tailored to your specific needs and challenges.",
      buttonText: "Get Started",
    },
    {
      background: "image",
      source: BackgroundImage1,
      title: "Expert Team at Your Service",
      description:
        "Our experienced professionals are ready to bring your ideas to life.",
      buttonText: "Contact Us",
    },
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative flex flex-col h-[720px] w-full justify-center items-center overflow-hidden xs:h-auto xs:p-4">
      {/* Background */}
      {slides[currentSlide].background === "video" ? (
        <video
          autoPlay
          loop
          muted
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

      {/* Content */}
      <div className="relative z-10 w-3/4 mb-24 sm:w-3/4 text-center">
        <h1 className="text-7xl font-bold text-black mb-4 xs:text-4xl">
          {slides[currentSlide].title}
        </h1>
        <p className="text-2xl font-normal text-black  xs:text-sm">
          {slides[currentSlide].description}
        </p>
        <button className="px-3 py-2 bg-black rounded-lg text-sm text-white h-10 mt-4">
          <Link to="Contact">{slides[currentSlide].buttonText}</Link>
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-black" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
