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
import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <section className="py-20 md:py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side */}
          <div className="md:w-1/2 space-y-8">
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
                    <div className="gradient-icon-border">
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-full text-gray-300 hover:text-blue-600 transition-colors duration-300"
                        aria-label="Facebook"
                      >
                        <FaFacebook className="text-2xl" />
                      </a>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Facebook</TooltipContent>
                </Tooltip>
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <div className="gradient-icon-border">
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-full text-gray-300 hover:text-pink-600 transition-colors duration-300"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="text-2xl" />
                      </a>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Instagram</TooltipContent>
                </Tooltip>
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <div className="gradient-icon-border">
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-full text-gray-300 hover:text-blue-500 transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="text-2xl" />
                      </a>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <div className="gradient-icon-border">
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-full text-gray-300 hover:text-blue-400 transition-colors duration-300"
                        aria-label="Twitter"
                      >
                        <FaTwitter className="text-2xl" />
                      </a>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Twitter</TooltipContent>
                </Tooltip>
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <div className="gradient-icon-border">
                      <a
                        href="https://www.whatsapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-full text-gray-300 hover:text-green-500 transition-colors duration-300"
                        aria-label="WhatsApp"
                      >
                        <FaWhatsapp className="text-2xl" />
                      </a>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>WhatsApp</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Right side */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-semibold text-main mb-4">
              Office Address
            </h2>
            <div className="flex flex-col gap-4 text-gray-400">
              <div className="flex items-center gap-4">
                <div className="gradient-icon-border">
                  <span className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-full text-gray-300 hover:text-blue-500 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-xl" />
                  </span>
                </div>
                <span>Location: 108930, Jeddah 21351, K.S.A</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="gradient-icon-border">
                  <span className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-full text-gray-300 hover:text-green-700 transition-colors duration-300">
                    <FaPhoneAlt className="text-xl" />
                  </span>
                </div>
                <span>Call Us: +966 56 910 5617</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-main mb-4">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-400 pb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="px-4 py-3 rounded-md bg-gray-700 text-gray-300 border border-gray-600 focus:ring focus:ring-main focus:border-main"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-400 pb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="px-4 py-3 rounded-md bg-gray-700 text-gray-300 border border-gray-600 focus:ring focus:ring-main focus:border-main"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-gray-400 pb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="px-4 py-3 rounded-md bg-gray-700 text-gray-300 border border-gray-600 focus:ring focus:ring-main focus:border-main"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="block w-full bg-gradient-to-r from-main-300 to-main-400 text-white text-base font-semibold rounded-md shadow-md hover:shadow-lg hover:from-main-400 hover:to-main-300 transition duration-200"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16">
          <iframe
            title="Almaram Alfaneyah Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.486602175791!2d108.20216201474857!3d16.05440668888467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a3e80ab1c8d1%3A0x27f194c7ef7025de!2sAlmaram%20Alfaneyah%20Manufacturing%20Co.!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}