import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import HeroSection from "./Layout/HeroSection";
import Services from "./Layout/Services";
import Gallery from "./Layout/gallery";
import Testimonials from "./Layout/Testimonial";
import Pricing from "./Layout/Price";
import LocationContact from "./Layout/Contact";
import Footer from "./Layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Services />
              <Gallery />
              <Testimonials />
              <Pricing />
              <LocationContact />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<LocationContact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
