import WhoWeAre from "@/components/AboutUs";
import ContactSection from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VoltageElectricitySlider from "@/components/Products";
import Service from "@/components/Services";
import { Sponser } from "@/components/Sponsers";
import Stats from "@/components/Stats";
import WhatWeDoSpecialists from "@/components/WHatWeDo";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <VoltageElectricitySlider />
      <Service />
      <Stats />
      <WhatWeDoSpecialists/>
      <Sponser/>
      <ContactSection/>
    </div>
  );
};

export default page;
