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
  const logoTrackRef = useRef(null);
  const xRef = useRef(0);
  const SPEED = 1;

  const getTrackWidth = (trackRef) => (trackRef.current ? trackRef.current.scrollWidth / 2 : 0);

  useAnimationFrame(() => {
    if (!logoTrackRef.current) return;

    // Animate track (right to left)
    xRef.current -= SPEED;
    const logoWidth = getTrackWidth(logoTrackRef);
    if (xRef.current <= -logoWidth) {
      xRef.current += logoWidth; // Wrap around
    }
    logoTrackRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to drive innovation and excellence.
          </p>
        </div>
        <div className="relative">
          {/* Single track - right to left */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="overflow-hidden">
              <div
                ref={logoTrackRef}
                className="flex space-x-12 whitespace-nowrap"
                style={{ willChange: "transform" }}
              >
                {/* Duplicate partners for seamless scrolling */}
                {[...partners, ...partners].map((partner, index) => (
                  <div key={index} className="flex-shrink-0 flex flex-col items-center">
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