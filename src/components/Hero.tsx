import React from 'react';
import { ChevronDown } from 'lucide-react';
import gkatImage from '../images/piaza.jpg'; // Import the image

const Hero = () => {
  return (
     <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${gkatImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

       
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Flagship Piazza Hotel
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Affordable Comfort in a Beautiful Setting
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#rooms"
              className="bg-emerald-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center space-x-2"
            >
              <span>Book Now</span>
              <ChevronRight size={20} />
            </a>
            <a
              href="#about"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
