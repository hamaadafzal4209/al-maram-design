"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Images Section */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <Fade triggerOnce direction="up">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1661911309991-cc81afcce97d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern manufacturing facility with robotic arms"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-30 rounded-lg"></div>
              </div>
            </Fade>
            <Fade triggerOnce direction="up" delay={200}>
              <div className="relative h-[300px] md:h-[400px] mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=60"
                  alt="Precision welding process"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-30 rounded-lg"></div>
              </div>
            </Fade>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-gray-100">
            <Fade triggerOnce direction="up" delay={300}>
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500">
                Almaram Alfaneyah Manufacturing Company
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Almaram Alfaneyah Manufacturing Co. is a certified channel
                partner of Schneider Electric, dealing in the manufacturing of
                LV switchgear panels in the Kingdom of Saudi Arabia. The Head
                Office being in Jeddah, the company looks forward to a complete
                network of its branches in major cities of Saudi Arabia. The
                company is operating in accordance with the highly acclaimed
                IEC, ISO, and ASO standards.
              </p>
            </Fade>

            {/* Key Highlights */}
            <Fade triggerOnce direction="up" delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
              </div>
            </Fade>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mt-16">
          <Fade triggerOnce direction="up" delay={300}>
            <h3 className="text-3xl font-bold text-gray-100 mb-8">
              Meet Our Team
            </h3>
          </Fade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Fade triggerOnce direction="up" delay={300}>
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
            </Fade>

            {/* Team Member 2 */}
            <Fade triggerOnce direction="up" delay={400}>
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
            </Fade>

            {/* Team Member 3 */}
            <Fade triggerOnce direction="up" delay={500}>
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
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
