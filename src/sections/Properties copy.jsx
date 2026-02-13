import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
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
    });
  }, []);

  const { darkMode } = useDarkMode();

  const properties = [
    {
      title: "Luxury Villa with Strip Views",
      location: "Summerlin, Las Vegas",
      price: "$1,250,000",
      img: p1,
    },
    {
      title: "Modern Downtown Residence",
      location: "Downtown Las Vegas",
      price: "$850,000",
      img: p2,
    },
    {
      title: "Minimal Family Home",
      location: "Henderson, NV",
      price: "$620,000",
      img: p3,
    },
  ];

  return (
    <section
      id="properties"
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"}
      w-full py-32`}
    >
      {/* Header */}
      <div className="lg:px-40 px-10 mb-28 max-w-3xl">
        <h1
          data-aos="fade-up"
          className="text-green-800 dark:text-red-700 tracking-[0.35em] text-sm"
        >
          FEATURED PROPERTIES
        </h1>

        <h2
          data-aos="fade-up"
          data-aos-delay="120"
          className="text-black dark:text-black text-[46px] font-semibold leading-tight mt-6"
        >
          Homes defined by space,
          <span className="block font-normal text-gray-600">
            light & architectural clarity
          </span>
        </h2>
      </div>

      {/* Properties Layout */}
      <div className="flex flex-col gap-40">
        {properties.map((property, index) => (
          <div
            key={index}
            className={`group grid lg:grid-cols-12 grid-cols-1 items-center gap-16
            lg:px-40 px-10`}
          >
            {/* Image Section */}
            <div
              data-aos="fade-right"
              className={`lg:col-span-7 ${index % 2 !== 0 ? "lg:order-2" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={property.img}
                  alt={property.title}
                  className="w-full h-[520px] object-cover transition-transform duration-1000
                  group-hover:scale-[1.05]"
                />
              </div>
            </div>

            {/* Text Section */}
            <div
              data-aos="fade-left"
              data-aos-delay="120"
              className={`lg:col-span-5 flex flex-col gap-6
              ${index % 2 !== 0 ? "lg:order-1" : ""}`}
            >
              <span className="text-sm tracking-widest text-gray-400 uppercase">
                {property.location}
              </span>

              <h3 className="text-black dark:text-white text-3xl font-semibold leading-snug">
                {property.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Thoughtfully designed spaces that balance privacy, nature, and
                modern comfort—crafted for elevated living in Las Vegas.
              </p>

              <div className="flex items-center gap-10 mt-6">
                <span className="text-2xl font-semibold text-red-600">
                  {property.price}
                </span>

                <button className="text-black dark:text-white font-medium border-b border-current pb-1 hover:opacity-70 transition">
                  Explore Property
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Properties;
