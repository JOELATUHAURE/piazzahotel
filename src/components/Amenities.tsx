import React from 'react';
import {
  Utensils,
  Wifi,
  ParkingCircle,
  Shield,
  Flower2,
  Clock,
  Dumbbell,
  Coffee
} from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Restaurant',
      description: 'On-site restaurant serving local and international cuisine',
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Free Wi-Fi',
      description: 'High-speed internet access throughout the property',
    },
    {
      icon: <ParkingCircle className="w-8 h-8" />,
      title: 'Free Parking',
      description: 'Secure on-site parking for all guests',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '24/7 Security',
      description: 'Round-the-clock security personnel and CCTV surveillance',
    },
    {
      icon: <Flower2 className="w-8 h-8" />,
      title: 'Garden Access',
      description: 'Beautiful gardens perfect for relaxation and events',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24-Hour Reception',
      description: 'Front desk staff available around the clock',
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Fitness Center',
      description: 'Well-equipped gym with modern exercise equipment',
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Coffee Shop',
      description: 'Cozy café serving fresh coffee and light snacks',
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hotel Amenities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enjoy our comprehensive range of facilities and services designed to make
            your stay comfortable and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6 mx-auto">
                <div className="text-emerald-600">{amenity.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                {amenity.title}
              </h3>
              <p className="text-gray-600 text-center">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;