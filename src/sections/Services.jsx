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
      desc: "Comprehensive representation for buyers and sellers, ensuring accurate pricing.",
      icon: FaHome,
      aos: "fade-up",
    },
    {
      title: "Market Analysis & Valuation",
      desc: "In-depth market evaluations and property valuations based on current trends.",
      icon: FaChartLine,
      aos: "fade-down",
    },
    {
      title: "Neighborhood & Area Expertise",
      desc: "Local insight into communities and long-term value.",
      icon: FaMapMarkedAlt,
      aos: "fade-right",
    },
    {
      title: "Client Representation",
      desc: "Dedicated advocacy throughout every stage of the process.",
      icon: FaHandshake,
      aos: "fade-left",
    },
  ];

  return (
    <section
      id="services"
      className={`py-16 md:py-20 overflow-x-hidden ${
        darkMode ? "bg-black text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE */}
        <div className="mb-12 text-center lg:text-left">
          <Title title="Services" subtitle="Your Expectation!" />
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos={item.aos}
                data-aos-delay={index * 120}
                className="flex flex-col items-center p-6 rounded-2xl transition duration-300 hover:shadow-lg"
              >
                {/* ICON */}
                <Icon
                  className={`text-4xl mb-6 transition duration-300 ${
                    darkMode
                      ? "text-[#fa9746] hover:text-white"
                      : "text-[#fa9746] hover:text-black"
                  }`}
                />

                {/* CARD TITLE */}
                <h3 className="text-lg font-semibold text-[#fa9746] mb-3">
                  {item.title}
                </h3>

                {/* CARD DESCRIPTION */}
                <p
                  className={`text-sm sm:text-base leading-relaxed max-w-xs ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
