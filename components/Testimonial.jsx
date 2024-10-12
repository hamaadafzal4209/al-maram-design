"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      position: "CEO, Example Inc.",
      text: "This company exceeded our expectations. Their professionalism and commitment are unmatched!",
    },
    {
      name: "Jane Smith",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      position: "Manager, Example Ltd.",
      text: "A wonderful experience working with this team. Highly recommended!",
    },
    {
      name: "Robert Johnson",
      image: "https://images.unsplash.com/photo-1525357816819-392d2380d821?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      position: "Director, Example Co.",
      text: "The quality of service provided by this company is excellent. We are very happy!",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <h2 className="text-3xl font-semibold text-center text-main mb-8">
          What Our Clients Say
        </h2>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-between mb-4">
          <button
            className="swiper-button-prev p-3 bg-main rounded-full shadow-md hover:bg-main/80 transition"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <button
            className="swiper-button-next p-3 bg-main rounded-full shadow-md hover:bg-main/80 transition"
            aria-label="Next Slide"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-700 rounded-lg p-8 shadow-lg text-center">
                <Image
                  width={1000}
                  height={1000}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 object-cover rounded-full  mx-auto mb-4"
                />
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {testimonial.text}
                </p>
                <h4 className="text-main font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.position}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}