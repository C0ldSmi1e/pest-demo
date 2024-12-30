"use client";

import Image from "next/image";
import Inspection from "@/components/inspection";
import Call from "@/components/call";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = ["home", "how-it-works", "about-us", "reviews", "faq"];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Reduced height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Image
            src="https://placehold.co/100x100.png"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />

          {/* Desktop Navigation + CTA - All aligned right */}
          <div className="hidden lg:flex items-center space-x-8">
            {sectionIds.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-600 hover:text-color4 transition-colors duration-200 font-medium"
              >
                {item.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </button>
            ))}
            <div className="flex items-center space-x-4">
              <Call />
              <Inspection />
            </div>
          </div>

          {/* Mobile Right Section */}
          <div className="lg:hidden flex items-center space-x-4">
            <Call />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {sectionIds.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-color4 hover:bg-gray-50 rounded-md"
              >
                {item.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </button>
            ))}
            <div className="flex flex-col space-y-2 px-3 py-2">
              <Inspection />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
