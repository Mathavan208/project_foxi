import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import image1 from '../assets/images/image1.JPG';
import image2 from '../assets/images/image2.JPG';
import image3 from '../assets/images/image3.JPG';
import image4 from '../assets/images/image4.JPG';

const cardData = [
  { title: 'Corporate Events', img: image4 },
  { title: 'Weddings', img: image3 },
  { title: 'Private Parties', img: image2 },
  { title: 'Festivals & Galas', img: image1 },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  return (
    <motion.section
      id="about"
      className="flex flex-col items-center w-full gap-12 px-6 py-24 mx-auto max-w-7xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{  amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >

      {/* About Heading & Text */}
      <div className="max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
          About Foxi Event Management
        </h2>
        <p className="text-lg text-gray-600">
          We craft unforgettable experiences — from elegant weddings to corporate galas, private parties, and grand festivals. Our team ensures every event is executed with creativity, precision, and passion.
        </p>
      </div>

      {/* Slider Section */}
      <div className="relative flex items-center justify-center w-full">

        {/* Arrow Left */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 z-10 flex items-center justify-center w-12 h-12 transition bg-white rounded-full shadow-md md:-left-12 hover:scale-110 backdrop-blur-sm"
        >
          <FiChevronLeft className="w-6 h-6 text-orange-500" />
        </button>

        {/* Card */}
        <div className="flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative w-[80vw] md:w-[50vw] aspect-[16/9] bg-center bg-cover rounded-2xl shadow-xl overflow-hidden"
              style={{ backgroundImage: `url(${cardData[currentIndex].img})` }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
              <h3 className="absolute text-xl font-semibold text-white bottom-4 left-4 md:text-2xl">
                {cardData[currentIndex].title}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrow Right */}
        <button 
          onClick={handleNext}
          className="absolute right-0 z-10 flex items-center justify-center w-12 h-12 transition bg-white rounded-full shadow-md md:-right-12 hover:scale-110 backdrop-blur-sm"
        >
          <FiChevronRight className="w-6 h-6 text-orange-500" />
        </button>

      </div>
      
    </motion.section>
  );
}
