"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper/modules"; // Ensure Navigation is imported correctly
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react"; // Import Star icon
import { StarFilledIcon } from "@radix-ui/react-icons";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      position: "CEO, Example Inc.",
      text: "This company exceeded our expectations. Their professionalism and commitment are unmatched!",
      rating: 5, // Add rating
    },
    {
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      position: "Manager, Example Ltd.",
      text: "A wonderful experience working with this team. Highly recommended!",
      rating: 4, // Add rating
    },
    {
      name: "Robert Johnson",
      image:
        "https://images.unsplash.com/photo-1525357816819-392d2380d821?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      position: "Director, Example Co.",
      text: "The quality of service provided by this company is excellent. We are very happy!",
      rating: 5, // Add rating
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <h2 className="text-3xl font-bold text-center text-main mb-12">
          What Our Clients Say
        </h2>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Autoplay]} // Ensure Navigation module is included
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next", // Make sure classes match
            prevEl: ".custom-prev",
          }}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-800 rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition duration-300 ease-in-out">
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24">
                    <Image
                      width={1000}
                      height={1000}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover h-24 w-24 rounded-full shadow-md"
                    />
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-6">{testimonial.text}</p>

                {/* Stars Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarFilledIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <h4 className="text-xl font-semibold text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
