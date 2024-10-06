import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

function Contact() {
  return (
    <div>
      <div className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title and Description */}
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4" data-aos="fade-up">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="100">
            We'd love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is here to help.
          </p>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-gray-800 shadow-md p-6 rounded-lg">
              <FaEnvelope className="text-yellow-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-yellow-400">Email Us</h3>
              <p className="text-gray-300 mt-2">info@jazaperfumes.com</p>
            </div>
            <div className="bg-gray-800 shadow-md p-6 rounded-lg">
              <FaPhone className="text-yellow-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-yellow-400">Call Us</h3>
              <p className="text-gray-300 mt-2">+1 234 567 890</p>
            </div>
            <div className="bg-gray-800 shadow-md p-6 rounded-lg">
              <FaWhatsapp className="text-yellow-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-yellow-400">WhatsApp</h3>
              <p className="text-gray-300 mt-2">+1 234 567 890</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-16" data-aos="fade-up" data-aos-delay="400">
            <a href="#" className="text-yellow-400 transition duration-300 hover:text-yellow-300">
              <FaFacebook size={30} />
            </a>
            <a href="#" className="text-yellow-400 transition duration-300 hover:text-yellow-300">
              <FaInstagram size={30} />
            </a>
            <a href="#" className="text-yellow-400 transition duration-300 hover:text-yellow-300">
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
