import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

import Achievement from "../Components/Achievement";
import Partake from "../Components/Partake";
import Services from "../Components/Services";
import Products from "../Components/Products";
import Expertise from "../Components/Expertise";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Achievement />
      <Partake />
      <Services />
      <Expertise />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
