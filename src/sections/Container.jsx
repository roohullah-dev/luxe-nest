import React, { useEffect, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";

const Container = ({ children }) => {
  const { darkMode } = useDarkMode();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gradient changes based on scroll
  const gradientLight = `linear-gradient(135deg, rgba(255,182,193,${
    0.3 + scrollY / 2000
  }) 0%, rgba(173,216,230,${0.3 + scrollY / 2000}) 100%)`;

  const gradientDark = `linear-gradient(135deg, rgba(30,30,30,${
    0.4 + scrollY / 2000
  }) 0%, rgba(60,60,60,${0.4 + scrollY / 2000}) 100%)`;

  return (
    <div
      className="w-full transition-all duration-500"
      style={{
        background: darkMode ? gradientDark : gradientLight,
        minHeight: "100vh", // ensures container is at least full viewport
      }}
    >
      {children}
    </div>
  );
};

export default Container;
