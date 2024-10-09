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
        {heroBanners.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div
              className="relative h-[70vh] md:h-[80vh]"
              style={{
                background: `url(${banner.imageUrls[0]}) no-repeat center`,
                backgroundSize: "cover",
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Centered Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {banner.title}
                </h2>
                <p className="text-sm md:text-lg max-w-xl">{banner.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="custom-prev absolute top-1/2 left-4 z-10 w-10 h-10 bg-white hover:bg-main hover:text-white text-gray-950 shadow-lg rounded-full flex items-center justify-center transition-all transform -translate-y-1/2"
        onClick={() => swiperRef.current?.swiper.slidePrev()}
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="custom-next absolute top-1/2 right-4 z-10 w-10 h-10 bg-white hover:bg-main hover:text-white text-gray-950 shadow-lg rounded-full flex items-center justify-center transition-all transform -translate-y-1/2"
        onClick={() => swiperRef.current?.swiper.slideNext()}
      >
        <FiChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Hero;
