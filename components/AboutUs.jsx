import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-20 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Images Section */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern manufacturing facility with robotic arms"
                width={1000}
                height={1000}
                className="rounded-lg object-cover shadow-lg w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-30 rounded-lg"></div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Precision welding process"
                width={1000}
                height={1000}
                className="rounded-lg object-cover shadow-lg w-full h-full"
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

        {/* Team Members Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-100 mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1529633670936-b38c16e28235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODcyOXwwfDF8c2VhcmNofDV8fGVuZ2luZWVyc3xlbnwwfHx8fDE2NzM4MDQ2MjY&ixlib=rb-1.2.1&q=80&w=400"
                alt="Team Member 1"
                width={200}
                height={200}
                className="mx-auto rounded-full object-cover shadow-lg"
              />
              <h4 className="mt-4 text-xl font-semibold text-white">Mohammed Al-Shareef</h4>
              <p className="text-sm text-gray-400">General Manager</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODcyOXwwfDF8c2VhcmNofDZ8fGVuZ2luZWVyc3xlbnwwfHx8fDE2NzM4MDQ2MjY&ixlib=rb-1.2.1&q=80&w=400"
                alt="Team Member 2"
                width={200}
                height={200}
                className="mx-auto rounded-full object-cover shadow-lg"
              />
              <h4 className="mt-4 text-xl font-semibold text-white">Ahmed Al-Farsi</h4>
              <p className="text-sm text-gray-400">Technical Director</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1523297734813-4e8e5cc06d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODcyOXwwfDF8c2VhcmNofDR8fGVuZ2luZWVyc3xlbnwwfHx8fDE2NzM4MDQ2MjY&ixlib=rb-1.2.1&q=80&w=400"
                alt="Team Member 3"
                width={200}
                height={200}
                className="mx-auto rounded-full object-cover shadow-lg"
              />
              <h4 className="mt-4 text-xl font-semibold text-white">Ali Hassan</h4>
              <p className="text-sm text-gray-400">Operations Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}