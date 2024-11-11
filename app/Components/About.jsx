"use client";
import React from "react";
import { useLanguage } from "../Context/LanguageContext"; // Import the useLanguage hook

function About() {
  const { translate } = useLanguage(); // Get the translate function from context

  return (
    <div id="about">
      {/* About Us Section */}
      <section
        id="about-us"
        className="py-20 bg-gray-900 relative overflow-hidden"
        data-aos="fade-up"
      >
        <div  className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-8">
          <div className="lg:w-1/2 text-left" data-aos="fade-right">
            <h2 className="text-6xl font-extrabold text-yellow-400 mb-6">
              {translate("about.title")} {/* Translate the title */}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {translate("about.welcome")} {/* Translate the welcome message */}
            </p>
            <p className="text-lg text-gray-300 mb-8">
              {translate("about.services")}{" "}
              {/* Translate the services description */}
            </p>
            <a
              href="#services"
              className="inline-block mt-6 px-10 py-4 bg-yellow-500 text-slate-800 font-bold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
              data-aos="fade-up"
            >
              {translate("about.exploreServices")}{" "}
              {/* Translate the button text */}
            </a>
          </div>
          <div className="lg:w-1/2 relative" data-aos="fade-left">
            <img
              src="./stylinter.jpg"
              alt="Stylice Salon"
              className="rounded-xl shadow-2xl border-8 border-gray-700 transform hover:scale-105 transition duration-300"
            />
            {/* <div
              className="absolute -bottom-16 -right-10 w-48 h-48 bg-yellow-600 rounded-full opacity-50 animate-pulse"
              data-aos="zoom-in"
            /> */}
          </div>
        </div>
        <div
          className="mt-16 bg-gray-800 text-white text-center py-10"
          data-aos="fade-up"
        >
          <h3 className="text-4xl font-bold mb-4">
            {translate("about.experience")}
          </h3>{" "}
          {/* Translate experience message */}
          <p className="text-lg px-10">
            {translate("about.passions")} {/* Translate the passion message */}
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
