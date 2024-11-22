"use client";
import React from "react";
import {
  FaSnapchatGhost,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
   FaArrowRight
} from "react-icons/fa";
import { useLanguage } from "../Context/LanguageContext"; // Import the useLanguage hook
import Link from "next/link";

function Contact() {
  const { translate } = useLanguage(); // Get the translate function from context

  return (
    <div id="contact">
      <div className="bg-gray-900 py-16 px-7 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title and Description */}
          <h2
            className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4"
            data-aos="fade-up"
          >
            {translate("contact.title")} {/* Translate the title */}
          </h2>
          <p
            className="text-lg md:text-xl text-gray-300 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {translate("contact.description")} {/* Translate the description */}
          </p>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">

{/* Location Box with Two Locations in a Column */}
<div className="bg-gray-800 shadow-md p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg">
  <FaMapMarkerAlt className="text-yellow-400 text-4xl mx-auto mb-4" />
  <h3 className="text-xl font-semibold text-yellow-400 text-center mb-4">
    {translate("contact.visitUs")}
  </h3>

  {/* Two Locations Stacked Vertically */}
  <div className="space-y-4">
    {/* Location 1 */}
    <div className="p-6 border-b border-gray-600 cursor-pointer transition hover:bg-gray-700 rounded-t-lg text-center">
      <h4
        className="text-lg font-semibold text-gray-300 mb-4"
        onClick={() =>
          window.open(
            "https://maps.app.goo.gl/zV2KULHhL5tHzntH7",
            "_blank"
          )
        }
      >
        {translate("contact.location")}
      </h4>
      {/* See More Button */}
      <div className="flex justify-center">
        
      <Link href="/Branch" legacyBehavior>
      <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-400 rounded hover:bg-yellow-500">
        {translate("contact.seemore")}
      <FaArrowRight className="ml-2" />
      </button>
      </Link>
      </div>
    </div>

    {/* Location 2 */}
    <div className="p-6 cursor-pointer transition hover:bg-gray-700 rounded-b-lg text-center">
      <h4
        className="text-lg font-semibold text-gray-300 mb-4"
        onClick={() =>
          window.open(
            "https://maps.app.goo.gl/cLo74Ha2KFGCBgz96?g_st=iw",
            "_blank"
          )
        }
      >
        {translate("contact.location2")}
      </h4>
      {/* See More Button */}
      <div className="flex justify-center">
      <Link href="/Branch" legacyBehavior>
       <a className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-400 rounded hover:bg-yellow-500">
       {translate("contact.seemore")}
       <FaArrowRight className="ml-2" />
      </a>
      </Link>

      </div>
    </div>
  </div>
</div>



  {/* Call Us Box */}
  <div
    className="bg-gray-800 shadow-md p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col items-center"
    onClick={() => window.open("tel:+1234567890")}
  >
    <FaPhone className="text-yellow-400 text-4xl mb-4" />
    <h3 className="text-xl font-semibold text-yellow-400 text-center">
      {translate("contact.callUs")}
    </h3>
    <p className="text-gray-300 mt-2 text-center">
      {translate("contact.phoneNumber")}
    </p>
  </div>

  {/* WhatsApp Box */}
  <div
    className="bg-gray-800 shadow-md p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col items-center"
    onClick={() =>
      window.open("https://wa.me/971542692267", "_blank")
    }
  >
    <FaWhatsapp className="text-yellow-400 text-4xl mb-4" />
    <h3 className="text-xl font-semibold text-yellow-400 text-center">
      {translate("contact.whatsapp")}
    </h3>
    <p className="text-gray-300 mt-2 text-center">
      {translate("contact.whatsappNumber")}
    </p>
  </div>
</div>





          {/* Social Media Links */}
          <div
            className="flex justify-center space-x-6 mt-16"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="#"
              className="text-yellow-400 transition duration-300 hover:text-yellow-300"
            >
              <FaSnapchatGhost size={30} />
            </a>
            <a
              href="https://www.instagram.com/styliclesalon/"
              className="text-yellow-400 transition duration-300 hover:text-yellow-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://wa.me/971542692267"
              className="text-yellow-400 transition duration-300 hover:text-yellow-300"
            >
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
