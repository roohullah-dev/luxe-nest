import React from "react";
import { useEffect } from "react";
import { DarkModeProvider } from "./components/DarkModeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/Properties";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <DarkModeProvider>
      <Header />
      <Hero />
      <About />
      <Services />
      <PopularAreas />
      <Properties />
      <Clients />
      <Contact />
      {/* <Footer /> */}
    </DarkModeProvider>
  );
}

export default App;
