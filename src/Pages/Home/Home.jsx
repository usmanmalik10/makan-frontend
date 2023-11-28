import React from "react";
import { Completedprojects } from "../../Components/Website/Home/Completedprojects";

import Homehero from "../../Components/Website/Home/Homehero";
import { Mmhomes } from "../../Components/Website/Home/Mmhomes";
import { Ourprojects } from "../../Components/Website/Home/Ourprojects";
import { Ourstore } from "../../Components/Website/Home/Ourstore";
// import { Ourteam } from "../../Components/Website/Home/Ourteam";
import { Realestate } from "../../Components/Website/Home/Realestate";
import Header from "../../Components/Website/Header/Header";
import Testimoninals from "../../Components/Website/Testimoninals/Testimoninals";
import Footer from "../../Components/Website/Footer/Footer";
import './Home.css'
import { Dailyrates } from "../../Components/Website/Home/Dailyrates";
import { Costestimation } from "../../Components/Website/Home/Costestimation";

const Hero = () => {
  return (
    <>
      <Header/>
      <Homehero />
      {/* <Mmhomes /> */}
      <Ourstore />
      <Realestate />
      {/* <Ourprojects /> */}
      {/* <Ourteam /> */}
      <Completedprojects /> 
      <Dailyrates />
      {/* <Costestimation/> */}
      <Testimoninals/>
      <Footer/>
    </>
  );
};

export default Hero;
