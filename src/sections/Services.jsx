import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "./Title";
import {
  FaHome,
  FaChartLine,
  FaMapMarkedAlt,
  FaHandshake,
} from "react-icons/fa";

function Services() {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 900,
      easing: "ease-out-cubic",
      delay: 50,
      once: true,
    });
  }, []);

  const services = [
    {
      title: "Residential Buying & Selling",
      desc: "Comprehensive representation for buyers and sellers, ensuring accurate pricing, strong negotiation, and a smooth transaction from listing to closing.",
      icon: <FaHome />,
      aos: "fade-up",
    },
    {
      title: "Market Analysis & Valuation",
      desc: "In-depth market evaluations and property valuations based on current trends, comparable sales, and neighborhood performance.",
      icon: <FaChartLine />,
      aos: "fade-down",
    },
    {
      title: "Neighborhood & Area Expertise",
      desc: "Local insight into communities, amenities, and long-term value, helping clients choose locations aligned with lifestyle and investment goals.",
      icon: <FaMapMarkedAlt />,
      aos: "fade-right",
    },
    {
      title: "Client Representation",
      desc: "Dedicated advocacy throughout every stage of the process, protecting client interests and securing favorable terms with confidence and discretion.",
      icon: <FaHandshake />,
      aos: "fade-left",
    },
  ];

  return (
    <section
      id="services"
      className={`py-16 sm:py-20 md:py-24 ${
        darkMode ? "bg-black text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-40">
        {/* TITLE */}
        <div className="relative inline-block mb-16 sm:mb-16 text-center lg:text-left">
          <h1
            data-aos="zoom-in"
            className="span_line tracking-[0.35em] text-sm sm:text-base md:text-lg"
          >
            WHO WE ARE
          </h1>
          <Title title="Services" />
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center gap-10 sm:gap-12 lg:gap-20">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos={item.aos}
              data-aos-delay={index * 150}
              className="transition-transform duration-500 hover:scale-105"
            >
              {/* SQUARE ICON */}
              <div
                className={`relative w-[80px] sm:w-[90px] md:w-[100px] h-[80px] sm:h-[90px] md:h-[100px] mx-auto mb-6 sm:mb-8 md:mb-10 rotate-45 rounded-xl flex items-center justify-center ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700 shadow-lg"
                    : "bg-[#7499f1] border-2 border-dotted border-[#eaf3fa] shadow-[0_0_27px_0_#ccc]"
                }`}
              >
                {/* vertical line */}
                <span
                  className={`absolute -left-1 top-0 w-[1px] h-full ${
                    darkMode ? "bg-[#fa9746]" : "bg-[#fa9746]"
                  }`}
                />
                {/* horizontal line */}
                <span
                  className={`absolute left-[50%] top-[66%] w-[1px] h-[88%] rotate-90 ${
                    darkMode ? "bg-[#fa9746]" : "bg-[#fa9746]"
                  }`}
                />
                {/* ICON */}
                <span
                  className={`text-[32px] sm:text-[36px] md:text-[40px] -rotate-45 ${
                    darkMode ? "text-gray-200" : "text-[#eaf3fa]"
                  }`}
                >
                  {item.icon}
                </span>
              </div>

              {/* TEXT */}
              <div>
                <h5
                  className={`section_sub_title text-sm sm:text-base md:text-lg ${
                    darkMode ? "text-[#fa9746]" : "text-[#fa9746]"
                  }`}
                >
                  {item.title}
                </h5>
                <p
                  className={`text-xs sm:text-sm md:text-base mt-2 leading-relaxed ${
                    darkMode ? "text-white" : "text-gray-700"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
