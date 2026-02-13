import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SpanLine({ span }) {
  const { darkMode } = useDarkMode();
  const controls = useAnimation();
  return (
    <div>
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
        className={`uppercase span_line tracking-[0.35em] ${
          darkMode ? "text-black" : "text-black"
        }`}
      >
        {span}
      </motion.span>
    </div>
  );
}

export default SpanLine;
