import Image from "next/image";
import { Facebook, Linkedin, Instagram, Twitter, Phone } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

export default function ContactSection() {
  return (
    <section className="py-16 mt-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side */}
          <div className="md:w-1/2 space-y-6">
            <Image
              src="/assets/logo.png"
              alt="Almaram Alfaneyah Logo"
              width={200}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-700 leading-relaxed">
              Almaram Alfaneyah Contracting Co. is a certified channel partner of
              Schneider Electric, specializing in the manufacturing of LV switchgear panels in
              the Kingdom of Saudi Arabia. With its Head Office in Jeddah, the company aims to establish a network of branches in major cities across Saudi Arabia, operating in accordance with the highly acclaimed IEC, ISO, and ASO standards.
            </p>
            <div className="">
            <SocialIcons/>
            </div>
          </div>

          {/* Right side */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold text-main mb-2">Office Address</h2>
            <div className="flex flex-col space-y-2 text-gray-600">
              <p className="flex items-center">
                <span className="text-main mr-2">📍</span>
                <span>Location: 108930, Jeddah 21351, K.S.A</span>
              </p>
              <p className="flex items-center">
                <span className="text-main mr-2">📞</span>
                <span>Call Us: +966 56 910 5617</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}