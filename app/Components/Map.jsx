// // components/MapSection.js
// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// // Define the container style
// const containerStyle = {
//   width: '100%',
//   height: '400px',
// };

// // Replace these coordinates with your salon's latitude and longitude
// const center = {
//   lat: 34.0522, // Example latitude
//   lng: -118.2437, // Example longitude
// };

// const MapSection = () => {
//   return (
//     <section className="my-10 p-4 bg-white shadow-lg rounded-lg">
//       <h2 className="text-center text-2xl font-semibold mb-4">Find Us Here</h2>
//       <LoadScript googleMapsApiKey="YOUR_API_KEY">
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={15}
//         >
//           {/* Marker for the salon location */}
//           <Marker position={center} />
//         </GoogleMap>
//       </LoadScript>
//     </section>
//   );
// };

// export default React.memo(MapSection);
