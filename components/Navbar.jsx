"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const NavItems = ({ isMobile = false }) => (
    <>
      <NavLink href="/link1" isMobile={isMobile}>Link 1</NavLink>
      <NavLink href="/link2" isMobile={isMobile}>Link 2</NavLink>
      <DropdownMenu>
        <DropdownMenuTrigger className={`${isMobile ? "w-full justify-between" : ""} flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground`}>
          Dropdown 1
          <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/dropdown1/item1" className="w-full">Item 1</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dropdown1/item2" className="w-full">Item 2</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className={`${isMobile ? "w-full justify-between" : ""} flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground`}>
          Dropdown 2
          <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {[...Array(8)].map((_, i) => (
            <DropdownMenuItem key={i}>
              <Link href={`/dropdown2/item${i + 1}`} className="w-full">Item {i + 1}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <NavLink href="/link3" isMobile={isMobile}>Link 3</NavLink>
      <NavLink href="/link4" isMobile={isMobile}>Link 4</NavLink>
      <NavLink href="/link5" isMobile={isMobile}>Link 5</NavLink>
    </>
  )

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            Logo
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-1">
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
              <nav className="flex flex-col mt-6">
                <NavItems isMobile />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children, isMobile }) => (
  <Link 
    href={href} 
    className={`${
      isMobile ? "w-full" : ""
    } flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground`}
  >
    {children}
  </Link>
)