import Image from "next/image";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";

export default function Home() {
  return (
    <>
      {/* Background Video */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute opacity-50 top-0 left-0 w-full h-full object-cover"
        >
          <source src="./salvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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
              DISCOVER YOUR OWN STYLE AT STYLICLE
            </h1>

            {/* Subheading */}
            <p
              className="text-white text-lg md:text-2xl"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1500"
            >
              BECAUSE IT HAS TO BE PERFECT
            </p>

          </div>
        </div>
      </div>

      <About/>

      <section id="expanded-services" className="py-20 bg-gray-900" data-aos="fade-up">
  <div className="container mx-auto text-center">
    <h2 className="text-5xl font-bold text-yellow-400 mb-10">Our Exclusive Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'Hair Treatment',
          description: 'Revitalize your hair with our specialized treatments.',
          image: './hairtreat.jpg',
        },
        {
          title: 'Organic Facial',
          description: 'Refresh your skin with natural and organic ingredients.',
          image: './organicfacial.jpg',
        },
        {
          title: 'Spa Manicure',
          description: 'Experience luxury with our spa manicure services.',
          image: './spamanicure.webp',
        },
        {
          title: 'Hair & Beard',
          description: 'Expert hair and beard grooming tailored to your style.',
          image: './hairandbeard.jpg',
        },
        {
          title: 'Kids Hair Cutting',
          description: 'Fun and stylish haircuts for your little ones.',
          image: './kidshair.jpg',
        },
        {
          title: 'Brazilian Keratin',
          description: 'Achieve smooth and frizz-free hair with our keratin treatments.',
          image: 'https://www.nicholasmark.co.uk/mens-hair-straightening-newcastle-upon-tyne.jpg',
        },
        {
          title: 'Nail Care',
          description: 'Pamper your nails with our comprehensive nail care services.',
          image: 'https://media.istockphoto.com/id/1308840699/photo/woman-doing-manicure.jpg?s=612x612&w=0&k=20&c=kD5tBjVGPqEkZVGy9MDlXWt0M8rUGO8Kb-pdpICttOU=',
        },
        {
          title: 'Waxing',
          description: 'Smooth and hair-free skin with our professional waxing services.',
          image: './waxing.png',
        },
        {
          title: 'Shaving',
          description: 'Traditional and modern shaving techniques for a clean look.',
          image: 'https://t4.ftcdn.net/jpg/02/69/63/35/360_F_269633549_QijCLiqbGdwW1ynHsnul7ELl2trMpn25.jpg',
        },
        {
          title: 'Spa',
          description: 'Relax and rejuvenate with our luxurious spa services.',
          image: 'https://outlooksalon.ca/wp-content/uploads/2017/02/Mens_Gallery_0002_hairspa.jpg',
        },
        {
          title: 'Massage',
          description: 'Unwind with our therapeutic massage treatments.',
          image: 'https://img.freepik.com/premium-photo/handsome-man-spa-resort-receives-hot-stone-massage-hot-stone-massage-therapy_609048-3379.jpg',
        },
      ].map((service) => (
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
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{service.title}</h3>
            <p className="text-gray-200">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<Menu/>








{/* Gallery Section */}
<section id="gallery" className="py-20 bg-gray-900">
  <div className="container mx-auto text-center" data-aos="fade-up">
    <h2 className="text-3xl font-bold text-yellow-400 mb-10" data-aos="fade-up">
      Our Team
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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

      <Contact/>
      {/* <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Visit Our Salon</h1>
      <Map />
    </div> */}
      <Footer/>
     


    </>
  );
}
