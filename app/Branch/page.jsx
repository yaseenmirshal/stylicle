
'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Branches = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto p-6 space-y-16 pt-36 md:pt-52">
          {/* Branch 1 Section */}
          <div className="space-y-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-yellow-400 text-center" data-aos="fade-down">
              Branch 1 (Shakhbout City - MFW-8 - Abu Dhabi)
            </h2>
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
              {/* Video */}
              <div className="lg:w-1/2 relative" data-aos="fade-right">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full rounded-lg shadow-lg object-cover"
                >
                  <source src="/branch1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Images */}
              <div className="lg:w-1/2 grid gap-6" data-aos="fade-right">
                <img
                  src="/gallery/image6.jpg"
                  alt="Branch 1 Image 1"
                  className="w-full h-48 md:h-[520px] object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                />
                <img
                  src="/gallery/image1.jpg"
                  alt="Branch 1 Image 2"
                  className="w-full h-48 md:h-[520px] object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Branch 2 Section */}
          <div className="space-y-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-yellow-400 text-center" data-aos="fade-down">
              Branch 2 (Naseem Al Barr St - Shakhbout City - MFW-10 - Abu Dhabi)
            </h2>
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
              {/* Video */}
              <div className="lg:w-1/2 relative" data-aos="fade-right">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full rounded-lg shadow-lg object-cover"
                >
                  <source src="/Saloon.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Images */}
              <div className="lg:w-1/2 grid gap-6" data-aos="fade-down">
                <img
                  src="/gallery/image7.jpg"
                  alt="Branch 2 Image 1"
                  className="w-full h-48 md:h-[520px] object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                />
                <img
                  src="/gallery/image9.jpg"
                  alt="Branch 2 Image 2"
                  className="w-full h-48 md:h-[520px] object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Branches;
