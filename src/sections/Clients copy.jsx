// import React, { useEffect } from "react";
// import { useDarkMode } from "../components/DarkModeContext";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // avatar images (replace with your real assets)
// import c1 from "../assets/images/client1.png";
// import c2 from "../assets/images/client2.png";
// import c3 from "../assets/images/client3.png";
// import c4 from "../assets/images/client4.png";
// import c5 from "../assets/images/client5.png";
// import c6 from "../assets/images/client6.png";
// import c7 from "../assets/images/client1.png";
// import c8 from "../assets/images/client5.png";
// import c9 from "../assets/images/client3.png";
// import c10 from "../assets/images/client2.png";

// function Clients() {
//   useEffect(() => {
//     AOS.init({
//       offset: 120,
//       duration: 900,
//       easing: "ease-out-cubic",
//       delay: 80,
//     });
//   }, []);

//   const { darkMode } = useDarkMode();

//   const clients = [
//     { img: c1, top: "10%", left: "6%" },
//     { img: c2, top: "28%", left: "12%" },
//     { img: c3, top: "15%", left: "22%" },
//     { img: c4, top: "8%", left: "36%" },
//     { img: c5, top: "22%", left: "48%" },
//     { img: c6, top: "10%", left: "62%" },
//     { img: c7, top: "26%", left: "72%" },
//     { img: c8, top: "14%", left: "82%" },
//     { img: c9, top: "32%", left: "90%" },
//     { img: c10, top: "42%", left: "18%" },
//   ];

//   return (
//     <section
//       id="clients"
//       className={`${darkMode ? "bg-black" : "bg-gray-100"} w-full py-32 px-6`}
//     >
//       <div
//         className={`relative max-w-7xl mx-auto rounded-[40px] overflow-hidden
//         ${darkMode ? "bg-gray-900" : "bg-white"}
//         shadow-[0_40px_120px_rgba(0,0,0,0.12)]
//         py-32 px-10`}
//       >
//         {/* Floating avatars */}
//         <div className="absolute inset-0 hidden lg:block">
//           {clients.map((client, index) => (
//             <div
//               key={index}
//               data-aos="fade-up"
//               data-aos-delay={index * 80}
//               className="absolute"
//               style={{ top: client.top, left: client.left }}
//             >
//               <img
//                 src={client.img}
//                 alt="Client"
//                 className="w-20 h-20 rounded-2xl object-cover
//                 shadow-[0_20px_50px_rgba(0,0,0,0.25)]
//                 hover:scale-105 transition-all duration-300"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Center content */}
//         <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col gap-8">
//           <span
//             data-aos="fade-up"
//             className="inline-block mx-auto px-4 py-2 text-xs tracking-widest rounded-full
//             bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
//           >
//             TESTIMONIALS
//           </span>

//           <h2
//             data-aos="fade-up"
//             data-aos-delay="150"
//             className="text-[46px] leading-tight font-semibold text-black dark:text-white"
//           >
//             Trusted by leaders
//             <span className="block font-normal text-gray-500">
//               from various industries
//             </span>
//           </h2>

//           <p
//             data-aos="fade-up"
//             data-aos-delay="300"
//             className="text-lg text-gray-600 dark:text-gray-400"
//           >
//             Learn why professionals trust our solutions to complete their
//             customer journeys.
//           </p>

//           <div data-aos="zoom-in" data-aos-delay="450">
//             <button
//               className="bg-black dark:bg-white text-white dark:text-black
//               px-10 py-4 rounded-full font-medium
//               hover:scale-105 transition-all duration-300
//               flex items-center gap-3 mx-auto"
//             >
//               Read Success Stories →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Clients;
import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

function Clients() {
  useEffect(() => {
    AOS.init({
      offset: 160,
      duration: 900,
      easing: "ease-out-cubic",
      delay: 80,
    });
  }, []);

  const { darkMode } = useDarkMode();

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
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"}
      w-full m-auto lg:px-40 px-10 py-36`}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-24 items-start">
        {/* LEFT SIDE – Editorial Content */}
        <div className="sticky top-32">
          <h1
            data-aos="fade-up"
            className="text-green-800 dark:text-red-700 tracking-[0.35em] text-sm mb-8"
          >
            CLIENT EXPERIENCES
          </h1>

          <h2
            data-aos="fade-up"
            data-aos-delay="120"
            className="text-black dark:text-black text-[52px] font-semibold leading-tight"
          >
            Real stories.
            <span className="block font-normal text-gray-600">
              Real satisfaction.
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="240"
            className="mt-10 text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
          >
            Every property we represent carries a story — and every client
            experience reflects our commitment to precision, trust, and elevated
            living.
          </p>
        </div>

        {/* RIGHT SIDE – Flowing Testimonials */}
        <div className="flex flex-col gap-20">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 140}
              className="group"
            >
              {/* Quote */}
              <p
                className={`text-[28px] leading-snug font-light
                ${darkMode ? "text-gray-200" : "text-gray-800"}`}
              >
                “{item.quote}”
              </p>

              {/* Divider */}
              <div
                className={`w-20 h-[2px] my-8 transition-all duration-500
                ${
                  darkMode
                    ? "bg-red-700 group-hover:w-32"
                    : "bg-green-800 group-hover:w-32"
                }`}
              />

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-black dark:text-white font-semibold text-lg">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.role}
                  </p>
                </div>

                <span className="text-sm tracking-widest text-gray-400">
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
