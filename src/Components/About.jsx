import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import image1 from '../assets/images/image1.JPG';
import image2 from '../assets/images/image2.JPG';
import image3 from '../assets/images/image3.JPG';
import image4 from '../assets/images/image4.JPG';

const cardData = [
  {
    title: 'Corporate Events',
    desc: 'Professional planning for business meetings, conferences, and product launches.',
    img: image1,
  },
  {
    title: 'Weddings',
    desc: 'Magical weddings tailored to your dreams, from intimate to grand celebrations.',
    img: image2,
  },
  {
    title: 'Private Parties',
    desc: 'Unforgettable birthdays, anniversaries, and private gatherings with style.',
    img: image3,
  },
  {
    title: 'Festivals & Galas',
    desc: 'Large-scale festivals, galas, and community events with seamless execution.',
    img: image4,
  },
];

export default function About() {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainer.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="flex flex-col w-full max-w-6xl gap-12 px-5 pt-24 pb-20 mx-auto md:gap-20 lg:px-8">
      {/* About Block (unchanged) */}

      {/* Mobile Horizontal Scroller */}
      <div className="relative md:hidden">
        {/* Navigation Arrows */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 backdrop-blur-sm"
        >
          <FiChevronLeft className="w-6 h-6 text-orange-500" />
        </button>
        
        <div 
          ref={scrollContainer}
          className="flex w-full gap-8 py-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-14"
        >
          {cardData.map((card, idx) => (
            <motion.div
              key={card.title}
              className="relative flex-shrink-0 w-[calc(100vw-80px)] px-6 pt-32 pb-8 bg-white shadow-lg rounded-2xl snap-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              {/* Centered Image */}
              <div className="absolute w-40 h-40 -translate-x-1/2 left-1/2 -top-16">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover w-full h-full shadow-lg rounded-xl"
                />
              </div>

              <h3 className="mt-8 mb-4 text-xl font-bold text-center text-orange-500">
                {card.title}
              </h3>
              <p className="text-center text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 backdrop-blur-sm"
        >
          <FiChevronRight className="w-6 h-6 text-orange-500" />
        </button>
      </div>

      {/* Desktop Grid (unchanged) */}
    </section>
  );
}