import WhoWeAre from "@/components/AboutUs";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VoltageElectricitySlider from "@/components/Products";
import ScrollToTop from "@/components/ScrollToTop";
import Services from "@/components/Services";
import { Sponser } from "@/components/Sponsers";
import Stats from "@/components/Stats";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <VoltageElectricitySlider />
      {/* <Stats /> */}
      <Services />
      <Sponser />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default page;
