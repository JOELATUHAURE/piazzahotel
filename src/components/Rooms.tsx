import React from 'react';
import { Wifi, Coffee, Bath, Tv } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      title: 'Standard Room',
      price: '$45',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80',
      description: 'Comfortable room with essential amenities for a peaceful stay.',
      amenities: ['Free Wi-Fi', 'Coffee Maker', 'Private Bathroom', 'LED TV'],
      size: '25m²',
      beds: '1 Queen Bed',
    },
    {
      title: 'Deluxe Room',
      price: '$65',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
      description: 'Spacious room with premium furnishings and garden view.',
      amenities: ['Free Wi-Fi', 'Coffee Maker', 'Luxury Bathroom', 'Smart TV'],
      size: '35m²',
      beds: '1 King Bed',
    },
    {
      title: 'Family Suite',
      price: '$85',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80',
      description: 'Perfect for families, featuring separate living area and bedroom.',
      amenities: ['Free Wi-Fi', 'Kitchenette', 'Two Bathrooms', 'Smart TV'],
      size: '45m²',
      beds: '1 King Bed + 2 Singles',
    },
  ];

  const amenityIcons = {
    'Free Wi-Fi': <Wifi className="w-4 h-4" />,
    'Coffee Maker': <Coffee className="w-4 h-4" />,
    'Private Bathroom': <Bath className="w-4 h-4" />,
    'Luxury Bathroom': <Bath className="w-4 h-4" />,
    'Two Bathrooms': <Bath className="w-4 h-4" />,
    'LED TV': <Tv className="w-4 h-4" />,
    'Smart TV': <Tv className="w-4 h-4" />,
  };

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comfortable Accommodations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our selection of well-appointed rooms, each designed to provide
            comfort and relaxation at affordable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full">
                  {room.price}/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {room.title}
                </h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>{room.size}</span>
                  <span>•</span>
                  <span>{room.beds}</span>
                </div>
                <div className="space-y-2">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      {amenityIcons[amenity]}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;