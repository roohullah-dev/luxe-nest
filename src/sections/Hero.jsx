import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroVideo from "../assets/videos/hero.mp4";

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
      className={`relative w-full min-h-screen flex items-start sm:items-center justify-center pt-32 sm:pt-0 overflow-hidden
        ${darkMode ? "bg-black" : "bg-gray-100"}`}
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Gradient Overlay for clearer content */}
      <div
        className={`absolute inset-0 z-10`}
        style={{
          background: darkMode
            ? "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85))"
            : "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))",
        }}
      ></div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
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
          Discover Luxury Living
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
          Homes That Inspire, Lives
          <br className="hidden sm:block" /> That Flourish
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
          At LuxeNest, we specialize in connecting discerning clients with
          exclusive properties that reflect their lifestyle and aspirations.
          Whether it’s a modern apartment in the city, a beachfront villa, or a
          premium commercial space, our team ensures a seamless, personalized,
          and transparent real estate experience from start to finish.
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
            href="#popular-areas"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#popular-areas")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="secondary_button px-6 py-3 rounded-xl text-sm sm:text-base font-medium border transition duration-300 w-full sm:w-auto"
          >
            Browse Properties
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="button px-6 py-3 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transition duration-300 w-full sm:w-auto"
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
