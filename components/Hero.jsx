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
      imageUrls: ["/assets/banner-1.jpg"],
      title: "Explore the Beauty of Nature",
      subtitle: "Discover the world's finest landscapes",
    },
    {
      _id: "2",
      imageUrls: ["/assets/banner-2.jpg"],
      title: "Adventure Awaits",
      subtitle: "Embark on a journey like never before",
    },
    {
      _id: "3",
      imageUrls: ["/assets/banner-3.jpg"],
      title: "Feel the Serenity",
      subtitle: "Escape the noise and find peace",
    },
    {
      _id: "4",
      imageUrls: ["/assets/banner-4.jpg"],
      title: "Majestic Mountains",
      subtitle: "Breathe in the fresh air of the mountains",
    },
    {
      _id: "5",
      imageUrls: ["/assets/banner-5.jpg"],
      title: "Ocean Vibes",
      subtitle: "Let the waves calm your soul",
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
              className="relative h-[80vh]"
              style={{
                background: `url(${banner.imageUrls[0]}) no-repeat center`,
                backgroundSize: "cover",
              }}
            >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Text Content with Background Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <div className="bg-black bg-opacity-60 p-4 md:p-8 rounded-lg">
                  <h1
                    className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-fadeInUp"
                    style={{
                      animationDuration: "1s",
                      animationDelay: "0.3s",
                      animationFillMode: "forwards",
                    }}
                  >
                    {banner.title}
                  </h1>
                  <p
                    className="text-lg md:text-2xl opacity-0 animate-fadeInUp"
                    style={{
                      animationDuration: "1.5s",
                      animationDelay: "0.5s",
                      animationFillMode: "forwards",
                    }}
                  >
                    {banner.subtitle}
                  </p>
                </div>
              </div>
            </div>
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
