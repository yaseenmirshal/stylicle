import React from 'react';

function About() {
  return (
    <div>
      {/* about us */}
      <section id="about-us" className="py-20 bg-gray-900 relative overflow-hidden" data-aos="fade-up">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-5">
          <div className="lg:w-1/2 text-left" data-aos="fade-right">
            <h2 className="text-6xl font-extrabold text-yellow-400 mb-6">Discover the Art of Beauty</h2>
            <p className="text-lg text-gray-300 mb-8">
              Welcome to <span className="font-semibold text-yellow-300">Stylice Salon</span> – where beauty knows no
              boundaries. Our mission is to bring out the best in you through personalized care, expert techniques, and
              luxurious experiences. Step into a world designed to inspire and empower you, with services tailored for every
              individual.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              From trendsetting haircuts to revitalizing spa treatments, each service at <span className="font-semibold text-yellow-300">Stylice Salon</span> is crafted with love and precision. We use only the finest products and cutting-edge techniques to deliver an experience that's truly transformative. Let our skilled team elevate your beauty routine to new heights.
            </p>
            <a
              href="#services"
              className="inline-block mt-6 px-10 py-4 bg-yellow-500 text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
              data-aos="fade-up"
            >
              Explore Our Services
            </a>
          </div>
          <div className="lg:w-1/2 relative" data-aos="fade-left">
            <img
              src="./stylinter.jpg"
              alt="Stylice Salon"
              className="rounded-xl shadow-2xl border-8 border-gray-700 transform hover:scale-105 transition duration-300"
            />
            <div
              className="absolute -bottom-16 -right-10 w-48 h-48 bg-yellow-600 rounded-full opacity-50 animate-pulse"
              data-aos="zoom-in"
            />
          </div>
        </div>
        <div className="mt-16 bg-gray-800 text-white text-center py-10" data-aos="fade-up">
          <h3 className="text-4xl font-bold mb-4">Experience the Elegance of Style</h3>
          <p className="text-lg px-10">
            At <span className="font-semibold">Stylice Salon</span>, we know beauty is an art – and we’re passionate about creating a masterpiece for each of our clients. Visit us today and let us transform your look and uplift your spirit.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
