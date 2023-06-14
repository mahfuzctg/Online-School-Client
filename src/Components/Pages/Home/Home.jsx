import React from "react";
import { Carousel } from "react-responsive-carousel";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";

import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../../PopularInstructor/PopularInstructor";
import Students from "../Students";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Online School | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <Students></Students>
    </>
  );
};

export default Home;
