import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyElepha from "./components/WhyElepha";
import Principles from "./components/Principles";
import Industries from "./components/Industries";
import Process from "./components/Process";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const Landing = () => {
  useScrollReveal();

  return (
    <div data-testid="landing-page" className="relative font-sans text-[#1F2937]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyElepha />
        <Principles />
        <Industries />
        <Process />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Toaster richColors position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
