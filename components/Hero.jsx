"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Hero = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const heroBanners = [
    {
      _id: "1",
      imageUrls: ["/assets/banner-1.jpg"],
      title: "Project Design & Estimation Department",
      subtitle:
        "Providing comprehensive design services for various equipment and steel structures, ensuring precision and innovative solutions for your project needs.",
    },
    {
      _id: "2",
      imageUrls: ["/assets/banner-2.jpg"],
      title: "Manufacturing Department",
      subtitle:
        "Specializing in producing high-quality products using cutting-edge machinery, ensuring durability and efficiency in every piece we manufacture.",
    },
    {
      _id: "3",
      imageUrls: ["/assets/banner-3.jpg"],
      title: "Quality Control Department",
      subtitle:
        "Ensuring our products meet the highest standards through rigorous testing and modern techniques, delivering excellence in every detail.",
    },
    {
      _id: "4",
      imageUrls: ["/assets/banner-4.jpg"],
      title: "Research & Development",
      subtitle:
        "Focused on continuous innovation, developing new technologies and improving processes to provide state-of-the-art solutions to our clients.",
    },
    {
      _id: "5",
      imageUrls: ["/assets/banner-5.jpg"],
      title: "Customer Service",
      subtitle:
        "Dedicated to delivering exceptional customer support, offering professional assistance to meet your needs with efficiency and care.",
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={handleSlideChange}
      >
        {heroBanners.map((banner, index) => (
          <SwiperSlide key={banner._id}>
            <div
              className="relative h-[70vh] md:h-[80vh]"
              style={{
                background: `url(${banner.imageUrls[0]}) no-repeat center`,
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute max-w-5xl mx-auto w-[90%] inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <div className="bg-black bg-opacity-60 p-4 md:p-8 rounded-lg shadow-lg">
                  <h1
                    className={`hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 ${
                      index === activeIndex
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    style={{
                      animationDuration: "0.8s",
                      animationDelay: `${
                        index === activeIndex ? "0.2s" : "0s"
                      }`,
                      animationFillMode: "forwards",
                    }}
                  >
                    {banner.title}
                  </h1>
                  <p
                    className={`hero-subtitle text-sm sm:text-lg md:text-xl lg:text-2xl ${
                      index === activeIndex
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    style={{
                      animationDuration: "0.8s",
                      animationDelay: `${
                        index === activeIndex ? "0.4s" : "0s"
                      }`,
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

      <button
        className="custom-prev absolute top-1/2 left-4 z-10 w-8 h-8 bg-white hover:bg-main hover:text-white text-gray-950 shadow-md rounded-full flex items-center justify-center transition"
        onClick={() => swiperRef.current?.swiper.slidePrev()}
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="custom-next absolute top-1/2 right-4 z-10 w-8 h-8 bg-white hover:bg-main hover:text-white text-gray-950 shadow-md rounded-full flex items-center justify-center transition"
        onClick={() => swiperRef.current?.swiper.slideNext()}
      >
        <FiChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Hero;