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
        className="relative z-10 text-center flex flex-col items-center px-4 sm:px-6 md:px-10 max-w-3xl"
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
          className={`uppercase span_line tracking-[0.35em] mb-4 ${
            darkMode ? "text-gray-400" : "text-gray-200"
          } text-xs sm:text-sm md:text-base`}
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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: darkMode
              ? "linear-gradient(90deg, #ff5f6d, #ffc371, #ff5f6d)"
              : "linear-gradient(90deg, #fa9746, #7499f1, #fa9746)",
            backgroundSize: "200% auto",
            animation: "gradientMove 4s linear infinite",
          }}
        >
          Live Beyond Luxury
          <br /> Your Dream Here
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
          className={`mt-6 text-base sm:text-lg md:text-xl max-w-xl ${
            darkMode ? "text-gray-300" : "text-gray-100"
          }`}
        >
          Explore premium villas, apartments, and commercial properties designed
          for modern luxury living.
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
          className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6"
        >
          <a
            href="#properties"
            className="secondary_button lg:inline-block tracking-widest w-full sm:w-auto text-center"
          >
            Browse Properties
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button lg:inline-block tracking-widest w-full sm:w-auto text-center"
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

      {/* Gradient Animation Keyframes */}
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
