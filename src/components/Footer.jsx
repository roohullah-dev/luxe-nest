import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../components/DarkModeContext";

function Footer() {
  const { darkMode } = useDarkMode();
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1000,
      easing: "ease-out-back",
      once: true,
    });
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email!");
    console.log("Subscribed:", email);
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer
      className={`pt-12 sm:pt-16 pb-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-center lg:text-left">
        {/* Logo + Description */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col gap-4 items-center lg:items-start"
        >
          <h2
            className={`text-2xl font-serif font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            LV<span className="font-light">Estates</span>
          </h2>
          <p
            className={
              darkMode
                ? "text-gray-400 text-sm sm:text-base"
                : "text-gray-700 text-sm sm:text-base"
            }
          >
            Providing premium real estate solutions for your dream home. Explore
            luxury apartments, villas, and commercial properties.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4 justify-center lg:justify-start">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`p-2 rounded-full transition-transform transform hover:scale-125 ${
                    darkMode
                      ? "bg-gray-800 hover:bg-red-600"
                      : "bg-gray-200 hover:bg-red-500"
                  }`}
                  aria-label={`Visit our ${Icon.name} page`}
                  data-aos="zoom-in"
                  data-aos-delay={150 + i * 100}
                >
                  <Icon className={darkMode ? "text-white" : "text-gray-900"} />
                </a>
              ),
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="flex flex-col gap-3 items-center lg:items-start"
        >
          <h3
            className={`text-xl font-serif font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {["#hero", "#about", "#popular-areas", "#clients", "#contact"].map(
              (href, i) => (
                <li key={i} data-aos="fade-left" data-aos-delay={250 + i * 100}>
                  <a
                    href={href}
                    className={`transition-colors hover:text-red-600 ${
                      darkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {href.replace("#", "").replace("-", " ").toUpperCase()}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col gap-2 items-center lg:items-start"
        >
          <h3
            className={`text-xl font-serif font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Contact
          </h3>
          <p
            className={`flex items-center gap-2 ${darkMode ? "text-gray-400" : "text-gray-700"}`}
          >
            <span className="text-red-600">🏠</span> 123 Luxury Avenue, Estate
            City
          </p>
          <p
            className={`flex items-center gap-2 ${darkMode ? "text-gray-400" : "text-gray-700"}`}
          >
            <span className="text-red-600">📞</span> +123 456 7890
          </p>
          <p
            className={`flex items-center gap-2 ${darkMode ? "text-gray-400" : "text-gray-700"}`}
          >
            <span className="text-red-600">✉️</span> contact@luxenest.com
          </p>
        </div>

        {/* Newsletter Form */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="flex flex-col gap-3 items-center lg:items-start"
        >
          <h3
            className={`text-xl font-serif font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Newsletter
          </h3>
          <p
            className={`text-sm sm:text-base mb-4 text-center lg:text-left ${darkMode ? "text-gray-400" : "text-gray-700"}`}
          >
            Subscribe to receive the latest property listings and updates.
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
                  ? "border-gray-700 focus:ring-red-600 bg-gray-800 text-gray-200"
                  : "border-gray-300 focus:ring-red-600 bg-white text-gray-900"
              }`}
            />
            <button
              type="submit"
              className={`py-3 rounded-xl transition-all shadow-md transform hover:-translate-y-1 hover:scale-105 ${
                darkMode
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className={`mt-10 sm:mt-12 border-t pt-6 text-center text-sm ${
          darkMode
            ? "border-gray-700 text-gray-500"
            : "border-gray-300 text-gray-600"
        }`}
      >
        &copy; {new Date().getFullYear()} LuxeNest. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
