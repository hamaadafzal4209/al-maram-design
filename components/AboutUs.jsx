"use client";

import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";
import { useEffect } from "react";

export default function AboutSection() {
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll(".fade-in");
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-20 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Images Section */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <Slide direction="up" triggerOnce duration={1000}>
              <div className="relative h-[400px]">
                <Image
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Modern manufacturing facility with robotic arms"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-30 rounded-lg"></div>
              </div>
            </Slide>
            <Slide direction="up" triggerOnce duration={1000}>
              <div className="relative h-[400px] mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=60"
                  alt="Precision welding process"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-30 rounded-lg"></div>
              </div>
            </Slide>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-gray-100">
            <Slide direction="up" triggerOnce duration={1000}>
              <h2 className="text-4xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500">
                Almaram Alfaneyah Contracting Company
              </h2>
            </Slide>
            <Slide direction="up" triggerOnce duration={1000}>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Almaram Alfaneyah Contracting Co. is a certified channel partner
                of Schneider Electric, dealing in the manufacturing of LV
                switchgear panels in the Kingdom of Saudi Arabia. The Head
                Office being in Jeddah, the company looks forward to a complete
                network of its branches in major cities of Saudi Arabia. The
                company is operating in accordance with the highly acclaimed
                IEC, ISO, and ASO standards.
              </p>
            </Slide>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Slide direction="up" triggerOnce duration={1000}>
                <div className="flex items-center">
                  <Image
                    width={48}
                    height={48}
                    src="/assets/engennier.png"
                    alt="Expert Engineers"
                    className="w-12 h-12"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl text-white">
                      Skilled Workforce
                    </h3>
                    <p className="text-sm text-gray-400">
                      Experienced Engineers and Technicians
                    </p>
                  </div>
                </div>
              </Slide>
              <Slide direction="up" triggerOnce duration={1000}>
                <div className="flex items-center">
                  <Image
                    width={48}
                    height={48}
                    src="/assets/award.png"
                    alt="Award"
                    className="w-12 h-12"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl text-white">
                      Certifications
                    </h3>
                    <p className="text-sm text-gray-400">
                      Recognized for Excellence and Quality
                    </p>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mt-16">
          <Slide direction="up" triggerOnce duration={1000}>
            <h3 className="text-3xl font-bold text-gray-100 mb-8">
              Meet Our Team
            </h3>
          </Slide>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Slide direction="up" triggerOnce duration={1000}>
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full shadow-lg transition-transform transform group-hover:scale-110 duration-300 ease-out group-hover:shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1528900403525-dc523d4f18d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDI%3D"
                    alt="Team Member 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h4 className="mt-4 text-xl font-semibold text-main-300">
                  Mohammed Al-Shareef
                </h4>
                <p className="text-sm text-gray-400">General Manager</p>
              </div>
            </Slide>

            {/* Team Member 2 */}
            <Slide direction="up" triggerOnce duration={1000}>
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full shadow-lg transition-transform transform group-hover:scale-110 duration-300 ease-out group-hover:shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=M3wxMjA3fDF8c2VhcmNofDZ8fGVuZ2luZWVyc3xlbnwwfHx8fHwxNjcxNTg0NTUz&ixlib=rb-4.0.3&q=80&w=400"
                    alt="Team Member 2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h4 className="mt-4 text-xl font-semibold text-main-300">
                  Ahmed Al-Farsi
                </h4>
                <p className="text-sm text-gray-400">Technical Director</p>
              </div>
            </Slide>

            {/* Team Member 3 */}
            <Slide direction="up" triggerOnce duration={1000}>
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full shadow-lg transition-transform transform group-hover:scale-110 duration-300 ease-out group-hover:shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Team Member 3"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h4 className="mt-4 text-xl font-semibold text-main-300">
                  Ali Hassan
                </h4>
                <p className="text-sm text-gray-400">Operations Manager</p>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
}
