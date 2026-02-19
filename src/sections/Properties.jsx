import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";

import p1 from "../assets/images/prop1.webp";
import p2 from "../assets/images/prop2.webp";
import p3 from "../assets/images/prop3.webp";

function Properties() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 900,
      easing: "ease-in-out",
      delay: 80,
      once: true,
    });
  }, []);

  const { darkMode } = useDarkMode();

  const properties = [
    {
      title: "Luxury Villa with Strip Views",
      location: "Summerlin, Las Vegas",
      price: "$1,250,000",
      img: p1,
      link: "https://www.zillow.com",
    },
    {
      title: "Modern Downtown Residence",
      location: "Downtown Las Vegas",
      price: "$850,000",
      img: p2,
      link: "https://www.realtor.com",
    },
    {
      title: "Minimal Family Home",
      location: "Henderson, NV",
      price: "$620,000",
      img: p3,
      link: "https://www.redfin.com",
    },
  ];

  return (
    <section
      id="properties"
      className={`padding-bottom-1 w-full overflow-x-hidden ${
        darkMode ? "bg-black" : "bg-gray-100"
      }`}
    >
      {/* MAIN CONTAINER */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-40 pt-14">
        {/* HEADER */}
        <div className="mb-12 sm:mb-16 text-center lg:text-left">
          <Title title="Homes defined by space" subtitle="Your Expectation!" />
        </div>

        {/* PROPERTIES LIST */}
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-28">
          {properties.map((property, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-12 lg:gap-20"
            >
              {/* IMAGE */}
              <div
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className={`lg:col-span-7 ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={property.img}
                    alt={property.title}
                    className="w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[500px] object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay="120"
                className={`lg:col-span-5 flex flex-col gap-6 ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                {/* Location */}
                <span
                  className={`text-sm tracking-widest uppercase ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {property.location}
                </span>

                {/* Title */}
                <h3 className="section_sub_title text-xl sm:text-2xl text-[#fa9746]">
                  {property.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-base leading-7 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Thoughtfully designed spaces that balance privacy, nature, and
                  modern comfort—crafted for elevated living in Las Vegas.
                </p>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 mt-4">
                  <span className="text-xl sm:text-2xl font-semibold text-red-600">
                    {property.price}
                  </span>

                  <a
                    href={property.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative font-medium pb-1 ${
                      darkMode ? "text-white" : "text-black"
                    } after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-[#fa9746]`}
                  >
                    Explore Property
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Properties;
