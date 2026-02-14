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
    console.log("Submitted:", formData);
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
      className={`transition-colors duration-500 py-16 sm:py-20 md:py-24 lg:py-32 ${
        darkMode ? "bg-black text-gray-200" : "bg-[#f8f7f5] text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-3xl mx-auto px-4 sm:px-6 md:px-10 mb-16">
        <h1
          data-aos="zoom-in"
          className="span_line tracking-[0.35em] text-sm sm:text-base md:text-lg"
        >
          WHO WE ARE
        </h1>
        <Title title="Contact us!" />
      </div>

      {/* Form + Info */}
      <div className="max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[79%] mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
        {/* Form Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className={`rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="bg-green-50 text-center py-4 rounded-xl mb-4">
            <h2 className="text-gray-800 font-medium">
              Contact Our Property Experts
            </h2>
          </div>
          <p
            className={
              darkMode
                ? "text-gray-400 mb-6 text-sm sm:text-base"
                : "text-gray-600 mb-6 text-sm sm:text-base"
            }
          >
            Tell us what you’re looking for and we’ll help you find your dream
            property.
          </p>

          <form
            className="flex flex-col gap-4 sm:gap-6"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className={`w-full p-4 text-sm sm:text-base rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                    : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
                }`}
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className={`w-full p-4 text-sm sm:text-base rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                    : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
                }`}
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className={`w-full p-4 text-sm sm:text-base rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                    : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
                }`}
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className={`w-full p-4 text-sm sm:text-base rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                    : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
                }`}
              />
            </div>

            {/* Inquiry & Property Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                required
                className={`w-full p-4 text-sm sm:text-base rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                    : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
                }`}
              >
                <option value="">Inquiry Type</option>
                <option>Buy Property</option>
                <option>Sell Property</option>
                <option>Rent Property</option>
                <option>Property Valuation</option>
              </select>

              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
                className={`w-full p-4 text-sm sm:text-base rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                    : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
                }`}
              >
                <option value="">Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional Requirements"
              rows="4"
              className={`w-full p-4 text-sm sm:text-base rounded-xl border focus:outline-none focus:ring-2 ${
                darkMode
                  ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                  : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
              }`}
            />

            <button
              type="submit"
              className={`w-full sm:w-auto font-semibold py-4 rounded-xl transition-all shadow-md cursor-pointer ${
                darkMode
                  ? "bg-[#fa9746] hover:bg-[#fa9746] text-gray-900"
                  : "bg-[#fa9746] hover:bg-[#fa9746] text-white hover:text-black transition-all duration-300 hover:scale-x-101"
              }`}
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Info + Map */}
        <div className="flex flex-col gap-6">
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className={`p-6 sm:p-8 rounded-2xl shadow-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaHome className="text-2xl text-[#fa9746]" />
              <p className="text-sm sm:text-base font-medium">
                123 Luxury Avenue, Estate City
              </p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-2xl text-[#fa9746]" />
              <p className="text-sm sm:text-base font-medium">+123 456 7890</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-2xl text-[#fa9746]" />
              <p className="text-sm sm:text-base font-medium">
                contact@luxenest.com
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              title="Property Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019739386467!2d-122.41941518468143!3d37.77492927975952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e3f2b4f53%3A0x69f0b0b8c1a5f0d7!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
