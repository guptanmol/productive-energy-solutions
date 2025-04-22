import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [showContactPopup, setShowContactPopup] = useState(false);

  return (
    <>
      <ul
        className="relative flex w-fit rounded-full border-2 border-black bg-white px-4 py-1"
        onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
      >
        {NAV_LINKS.map((link) => (
          <Tab key={link.href} label={link.label} href={link.href} setPosition={setPosition} />
        ))}

        {/* Contact Us trigger button */}
        <li
          className="ml-4 px-4 py-2 text-sm font-medium uppercase text-white bg-[#930000] rounded-full hover:bg-red-700 transition cursor-pointer"
          onClick={() => setShowContactPopup(true)}
        >
          Contact Us
        </li>

        <Cursor position={position} />
      </ul>

      {/* Contact popup modal */}
      {showContactPopup && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-40"
    style={{ pointerEvents: "auto" }}
  >
    <div className="bg-white rounded-lg p-6 space-y-4 shadow-xl max-w-sm w-full text-center z-[99999]">
      <h2 className="text-lg font-bold text-gray-800">Get in Touch</h2>

      <div className="space-y-2">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@productiveenergy.com&su=Inquiry%20from%20Website"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Email via Gmail
        </a>

        <button
          onClick={() => {
            navigator.clipboard.writeText("info@productiveenergy.com");
            alert("Email address copied!");
          }}
          className="block w-full px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
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
}

const Tab = ({ label, href, setPosition }) => {
  const ref = useRef(null);
  const location = useLocation();

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className={`relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium uppercase ${
        location.pathname === href ? "text-red-800" : "text-black"
      }`}
    >
      <Link to={href}>{label}</Link>
    </li>
  );
};

const Cursor = ({ position }) => (
  <motion.li
    animate={position}
    className="absolute z-0 h-7 rounded-full bg-black md:h-12"
  />
);

export default NavHeader;
