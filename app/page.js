"use client";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import LanguageModal from "./Components/ModalLanguage";
import { useEffect, useState } from "react";
import { useLanguage } from "./Context/LanguageContext";
import { translations } from "./translation"; // Import translations
export default function Home() {
  const { language, setLanguage } = useLanguage(); // Use the language context
  const [showModal, setShowModal] = useState(true); // State to control modal visibility

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setShowModal(false); // Hide modal when language is selected
  };
  const { translate } = useLanguage();

  const t = translations[language]; // Get translations for the selected language

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Function to handle screen resizing
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    // Set the initial state
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showModal && <LanguageModal onLanguageSelect={handleLanguageSelect} />}

      {/* Background Video */}
      <div id="home" className="relative w-full h-screen overflow-hidden">
      {isDesktop ? (
        // Render video on desktop
        <video
          autoPlay
          loop
          muted
          className="absolute opacity-50 top-0 left-0 w-full h-full object-cover"
        >
          <source src="./salvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // Render image on mobile
        <img
          src="./shop.png"
          alt="Background"
          className="absolute opacity-50 top-0 left-0 w-full h-full object-cover"
        />
      )}

        {/* Optional Overlay for Darkening the Video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <Navbar />

          {/* Spacing between Navbar and Content */}
          <div className="mt-10 md:mt-36">
            {/* Main Heading */}
            <h1
              className="text-white text-4xl md:text-5xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {t.mainHeading}
            </h1>

            {/* Subheading */}
            <p
              className="text-white text-lg md:text-2xl"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1500"
            >
              {t.subHeading}
            </p>
          </div>
        </div>
      </div>

      <About />
      <Contact />

      <section id="services" className="py-20 bg-gray-900">
  <div className="container mx-auto text-center">
    <h2
      className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-10"
      data-aos="fade-up"
    >
      {t.exclusiveServices}
    </h2>
    <div className="grid grid-cols-1 p-5 lg:p-0 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {t.services.map((service) => (
        <div
          className="relative rounded-lg overflow-hidden"
          key={service.title}
          data-aos="zoom-in"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-80 object-cover"
          />
          {/* Gradient Background and Text at the Bottom */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end items-center">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-200">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <Menu />

      {/* Gallery Section */}
      <section id="gallery" className="py-20 pt-0 bg-gray-900">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2
            className="text-4xl pt-0 lg:pt-12 font-bold text-yellow-400 mb-10"
            data-aos="fade-up"
          >
            {translate("Our Team")}
          </h2>
          <div className="grid grid-cols-1 p-5 lg:p-0 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 bg-gray-800"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={`${index * 100}`}
                >
                  <img
                    src={`./gallery/image${index + 1}.jpg`}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
