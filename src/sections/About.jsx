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
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <section
      id="about"
      className={`py-16 ${
        darkMode ? "bg-black text-gray-200" : "bg-white text-gray-800"
      } w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 gap-10 justify-center items-center`}
    >
      <div>
        <img
          src={aboutimg}
          data-aos="zoom-in"
          className="rounded-2xl lg:w-[500px] lg:h-[600px]"
          alt="About Image"
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-8">
        <h1 data-aos="zoom-in" className="span_line tracking-[0.35em]">
          WHO WE ARE
        </h1>
        <Title title="About us" />
        <p
          data-aos="zoom-in"
          className={`text-xl text-gray-60 text-justify font-light
${darkMode ? "text-white" : "text-black"}`}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          aliquid nemo quod culpa placeat eos. Esse impedit quam distinctio
          obcaecati unde nemo doloremque minus laboriosam?
        </p>
        <button
          // className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg px-10 py-4  text-white font-semibold rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out border"
          className="secondary_button lg:inline-block tracking-widest"
        >
          Read More
        </button>
      </div>
    </section>
  );
}

export default About;
