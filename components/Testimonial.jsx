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
      image:
        "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      position: "CEO, Example Inc.",
      text: "This company exceeded our expectations. Their professionalism and commitment are unmatched!",
    },
    {
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      position: "Manager, Example Ltd.",
      text: "A wonderful experience working with this team. Highly recommended!",
    },
    {
      name: "Robert Johnson",
      image:
        "https://images.unsplash.com/photo-1525357816819-392d2380d821?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      position: "Director, Example Co.",
      text: "The quality of service provided by this company is excellent. We are very happy!",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <h2 className="text-4xl font-bold text-center text-main mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-10 shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24">
                    <Image
                      width={1000}
                      height={1000}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover rounded-full shadow-md"
                    />
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <h4 className="text-xl font-semibold text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-4 lg:px-12 xl:px-20 z-10">
          <button
            className="custom-prev p-4 bg-main rounded-full shadow-lg hover:bg-main/80 transition transform hover:scale-105"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="text-white w-8 h-8" />
          </button>
          <button
            className="custom-next p-4 bg-main rounded-full shadow-lg hover:bg-main/80 transition transform hover:scale-105"
            aria-label="Next Slide"
          >
            <ChevronRight className="text-white w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
