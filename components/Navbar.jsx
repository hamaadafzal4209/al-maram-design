"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavItems = ({ isMobile = false }) => (
    <>
      <NavLink href="/" isMobile={isMobile}>
        Home
      </NavLink>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`${
            isMobile ? "w-full justify-between" : ""
          } flex items-center px-3 py-2 text-sm font-semibold rounded-md hover:text-main transition-colors`}
        >
          Company
          <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2">
          <DropdownMenuItem>
            <Link href="/" className="w-full text-sm hover:text-main">
              Quality Control
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/" className="w-full text-sm hover:text-main">
              Certification
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <NavLink href="/" isMobile={isMobile}>
        Projects
      </NavLink>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`${
            isMobile ? "w-full justify-between" : ""
          } flex items-center px-3 py-2 text-sm font-semibold rounded-md hover:text-main transition-colors`}
        >
          Products
          <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2">
          <DropdownMenuItem>
            <Link href="/" className="w-full text-sm hover:text-main">
              Low Voltage Switchgear
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/" className="w-full text-sm hover:text-main">
              Motor Control Centers
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/" className="w-full text-sm hover:text-main">
              HVAC Control Panels
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/" className="w-full text-sm hover:text-main">
              Synchronizing Panels
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/" className="w-full text-sm hover:text-main">
              Automatic/Manual Transfer Switch Panels
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/" className="w-full text-sm hover:text-main">
              Power Factor Improvement Panels
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/" className="w-full text-sm hover:text-main">
              Cables and Bus Bar Trunking
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <NavLink href="/" isMobile={isMobile}>
        Services
      </NavLink>
      <NavLink href="/" isMobile={isMobile}>
        About Us
      </NavLink>
      <NavLink href="/" isMobile={isMobile}>
        Contact Us
      </NavLink>
    </>
  );

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 lg:px-12 xl:px-20">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image
              width={1000}
              height={1000}
              src={"/assets/logo.png"}
              alt="Logo"
              className="w-36"
            />
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4 capitalize font-semibold">
          <NavItems />
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" onClick={toggleMenu}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col mt-6 space-y-2">
                <NavItems isMobile />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ href, children, isMobile }) => (
  <Link
    href={href}
    className={`${
      isMobile ? "w-full" : ""
    } flex items-center px-4 py-2 text-sm font-semibold rounded-md hover:text-main transition duration-200`}
  >
    {children}
  </Link>
);
