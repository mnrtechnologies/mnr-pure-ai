import React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#docs", label: "Docs" },
];

export function Navbar() {
  return (
    <nav className="w-full p-4 border-b border-gray-700 fixed top-0 bg-gray-900/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Showt Logo"
            width={50}
            height={30}
            className="h-auto"
          />
          <span className="text-lg font-semibold">
            <span className="text-blue-500">PURE</span>-AI
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-2 lg:space-x-4">
          {navLinks.map((link) => (
                      <Button
              key={link.label}
              variant="ghost"
              asChild
              className="text-gray-300 hover:text-white hover:bg-blue-700/50"
            >
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </div>
        <div className="hidden md:flex flex-shrink-0 items-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white h-10 w-10 flex items-center justify-center p-0">
                <Bars3Icon className="w-8 h-8" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gray-900 border-gray-700 text-white custom-sheet-width"
            >
              <SheetHeader className="mb-2 text-left">
                <SheetTitle className="text-2xl font-bold flex items-center">
                  <img
                    src="/Short logo.png"
                    alt="Logo"
                    width={50}
                    height={25}
                    className="h-auto"
                  />
                  <span className="text-lg font-semibold ml-2">
                    <span className="text-blue-500">PURE</span>
                    <span className="text-white">-AI</span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <SheetClose key={link.label} asChild>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-300 py-2 px-3 rounded-md text-lg hover:bg-gray-800 transition-colors"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4 py-3 text-md">
                    Get Started
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
