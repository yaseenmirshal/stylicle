"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX,FiPhone } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../Context/LanguageContext"; // Import the useLanguage hook

function Navbar() {
  const { translate } = useLanguage(); // Get the translate function from context
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isClient, setIsClient] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    setIsClient(true); // Indicating the component has rendered on the client
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      if (window.innerWidth > 768) { // Only apply the logic if screen width is greater than 768px
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isClient) {
    return null; // Prevent server-side mismatch by skipping rendering until the client-side
  }


  return (
    <div
    className={"fixed top-0 w-full z-50 transition-transform duration-500"}
  >
    {/* Navbar Section */}
    <div className="w-full h-20 md:h-36 bg-[#2E2E2E]/40 backdrop-blur-md border border-gray-600/50 shadow-md flex items-center justify-between px-5 md:px-16 relative">
      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#FFD700] focus:outline-none"
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
  
      {/* Left Side Navigation Links */}
      <div className="hidden font-bold md:flex space-x-8 lg:space-x-16 absolute left-5 md:left-16">
        {[
          { label: translate("navbar.home"), link: "#home" },
          { label: translate("navbar.about"), link: "#about" },
          { label: translate("navbar.contact"), link: "#contact" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-white cursor-pointer transition duration-300 hover:text-gray-300 hover:scale-105"
            data-aos="fade-down"
            data-aos-delay={`${index * 100}`}
          >
            {item.label}
          </a>
        ))}
      </div>
  
      {/* Logo */}
      <div className="mx-auto flex justify-center">
        <img
          src="./styliclogo.png"
          className="w-16 h-16 ml-2 md:w-32 md:h-32 transition duration-300 transform hover:scale-110"
          alt="logo"
          data-aos="zoom-in"
        />
      </div>
  
      {/* Right Side Navigation Links */}
      <div className="hidden font-bold md:flex space-x-8 lg:space-x-16 absolute right-5 md:right-16">
        {[
          { label: translate("navbar.services"), link: "#services" },
          { label: translate("navbar.gallery"), link: "#gallery" },
          { label: translate("navbar.blog"), link: "#menu" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-white cursor-pointer transition duration-300 hover:text-gray-300 hover:scale-105"
            data-aos="fade-down"
            data-aos-delay={`${index * 100}`}
          >
            {item.label}
          </a>
        ))}
      </div>
  
      {/* Contact Button for Mobile */}
      <div className="md:hidden flex items-center">
      <a
  href="#contact"
  className="flex items-center space-x-2 text-[#FFD700] cursor-pointer transition duration-300 hover:text-gray-300 hover:scale-105"
>
  <FiPhone size={20} /> 
  {/* <span>Contact Us</span> Text */}
</a>
      </div>
    </div>
  
    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="bg-slate-800 text-white p-5 md:hidden flex flex-col space-y-4 text-center transition-transform duration-500 ease-in-out">
        {[
          { label: translate("navbar.home"), link: "#home" },
          { label: translate("navbar.about"), link: "#about" },
          { label: translate("navbar.contact"), link: "#contact" },
          { label: translate("navbar.services"), link: "#services" },
          { label: translate("navbar.gallery"), link: "#gallery" },
          { label: translate("navbar.blog"), link: "#menu" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="cursor-pointer transition duration-300 hover:text-gray-300 hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            {item.label}
          </a>
        ))}
        {/* Contact Button at the Bottom of the Mobile Menu */}
        <a
          href="#contact"
          className="bg-[#FFD700]  text-black py-2 px-3 rounded-md text-sm mt-4 transition duration-300 hover:bg-yellow-500 hover:text-black"
          onClick={() => setIsMenuOpen(false)}
        >
          {translate("navbar.contact")}
        </a>
      </div>
    )}
  </div>
  
  );
}

export default Navbar;
