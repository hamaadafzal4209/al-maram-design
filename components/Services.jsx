"use client";
import Image from "next/image";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const Service = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <Fade direction="left" triggerOnce className="space-y-6">
            <div>
              <h3 className="text-2xl pb-4 font-semibold text-gray-800">
                OUR SALES AND TECHNICAL SERVICES
              </h3>
              <p className="text-lg text-gray-600">
                Our services are designed to support our clients throughout the
                life cycle of the project. We are a full service partner who
                will take responsibility for all of the project activities.
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

export default Service;
