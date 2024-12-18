"use client";
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* Main Header */}
      <header className="bg-white text-black font-semibold px-6 py-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <Image src="/logo.jpg" alt="logo" width={120} height={50} />

        {/* Mobile Menu Button (Hamburger Icon ☰) */}
        <button
          className="md:hidden text-black text-2xl focus:outline-none"
          onClick={() => setShowSidebar(true)}
        >
          ☰
        </button>

        {/* Full Navbar for Larger Screens */}
        <nav className="hidden md:flex space-x-6">
          {[
            "WHY US",
            "ABOUT",
            "SERVICES",
            "PORTFOLIO",
            "PROCESS",
            "REVIEWS",
            "OUR SKILLS",
            "CONTACT US",
          ].map((item) => (
            <a key={item} href="#" className="hover:font-extrabold">
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg w-64 transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black text-2xl"
          onClick={() => setShowSidebar(false)}
        >
          ×
        </button>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col space-y-4 mt-10 px-6">
          {[
            "WHY US",
            "ABOUT",
            "SERVICES",
            "PORTFOLIO",
            "PROCESS",
            "REVIEWS",
            "OUR SKILLS",
            "CONTACT US",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-black hover:font-extrabold"
              onClick={() => setShowSidebar(false)} // Close the sidebar on click
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay (optional, dims the background when sidebar is open) */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowSidebar(false)} // Close sidebar when clicking outside
        ></div>
      )}
    </>
  );
};

export default Header;
