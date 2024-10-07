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
      <NavLink href="/link1" isMobile={isMobile}>
        Link 1
      </NavLink>
      <NavLink href="/link2" isMobile={isMobile}>
        Link 2
      </NavLink>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`${
            isMobile ? "w-full justify-between" : ""
          } flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-main hover:text-white transition-colors`}
        >
          Dropdown 1
          <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2">
          <DropdownMenuItem>
            <Link href="/dropdown1/item1" className="w-full text-sm hover:text-main">
              Item 1
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dropdown1/item2" className="w-full text-sm hover:text-main">
              Item 2
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`${
            isMobile ? "w-full justify-between" : ""
          } flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-main hover:text-white transition-colors`}
        >
          Dropdown 2
          <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2">
          {[...Array(8)].map((_, i) => (
            <DropdownMenuItem key={i}>
              <Link href={`/dropdown2/item${i + 1}`} className="w-full text-sm hover:text-main">
                Item {i + 1}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <NavLink href="/link3" isMobile={isMobile}>
        Link 3
      </NavLink>
      <NavLink href="/link4" isMobile={isMobile}>
        Link 4
      </NavLink>
      <NavLink href="/link5" isMobile={isMobile}>
        Link 5
      </NavLink>
    </>
  );

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image
              width={160}
              height={160}
              src={"/assets/logo.png"}
              alt="Logo"
              className="w-16"
            />
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
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
    } flex items-center px-4 py-2 text-sm font-semibold rounded-md hover:bg-main hover:text-white transition duration-200`}
  >
    {children}
  </Link>
);