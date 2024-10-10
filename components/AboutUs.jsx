"use client";
import Image from "next/image";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const WhoWeAre = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <Fade direction="left" triggerOnce className="space-y-6">
            <div>
              <h3 className="text-2xl pb-4 font-semibold text-gray-800">
                Who Are We
              </h3>
              <p className="text-lg text-gray-600">
                Almaram Alfaneyah Contracting Co. is a certified channel partner
                of Schneider Electric, dealing in the manufacturing of LV
                switchgear panels in the Kingdom of Saudi Arabia. The Head
                Office being in Jeddah, the company looks forward to a complete
                network of its branches in major cities of Saudi Arabia. The
                company is operating in accordance with the highly acclaimed
                IEC, ISO, and ASO standards.
              </p>
            </div>
          </Fade>

          {/* Right: Image */}
          <Zoom triggerOnce>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                width={1000}
                height={1000}
                src="/assets/about.jpg"
                alt="Who We Are"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"></div>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
