"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  const [openSections, setOpenSections] = useState({});

  // Toggle function for accordion
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <nav className="shadow-sm bg-gray-900">
      <div className="flex items-center justify-between px-6 py-4 lg:px-12 2xl:px-20">
        <Link href="/">
          <Image
            width={1000}
            height={1000}
            src={"/assets/logo.png"}
            alt="Logo"
            className="w-36"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center gap-8 font-semibold">
          <Link
            href="/"
            className="hover:text-main-300 transition-colors duration-200"
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center py-2 hover:text-main-300 transition-colors duration-200">
              Company
              <ChevronDown className="ml-1 h-4 w-4 text-main-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 bg-gray-800 text-white rounded-lg shadow-lg">
              <DropdownMenuItem>
                <Link href="/" className="w-full text-sm hover:text-main-300 transition-colors duration-200">
                  Quality Control
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="w-full text-sm hover:text-main-300 transition-colors duration-200">
                  Certification
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/"
            className="hover:text-main-300 transition-colors duration-200"
          >
            Projects
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center py-2 hover:text-main-300 transition-colors duration-200">
              Products
              <ChevronDown className="ml-1 h-4 w-4 text-main-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 bg-gray-800 text-white rounded-lg shadow-lg">
              <DropdownMenuItem>
                <Link href="/" className="w-full text-sm hover:text-main-300 transition-colors duration-200">
                  Low Voltage Switchgear
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="w-full text-sm hover:text-main-300 transition-colors duration-200">
                  Motor Control Centers
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="w-full text-sm hover:text-main-300 transition-colors duration-200">
                  HVAC Control Panels
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="w-full text-sm hover:text-main-300 transition-colors duration-200">
                  Synchronizing Panels
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="w-full text-sm hover:text-main-300 transition-colors duration-200">
                  Automatic/Manual Transfer Switch Panels
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="w-full text-sm hover:text-main-300 transition-colors duration-200">
                  Power Factor Improvement Panels
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="w-full text-sm hover:text-main-300 transition-colors duration-200">
                  Cables and Bus Bar Trunking
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/"
            className="hover:text-main-300 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="/"
            className="hover:text-main-300 transition-colors duration-200"
          >
            About Us
          </Link>
        </div>

        <div className="hidden md:flex md:items-center">
          <Link href="/">
            <Button className="bg-main-300 text-white text-base py-2 px-4 rounded-md hover:bg-main-400 transition duration-200">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6 text-black" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] min-h-screen overflow-y-auto no-scrollbar bg-gray-900 text-white"
            >
              <nav className="flex flex-col mt-6 gap-4">
                <Link
                  href="/"
                  className="block text-base font-semibold hover:text-main-300 transition-colors duration-200"
                >
                  Home
                </Link>
                <div>
                  <button
                    className="flex items-center justify-between w-full py-2 font-semibold rounded-md hover:text-main-300 transition-colors duration-200"
                    onClick={() => toggleSection("company")}
                  >
                    Company
                    <ChevronDown
                      className={`ml-1 h-4 w-4 text-main-300 transform transition-transform duration-200 ${
                        openSections.company ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`flex flex-col gap-4 bg-gray-800 overflow-hidden transition-max-height duration-300 ease-in-out ${
                      openSections.company ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <Link
                      href="/"
                      className="block p-3 pb-0 text-base hover:text-main-300 transition-colors duration-200"
                    >
                      Quality Control
                    </Link>
                    <Link
                      href="/"
                      className="block px-3 pb-3 text-base hover:text-main-300 transition-colors duration-200"
                    >
                      Certification
                    </Link>
                  </div>
                </div>
                <Link
                  href="/"
                  className="block text-base font-semibold hover:text-main-300 transition-colors duration-200"
                >
                  Projects
                </Link>
                <div>
                  <button
                    className="flex items-center justify-between w-full py-2 text-base font-semibold rounded-md hover:text-main-300 transition-colors duration-200"
                    onClick={() => toggleSection("products")}
                  >
                    Products
                    <ChevronDown
                      className={`ml-1 h-4 w-4 text-main-300 transform transition-transform duration-200 ${
                        openSections.products ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`gap-3 bg-gray-800 overflow-hidden transition-max-height duration-300 ease-in-out ${
                      openSections.products ? "max-h-full" : "max-h-0"
                    }`}
                  >
                    <Link
                      href="/"
                      className="block text-base p-3 pb-0 hover:text-main-300 transition-colors duration-200"
                    >
                      Low Voltage Switchgear
                    </Link>
                    <Link
                      href="/"
                      className="block text-base p-3 pb-0 hover:text-main-300 transition-colors duration-200"
                    >
                      Motor Control Centers
                    </Link>
                    <Link
                      href="/"
                      className="block text-base p-3 pb-0 hover:text-main-300 transition-colors duration-200"
                    >
                      HVAC Control Panels
                    </Link>
                    <Link
                      href="/"
                      className="block text-base p-3 pb-0 hover:text-main-300 transition-colors duration-200"
                    >
                      Synchronizing Panels
                    </Link>
                    <Link
                      href="/"
                      className="block text-base p-3 pb-0 hover:text-main-300 transition-colors duration-200"
                    >
                      Automatic/Manual Transfer Switch Panels
                    </Link>
                    <Link
                      href="/"
                      className="block text-base p-3 pb-0 hover:text-main-300 transition-colors duration-200"
                    >
                      Power Factor Improvement Panels
                    </Link>
                    <Link
                      href="/"
                      className="block text-base p-3 hover:text-main-300 transition-colors duration-200"
                    >
                      Cables and Bus Bar Trunking
                    </Link>
                  </div>
                </div>
                <Link
                  href="/"
                  className="block text-base font-semibold hover:text-main-300 transition-colors duration-200"
                >
                  Services
                </Link>
                <Link
                  href="/"
                  className="block text-base font-semibold hover:text-main-300 transition-colors duration-200"
                >
                  About Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;