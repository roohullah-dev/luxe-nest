import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";

function Clients() {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 160,
      duration: 900,
      easing: "ease-out-cubic",
      delay: 80,
    });
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Buyer",
      quote:
        "From the first visit to closing day, everything felt effortless. They understood our lifestyle, not just our budget.",
    },
    {
      name: "Michael Brown",
      role: "Property Investor",
      quote:
        "Market insight, honesty, and precision. This team operates at a level you rarely find in real estate.",
    },
    {
      name: "Emily Davis",
      role: "First-time Buyer",
      quote:
        "As a first-time buyer, I felt guided and confident at every step. Truly a white-glove experience.",
    },
  ];

  return (
    <section
      id="clients"
      className={`padding-bottom-1 w-full px-6 sm:px-10 lg:px-36 ${
        darkMode ? "bg-black" : "bg-gray-100"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start  lg:px-4 px-10 mb-28">
        {/* LEFT SIDE – Editorial Content */}
        <div
          className="order-1 lg:order-1 lg:sticky lg:top-32 top-auto "
          data-aos="fade-up"
        >
          <Title title="Real Stories" subtitle="CLIENTS EXPERIENCE!" />
          <p
            className="mt-6 sm:mt-10 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            data-aos="fade-up"
            data-aos-delay={240}
          >
            Every property we represent carries a story — and every client
            experience reflects our commitment to precision, trust, and elevated
            living.
          </p>
        </div>

        {/* RIGHT SIDE – Testimonials */}
        <div className="order-2 lg:order-2 flex flex-col gap-12 sm:gap-16 lg:gap-20">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 140}
              className="group"
            >
              {/* Quote */}
              <p
                className={`text-lg sm:text-xl lg:text-2xl leading-snug font-light ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                “{item.quote}”
              </p>

              {/* Divider */}
              <div
                className={`w-16 sm:w-20 h-[2px] my-6 transition-all duration-500 ${
                  darkMode
                    ? "bg-[#fa9746] group-hover:w-32"
                    : "bg-[#fa9746] group-hover:w-32"
                }`}
              />

              {/* Client Info */}
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-0">
                <div>
                  <h3
                    className={`font-semibold text-base sm:text-lg ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.role}
                  </p>
                </div>

                <span className="text-sm tracking-widest text-gray-400 sm:ml-auto">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
