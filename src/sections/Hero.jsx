import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImg from "../assets/images/hero1.webp";

function Hero() {
  const { darkMode } = useDarkMode();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      id="hero"
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? "bg-black" : "bg-gray-100"
      }`}
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-black/70" : "bg-black/40"
        }`}
      ></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.8 },
            },
          }}
          className={`uppercase text-sm font-medium tracking-wide ${
            darkMode ? "text-gray-400" : "text-gray-200"
          }`}
        >
          Luxury Real Estate
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 1 },
            },
          }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: darkMode
              ? "linear-gradient(90deg, #ff5f6d, #ffc371, #ff5f6d)"
              : "linear-gradient(90deg, #fa9746, #7499f1, #fa9746)",
            backgroundSize: "200% auto",
            animation: "gradientMove 4s linear infinite",
          }}
        >
          Live Beyond Luxury <br className="hidden sm:block" />
          Your Dream Here
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.7, duration: 1 },
            },
          }}
          className={`mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-100"
          }`}
        >
          Experience elevated living with our exclusive collection of luxury
          villas, modern apartments, and premium commercial spaces —
          thoughtfully designed to deliver elegance, comfort, and lasting value
          in every detail.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.9, duration: 1 },
            },
          }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#properties"
            className="px-6 py-3 rounded-xl text-sm sm:text-base font-medium border border-white text-white hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto"
          >
            Browse Properties
          </a>

          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-sm sm:text-base font-medium bg-[#fa9746] text-white hover:opacity-90 transition duration-300 w-full sm:w-auto"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [0, -20, 0],
            transition: { repeat: Infinity, duration: 3 + i, delay: i * 0.3 },
          }}
          className={`absolute w-2 h-2 rounded-full ${
            darkMode ? "bg-red-600" : "bg-[#fa9746]"
          }`}
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></motion.span>
      ))}

      {/* Gradient Animation */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}

export default Hero;
