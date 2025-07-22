import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, scale } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.jpg';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Book', 'Contact'];

  // Word-level animation variant
  const wordVariants = {
    initial: { y: 0,scale: 1},
    hover: {
      y: -10,
      scale:1.1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        repeat:Infinity,
        delay:0.2
      }
    }
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full ${
        scrolled ? 'bg-white/90 shadow-md backdrop-blur-md py-2' : 'bg-white py-4'
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            className="w-10 h-10 transition duration-300 rounded-full"
            alt="logo"
          />
          <span className="text-2xl font-bold text-orange-500 font-palanquin">Foxi</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={'#' + link.toLowerCase()}
              className="text-lg font-semibold text-orange-500 cursor-pointer font-palanquin"
              variants={wordVariants}
              initial="initial"
              whileHover="hover"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-center py-4 space-y-4 bg-white shadow-md md:hidden"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={'#' + link.toLowerCase()}
                className="text-lg font-medium text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
