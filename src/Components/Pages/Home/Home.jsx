import React from "react";
import { Carousel } from "react-responsive-carousel";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Online School | Home</title>
      </Helmet>
      <Banner></Banner>
    </>
  );
};

export default Home;
