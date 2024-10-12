"use client";

import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

export default function ContactSection() {
  return (
    <section className="py-16 mt-4 bg-gray-800">
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
            <p className="text-gray-300 leading-relaxed">
              Almaram Alfaneyah Manufacturing Co. is a certified channel partner
              of Schneider Electric, specializing in the manufacturing of LV
              switchgear panels in the Kingdom of Saudi Arabia. With its Head
              Office in Jeddah, the company aims to establish a network of
              branches in major cities across Saudi Arabia, operating in
              accordance with the highly acclaimed IEC, ISO, and ASO standards.
            </p>
            <div className="flex space-x-4">
              <TooltipProvider>
                {/* Social Media Icons with Tooltips */}
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 text-gray-300 hover:text-blue-600 transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-2xl" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Facebook</TooltipContent>
                </Tooltip>
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 text-gray-300 hover:text-pink-600 transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-2xl" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Instagram</TooltipContent>
                </Tooltip>
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 text-gray-300 hover:text-blue-500 transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="text-2xl" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Twitter</TooltipContent>
                </Tooltip>
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <a
                      href="https://www.whatsapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 text-gray-300 hover:text-green-500 transition-colors duration-300"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp className="text-2xl" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>WhatsApp</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Right side */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold text-main mb-2">
              Office Address
            </h2>
            <div className="flex flex-col space-y-2 text-gray-400">
              <p className="flex items-center">
                <FaMapMarkerAlt className="text-main mr-2" />{" "}
                <span>Location: 108930, Jeddah 21351, K.S.A</span>
              </p>
              <p className="flex items-center">
                <FaPhoneAlt className="text-main mr-2" />
                <span>Call Us: +966 56 910 5617</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
