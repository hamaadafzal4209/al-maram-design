"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

const cardData = [
  {
    id: 1,
    title: "High Voltage Power Lines",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
    points: [
      "Transmission of electricity",
      "High voltage systems",
      "Power grid infrastructure",
      "Safety considerations",
      "Long-distance energy transfer",
    ],
  },
  {
    id: 2,
    title: "Circuit Boards",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
    points: [
      "Electronic components",
      "Voltage regulation",
      "Circuit design",
      "Power distribution",
    ],
  },
  {
    id: 3,
    title: "Renewable Energy",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
    points: [
      "Solar panel voltage",
      "Wind turbine generators",
      "Energy storage systems",
      "Inverter technology",
      "Grid integration",
    ],
  },
  {
    id: 4,
    title: "Electric Vehicles",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=300&fit=crop",
    points: [
      "Battery voltage management",
      "Charging infrastructure",
      "Motor efficiency",
      "Power electronics",
    ],
  },
  {
    id: 5,
    title: "Smart Home Technology",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=300&fit=crop",
    points: [
      "Home automation",
      "Energy monitoring",
      "Voltage optimization",
      "Smart meters",
      "IoT devices",
    ],
  },
  {
    id: 6,
    title: "Industrial Electrical Systems",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=500&h=300&fit=crop",
    points: [
      "Three-phase power",
      "Motor control centers",
      "SCADA systems",
      "Power factor correction",
    ],
  },
  {
    id: 7,
    title: "Lightning Protection",
    image:
      "https://images.unsplash.com/photo-1429552077091-836152271555?w=500&h=300&fit=crop",
    points: [
      "Voltage spikes",
      "Grounding techniques",
      "Surge arresters",
      "Transient voltage suppression",
      "Equipment protection",
    ],
  },
  {
    id: 8,
    title: "Power Generation",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=300&fit=crop",
    points: [
      "Generators and alternators",
      "Voltage regulation",
      "Frequency control",
      "Power plant operations",
    ],
  },
  {
    id: 9,
    title: "Electrical Safety Equipment",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=300&fit=crop",
    points: [
      "Personal protective equipment",
      "Voltage testers",
      "Insulation materials",
      "Lockout/tagout procedures",
      "Arc flash protection",
    ],
  },
  {
    id: 10,
    title: "Energy Efficiency",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
    points: [
      "LED lighting technology",
      "Variable frequency drives",
      "Energy-efficient appliances",
      "Building management systems",
    ],
  },
];

export default function VoltageElectricitySlider() {
  const swiperRef = useRef(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:py-8 lg:px-12 xl:px-16 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        What We Offer – Products
      </h2>
      <Swiper
        spaceBetween={30}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onInit={(swiper) => (swiperRef.current = swiper)}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id} className="flex justify-center">
            <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <Image
                src={card.image}
                alt={card.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                <ul className="list-disc pl-5 text-sm text-gray-300">
                  {card.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Component */}
      <CustomNavigation swiperRef={swiperRef} />
    </div>
  );
}

const CustomNavigation = ({ swiperRef }) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        className="custom-prev bg-main-500 text-white p-3 rounded-full shadow-lg hover:bg-main-400 transition duration-300 mr-4 flex items-center justify-center"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        className="custom-next bg-main-500 text-white p-3 rounded-full shadow-lg hover:bg-main-400 transition duration-300 flex items-center justify-center"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};
