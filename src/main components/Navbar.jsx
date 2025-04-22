import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import logo from "../images/logo.png";

const Navbar = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <a className="block" href="/">
                <span className="sr-only">Home</span>
                <img src={logo} alt="Productive Energy Solutions" className="h-16 w-auto" />
              </a>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-8 text-sm font-medium">
                  <li>
                    <a
                      className={`transition ${
                        isActive("/") ? "text-red-800 font-bold" : "text-gray-700 hover:text-red-600"
                      }`}
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className={`transition ${
                        isActive("/services") ? "text-red-800 font-bold" : "text-gray-700 hover:text-red-600"
                      }`}
                      href="/services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      className={`transition ${
                        isActive("/about") ? "text-red-800 font-bold" : "text-gray-700 hover:text-red-600"
                      }`}
                      href="/about"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA */}
              <button
                onClick={() => setShowContactPopup(true)}
                className="hidden md:flex items-center gap-2 rounded-full bg-red-800 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
              >
                Contact Us
                <ArrowOutwardIcon className="-rotate-30 text-white" fontSize="small" />
              </button>

              {/* Mobile menu toggle */}
              <div className="block md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  className="rounded-sm p-2 text-gray-600 transition hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Nav Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 pb-4">
              <nav className="space-y-2 text-sm font-medium text-gray-700">
                <a
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md transition ${
                    isActive("/") ? "text-red-800 font-semibold" : "hover:bg-gray-100"
                  }`}
                >
                  Home
                </a>
                <a
                  href="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md transition ${
                    isActive("/services") ? "text-red-800 font-semibold" : "hover:bg-gray-100"
                  }`}
                >
                  Services
                </a>
                <a
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md transition ${
                    isActive("/about") ? "text-red-800 font-semibold" : "hover:bg-gray-100"
                  }`}
                >
                  About
                </a>
                <button
                  onClick={() => {
                    setShowContactPopup(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-white bg-red-800 rounded-full hover:bg-red-700 transition"
                >
                  Contact Us
                  <ArrowOutwardIcon className="-rotate-30 text-white" fontSize="small" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Contact popup modal */}
      {showContactPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl p-6 space-y-4 shadow-xl max-w-sm w-full text-center">
            <h2 className="text-lg font-bold text-gray-800">Get in Touch</h2>

            <div className="space-y-2">
              <a
                href="mailto:info@productiveenergy.com?subject=Requesting&[Consulting&or&Training]&Services"
                className="block w-full px-4 py-2 bg-red-800 text-white rounded-full hover:bg-gray-900"
              >
                Email Us
              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText("info@productiveenergy.com");
                  alert("Email address copied!");
                }}
                className="block w-full px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                Copy Email Address
              </button>

              <div className="text-sm text-gray-700 mt-2">
                <p>Or reach us at:</p>
                <p className="font-semibold">+1 (608) 232-1861</p>
              </div>
            </div>

            <button
              onClick={() => setShowContactPopup(false)}
              className="mt-4 text-sm text-gray-500 underline hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
