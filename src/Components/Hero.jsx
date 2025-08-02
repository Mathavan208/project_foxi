import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import image1 from '../assets/images/image1.JPG';

export default function Hero() {
  const { scrollY } = useScroll();
  const controls = useAnimation();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Text Parallax Effect (only on Desktop)
  const textY = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    controls.start({ opacity: [0, 1], transition: { duration: 1 } });
  }, [controls]);

  return (
    <>
<section id='home'
  className="relative flex flex-col-reverse items-center justify-between w-full max-w-6xl px-4 py-16 mx-auto md:items-start md:py-22 md:flex-row"
>
  {/* Left Side Content */}
  <motion.div
    className="flex flex-col w-full space-y-3 text-center md:w-1/2 md:text-left"
    style={!isMobile ? { y: textY } : {}}
  >
    <h1 className="text-4xl font-extrabold text-orange-500 md:text-6xl">
      Elevate Your Events
    </h1>
    <span className="block mt-2 text-2xl text-gray-800">
      with Foxi Event Management
    </span>
    <p className="max-w-lg mx-auto mt-4 text-lg text-gray-600 md:mx-0">
      From corporate galas to unforgettable weddings…
    </p>
  </motion.div>

  {/* Right Side Image */}
  <motion.div
    className="relative w-[90%] md:w-[40vw] max-w-[650px] h-72 md:aspect-square mb-8 md:mb-0 rounded-2xl shadow-xl overflow-hidden"
    initial={{ opacity: 0 }}
    animate={controls}
    style={{
      backgroundImage: `url(${image1})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  ></motion.div>
</section>


      
     
    </>
  );
}
