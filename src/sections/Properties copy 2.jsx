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
      className={`w-full py-32 transition-colors duration-500
        ${darkMode ? "bg-black" : "bg-gray-100"}`}
    >
      {/* HEADER */}
      <div className="lg:px-40 px-10 mb-28 max-w-3xl">
        <h1
          data-aos="zoom-in"
          className={`tracking-[0.35em] text-sm span_line
            ${darkMode ? "text-red-600" : "text-green-800"}`}
        >
          FEATURED PROPERTIES
        </h1>

        <Title title="Homes defined by space" />
      </div>

      {/* PROPERTIES */}
      <div className="flex flex-col gap-40">
        {properties.map((property, index) => (
          <div
            key={index}
            className="group grid lg:grid-cols-12 grid-cols-1 items-center gap-16
              lg:px-40 px-10"
          >
            {/* IMAGE */}
            <div
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className={`lg:col-span-7 ${index % 2 !== 0 ? "lg:order-2" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={property.img}
                  alt={property.title}
                  className="w-full h-[520px] object-cover
                    transition-transform duration-[1200ms]
                    group-hover:scale-[1.06]"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay="120"
              className={`lg:col-span-5 flex flex-col gap-6
                ${index % 2 !== 0 ? "lg:order-1" : ""}`}
            >
              <span
                className={`text-sm tracking-widest uppercase
                  ${darkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                {property.location}
              </span>

              <h3
                className={`section_sub_title ${
                  darkMode ? "text-[#fa9746]" : "text-[#fa9746]"
                }`}
              >
                {property.title}
              </h3>

              <p
                className={`leading-relaxed
                  ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Thoughtfully designed spaces that balance privacy, nature, and
                modern comfort—crafted for elevated living in Las Vegas.
              </p>

              <div className="flex items-center gap-10 mt-6">
                <span className="text-2xl font-semibold text-red-600">
                  {property.price}
                </span>

                {/* EXTERNAL LINK */}
                <a
                  href={property.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative font-medium pb-1
                    ${darkMode ? "text-white" : "text-black"}
                    after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[1px]
                    after:bg-current
                    after:transition-all after:duration-300
                    hover:after:w-full hover:text-red-600`}
                >
                  Explore Property
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Properties;
