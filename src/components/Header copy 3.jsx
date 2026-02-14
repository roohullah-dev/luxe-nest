import React, { useState, useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";

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

  // Scroll listener
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

  // Smooth scroll
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
          ${scrolled ? "bg-black/60 backdrop-blur-sm" : "bg-transparent"}`}
      >
        <nav className="w-full m-auto lg:px-40 px-6 py-3 flex items-center justify-between shadow-lg">
          {/* LOGO */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="text-white text-2xl font-semibold tracking-wide"
          >
            Luxe<span className="font-light">Nest</span>
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative  tracking-widest transition-all duration-300
                    text-white hover:text-[#fa9746]
                    ${activeSection === link.href ? "text-[#fa9746]" : ""}`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#fa9746] transition-all duration-300
                      ${activeSection === link.href ? "w-full" : "w-0"}`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-6">
            {/* DARK MODE */}
            <button
              onClick={toggleDarkMode}
              className="text-white hover:text-[#fa9746] transition"
            >
              {darkMode ? "Light" : "Dark"}
            </button>

            {/* CONTACT DESKTOP */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden lg:inline-block button tracking-widest"
            >
              Contact
            </a>

            {/* MOBILE MENU ICON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-white text-2xl hover:text-[#fa9746] transition-transform hover:scale-110"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* RIGHT SIDE MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[999] ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500
            ${menuOpen ? "opacity-100" : "opacity-0"}`}
        />

        {/* DRAWER PANEL */}

        {/* MOBILE RIGHT DRAWER */}
        <div
          className={`fixed inset-0 z-[999] ${menuOpen ? "" : "pointer-events-none"}`}
        >
          {/* BACKDROP */}
          <div
            onClick={() => setMenuOpen(false)}
            className={`absolute inset-0 bg-black/40 transition-opacity duration-500
      ${menuOpen ? "opacity-100" : "opacity-0"}`}
          />

          {/* RIGHT PANEL */}
          <div
            className={`absolute top-0 right-0 h-full w-[320px] max-w-[85%]
      bg-white dark:bg-black shadow-2xl
      transition-transform duration-500 ease-in-out
      ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-lg font-semibold text-black dark:text-white">
                Luxe<span className="font-light">Nest</span>
              </span>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-black dark:text-white hover:text-[#fa9746] transition"
              >
                ✕
              </button>
            </div>

            {/* MENU LINKS */}
            <div className="flex flex-col gap-5 px-6 py-6 text-left">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base tracking-widest transition-all duration-300
            ${darkMode ? "text-gray-200" : "text-gray-700"}
            hover:text-[#fa9746] hover:translate-x-2`}
                >
                  {link.name}
                </a>
              ))}

              {/* CONTACT BUTTON */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-6 border border-[#fa9746] text-[#fa9746]
          hover:bg-[#fa9746] hover:text-white px-6 py-2 rounded tracking-widest
          transition text-center"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
