"use client";

import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Acme Corp", logo: "/assets/brand1.jpg" },
  { name: "Globex", logo: "/assets/brand2.jpg" },
  { name: "Soylent Corp", logo: "/assets/brand3.jpg" },
  { name: "Initech", logo: "/assets/brand4.jpg" },
  { name: "Umbrella Corp", logo: "/assets/brand5.jpg" },
  { name: "Hooli", logo: "/assets/brand6.jpg" },
  { name: "Vehement Capital", logo: "/assets/brand7.jpg" },
  { name: "Massive Dynamic", logo: "/assets/brand8.jpg" },
  { name: "Cyberdyne Systems", logo: "/assets/brand9.jpg" },
  { name: "Oscorp Industries", logo: "/assets/brand10.jpg" },
  { name: "Wayne Enterprises", logo: "/assets/brand11.jpg" },
  { name: "Stark Industries", logo: "/assets/brand12.jpg" },
  { name: "LexCorp", logo: "/assets/brand13.jpg" },
];

export default function InfiniteLoopMarketPartners() {
  const logoTrackRef1 = useRef(null);
  const logoTrackRef2 = useRef(null);
  const xRef1 = useRef(0);
  const xRef2 = useRef(0);
  const SPEED = 1;

  // Function to get track width
  const getTrackWidth = (trackRef) =>
    trackRef.current ? trackRef.current.scrollWidth / 2 : 0;

  // Animate first track (right to left)
  useAnimationFrame(() => {
    if (!logoTrackRef1.current) return;
    xRef1.current -= SPEED;

    const logoWidth = getTrackWidth(logoTrackRef1);
    if (xRef1.current <= -logoWidth) {
      xRef1.current += logoWidth; // Adjust for seamless scrolling
    }
    logoTrackRef1.current.style.transform = `translateX(${xRef1.current}px)`;
  });

  // Animate second track (left to right)
  useAnimationFrame(() => {
    if (!logoTrackRef2.current) return;
    xRef2.current += SPEED;

    const logoWidth = getTrackWidth(logoTrackRef2);
    if (xRef2.current >= logoWidth) {
      xRef2.current -= logoWidth; // Adjust for seamless scrolling
    }
    logoTrackRef2.current.style.transform = `translateX(${xRef2.current}px)`;
  });

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to drive innovation and
            excellence.
          </p>
        </div>
        <div className="relative">
          {/* First track - right to left */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="overflow-hidden">
              <div
                ref={logoTrackRef1}
                className="flex space-x-12 whitespace-nowrap"
                style={{ willChange: "transform" }}
              >
                {/* Duplicate partners for infinite scrolling */}
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center"
                  >
                    <Image
                      width={500}
                      height={500}
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-36 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second track - left to right */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="overflow-hidden">
              <div
                ref={logoTrackRef2}
                className="flex space-x-12 whitespace-nowrap"
                style={{ willChange: "transform" }}
              >
                {/* Duplicate partners for infinite scrolling */}
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center"
                  >
                    <Image
                      width={500}
                      height={500}
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-36 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
