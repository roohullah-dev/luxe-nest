import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../components/DarkModeContext";

function Footer() {
  const { darkMode } = useDarkMode();
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 sm:gap-16">
          {/* Left: Branding / Description */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex flex-col gap-5 lg:col-span-1"
          >
            <h2
              className={`text-3xl sm:text-4xl font-serif font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
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
                    aria-label={`Visit our ${Icon.name} page`}
                  >
                    <Icon
                      className={darkMode ? "text-white" : "text-gray-900"}
                    />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex flex-col gap-4"
          >
            <h3
              className={`text-xl sm:text-2xl font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
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
                <li key={i} data-aos="fade-left" data-aos-delay={250 + i * 100}>
                  <a
                    href={link}
                    className={`relative transition-colors hover:text-[#fa9746] ${
                      darkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {link.replace("#", "").replace("-", " ").toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col gap-4"
          >
            <h3
              className={`text-xl sm:text-2xl font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Contact
            </h3>
            <a
              href="mailto:contact@luxenest.com"
              data-aos="fade-up"
              data-aos-delay="350"
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#fa9746] hover:text-white ${
                darkMode
                  ? "bg-[#222222] text-gray-400"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <FaEnvelope /> contact@luxenest.com
            </a>
            <a
              href="tel:+1234567890"
              data-aos="fade-up"
              data-aos-delay="400"
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#fa9746] hover:text-white ${
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
              data-aos="fade-up"
              data-aos-delay="450"
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[#fa9746] hover:text-white ${
                darkMode
                  ? "bg-[#222222] text-gray-400"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <FaMapMarkerAlt /> 123 Luxury Avenue, Estate City
            </a>
          </div>

          {/* Newsletter */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="flex flex-col gap-4"
          >
            <h3
              className={`text-xl sm:text-2xl font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Newsletter
            </h3>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Subscribe to get the latest property listings and updates.
            </p>
            <form
              className="flex flex-col gap-3 w-full"
              onSubmit={handleSubscribe}
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
                data-aos="fade-up"
                data-aos-delay="550"
                className={`py-3 rounded-xl bg-[#fa9746] hover:bg-[#fa9746] text-white font-semibold transition-transform transform hover:scale-105`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className={`mt-12 pt-6 border-t text-center text-sm sm:text-base transition-colors duration-300 ${
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
