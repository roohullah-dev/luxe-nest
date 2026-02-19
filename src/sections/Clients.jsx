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
      {/* LEFT SIDE – Editorial Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start px-0 sm:px-6 lg:px-4">
        <div
          className="order-1 lg:order-1 lg:sticky top-40 self-start"
          data-aos="fade-up"
        >
          <Title
            title="What Our Clients Say"
            subtitle="Trusted by Homeowners & Investors"
          />
          <p
            className="mt-6 sm:mt-10 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            data-aos="fade-up"
            data-aos-delay={240}
          >
            Our clients choose Luxenest for our commitment to quality, style,
            and seamless service. From finding the perfect property to closing
            the deal, we ensure every experience is smooth, rewarding, and
            unforgettable.
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
              <p
                className={`text-lg sm:text-xl lg:text-2xl leading-snug font-light text-center lg:text-left ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                “{item.quote}”
              </p>

              {/* Divider */}
              <div
                className={`w-16 sm:w-20 h-[2px] my-6 transition-all duration-500 ${
                  darkMode
                    ? "bg-[#fa9746] group-hover:w-64"
                    : "bg-[#fa9746] group-hover:w-64"
                }`}
              />

              {/* Client Info */}
              {/* <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-0"> */}
              <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-center gap-2 sm:gap-0 text-center sm:text-left">
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
