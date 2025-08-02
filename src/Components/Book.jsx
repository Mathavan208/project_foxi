import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import image3 from '../assets/images/image3.JPG';

export default function Book() {
  const { scrollY } = useScroll();

  // Parallax image movement
  const yOffset = useTransform(scrollY, [0, 500], [0, -100]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section
      id="book"
      className="w-full px-5 py-20 md:py-32 bg-orange-50"
    >
      <div className="flex flex-col-reverse items-center justify-between max-w-6xl gap-12 mx-auto md:flex-row lg:gap-16">
        
        {/* Left: Text - Now appears above image on mobile */}
        <motion.div 
          className="flex-1 w-full space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-extrabold text-orange-500 sm:text-4xl md:text-5xl">
            Book Your Event
          </h2>
          <p className="max-w-md mx-auto text-lg text-gray-700 md:mx-0 md:text-xl">
            Let's bring your event vision to life! We're excited to work with you.
          </p>
          <div className="flex justify-center mt-8 md:justify-start md:mt-0">
            <a
              href="https://docs.google.com/forms/d/1ntJEL1aAyMR6GpLMKCa5ZB7tb8FTUGhWpAFI0kN0XRc/viewform?chromeless=1&edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-lg font-semibold text-white transition duration-300 transform bg-orange-500 rounded-xl hover:bg-orange-600 hover:scale-105"
            >
              Fill Booking Form
            </a>
          </div>
        </motion.div>

        {/* Right: Parallax Image - Now appears below text on mobile */}
        <motion.div
          className="w-full max-w-md lg:max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="overflow-hidden border-4 border-orange-100 shadow-2xl rounded-3xl"
            style={{ y: yOffset, scale }}
          >
            <img
              src={image3}
              alt="Book Event"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}