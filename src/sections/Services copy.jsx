import React from "react";
// import { FaCode, FaCogs, FaGlobe, FaUserShield } from "react-icons/fa";
import {
  FaHome,
  FaChartLine,
  FaMapMarkedAlt,
  FaHandshake,
} from "react-icons/fa";
function Services() {
  const services = [
    {
      title: "Residential Buying & Selling",
      desc: "Comprehensive representation for buyers and sellers, ensuring accurate pricing, strong negotiation, and a smooth transaction from listing to closing.",
      icon: <FaHome />,
    },
    {
      title: "Market Analysis & Valuation",
      desc: "In-depth market evaluations and property valuations based on current trends, comparable sales, and neighborhood performance.",
      icon: <FaChartLine />,
    },
    {
      title: "Neighborhood & Area Expertise",
      desc: "Local insight into communities, amenities, and long-term value, helping clients choose locations aligned with lifestyle and investment goals.",
      icon: <FaMapMarkedAlt />,
    },
    {
      title: "Client Representation & Negotiation",
      desc: "Dedicated advocacy throughout every stage of the process, protecting client interests and securing favorable terms with confidence and discretion.",
      icon: <FaHandshake />,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="relative inline-block mb-16">
          <h3 className="text-[#fa9746] text-3xl font-semibold">Services</h3>

          {/* decorative squares (title ::before & ::after) */}
          <span className="absolute -left-7 top-1 w-5 h-5 bg-[#7499f1] rotate-45 rounded shadow-md" />
          <span className="absolute -left-5 top-8 w-3.5 h-3.5 bg-[#7499f1] rotate-45 rounded shadow-md" />
        </div>

        {/* SERVICES GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 text-center gap-12">
          {services.map((item, index) => (
            <div key={index}>
              {/* SQUARE ICON */}
              <div className="relative w-[100px] h-[100px] mx-auto mb-10 rotate-45 rounded-xl bg-[#7499f1] border-2 border-dotted border-[#eaf3fa] shadow-[0_0_27px_0_#ccc] flex items-center justify-center">
                {/* vertical line */}
                <span className="absolute -left-2 top-0 w-[1px] h-full bg-[#fa9746]" />

                {/* horizontal line */}
                <span className="absolute left-[50px] top-[66px] w-[1px] h-[88%] bg-[#fa9746] rotate-90" />

                {/* ICON */}
                <span className="text-[#eaf3fa] text-[40px] -rotate-45">
                  {item.icon}
                </span>
              </div>

              {/* TEXT */}
              <div>
                <h5 className="text-[#fa9746] text-lg font-semibold mb-3">
                  {item.title}
                </h5>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
