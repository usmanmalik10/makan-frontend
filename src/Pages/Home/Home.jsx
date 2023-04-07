import React from "react";
import { Completedprojects } from "../../Components/Website/Home/Completedprojects";

import Homehero from "../../Components/Website/Home/Homehero";
import { Mmhomes } from "../../Components/Website/Home/Mmhomes";
import { Ourprojects } from "../../Components/Website/Home/Ourprojects";
import { Ourstore } from "../../Components/Website/Home/Ourstore";
import { Ourteam } from "../../Components/Website/Home/Ourteam";
import { Realestate } from "../../Components/Website/Home/Realestate";

const Hero = () => {
  return (
    <>
      <Homehero />
      <Mmhomes />
      <Ourstore />
      <Realestate />
      <Ourprojects />
      <Ourteam />
      {/* <Completedprojects /> */}
    </>
  );
};

export default Hero;
