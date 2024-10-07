"use client";
import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl pb-4 font-semibold text-gray-800">
                Who Are We
              </h3>
              <p className="text-lg text-gray-600">
                Almaram Alfaneyah Contracting Co. is a certified channel partner of Schneider Electric, dealing in the manufacturing of LV switchgear panels in the Kingdom of Saudi Arabia. The Head Office being in Jeddah, the company looks forward to a complete network of its branches in major cities of Saudi Arabia. The company is operating in accordance with the highly acclaimed IEC, ISO, and ASO standards.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              width={1000}
              height={1000}
              src="/assets/about.jpg"
              alt="Who We Are"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;