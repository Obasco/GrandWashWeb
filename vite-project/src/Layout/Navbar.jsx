import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-[#1F1F1F] to-[#2D2D2D] shadow-lg backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <img
              src={logo}
              alt="Grand Car Wash Logo"
              className="h-16 w-auto group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-bold text-lg">Grand</span>
              <span className="text-[#6FA3E3] text-xs font-semibold">
                Car Wash
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.href}
                  className="text-[#8A8A8A] hover:text-white transition-colors duration-300 font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6FA3E3] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <button className="hidden lg:block bg-gradient-to-r from-[#6FA3E3] to-[#5a8fd4] text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-[#6FA3E3]/50 transform hover:scale-105 transition-all duration-300">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1F1F1F] border-t border-[#3D3D3D] animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-[#8A8A8A] hover:text-[#6FA3E3] transition-colors duration-300 font-medium block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <button className="w-full bg-gradient-to-r from-[#6FA3E3] to-[#5a8fd4] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 mt-2">
                Book Now
              </button>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
