// import React, { useState } from "react";
// import { useDarkMode } from "../components/DarkModeContext";

// function ContactForm() {
//   const { darkMode } = useDarkMode();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     inquiryType: "",
//     propertyType: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // 👉 Replace this with API / backend / email service
//     console.log("Real Estate Inquiry Submitted:", formData);

//     alert("Your inquiry has been sent successfully!");

//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       inquiryType: "",
//       propertyType: "",
//       message: "",
//     });
//   };

//   return (
//     <section
//       id="contact"
//       className={`${darkMode ? "bg-black" : "bg-gray-100"} py-24 px-6`}
//     >
//       <div
//         className={`w-[70%] mx-auto rounded-xl overflow-hidden
//     ${darkMode ? "bg-gray-900" : "bg-white"}
//     shadow-[0_25px_80px_rgba(0,0,0,0.12)]`}
//       >
//         {/* Card content here */}

//         {/* Header */}
//         <div className="flex flex-col items-center gap-3 py-6">
//           <h3 className="text-xl font-semibold text-green-700">
//             Real Estate Inquiry
//           </h3>
//           <p className="text-sm text-gray-500 text-center">
//             Tell us what you’re looking for
//           </p>
//         </div>

//         {/* Title strip */}
//         <div className="bg-green-50 text-center py-4">
//           <h2 className="text-gray-800 font-medium">
//             Contact Our Property Experts
//           </h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
//           {/* Name */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="text-sm text-gray-600">First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="First Name"
//                 required
//                 className="w-full mt-1 p-3 rounded-md border border-gray-300
//                 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-600">Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 placeholder="Last Name"
//                 required
//                 className="w-full mt-1 p-3 rounded-md border border-gray-300
//                 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="text-sm text-gray-600">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email Address"
//                 required
//                 className="w-full mt-1 p-3 rounded-md border border-gray-300
//               focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="text-sm text-gray-600">Phone Number</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 required
//                 className="w-full mt-1 p-3 rounded-md border border-gray-300
//               focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>
//           </div>

//           {/* Inquiry Type */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="text-sm text-gray-600">Inquiry Type</label>
//               <select
//                 name="inquiryType"
//                 value={formData.inquiryType}
//                 onChange={handleChange}
//                 required
//                 className="w-full mt-1 p-3 rounded-md border border-gray-300
//               text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
//               >
//                 <option value="">Select Inquiry Type</option>
//                 <option>Buy Property</option>
//                 <option>Sell Property</option>
//                 <option>Rent Property</option>
//                 <option>Property Valuation</option>
//               </select>
//             </div>

//             {/* Property Type */}
//             <div>
//               <label className="text-sm text-gray-600">Property Type</label>
//               <select
//                 name="propertyType"
//                 value={formData.propertyType}
//                 onChange={handleChange}
//                 required
//                 className="w-full mt-1 p-3 rounded-md border border-gray-300
//               text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
//               >
//                 <option value="">Select Property Type</option>
//                 <option>Apartment</option>
//                 <option>Villa</option>
//                 <option>Commercial</option>
//                 <option>Land</option>
//               </select>
//             </div>
//           </div>

//           {/* Message */}
//           <div>
//             <label className="text-sm text-gray-600">
//               Additional Requirements
//             </label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Tell us more about your requirements..."
//               rows="4"
//               className="w-full mt-1 p-3 rounded-md border border-gray-300
//               focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="mt-4 bg-green-600 hover:bg-green-700
//             text-white font-semibold py-3 rounded-md
//             transition-all duration-300"
//           >
//             Submit Inquiry
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ContactForm;
import React, { useState, useEffect } from "react";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../components/DarkModeContext"; // import dark mode context
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
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out", // slightly different effect for variety
      once: true,
    });
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
      className={`py-32 transition-colors duration-500 items-start ${
        darkMode ? "bg-black text-gray-200" : "bg-[#f8f7f5] text-gray-900"
      }`}
    >
      <div className=" lg:px-40 px-10 mb-28 max-w-3xl">
        <h1 data-aos="zoom-in" className="span_line tracking-[0.35em]">
          WHO WE ARE
        </h1>
        <Title title="Contact us!" />
      </div>
      <div className="max-w-[79%] mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Form Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className={`rounded-3xl shadow-xl p-10 border ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Title strip */}{" "}
          <div className="bg-green-50 text-center py-4 rounded-xl mb-2">
            {" "}
            <h2 className="text-gray-800 font-medium">
              Contact Our Property Experts{" "}
            </h2>
          </div>
          <p className={darkMode ? "text-gray-400 mb-6" : "text-gray-600 mb-6"}>
            Tell us what you’re looking for and we’ll help you find your dream
            property.
          </p>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                    : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
                }`}
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                    : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
                }`}
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                    : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
                }`}
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                    : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
                }`}
                required
              />
            </div>

            {/* Inquiry & Property Type */}
            <div className="grid grid-cols-2 gap-4">
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                    : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
                }`}
                required
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
                className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                    : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
                }`}
                required
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
              className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-2 ${
                darkMode
                  ? "border-gray-600 focus:ring-[#fa9746] bg-gray-700 text-gray-200"
                  : "border-gray-300 focus:ring-[#fa9746] bg-white text-gray-900"
              }`}
            />

            {/* Submit */}
            <button
              type="submit"
              className={`font-semibold py-4 rounded-xl transition-all shadow-md cursor-pointer ${
                darkMode
                  ? "bg-[#fa9746] hover:bg-[#fa9746] text-gray-900"
                  : "bg-[#fa9746] hover:bg-[#fa9746] text-white hover:text-black transition-all duration-300 hover:scale-x-101"
              }`}
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Right: Info / Map */}
        <div className="flex flex-col justify-between gap-6">
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className={`p-8 rounded-2xl shadow-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaHome
                className={`text-2xl ${
                  darkMode ? "text-[#fa9746]" : "text-[#fa9746]"
                }`}
              />
              <p
                className={
                  darkMode
                    ? "text-gray-200 font-medium"
                    : "text-gray-800 font-medium"
                }
              >
                123 Luxury Avenue, Estate City
              </p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt
                className={`text-2xl ${
                  darkMode ? "text-[#fa9746]" : "text-[#fa9746]"
                }`}
              />
              <p
                className={
                  darkMode
                    ? "text-gray-200 font-medium"
                    : "text-gray-800 font-medium"
                }
              >
                +123 456 7890
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope
                className={`text-2xl ${
                  darkMode ? "text-[#fa9746]" : "text-[#fa9746]"
                }`}
              />
              <p
                className={
                  darkMode
                    ? "text-gray-200 font-medium"
                    : "text-gray-800 font-medium"
                }
              >
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
              width="100%"
              height="350"
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
