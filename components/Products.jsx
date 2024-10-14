"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";

// Updated card data to reflect AMF-SA's offerings
const cardData = [
  {
    id: 1,
    title: "Power System Engineering",
    image:
      "https://plus.unsplash.com/premium_photo-1682145728214-dbd62535af3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: [
      "Electrical grid design",
      "Transmission & distribution networks",
      "Energy management systems",
      "Power system protection",
    ],
  },
  {
    id: 2,
    title: "Renewable Energy Solutions",
    image:
      "https://images.unsplash.com/photo-1631378297854-185cff6b0986?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENpcmN1aXQlMjBCb2FyZHN8ZW58MHx8MHx8fDA%3D",
    points: [
      "Solar power systems",
      "Wind energy integration",
      "Hydroelectricity",
      "Energy storage technologies",
    ],
  },
  {
    id: 3,
    title: "Electrical Installation & Maintenance",
    image:
      "https://images.unsplash.com/photo-1545208942-e1c9c916524b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFJlbmV3YWJsZSUyMEVuZXJneXxlbnwwfHwwfHx8MA%3D%3D",
    points: [
      "Low & medium voltage systems",
      "Industrial & commercial installations",
      "Routine maintenance",
      "Safety inspections",
    ],
  },
  {
    id: 4,
    title: "Automation & Control Systems",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=300&fit=crop",
    points: [
      "SCADA systems integration",
      "PLC programming",
      "Process automation",
      "Industrial control systems",
    ],
  },
  {
    id: 5,
    title: "Energy Efficiency & Consulting",
    image:
      "https://cdn.pixabay.com/photo/2015/12/07/10/55/electric-1080584_1280.jpg",
    points: [
      "Energy audits",
      "Energy-saving technologies",
      "Cost optimization",
      "Sustainable building solutions",
    ],
  },
  {
    id: 6,
    title: "Lightning Protection Systems",
    image:
      "https://plus.unsplash.com/premium_photo-1661911021547-b0188f22d548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGlnaHRuaW5nJTIwUHJvdGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    points: [
      "Grounding systems",
      "Surge protection devices",
      "Transient voltage suppression",
      "Building protection",
    ],
  },
  {
    id: 7,
    title: "Turnkey Electrical Projects",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=300&fit=crop",
    points: [
      "End-to-end project management",
      "Electrical infrastructure",
      "Customized power solutions",
      "Commissioning and testing",
    ],
  },
];

export default function ElectricalServicesSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-0 lg:px-12 xl:px-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Comprehensive Electrical Solutions – Our Expertise
      </h2>
      <Swiper
        spaceBetween={30}
        loop={true}
        modules={[Navigation]}
        className="mySwiper rounded-md"
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
            <Card className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl flex flex-col min-h-[380px]">
              <Image
                src={card.image}
                alt={card.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <CardContent className="flex-grow p-6">
                <h3 className="text-xl font-semibold text-white mb-3 truncate">
                  {card.title}
                </h3>
                <ul className="list-disc pl-5 text-sm text-gray-300">
                  {card.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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
        className="custom-prev bg-main-300 text-white p-3 rounded-full shadow-lg hover:bg-main-400 transition duration-300 mr-4 flex items-center justify-center"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        className="custom-next bg-main-300 text-white p-3 rounded-full shadow-lg hover:bg-main-400 transition duration-300 flex items-center justify-center"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};
