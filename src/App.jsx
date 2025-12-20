import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import BestSellers from "./components/Bestsellers/Bestsellers";
import PuritySection from "./components/PuritySection/PuritySection";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

// Lazy-loaded pages
const AboutUs = lazy(() => import("./components/About/About"));
const ProductsPage = lazy(() => import("./components/ProductsPage/ProductsPage"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));

const HomeSection = () => {
  return (
    <>
      <Hero />
      <BestSellers />
      <PuritySection />
      <Testimonials />
    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar />

      <Suspense fallback={<div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gallery" element={React.createElement(lazy(() => import("./components/Gallery/Gallery")))} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
