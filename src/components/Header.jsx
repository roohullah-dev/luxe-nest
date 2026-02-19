import React, { useState, useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import luxeNestLogo from "../assets/images/luxeNest_logo.png";

function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Areas", href: "#popular-areas" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? darkMode
              ? "bg-black/80 text-white backdrop-blur-md shadow-md"
              : "bg-white/90 text-gray-800 backdrop-blur-md shadow-md"
            : darkMode
              ? "bg-black/0 text-white sm:bg-transparent backdrop-blur-md"
              : "bg-transparent text-white sm:bg-transparent backdrop-blur-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className={`flex items-center transition-colors duration-300 ${
              scrolled
                ? darkMode
                  ? "text-white"
                  : "text-gray-800"
                : darkMode
                  ? "text-white"
                  : "text-white"
            }`}
          >
            <img
              src={luxeNestLogo}
              alt="LuxeNest Logo"
              className="h-12 w-auto select-none"
              draggable="false"
            />
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm lg:text-base font-medium transition-colors duration-300 ${
                    activeSection === link.href
                      ? "text-[#fa9746]"
                      : darkMode
                        ? "text-white hover:text-[#fa9746]"
                        : scrolled
                          ? "text-gray-800 hover:text-[#fa9746]"
                          : "text-white hover:text-[#fa9746]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#fa9746] transition-all duration-300 ${
                      activeSection === link.href ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">
            {/* DARK MODE TOGGLE */}
            <button
              onClick={toggleDarkMode}
              className={`transition duration-300 text-base lg:text-lg cursor-pointer ${
                darkMode
                  ? "text-white hover:text-[#fa9746]"
                  : scrolled
                    ? "text-gray-800 hover:text-[#fa9746]"
                    : "text-white hover:text-[#fa9746]"
              }`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* CONTACT BUTTON DESKTOP */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`hidden lg:inline-block px-6 py-2 rounded-xl text-sm lg:text-base font-medium border border-[#fa9746] transition duration-300 ${
                darkMode
                  ? "text-[#fa9746] hover:bg-[#fa9746] hover:text-white"
                  : "text-[#fa9746] hover:bg-[#fa9746] hover:text-white"
              }`}
            >
              Contact
            </a>

            {/* MOBILE MENU ICON */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden text-2xl transition cursor-pointer ${
                darkMode
                  ? "text-white hover:text-[#fa9746]"
                  : scrolled
                    ? "text-gray-800 hover:text-[#fa9746]"
                    : "text-white hover:text-[#fa9746]"
              }`}
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[999] ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DRAWER PANEL */}
        <div
          className={`fixed top-0 right-0 h-8/12 w-[85%] max-w-[320px] ${
            darkMode ? "bg-black/90 text-white" : "bg-white/95 text-gray-800"
          } text-center shadow-2xl transition-transform duration-500 ease-in-out rounded-2xl ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* DRAWER HEADER */}
          <div
            className={`flex items-center justify-between px-6 py-5 border-b ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center"
            >
              <img
                src={luxeNestLogo}
                alt="LuxeNest Logo"
                className="h-12 w-auto select-none"
                draggable="false"
              />
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-bold transition cursor-pointer ${
                darkMode
                  ? "text-white hover:text-[#fa9746]"
                  : "text-gray-800 hover:text-[#fa9746]"
              }`}
            >
              ✕
            </button>
          </div>

          {/* DRAWER LINKS */}
          <div className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-base font-medium transition duration-300 ${
                  darkMode
                    ? "text-white hover:text-[#fa9746]"
                    : "text-gray-800 hover:text-[#fa9746]"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* CONTACT BUTTON */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-6 px-6 py-3 rounded-xl text-sm font-medium border border-[#fa9746] text-[#fa9746] hover:bg-[#fa9746] hover:text-white transition duration-300 text-center"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
