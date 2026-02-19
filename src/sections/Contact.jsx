import React, { useState, useEffect } from "react";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../components/DarkModeContext";
import Title from "./Title";

function ContactForm() {
  const { darkMode } = useDarkMode();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    propertyType: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ offset: 200, duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      inquiryType: "",
      propertyType: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className={`padding-bottom-1 overflow-x-hidden ${
        darkMode ? "bg-black text-gray-200" : "bg-[#f8f7f5] text-gray-900"
      }`}
    >
      {/* <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-40 pt-14"> */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-6 md:px-10 lg:px-40 pt-14">
        {/* HEADER */}
        <div className="mb-12 sm:mb-16 text-center lg:text-left">
          <Title
            title="Get in Touch with LuxeNest"
            subtitle="We’re Here to Help"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* FORM CARD */}

          <div
            className={`rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border w-full sm:max-w-none max-w-full mx-auto ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <p
              className={`mb-6 text-base leading-7 text-center lg:text-left ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Have questions or ready to find your dream home? Our team is here
              to guide you every step of the way — fast, personal, and
              hassle-free.
            </p>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* NAME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full p-4 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#fa9746]"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full p-4 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#fa9746]"
                />
              </div>

              {/* EMAIL & PHONE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full p-4 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#fa9746]"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  className="w-full p-4 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#fa9746]"
                />
              </div>

              {/* SELECTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full p-4 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#fa9746]"
                >
                  <option value="">Inquiry Type</option>
                  <option>Buy Property</option>
                  <option>Sell Property</option>
                  <option>Rent Property</option>
                </select>

                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  className="w-full p-4 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#fa9746]"
                >
                  <option value="">Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                </select>
              </div>

              {/* MESSAGE */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Additional Requirements"
                className="w-full p-4 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#fa9746]"
              />

              <button
                type="submit"
                className="secondary_button w-full sm:w-auto py-3 px-8 rounded-xl font-semibold text-sm tracking-wide"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* INFO + MAP */}
          <div className="flex flex-col gap-6 w-full">
            <div
              className={`p-6 sm:p-8 rounded-2xl shadow-lg border w-full ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* <div className="flex items-center gap-3 mb-4 text-sm"> */}

              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 text-sm text-center lg:text-left">
                <FaHome className="text-[#fa9746]" />
                <p>123 Luxury Avenue, Estate City</p>
              </div>
              <div className="flex items-center gap-3 mb-4 text-sm">
                <FaPhoneAlt className="text-[#fa9746]" />
                <p>+123 456 7890</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FaEnvelope className="text-[#fa9746]" />
                <p>contact@luxenest.com</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg w-full">
              <iframe
                title="Property Location"
                src="https://www.google.com/maps/embed?pb=!1m18..."
                className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px]"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
