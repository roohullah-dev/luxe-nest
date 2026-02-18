import React, { useState } from "react";
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
        darkMode ? "bg-[#111111] text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      {/* Main Container aligned with Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 sm:gap-16">
          {/* Left Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex flex-col gap-5"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              LV<span className="font-light">Estates</span>
            </h2>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Luxury real estate solutions tailored for your dream home. Explore
              modern apartments, villas, and commercial properties.
            </p>

            <div className="flex gap-4 mt-3">
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
          <div data-aos="fade-right" data-aos-delay="200">
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
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Contact</h3>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@luxenest.com"
                className={`flex items-center gap-3 p-3 rounded-lg transition hover:bg-[#fa9746] hover:text-white ${
                  darkMode
                    ? "bg-[#222222] text-gray-400"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <FaEnvelope /> contact@luxenest.com
              </a>

              <a
                href="tel:+1234567890"
                className={`flex items-center gap-3 p-3 rounded-lg transition hover:bg-[#fa9746] hover:text-white ${
                  darkMode
                    ? "bg-[#222222] text-gray-400"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <FaPhone /> +123 456 7890
              </a>

              <a
                href="https://www.google.com/maps?q=123+Luxury+Avenue+Estate+City"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-lg transition hover:bg-[#fa9746] hover:text-white ${
                  darkMode
                    ? "bg-[#222222] text-gray-400"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <FaMapMarkerAlt /> 123 Luxury Avenue, Estate City
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Newsletter
            </h3>

            <p
              className={`text-sm sm:text-base mb-4 ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Subscribe to get the latest property listings and updates.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
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
                className="py-3 rounded-xl bg-[#fa9746] text-white font-semibold transition-transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className={`mt-12 pt-6 border-t text-center text-sm transition ${
          darkMode
            ? "border-gray-700 text-gray-400"
            : "border-gray-300 text-gray-600"
        }`}
      >
        &copy; {new Date().getFullYear()} LuxeNest. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
