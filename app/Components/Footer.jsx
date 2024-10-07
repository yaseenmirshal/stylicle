"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-4" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-[#FFD700]">Stylicle Salon</h3>
          <p>
            Experience luxury salon services that enhance your natural beauty.
          </p>
          <div className="space-y-2">
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> info@stylicle.com
            </p>
            <p className="flex items-center">
              <FaWhatsapp className="mr-2" /> +971 54 269 2267
            </p>
          </div>
        </div>

        {/* Services Links */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-bold text-[#FFD700]">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-white hover:text-[#FFD700] transition duration-300"
              >
                Hair Styling
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-[#FFD700] transition duration-300"
              >
                Makeup
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-[#FFD700] transition duration-300"
              >
                Facials & Skincare
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-[#FFD700] transition duration-300"
              >
                Manicure & Pedicure
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-bold text-[#FFD700]">Stay Updated</h3>
          <p>
            Subscribe to receive exclusive offers and style tips from Stylicle.
          </p>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-md text-black outline-none border-none mb-2 sm:mb-0 sm:mr-2"
            />
            <button
              type="submit"
              className="bg-[#FFD700] text-[#2E2E2E] font-semibold px-6 py-2 rounded-md transition duration-300 hover:bg-[#e5c700]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-500 pt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start space-x-6 mb-4 md:mb-0">
          <a
            href="#"
            className="text-[#FFD700] transition duration-300 hover:text-white"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/styliclesalon/"
            className="text-[#FFD700] transition duration-300 hover:text-white"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://wa.me/971542692267"
            className="text-[#FFD700] transition duration-300 hover:text-white"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} ym_innovation. All rights reserved .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
