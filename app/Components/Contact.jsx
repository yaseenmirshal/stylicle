"use client";
import React from "react";
import {
  FaSnapchatGhost,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLanguage } from "../Context/LanguageContext"; // Import the useLanguage hook

function Contact() {
  const { translate } = useLanguage(); // Get the translate function from context

  return (
    <div id="contact">
      <div className="bg-gray-900 py-16 px-6 md:px-16">
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
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Location Box */}
            <div
              className="bg-gray-800 shadow-md p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps?q=Stylicle+salon+spa+-+0+-+Abu+Dhabi&ftid=0x3e5e377b71c8e37b:0x9266e43e1da6e6e2&hl=en-AE&gl=ae&entry=gps&lucs=47062720&g_ep=CAISBjYuNTYuMhgAINeCAyoINDcwNjI3MjBCAkFF&g_st=iw",
                  "_blank"
                )
              }
            >
              <FaMapMarkerAlt className="text-yellow-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-yellow-400">
                {translate("contact.visitUs")}
              </h3>{" "}
              {/* Translate "Visit Us" */}
              <p className="text-gray-300 mt-2">
                {translate("contact.location")}
              </p>{" "}
              {/* Translate the location */}
            </div>

            {/* Call Us Box */}
            <div
              className="bg-gray-800 shadow-md p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              onClick={() => window.open("tel:+1234567890")}
            >
              <FaPhone className="text-yellow-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-yellow-400">
                {translate("contact.callUs")}
              </h3>{" "}
              {/* Translate "Call Us" */}
              <p className="text-gray-300 mt-2">
                {translate("contact.phoneNumber")}
              </p>{" "}
              {/* Translate the phone number */}
            </div>

            {/* WhatsApp Box */}
            <div
              className="bg-gray-800 shadow-md p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              onClick={() =>
                window.open("https://wa.me/971542692267", "_blank")
              }
            >
              <FaWhatsapp className="text-yellow-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-yellow-400">
                {translate("contact.whatsapp")}
              </h3>{" "}
              {/* Translate "WhatsApp" */}
              <p className="text-gray-300 mt-2">
                {translate("contact.whatsappNumber")}
              </p>{" "}
              {/* Translate the WhatsApp number */}
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
