import React, { useEffect } from "react";
import aboutimg from "../assets/images/about.jpg";
import { useDarkMode } from "../components/DarkModeContext";
import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <section
      id="about"
      className={`py-16 md:py-20 ${
        darkMode ? "bg-black text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={aboutimg}
            data-aos="zoom-in"
            className="rounded-2xl w-full max-w-md lg:max-w-lg h-auto lg:h-[550px] object-cover"
            alt="About Image"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          {/* Title Component */}
          <div className="text-center lg:text-left">
            <Title title="About Us" subtitle="Who We Are" />
          </div>

          {/* Paragraph */}
          <p
            data-aos="zoom-in"
            className={`text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            aliquid nemo quod culpa placeat eos. Esse impedit quam distinctio
            obcaecati unde nemo doloremque minus laboriosam?
          </p>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="button px-6 py-3 rounded-xl text-sm sm:text-base font-medium border transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
