import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Title = ({ title, subtitle }) => {
  const { darkMode } = useDarkMode();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="relative mb-2 text-center sm:text-left overflow-hidden"
    >
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [0, 0.4, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 + i, delay: i * 0.3 }}
          className={`absolute rounded-full ${
            darkMode ? "bg-[#fa9746]" : "bg-[#fa9746]"
          }`}
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
        className={`bg-amber-400 border-8 text-4xl sm:text-5xl lg:text-5xl font-bold bg-clip-text text-transparent relative z-10 `}
        style={{
          backgroundImage: darkMode
            ? "linear-gradient(90deg, #ff5f6d, #ffc371, #ff5f6d)"
            : "linear-gradient(90deg, #fa9746, #7499f1, #fa9746)",
          backgroundSize: "200% auto",
          animation: "gradientMove 3s linear infinite",
        }}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.8 },
            },
          }}
          className={` text-gray-500 dark:text-gray-300 text-base sm:text-lg max-w-2xl`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Animated Underline */}
      <motion.div
        initial={{ width: 0 }}
        animate={controls}
        variants={{
          visible: {
            width: "80px",
            transition: {
              delay: 0.6,
              duration: 1,
              type: "spring",
              stiffness: 90,
            },
          },
        }}
        className={`h-1 rounded-full mt-4 ${
          darkMode ? "bg-[#fa9746]" : "bg-[#fa9746]"
        } relative mx-auto sm:mx-0`}
      />

      {/* Gradient Animation Keyframes */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Title;
