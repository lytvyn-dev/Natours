import React from "react";
import ReactDOM from "react-dom/client";
// styles
import "./styles/index.css";
// sections
import HeroSection from "./components/sections/HeroSection";
import ExcitingTours from "./components/sections/ExcitingTours";
import SectionAbout from "./components/sections/SectionAbout";
import PopularTours from "./components/sections/PopularTours";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/sections/Footer";
import ContactSection from "./components/sections/ContactSection";
import Navigation from "./components/Navigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroSection />
    <main>
      <Navigation />
      <ExcitingTours />
      <SectionAbout />
      <PopularTours />
      <Testimonials />
      <ContactSection />
    </main>
    <Footer />
  </React.StrictMode>
);
