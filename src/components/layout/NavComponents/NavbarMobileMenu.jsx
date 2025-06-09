// components/NavbarMobileMenu.jsx
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../../../components/ui/sheet";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Button } from "../../../components/ui/button";
import { navLinks } from "./navLinks";

export function NavbarMobileMenu({ openMobileMenus, toggleMobileMenu, closeAllMobileMenus, handleGetStartedClick }) {
  return (
    <div className="md:hidden ml-auto">
      <Sheet onOpenChange={closeAllMobileMenus}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <Bars3Icon className="w-6 h-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-gray-900 border-gray-700 text-white w-[20rem] p-6"
        >
          <SheetHeader className="mb-4 text-left">
            <SheetTitle className="text-2xl font-bold flex items-center">
              <img src="/logo.png" alt="Logo" width={50} height={25} className="h-auto" />
              <span className="text-lg font-semibold ml-2">
                <span className="text-blue-500">PURE</span>
                <span className="text-white">-AI</span>
              </span>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <div key={link.label} className="pt-2">
                <button
                  onClick={() => toggleMobileMenu(link.label)}
                  className="flex w-full items-center justify-between rounded-md py-2 px-2 text-lg font-semibold text-blue-400 hover:bg-gray-800"
                >
                  <span>{link.label}</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 transition-transform ${
                      openMobileMenus[link.label] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openMobileMenus[link.label] && (
                  <div className="ml-2 mt-2 space-y-1 border-l-2 border-gray-700 pl-4">
                    {link.dropdownContent.map((item) => {
                      const Icon = item.icon;
                      return (
                        <SheetClose key={item.title} asChild>
                          <a
                            href={item.href}
                            className="flex items-center gap-3 rounded-md py-2 px-2 text-gray-300 hover:bg-gray-800 hover:text-blue-300"
                          >
                            <Icon className="h-5 w-5" />
                            <span>{item.title}</span>
                          </a>
                        </SheetClose>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <SheetClose asChild>
              <Button
                onClick={handleGetStartedClick}
                className="mt-4 w-full py-3 text-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Get Started
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
