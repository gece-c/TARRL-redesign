import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhoWeAre, WhyWeExist, WhatWeBelieve } from "./components/Sections";
import { ResearchTracks } from "./components/ResearchTracks";
import { ImageCarousel } from "./components/ImageCarousel";
import { HowItWorks } from "./components/HowItWorks";
import { WhoThisIsFor } from "./components/WhoThisIsFor";
import { ApplyCTA } from "./components/ApplyCTA";
import { Footer } from "./components/Footer";

const pageGradient =
  "linear-gradient(to bottom, #001942 0%, #001942 20%, #311050 45%, #311050 60%, #00245E 80%, #00245E 100%)";

const App: React.FC = () => {
  return (
    <div
      className="min-h-screen text-offWhite"
      style={{ background: pageGradient, minHeight: "100%" }}
    >
      <Navbar />
      <main className="pt-16">
        <Hero />
        <WhoWeAre />
        <WhyWeExist />
        <WhatWeBelieve />
        <ResearchTracks />
        <ImageCarousel />
        <HowItWorks />
        <WhoThisIsFor />
        <ApplyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;

