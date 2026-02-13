import React, { useState, useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import luxeNest_logo from "../assets/images/luxeNest_logo1.png";

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

  // Scroll listener for background & active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll on click
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
          ${
            scrolled
              ? darkMode
                ? "bg-black/60 backdrop-blur-sm"
                : "bg-black/60 backdrop-blur-sm"
              : `bg-transparent`
          }`}
      >
        <nav className="w-full m-auto lg:px-40 px-6 py-3 flex items-center justify-between shadow-[0_4px_6px_1px_rgba(0,0,0,0.2)]">
          {/* LOGO */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="text-black dark:text-white text-2xl font-semibold tracking-wide"
          >
            Luxe<span className="font-light">Nest</span>
          </a>

          {/* DESKTOP LINKS */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    relative text-sm tracking-widest font-18
                    transition-colors duration-300
                    // ${darkMode ? "text-gray-800" : "text-gray-700"}
                    ${darkMode ? "text-white" : "text-white"}
                    hover:text-[#fa9746] dark:hover:text-[#fa9746]
                    ${activeSection === link.href ? "text-[#fa9746] dark:text-[#fa9746]" : ""}
                  `}
                >
                  {link.name}
                  {/* underline animation */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] bg-[#fa9746]
                      transition-all duration-300
                      ${activeSection === link.href ? "w-full" : "w-0"}
                    `}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* ACTIONS */}
          <div className="flex items-center gap-6">
            {/* DARK MODE TOGGLE */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-white font-18 tracking-widest hover:text-[#fa9746] transition-colors font-18 cursor-pointer"
            >
              {darkMode ? "Light" : "Dark"}
            </button>

            {/* CONTACT BUTTON */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              // className="hidden lg:inline-block border border-[#fa9746]
              //   text-[#fa9746] hover:bg-[#fa9746] hover:text-white
              //   px-6 py-2 font-18 tracking-widest transition-all duration-300 rounded"
              className="button hidden lg:inline-block tracking-widest"
            >
              Contact
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-black dark:text-white text-2xl cursor-pointer"
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
            {/* <button
              onClick={() => setMenuOpen(false)}
              className="lg:hidden text-black dark:text-white text-2xl cursor-pointer"
            >
            ×
            </button> */}
            <button
              onClick={() => setMenuOpen(false)}
              className="lg:hidden text-black dark:text-white text-2xl cursor-pointer"
            >
              ×
            </button>
          </div>

          {/* MOBILE LINKS */}
          <div className="flex flex-col justify-center items-center gap-4 w-50% flex-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[18px] font-light tracking-widest
                  relative transition-colors duration-300
                  ${darkMode ? "text-gray-200" : "text-gray-700"}
                  hover:text-[#fa9746]
                `}
              >
                {link.name}
                <span
                  className={`
                    absolute left-0 -bottom-2 h-[2px] bg-[#fa9746]
                    transition-all duration-300
                    ${activeSection === link.href ? "w-full" : "w-0"}
                  `}
                ></span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-12 border border-[#fa9746]
                text-[#fa9746] hover:bg-[#fa9746] hover:text-white
                px-10 py-2 rounded text-sm tracking-widest  transition-all duration-300"
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
