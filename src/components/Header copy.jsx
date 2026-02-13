import React, { useState, useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";

function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Areas", href: "#popular-areas" },
    { name: "Clients", href: "#clients" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? darkMode
              ? "bg-black/90 backdrop-blur-md"
              : "bg-white/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="w-full m-auto lg:px-40 px-6 py-6 flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#hero"
            className="text-black dark:text-white text-xl font-semibold tracking-wide"
          >
            LV<span className="font-light">Estates</span>
          </a>

          {/* DESKTOP LINKS */}
          <ul className="hidden lg:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm tracking-widest uppercase
                  text-gray-700 dark:text-gray-300
                  hover:text-red-600 dark:hover:text-red-500
                  transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* ACTIONS */}
          <div className="flex items-center gap-6">
            {/* DARK MODE TOGGLE */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-300 text-sm tracking-widest uppercase hover:text-red-600 transition-colors"
            >
              {darkMode ? "Light" : "Dark"}
            </button>

            {/* CONTACT BUTTON */}
            <a
              href="#contact"
              className="hidden lg:inline-block border border-red-600
              text-red-600 hover:bg-red-600 hover:text-white
              px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Contact
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-black dark:text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div
          className={`fixed inset-0 z-50 flex flex-col
          ${darkMode ? "bg-black" : "bg-white"}`}
        >
          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 py-6">
            <span className="text-xl font-semibold text-black dark:text-white">
              LV<span className="font-light">Estates</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-black dark:text-white"
            >
              ×
            </button>
          </div>

          {/* MOBILE LINKS */}
          <div className="flex flex-col justify-center items-center gap-12 flex-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[28px] font-light tracking-widest uppercase
                text-gray-700 dark:text-gray-200
                hover:text-red-600 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-12 border border-red-600
              text-red-600 hover:bg-red-600 hover:text-white
              px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
