import React, { useState } from "react";
import Header from "../Components/Header";
import Sponsor from "../Components/Sponsor";
import Footer from "../Components/Footer";
import Image1 from "../assets/images/image00003.jpeg";
import Image2 from "../assets/images/image00004.jpeg";
import Image3 from "../assets/images/image00005.jpeg";
import Image4 from "../assets/images/image00006.jpeg";
import Image5 from "../assets/images/image00007.jpeg";
import Image6 from "../assets/images/image00031.jpeg";
import Image7 from "../assets/images/image00103.jpeg";
import Image8 from "../assets/images/image00092.jpeg";
import Image9 from "../assets/images/image00010.jpeg";
import Image10 from "../assets/images/image00011.jpeg";
import Image11 from "../assets/images/image00012.jpeg";
import Image12 from "../assets/images/image00013.jpeg";
import Image13 from "../assets/images/image00032.jpeg";
import Image14 from "../assets/images/image00014.jpeg";
import Image15 from "../assets/images/image00015.jpeg";
import Image16 from "../assets/images/image00016.jpeg";
import Image17 from "../assets/images/image00017.jpeg";
import Image18 from "../assets/images/image00018.jpeg";
import Image19 from "../assets/images/image00019.jpeg";
import Image20 from "../assets/images/newimage.jpeg";
import Image21 from "../assets/images/image00021.jpeg";
import Image22 from "../assets/images/image00022.jpeg";
//import Image23 from "../assets/images/image00023.jpeg";
import Image24 from "../assets/images/image00024.jpeg";
import Image25 from "../assets/images/image00025.jpeg";
import Image26 from "../assets/images/image00026.jpeg";
import Image27 from "../assets/images/image00027.jpeg";
import Image28 from "../assets/images/image00028.jpeg";
import Image29 from "../assets/images/image00085.jpeg";
import Image30 from "../assets/images/image00090.jpeg";
import Image31 from "../assets/images/image00036.jpeg";
import Image32 from "../assets/images/image00040.jpeg";
import Image33 from "../assets/images/image00076.jpeg";
import Image34 from "../assets/images/image00150.jpeg";
import Image35 from "../assets/images/image00050.jpeg";
import Image36 from "../assets/images/image00051.jpeg";
import Image37 from "../assets/images/image00055.jpeg";
import Image38 from "../assets/images/image00056.jpeg";
import Image39 from "../assets/images/image00058.jpeg";
import Image40 from "../assets/images/image00071.jpeg";
import Image41 from "../assets/images/image00116.jpeg";
import Image42 from "../assets/images/image00117.jpeg";
import Image43 from "../assets/images/image00118.jpeg";
import Image44 from "../assets/images/image00119.jpeg";
import Image45 from "../assets/images/image00121.jpeg";
import Image46 from "../assets/images/image00123.jpeg";
import Image47 from "../assets/images/image00125.jpeg";
import Image48 from "../assets/images/image00152.jpeg";
import Image49 from "../assets/images/image00159.jpeg";
import Image50 from "../assets/images/image00160.jpeg";

const What = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    //Image23,
    Image24,
    Image25,
    Image26,
    Image27,
    Image28,
    Image29,
    Image30,
    Image31,
    Image32,
    Image33,
    Image34,
    Image35,
    Image36,
    Image37,
    Image38,
    Image39,
    Image40,
    Image41,
    Image42,
    Image43,
    Image44,
    Image45,
    Image46,
    Image47,
    Image48,
    Image49,
    Image50,
  ];

  const [selectedImage, setSelectedImage] = useState(null); // Store the selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // Toggle modal state

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-row w-2/4 p-10 xs:flex-col w-full">
        <div className="h-[1px] w-1/4 bg-black mr-2"></div>
        <div className="flex flex-col align-baseline">
          <p className="text-lg font-normal text-black">
            EDITIONS WE HAVE DONE
          </p>
          <h1 className="text-5xl font-bold text-black mb-4 xs:text-3xl">
            We are creating a world where sports is a tool of empowerment
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5 w-full p-10 xs:grid-cols-2 ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image ${index + 1}`}
            className="h-72 w-auto cursor-pointer hover:opacity-75 transition-opacity duration-300 xs:max-h-44 w-44"
            onClick={() => openModal(image)} // Open modal on click
          />
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal when clicking outside the image
        >
          <div
            className="relative bg-white p-4 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-gray-700 text-white px-3 py-1 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Sponsor />
      <Footer />
    </div>
  );
};

export default What;
