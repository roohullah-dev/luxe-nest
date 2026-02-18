// import React, { useEffect } from "react";
// import { useDarkMode } from "../components/DarkModeContext";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Title from "./Title";
// import {
//   FaHome,
//   FaChartLine,
//   FaMapMarkedAlt,
//   FaHandshake,
// } from "react-icons/fa";

// function Services() {
//   const { darkMode } = useDarkMode();

//   useEffect(() => {
//     AOS.init({
//       offset: 120,
//       duration: 900,
//       easing: "ease-out-cubic",
//       delay: 50,
//       once: true,
//     });
//   }, []);

//   const services = [
//     {
//       title: "Residential Buying & Selling",
//       desc: "Comprehensive representation for buyers and sellers, ensuring accurate pricing, strong negotiation, and a smooth transaction from listing to closing.",
//       icon: <FaHome />,
//       aos: "fade-up",
//     },
//     {
//       title: "Market Analysis & Valuation",
//       desc: "In-depth market evaluations and property valuations based on current trends.",
//       icon: <FaChartLine />,
//       aos: "fade-down",
//     },
//     {
//       title: "Neighborhood & Area Expertise",
//       desc: "Local insight into communities and long-term value.",
//       icon: <FaMapMarkedAlt />,
//       aos: "fade-right",
//     },
//     {
//       title: "Client Representation",
//       desc: "Dedicated advocacy throughout every stage of the process.",
//       icon: <FaHandshake />,
//       aos: "fade-left",
//     },
//   ];

//   return (
//     <section
//       id="services"
//       className={`py-16 sm:py-20 md:py-24 overflow-x-hidden ${
//         darkMode ? "bg-black text-gray-200" : "bg-white text-gray-800"
//       }`}
//     >
//       <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-40 w-full">
//         {/* TITLE */}
//         <div className="mb-14 sm:mb-16 text-center lg:text-left">
//           <h1
//             data-aos="zoom-in"
//             className="span_line tracking-[0.35em] text-sm sm:text-base md:text-lg"
//           >
//             WHO WE ARE
//           </h1>
//           <Title title="Services" />
//         </div>

//         {/* SERVICES GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 text-center">
//           {services.map((item, index) => (
//             <div
//               key={index}
//               data-aos={item.aos}
//               data-aos-delay={index * 150}
//               className="transition-transform duration-500 hover:scale-105 flex flex-col items-center"
//             >
//               {/* ICON WRAPPER (overflow protected) */}
//               <div className="relative overflow-hidden">
//                 <div
//                   className={`relative w-[80px] sm:w-[90px] md:w-[100px] h-[80px] sm:h-[90px] md:h-[100px] mb-6 sm:mb-8 md:mb-10 rotate-45 rounded-xl flex items-center justify-center ${
//                     darkMode
//                       ? "bg-gray-800 border border-gray-700 shadow-lg"
//                       : "bg-[#7499f1] border-2 border-dotted border-[#eaf3fa] shadow-[0_0_27px_0_#ccc]"
//                   }`}
//                 >
//                   <span className="absolute -left-1 top-0 w-[1px] h-full bg-[#fa9746]" />
//                   <span className="absolute left-1/2 top-[66%] w-[1px] h-[88%] rotate-90 bg-[#fa9746]" />

//                   <span
//                     className={`text-[32px] sm:text-[36px] md:text-[40px] -rotate-45 ${
//                       darkMode ? "text-gray-200" : "text-[#eaf3fa]"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>
//                 </div>
//               </div>

//               {/* TEXT */}
//               <h5 className="section_sub_title text-sm sm:text-base md:text-lg text-[#fa9746]">
//                 {item.title}
//               </h5>

//               <p
//                 className={`text-xs sm:text-sm md:text-base mt-2 leading-relaxed max-w-xs ${
//                   darkMode ? "text-white" : "text-gray-700"
//                 }`}
//               >
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;

import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "./Title";
import {
  FaHome,
  FaChartLine,
  FaMapMarkedAlt,
  FaHandshake,
} from "react-icons/fa";

function Services() {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 900,
      easing: "ease-out-cubic",
      delay: 50,
      once: true,
    });
  }, []);

  const services = [
    {
      title: "Residential Buying & Selling",
      desc: "Comprehensive representation for buyers and sellers, ensuring accurate pricing, strong negotiation, and a smooth transaction from listing to closing.",
      icon: FaHome,
      aos: "fade-up",
    },
    {
      title: "Market Analysis & Valuation",
      desc: "In-depth market evaluations and property valuations based on current trends.",
      icon: FaChartLine,
      aos: "fade-down",
    },
    {
      title: "Neighborhood & Area Expertise",
      desc: "Local insight into communities and long-term value.",
      icon: FaMapMarkedAlt,
      aos: "fade-right",
    },
    {
      title: "Client Representation",
      desc: "Dedicated advocacy throughout every stage of the process.",
      icon: FaHandshake,
      aos: "fade-left",
    },
  ];

  return (
    <section
      id="services"
      className={`py-16 sm:py-20 md:py-24 overflow-x-hidden ${
        darkMode ? "bg-black text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-40 w-full">
        {/* TITLE */}
        <div className="mb-14 sm:mb-16 text-center lg:text-left">
          <h1
            data-aos="zoom-in"
            className="span_line tracking-[0.35em] text-sm sm:text-base md:text-lg"
          >
            WHO WE ARE
          </h1>
          <Title title="Services" />
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 text-center">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos={item.aos}
                data-aos-delay={index * 150}
                className="transition-transform duration-500 hover:scale-105 flex flex-col items-center"
              >
                {/* CLEAN HD ICON */}
                <Icon
                  className={`text-[42px] sm:text-[48px] md:text-[54px] mb-6 transition-all duration-300 ${
                    darkMode
                      ? "text-[#fa9746] hover:text-white"
                      : "text-[#fa9746] hover:text-black"
                  }`}
                />

                {/* TITLE */}
                <h5 className="section_sub_title text-sm sm:text-base md:text-lg text-[#fa9746]">
                  {item.title}
                </h5>

                {/* DESCRIPTION */}
                <p
                  className={`text-xs sm:text-sm md:text-base mt-2 leading-relaxed max-w-xs ${
                    darkMode ? "text-white" : "text-gray-700"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
