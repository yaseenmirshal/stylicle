"use client";
import React from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useLanguage } from "../Context/LanguageContext"; // Import the useLanguage hook
import Link from "next/link";

function Contact() {
  const { translate } = useLanguage(); // Get the translate function from context

  return (
    <div id="contact">
      <div className="bg-gray-900 py-16 px-7 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title and Description */}
          <h2
            className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4"
            data-aos="fade-up"
          >
            {translate("contact.title")}
          </h2>
          <p
            className="text-lg md:text-xl text-gray-300 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {translate("contact.description")}
          </p>

          {/* Combined Contact Card */}
          <div
            className="bg-gray-800 shadow-md p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaMapMarkerAlt className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-400 text-center mb-4">
              {translate("contact.visitUs")}
            </h3>

            {/* Branch Details */}
            <div className="space-y-8">
              {/* Branch 1 */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-300 mb-2">
                  {translate("contact.location")}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {translate("contact.branch1Address")}
                </p>
                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <button
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-400 rounded hover:bg-yellow-500"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/7ZXxWUdq5CWjrqzs5",
                        "_blank"
                      )
                    }
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    {translate("contact.getDirections")}
                  </button>
                  <button
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-400 rounded hover:bg-yellow-500"
                    onClick={() => window.open("tel:+971542692267")}
                  >
                    <FaPhone className="mr-2" />
                    {translate("contact.call")}
                  </button>
                  <button
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-400 rounded hover:bg-yellow-500"
                    onClick={() =>
                      window.open("https://wa.me/971542692267", "_blank")
                    }
                  >
                    <FaWhatsapp className="mr-2" />
                    {translate("contact.whatsapp")}
                  </button>
                  <Link href="/Branch" legacyBehavior>
                    <a className="text-sm font-medium text-yellow-400 hover:underline flex items-center">
                      {translate("contact.seemore")}
                      <FaArrowRight className="ml-2" />
                    </a>
                  </Link>
                </div>
              </div>



              {/* Branch 2 */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-300 mb-2">
                  {translate("contact.location2")}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {translate("contact.branch2Address")}
                </p>
                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <button
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-400 rounded hover:bg-yellow-500"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/d2adnAosWCwGqy7V8",
                        "_blank"
                      )
                    }
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    {translate("contact.getDirections")}
                  </button>
                  <button
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-400 rounded hover:bg-yellow-500"
                    onClick={() => window.open("tel:+971553655870")}
                  >
                    <FaPhone className="mr-2" />
                    {translate("contact.call")}
                  </button>
                  <button
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-400 rounded hover:bg-yellow-500"
                    onClick={() =>
                      window.open("https://wa.me/971553655870", "_blank")
                    }
                  >
                    <FaWhatsapp className="mr-2" />
                    {translate("contact.whatsapp")}
                  </button>
                  <Link href="/Branch" legacyBehavior>
                    <a className="text-sm font-medium text-yellow-400 hover:underline flex items-center">
                      {translate("contact.seemore")}
                      <FaArrowRight className="ml-2" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
