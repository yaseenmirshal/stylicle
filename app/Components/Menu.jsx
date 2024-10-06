import React from 'react';

function Menu() {
  return (
    <div>
      {/* Menu Section */}
      <section
        id="menu"
        className="py-20 bg-gray-900 relative overflow-hidden" // Dark background
        data-aos="fade-up"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-extrabold text-yellow-400 mb-10">Salon Services Menu</h2> {/* Yellow text */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Hair & Beard',
                items: [
                  { name: 'Hair Cutting', price: '30 AED' },
                  { name: 'Beard Setting', price: '30 AED' },
                  { name: 'Beard Shaving', price: '25 AED' },
                  { name: 'Beard Scissor', price: '40 AED' },
                  { name: 'Beard Coloring', price: '40 AED' },
                  { name: 'Special Beard Coloring', price: '50 AED' },
                  { name: 'Beard Waxing', price: '40 AED' },
                  { name: 'Face Threading', price: '20 AED' },
                  { name: 'Hair Washing', price: '10 AED' },
                  { name: 'Hair Washing & Styling', price: '25 AED' },
                  { name: 'Head Massage', price: '40 AED' },
                  { name: 'Hair Treatment', price: '50 AED' },
                  { name: 'Hair Treatment With Steam', price: '60 AED' },
                ],
              },
              {
                title: 'Facial',
                items: [
                  { name: 'Golden Facial', price: '50 AED' },
                  { name: 'Golden Facial with Steam', price: '70 AED' },
                  { name: 'Diamond Facial', price: '55 AED' },
                  { name: 'Diamond Facial with Steam', price: '75 AED' },
                  { name: 'Pearl Facial', price: '50 AED' },
                  { name: 'Pearl Facial with Steam', price: '60 AED' },
                  { name: 'Face Mask', price: '20 AED' },
                  { name: 'Black Mask', price: '20 AED' },
                  { name: 'Charcoal Facial', price: '70 AED' },
                  { name: 'Charcoal Facial with Steam', price: '100 AED' },
                ],
              },
              {
                title: 'Kids',
                items: [
                  { name: 'Boy Hair Cutting', price: '40 AED' },
                  { name: 'Girl Hair Cutting', price: '50 AED' },
                  { name: 'Kids Pedicure', price: '40 AED' },
                  { name: 'Kids Medi Cure', price: '40 AED' },
                  { name: 'Henna', price: '80 AED' },
                  { name: 'Keratine Treatment', price: '350/700 AED' },
                  { name: 'Bangs Hair', price: '30 AED' },
                  { name: 'Menicure Color', price: '30 AED' },
                  { name: 'Blow-Dry', price: '50 AED' },
                  { name: 'Hot Oil Treatment', price: '50/100 AED' },
                  { name: 'Wash & Blower', price: '100 AED' },
                ],
              },
              {
                title: 'Brazilian Keratin',
                items: [
                  { name: 'Short Hair', price: '200 AED' },
                  { name: 'Long Hair', price: '350 AED' },
                  { name: 'Medium Hair', price: '300 AED' },
                ],
              },
              {
                title: 'Nail Care',
                items: [
                  { name: 'Manicure', price: '60 AED' },
                  { name: 'Pedicure', price: '60 AED' },
                  { name: 'Foot Massage', price: '60 AED' },
                  { name: 'Foot Scrub', price: '40 AED' },
                ],
              },
              {
                title: 'Massages',
                items: [
                  { name: 'Thai Massage', price: '100 AED' },
                  { name: 'Relax Massage', price: '70 AED' },
                ],
              },
              {
                title: 'Waxing',
                items: [
                  { name: 'Under Arm', price: '50 AED' },
                  { name: 'Chest & Back', price: '80 AED' },
                  { name: 'Full Body', price: '300 AED' },
                  { name: 'Up & Down', price: '100 AED' },
                  { name: 'Front', price: '70 AED' },
                  { name: 'Back', price: '70 AED' },
                  { name: 'Bikini', price: '100 AED' },
                  { name: 'Legs', price: '100 AED' },
                ],
              },
              {
                title: 'Shaving',
                items: [
                  { name: 'Under Arm', price: '50 AED' },
                  { name: 'Front', price: '50 AED' },
                  { name: 'Back', price: '50 AED' },
                  { name: 'Bikini', price: '50 AED' },
                  { name: 'Legs', price: '80 AED' },
                  { name: 'Full Body', price: '200 AED' },
                ],
              },
              {
                title: 'Spa',
                items: [
                  { name: 'Normal Moroccan Bath', price: '150 AED' },
                  { name: 'Herbal Bath', price: '200 AED' },
                  { name: 'Bath, Oils, Aromatic', price: '300 AED' },
                  { name: 'Bride Bath', price: '600 AED' },
                  { name: 'Moroccan Bath with Herbal', price: '200 AED' },
                  { name: 'Moroccan Bath with Odoi & Mahlab', price: '250 AED' },
                  { name: 'Turkish Bath', price: '150 AED' },
                  { name: 'Energy Bath', price: '150 AED' },
                  { name: 'Moroccan Bath with Massage', price: '250 AED' },
                ],
              },
              {
                title: 'Package Services',
                items: [
                  { name: 'Full Day Beauty Package', price: '500 AED' },
                  { name: 'Hair & Nail Package', price: '120 AED' },
                ],
              },
              {
                title: 'Monthly Massage Packages',
                items: [
                  { name: '5 Relaxation Message Sessions', price: '500 AED' },
                  { name: '5 Sports Massage Sessions', price: '750 AED' },
                  { name: '5 Therapeutic Massage Sessions', price: '750 AED' },
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg bg-gray-800 transform hover:scale-105 transition duration-300 flex flex-col items-start" // Dark card background
                data-aos="zoom-in"
              >
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">{service.title}</h3> {/* Yellow text */}
                <ul className="text-left w-full">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between w-full py-2 border-b border-transparent hover:border-yellow-500 transition duration-300"
                    >
                      <span className="text-lg text-gray-300">{item.name}</span> {/* Light gray text */}
                      <span className="text-lg font-semibold text-yellow-400">{item.price}</span> {/* Yellow price */}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 bg-gray-800 text-white text-center py-10" data-aos="fade-up">
          <h3 className="text-4xl font-bold mb-4">Elevate Your Beauty Experience</h3>
          <p className="text-lg px-10">
            At <span className="font-semibold text-yellow-400">Stylice Salon</span>, we believe in providing a comprehensive range of beauty services tailored to your needs. Visit us today and explore what we can do for you!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Menu;
