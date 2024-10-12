import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Images Section */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern manufacturing facility with robotic arms"
                width={1000}
                height={1000}
                className="rounded-lg object-cover shadow-lg w-full mt-6 h-full min-h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-30 rounded-lg"></div>
            </div>
            <div className="relative mt-4 sm:mt-0">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Precision welding process"
                width={1000}
                height={1000}
                className="rounded-lg object-cover shadow-lg w-full h-full min-h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-30 rounded-lg"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-gray-100">
            <h2 className="text-4xl font-extrabold leading-tight mb-6">
              Almaram Alfaneyah Contracting Company
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Almaram Alfaneyah Contracting Co. is a certified channel partner
              of Schneider Electric, dealing in the manufacturing of LV
              switchgear panels in the Kingdom of Saudi Arabia. The Head Office
              being in Jeddah, the company looks forward to a complete network
              of its branches in major cities of Saudi Arabia. The company is
              operating in accordance with the highly acclaimed IEC, ISO, and
              ASO standards.
            </p>

            {/* Key Highlights */}
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
                    Industry Certifications
                  </h3>
                  <p className="text-sm text-gray-400">
                    Recognized for Excellence and Quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
