import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";

import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";

function PopularAreas() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-out",
      delay: 80,
      once: true,
    });
  }, []);

  const { darkMode } = useDarkMode();

  const areas = [
    {
      title: "Downtown Las Vegas",
      listings: "120 Properties",
      description: "Urban living with premium high-rise residences.",
      img: area1,
    },
    {
      title: "Summerlin",
      listings: "85 Properties",
      description: "Luxury homes surrounded by nature & golf courses.",
      img: area2,
    },
    {
      title: "Henderson",
      listings: "98 Properties",
      description: "Modern communities with a calm suburban lifestyle.",
      img: area3,
    },
  ];

  return (
    <section
      id="popular-areas"
      className={`py-16 md:py-20 ${
        darkMode ? "bg-black text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mb-12 text-center lg:text-left">
          <Title title="Popular Areas" subtitle="Your Expectation!" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {areas.map((area, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group"
            >
              {/* IMAGE */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden">
                <img
                  src={area.img}
                  alt={area.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* CARD */}
              <div
                className={`relative -mt-10 p-6 rounded-2xl shadow-md transition duration-300 group-hover:-translate-y-2 ${
                  darkMode ? "bg-gray-900" : "bg-white"
                }`}
              >
                {/* TITLE */}
                <h3 className="text-lg font-semibold text-[#fa9746] mb-2">
                  {area.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {area.description}
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm text-gray-400">{area.listings}</span>

                  <span className="text-sm font-medium text-[#fa9746] hover:opacity-80 transition cursor-pointer">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularAreas;
