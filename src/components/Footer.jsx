import React, { useState } from "react";
import luxeNestLogo from "../assets/images/luxeNest_logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useDarkMode } from "../components/DarkModeContext";

function Footer() {
  const { darkMode } = useDarkMode();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email!");
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer
      className={`w-full pt-16 pb-4 transition-colors duration-500 ${
        darkMode ? "bg-[#111111] text-gray-200" : "bg-[#ffffff] text-gray-900"
      }`}
    >
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 text-center lg:text-left">
          {/* Left Section (Wider) */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex-1 lg:flex-[2.5] flex flex-col items-center lg:items-start gap-5"
          >
            <a href="#hero" className="flex items-center">
              <img
                src={luxeNestLogo}
                alt="LuxeNest Logo"
                className="h-12 w-auto select-none"
                draggable="false"
              />
            </a>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Luxenest is your gateway to curated luxury homes. We connect you
              with properties that combine elegance, comfort, and style, making
              every space a place to truly live and thrive.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    data-aos="zoom-in"
                    data-aos-delay={150 + i * 100}
                    className={`p-3 rounded-full shadow-md transition-transform transform hover:scale-110 ${
                      darkMode
                        ? "bg-[#222222] hover:bg-[#fa9746]"
                        : "bg-gray-100 hover:bg-[#fa9746]"
                    }`}
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex-1 lg:flex-[1] flex flex-col items-center lg:items-start gap-5"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 text-sm sm:text-base">
              {[
                "#hero",
                "#about",
                "#popular-areas",
                "#clients",
                "#contact",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link}
                    className={`transition hover:text-[#fa9746] ${
                      darkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {link.replace("#", "").replace("-", " ").toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex-1 lg:flex-[1] flex flex-col items-center lg:items-start gap-5"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3 w-full">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@luxenest.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer
  hover:bg-[#fa9746] hover:text-white hover:shadow-lg
  ${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-700"}`}
              >
                <FaEnvelope />
                contact@luxenest.com
              </a>

              <a
                href="tel:+1234567890"
                data-aos="fade-left"
                data-aos-delay="340"
                className={`flex items-center gap-3 p-3 rounded-lg transition hover:bg-[#fa9746] hover:text-white break-words ${
                  darkMode
                    ? "bg-[#222222] text-gray-400"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <FaPhone /> +123 456 7890
              </a>
              <a
                href="https://www.google.com/maps?q=Elmwood+Ave,+Boston"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-left"
                data-aos-delay="360"
                className={`flex items-center gap-3 p-3 rounded-lg transition hover:bg-[#fa9746] hover:text-white break-words ${
                  darkMode
                    ? "bg-[#222222] text-gray-400"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <FaMapMarkerAlt /> Elmwood Ave, Boston
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="flex-1 lg:flex-[1.5] flex flex-col items-center lg:items-start gap-5"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Newsletter
            </h3>
            <p
              className={`text-sm sm:text-base mb-4 ${darkMode ? "text-gray-400" : "text-gray-700"}`}
            >
              Subscribe to get the latest property listings and updates.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 w-full"
              data-aos="fade-up"
              data-aos-delay="420"
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "border-gray-700 focus:ring-[#fa9746] bg-[#222222] text-gray-200"
                    : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
                }`}
              />
              <button
                type="submit"
                className="py-3 rounded-xl bg-[#fa9746] text-white font-semibold transition-transform hover:scale-105 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className={`mt-12 pt-6 border-t text-center text-sm transition ${
          darkMode
            ? "border-gray-700 text-gray-400"
            : "border-gray-300 text-gray-600"
        }`}
      >
        © {new Date().getFullYear()} Luxenest | Curating Luxury Homes Worldwide
      </div>
    </footer>
  );
}

export default Footer;
