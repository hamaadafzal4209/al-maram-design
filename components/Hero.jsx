"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Hero = () => {
  const swiperRef = useRef(null);

  const heroBanners = [
    {
      _id: "1",
      imageUrls: ["/assets/pexels-pixabay-257736.jpg"],
    },
    {
      _id: "2",
      imageUrls: ["/assets/pexels-sabian-mahmud-193021066-11477908.jpg"],
    },
    {
      _id: "3",
      imageUrls: ["/assets/pexels-didsss-7867332.jpg"],
    },
    {
      _id: "4",
      imageUrls: ["/assets/pexels-didsss-7867329.jpg"],
    },
    {
      _id: "5",
      imageUrls: ["/assets/pexels-blue-13287446.jpg"],
    },
  ];

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {heroBanners.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div
              className="h-[400px]"
              style={{
                background: `url(${banner.imageUrls[0]}) no-repeat top`,
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Previous Button */}
      <button
        className="custom-prev absolute top-1/2 left-4 z-10 w-8 h-8 bg-white text-gray-950 shadow-md rounded-full flex items-center justify-center transition"
        onClick={() => swiperRef.current?.swiper.slidePrev()}
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        className="custom-next absolute top-1/2 right-4 z-10 w-8 h-8 bg-white text-gray-950 shadow-md rounded-full flex items-center justify-center transition"
        onClick={() => swiperRef.current?.swiper.slideNext()}
      >
        <FiChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Hero;
