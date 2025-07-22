import React, { useRef } from 'react';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import image1 from '../assets/images/image1.JPG';

export default function Hero() {
  const aboutRef = useRef(null);
  const { scrollY } = useScroll();

  const start = 0;
  const end = 200;

  const imgScale = useTransform(scrollY, [start, end ], [1, 0.75]);
  const backgroundSize = useTransform(scrollY, [start, end ], ["175%", "100%"]);
  const inset = useTransform(scrollY, [start, end ], [25, 0]); // percentage inset
  const clipPath = useMotionTemplate`inset(${inset}% round 0%)`;

  return (
    <>
      <section
        style={{ height: `calc(${end}px + 30vh)` }}
        className="relative flex flex-col-reverse items-center justify-between w-full max-w-6xl min-h-screen px-4 py-24 mx-auto md:flex-row"
      >
        {/* Left Side Content */}
        <div className="flex flex-col flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-orange-500 md:text-6xl">
            Elevate Your Events
          </h1>
          <span className="block mt-2 text-2xl text-gray-800">
            with Foxi Event Management
          </span>
          <p className="max-w-lg mt-4 text-lg text-gray-600">
            From corporate galas to unforgettable weddings…
          </p>
        </div>

        {/* Right Side: Sticky Image */}
        <motion.div
          className="relative sticky top-20 w-[80vw] max-w-[600px] aspect-square mb-10 md:mb-0 rounded-xl shadow-lg"
          style={{
            scale: imgScale,
            backgroundImage: `url(${image1})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize,
            clipPath,
          }}
        ></motion.div>
      </section>

      {/* About Section Placeholder */}
      <div ref={aboutRef}></div>
    </>
  );
}
