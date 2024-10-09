import WhoWeAre from "@/components/AboutUs";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VoltageElectricitySlider from "@/components/Products";
import ScrollToTop from "@/components/ScrollToTop";
import Service from "@/components/Services";
import { Sponser } from "@/components/Sponsers";
import Stats from "@/components/Stats";
import TeamMember from "@/components/TeamMembers";
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
      <WhatWeDoSpecialists />
      <TeamMember />
      <Sponser />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default page;
