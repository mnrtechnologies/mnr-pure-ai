// components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import { Button } from "../ui/button";
import { NavbarLogo } from "./NavComponents/NavbarLogo";
import { NavbarDesktopMenu } from "./NavComponents/NavbarDesktopMenu";
import { NavbarMobileMenu } from "./NavComponents/NavbarMobileMenu";

export function Navbar() {
  const [openMobileMenus, setOpenMobileMenus] = useState({});
  const navigate = useNavigate();

  const toggleMobileMenu = (label) => {
    setOpenMobileMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const closeAllMobileMenus = () => setOpenMobileMenus({});

  const handleGetStartedClick = () => {
    navigate("/", { state: { scrollToId: "book-now-section" } });
    closeAllMobileMenus();
  };

  return (
    <nav className="w-full p-4 border-b border-gray-700 fixed top-0 bg-gray-900/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex items-center">
        <NavbarLogo />
        <NavbarDesktopMenu />
        <div className="hidden md:flex flex-shrink-0 items-center">
          <Button
            onClick={handleGetStartedClick}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Get Started
          </Button>
        </div>
        <NavbarMobileMenu
          openMobileMenus={openMobileMenus}
          toggleMobileMenu={toggleMobileMenu}
          closeAllMobileMenus={closeAllMobileMenus}
          handleGetStartedClick={handleGetStartedClick}
        />
      </div>
    </nav>
  );
}
