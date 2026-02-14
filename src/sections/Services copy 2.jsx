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
      once: true, // animate only once
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
      className={`py-16 ${
        darkMode ? "bg-black text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* TITLE */}
        <div className="relative inline-block mb-16">
          <h1 data-aos="zoom-in" className="span_line tracking-[0.35em]">
            WHO WE ARE
          </h1>
          <Title title="Services" />

          {/* decorative squares */}
          {/* <span className="absolute -left-7 top-1 w-5 h-5 bg-[#7499f1] rotate-45 rounded shadow-md" />
          <span className="absolute -left-5 top-8 w-3.5 h-3.5 bg-[#7499f1] rotate-45 rounded shadow-md" /> */}
        </div>

        {/* SERVICES GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 text-center gap-12">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos={item.aos}
              data-aos-delay={index * 150}
              className="transition-transform duration-500 hover:scale-105"
            >
              {/* SQUARE ICON */}
              <div
                className={`relative w-[100px] h-[100px] mx-auto mb-10 rotate-45 rounded-xl flex items-center justify-center ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700 shadow-lg"
                    : "bg-[#7499f1] border-2 border-dotted border-[#eaf3fa] shadow-[0_0_27px_0_#ccc]"
                }`}
              >
                {/* vertical line */}
                <span
                  className={`absolute -left-2 top-0 w-[1px] h-full ${
                    darkMode ? "bg-[#fa9746]" : "bg-[#fa9746]"
                  }`}
                />

                {/* horizontal line */}
                <span
                  className={`absolute left-[50px] top-[66px] w-[1px] h-[88%] rotate-90 ${
                    darkMode ? "bg-[#fa9746]" : "bg-[#fa9746]"
                  }`}
                />

                {/* ICON */}
                <span
                  className={`text-[40px] -rotate-45 ${
                    darkMode ? "text-gray-200" : "text-[#eaf3fa]"
                  }`}
                >
                  {item.icon}
                </span>
              </div>

              {/* TEXT */}
              <div>
                <h5
                  className={`section_sub_title ${
                    darkMode ? "text-[#fa9746]" : "text-[#fa9746]"
                  }`}
                >
                  {item.title}
                </h5>
                <p
                  className={` ${darkMode ? "text-white" : "text-[section_para]"}  `}
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
