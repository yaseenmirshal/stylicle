import React from "react";
import { useLanguage } from "../Context/LanguageContext";

function Menu() {
  const isArabic = 'en' === 'ar';
  const { translate } = useLanguage(); // Get the translate function from context

  const services = [
    {
      title: translate("Hair & Beard"),
      items: [
        { name: translate("Hair Cutting"), price: translate("30 AED") },
        { name: translate("Beard Setting"), price: translate("30 AED") },
        { name: translate("Beard Shaving"), price: translate("25 AED") },
        { name: translate("Beard Scissor"), price: translate("40 AED") },
        { name: translate("Beard Coloring"), price: translate("40 AED") },
        {name: translate("Special Beard Coloring"),price: translate("50 AED")},
        {name: translate("Hair Coloring"), price: translate("50 AED") }, 
        { name: translate("Beard Waxing"), price: translate("40 AED") },
        { name: translate("Face Threading"), price: translate("20 AED") },
        { name: translate("Hair Washing"), price: translate("10 AED") },
        {
          name: translate("Hair Washing & Styling"),
          price: translate("25 AED"),
        },
        { name: translate("Head Massage"), price: translate("40 AED") },
        { name: translate("Hair Treatment"), price: translate("50 AED") },
        {
          name: translate("Hair Treatment With Steam"),
          price: translate("60 AED"),
        },
      ],
    },
    {
      title: translate("Facial"),
      items: [
        { name: translate("Golden Facial"), price: translate("50 AED") },
        {
          name: translate("Golden Facial with Steam"),
          price: translate("70 AED"),
        },
        { name: translate("Diamond Facial"), price: translate("55 AED") },
        {
          name: translate("Diamond Facial with Steam"),
          price: translate("75 AED"),
        },
        { name: translate("Pearl Facial"), price: translate("50 AED") },
        {
          name: translate("Pearl Facial with Steam"),
          price: translate("60 AED"),
        },
        { name: translate("Face Mask"), price: translate("20 AED") },
        { name: translate("Black Mask"), price: translate("20 AED") },
        { name: translate("Charcoal Facial"), price: translate("70 AED") },
        {
          name: translate("Charcoal Facial with Steam"),
          price: translate("100 AED"),
        },
      ],
    },
    {
      title: translate("Hydrolic Facial Treatment"),
      items: [
        {
          name: translate("Hydra Facial Normal"),
          price: translate("150 AED"),
        },
        {
          name: translate("Hydra Facial Moonster"),
          price: translate("200 AED"),
        },
        {
          name: translate("Hydra Facial Sea Soul"),
          price: translate("500 AED"),
        },
        {
          name: translate("Hydra Facial O3+"),
          price: translate("600 AED"),
        },
        {
          name: translate("Orange Galvanic"),
          price: translate("200 AED"),
        },
        {
          name: translate("Gold Galvanic"),
          price: translate("200 AED"),
        },
        {
          name: translate("Hydra Cleanup"),
          price: translate("100 AED"),
        },
  
      ],},
    {
      title: translate("Kids"),
      items: [
        { name: translate("Boy Hair Cutting"), price: translate("40 AED") },
        { name: translate("Girl Hair Cutting"), price: translate("50 AED") },
        { name: translate("Kids Pedicure"), price: translate("40 AED") },
        { name: translate("Kids Medi Cure"), price: translate("40 AED") },
        { name: translate("Henna"), price: translate("80 AED") },
        {
          name: translate("Keratine Treatment"),
          price: translate("350/700 AED"),
        },
        { name: translate("Bangs Hair"), price: translate("30 AED") },
        { name: translate("Menicure Color"), price: translate("30 AED") },
        { name: translate("Blow-Dry"), price: translate("50 AED") },
        {
          name: translate("Hot Oil Treatment"),
          price: translate("50/100 AED"),
        },
        { name: translate("Wash & Blower"), price: translate("100 AED") },
      ],
    },
    {
      title: translate("Brazilian Keratin"),
      items: [
        { name: translate("Short Hair"), price: translate("200 AED") },
        { name: translate("Long Hair"), price: translate("350 AED") },
        { name: translate("Medium Hair"), price: translate("300 AED") },
      ],
    },
    {
      title: translate("Nail Care"),
      items: [
        { name: translate("Manicure"), price: translate("60 AED") },
        { name: translate("Pedicure"), price: translate("60 AED") },
        { name: translate("Foot Massage"), price: translate("60 AED") },
        { name: translate("Foot Scrub"), price: translate("40 AED") },
      ],
    },
    {
      title: translate("Massages"),
      items: [
        { name: translate("Thai Massage 30 mints"), price: translate("100 AED") },
        { name: translate("Thai Massage 60 mints"), price: translate("150 AED") },
        { name: translate("Relax Massage 30 mints"), price: translate("80 AED") },
        { name: translate("Relax Massage 60 mints"), price: translate("150 AED") },
        { name: translate("Sports Massage 30 mints"), price: translate("110 AED") },
        { name: translate("Sports Massage 60 mints"), price: translate("200 AED") },
        { name: translate("Therapeutic Massage 30 mints"), price: translate("110 AED") },
        { name: translate("Therapeutic Massage 60 mints"), price: translate("200 AED") },
        { name: translate("Hot Stone Massage 30 mints"), price: translate("110 AED") },
        { name: translate("Hot Stone Massage 60 mints"), price: translate("200 AED") },
        { name: translate("Fire Towel Massage 30 mints"), price: translate("110 AED") },
        { name: translate("Fire Towel Massage 60 mints"), price: translate("200 AED") },
        { name: translate("Cassat Fire Massage 30 mints"), price: translate("110 AED") },
        { name: translate("Cassat Fire Massage 60 mints"), price: translate("200 AED") },
        { name: translate("Wood Massage 30 mints"), price: translate("100 AED") },
        { name: translate("Wood Massage 60 mints"), price: translate("180 AED") },
        
      ],
    },
    {
      title: translate("Monthly Massage Packages"),
      items: [
        {
          name: translate("5 Relaxation Message Sessions"),
          price: translate("500 AED"),
        },
        {
          name: translate("5 Sports Massage Sessions"),
          price: translate("750 AED"),
        },
        {
          name: translate("5 Therapeutic Massage Sessions"),
          price: translate("750 AED"),
        },
      ],
    },
   
    {
      title: translate("Waxing"),
      items: [
        { name: translate("Under Arm"), price: translate("50 AED") },
        { name: translate("Chest & Back"), price: translate("80 AED") },
        { name: translate("Full Body"), price: translate("300 AED") },
        { name: translate("Up & Down"), price: translate("100 AED") },
        { name: translate("Front"), price: translate("70 AED") },
        { name: translate("Back"), price: translate("70 AED") },
        { name: translate("Bikini"), price: translate("100 AED") },
        { name: translate("Legs"), price: translate("100 AED") },
      ],
    },
    {
      title: translate("Shaving"),
      items: [
        { name: translate("Under Arm"), price: translate("50 AED") },
        { name: translate("Front"), price: translate("50 AED") },
        { name: translate("Back"), price: translate("50 AED") },
        { name: translate("Bikini"), price: translate("70 AED") },
        { name: translate("Legs"), price: translate("80 AED") },
        { name: translate("Full Body"), price: translate("200 AED") },
      ],
    },
   
    {
      title: translate("Spa"),
      items: [
        {
          name: translate("Normal Moroccan Bath"),
          price: translate("150 AED"),
        },
        { name: translate("Herbal Bath"), price: translate("200 AED") },
        {
          name: translate("Bath, Oils, Aromatic"),
          price: translate("300 AED"),
        },
        { name: translate("Bride Bath"), price: translate("600 AED") },
        {
          name: translate("Moroccan Bath with Herbal"),
          price: translate("200 AED"),
        },
        {
          name: translate("Moroccan Bath with Odoi & Mahlab"),
          price: translate("250 AED"),
        },
        { name: translate("Turkish Bath"), price: translate("150 AED") },
        { name: translate("Energy Bath"), price: translate("150 AED") },
        {
          name: translate("Moroccan Bath with Massage"),
          price: translate("250 AED"),
        },
      ],
    },
    {
      title: translate("Package Services"),
      items: [
        {
          name: translate("Arm & Bikini Shave"),
          price: translate("100 AED"),
        },
        {
          name: translate("Arm & Bikini Wax"),
          price: translate("120 AED"),
        },
        {
          name: translate("Manicure, Pedicure & Scrub"),
          price: translate("150 AED"),
        },
        {
          name: translate("Arm & Bikini Shave +60 mints Massage"),
          price: translate("180 AED"),
        },
        {
          name: translate("Manicure, Pedicure & Scrub +30 mints Massage (Oil/Cream)"),
          price: translate("200 AED"),
        },
        {
          name: translate("Full Body Shave & 30 mints Massage (Oil/Cream)"),
          price: translate("220 AED"),
        },
        {
          name: translate("Full Body Wax & 30 mints Massage (Oil/Cream)"),
          price: translate("250 AED"),
        },
        {
          name: translate("Pedicure, Manicure & 30 mints Massage (Oil/Cream)"),
          price: translate("150 AED"),
        },
        {
          name: translate("Pedicure, Manicure & Normal Moroccan Bath"),
          price: translate("220 AED"),
        },
        {
          name: translate("Pedicure, Manicure, 30 mints Masssage & Normal Moroccan Bath"),
          price: translate("270 AED"),
        },
        
      ],
    },
   
  ];

  return (
    <div>
    {/* Menu Section */}
    <section
      id="menu"
      className="py-20 px-5 lg:p-0 bg-gray-900 relative overflow-hidden" // Dark background
      data-aos="fade-up"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-yellow-400 mb-10">
          {translate("Services Menu")}
        </h2>
        {/* Yellow text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-gray-800 transform hover:scale-105 transition duration-300 flex flex-col items-start" // Dark card background
              data-aos="zoom-in"
            >
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                {service.title}
              </h3>
              {/* Yellow text */}
              <ul className="text-left w-full">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex justify-between w-full py-2 border-b border-transparent hover:border-yellow-500 transition duration-300 ${isArabic ? 'flex-row-reverse' : ''}`} // Adjust direction for Arabic
                  >
                    <span
                      className={`text-lg ${isArabic ? 'text-right' : 'text-left'} text-gray-300 flex-grow`}
                    >
                      {item.name}
                    </span>
                    {/* Light gray text */}
                    <span
                      className={`text-lg font-semibold text-yellow-400 ${isArabic ? 'text-left' : 'text-right'} whitespace-nowrap`}
                    >
                      {item.price}
                    </span>
                    {/* Yellow price */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-16 bg-gray-800 text-white text-center py-10"
        data-aos="fade-up"
      >
        <h3 className="text-4xl font-bold mb-4">
          {translate("Elevate Your Beauty Experience")}
        </h3>
        {/* <p className="text-lg px-10">
          {translate("At")}{" "}
          <span className="font-semibold text-yellow-400">
            {translate("Stylice Salon")}
          </span>
          ,{" "}
          {translate(
            "we strive to provide you with an unforgettable experience."
          )}
        </p> */}
      </div>
    </section>
  </div>
  
  
  );
}

export default Menu;
