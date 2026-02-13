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
      offset: 150,
      duration: 800,
      easing: "ease-out",
      delay: 80,
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
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"}
      w-full m-auto lg:px-40 px-10 py-32`}
    >
      {/* Header */}
      <div className="inline-block mb-16">
        {/* <h1
          data-aos="fade-up"
          className="text-green-800 dark:text-red-700 tracking-[0.35em] text-sm"
        >
          POPULAR AREAS
        </h1> */}
        <h1 data-aos="zoom-in" className="span_line tracking-[0.35em]">
          WHO WE ARE
        </h1>
        <Title title="Popular Areas" />

        {/* <h2
          data-aos="fade-up"
          data-aos-delay="120"
          className="text-black dark:text-black text-[46px] font-semibold leading-tight mt-6"
        >
          Designed neighborhoods
          <span className="block font-normal text-gray-600">
            for elevated lifestyles
          </span>
        </h2> */}
      </div>

      {/* Advanced Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20">
        {areas.map((area, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 120}
            className="relative group"
          >
            {/* Image block */}
            <div className="relative z-10 w-full h-[260px] rounded-2xl overflow-hidden">
              <img
                src={area.img}
                alt={area.title}
                className="w-full h-[82%] object-cover transition-transform duration-700 ease-out
                group-hover:scale-[1.03]"
              />
            </div>

            {/* Content card */}
            <div
              className={`relative -mt-16 p-10 rounded-3xl
              ${darkMode ? "bg-gray-900" : "bg-white"}
              shadow-[0_30px_80px_rgba(0,0,0,0.12)]
              transition-all duration-500
              group-hover:-translate-y-2`}
            >
              <h3 className="section_sub_title dark:text-[#fa9746]">
                {area.title}
              </h3>

              <p
                className={`mt-2 text-sm leading-relaxed ${darkMode ? "text-white" : "text-black"}`}
              >
                {area.description}
              </p>

              <div className="flex items-center justify-between mt-8">
                <span className="text-sm tracking-wide text-gray-400">
                  {area.listings}
                </span>

                <span className="text-sm font-medium text-[#fa9746] hover:text-red-600 transition-all cursor-pointer">
                  Explore →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularAreas;
