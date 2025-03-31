import React from 'react';
import { Armchair as Wheelchair, Car, Shield, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Wheelchair className="w-6 h-6 text-emerald-600" />,
      title: 'Wheelchair Accessible',
      description: 'Designed for comfort and accessibility for all our guests',
    },
    {
      icon: <Car className="w-6 h-6 text-emerald-600" />,
      title: 'Ample Parking',
      description: 'Secure parking space available for all guests',
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: '24/7 Security',
      description: 'Round-the-clock security for your peace of mind',
    },
    {
      icon: <Star className="w-6 h-6 text-emerald-600" />,
      title: 'Affordable Luxury',
      description: 'Premium comfort at budget-friendly prices',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Home Away From Home
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flagship Piazza Hotel offers the perfect blend of comfort, convenience, and affordability
            in the heart of Bushenyi, Uganda. Our commitment to cleanliness, security, and exceptional
            service makes us the preferred choice for both local and international travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
              alt="Hotel Garden"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Beautiful Gardens
            </h3>
            <p className="text-gray-600 mb-6">
              Immerse yourself in our meticulously maintained gardens, where vibrant flowers and lush
              greenery create a peaceful sanctuary. Perfect for morning walks, afternoon tea, or
              simply unwinding after a busy day.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                Peaceful and serene environment
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                Beautiful flowering plants
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                Perfect for outdoor relaxation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;