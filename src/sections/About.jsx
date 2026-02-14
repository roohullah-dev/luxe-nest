import React, { useEffect } from "react";
import aboutimg from "../assets/images/about.jpg";
import { useDarkMode } from "../components/DarkModeContext";
import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <section
      id="about"
      className={`py-16 ${
        darkMode ? "bg-black text-gray-200" : "bg-white text-gray-800"
      } w-full m-auto px-4 sm:px-6 md:px-10 lg:px-40 grid lg:grid-cols-2 grid-cols-1 gap-10 justify-center items-center`}
    >
      {/* IMAGE */}
      <div className="flex justify-center lg:justify-start">
        <img
          src={aboutimg}
          data-aos="zoom-in"
          className="rounded-2xl w-full sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto lg:h-[600px] object-cover"
          alt="About Image"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-center items-start gap-6 sm:gap-8 text-center lg:text-left">
        <h1
          data-aos="zoom-in"
          className="span_line tracking-[0.35em] text-sm sm:text-base md:text-lg"
        >
          WHO WE ARE
        </h1>
        <Title title="About us" />
        <p
          data-aos="zoom-in"
          className={`text-base sm:text-lg md:text-xl text-justify font-light ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          aliquid nemo quod culpa placeat eos. Esse impedit quam distinctio
          obcaecati unde nemo doloremque minus laboriosam?
        </p>
        <button className="secondary_button lg:inline-block tracking-widest w-full sm:w-auto text-center">
          Read More
        </button>
      </div>
    </section>
  );
}

export default About;
