import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer id='contact' className="px-5 py-16 mt-20 bg-gray-100 lg:px-8">
      <div className="flex flex-col items-center max-w-6xl mx-auto space-y-10">

        {/* Call to Action */}
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Let’s Make Your Event Unforgettable
          </h2>
          <p className="text-lg text-gray-600">
            Reach out to us for event collaborations and ideas.
          </p>
        </div>

        {/* Contact Email */}
        <div className="text-xl font-semibold text-center text-orange-500">
          contact@foxievents.com
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 transition hover:text-orange-500">
            <FiFacebook size={24} />
          </a>
          <a href="#" className="text-gray-500 transition hover:text-orange-500">
            <FiInstagram size={24} />
          </a>
          <a href="#" className="text-gray-500 transition hover:text-orange-500">
            <FiLinkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Foxi Event Management. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
