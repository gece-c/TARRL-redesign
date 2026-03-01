import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhoWeAre, WhyWeExist, WhatWeBelieve } from "./components/Sections";
import { ResearchTracks } from "./components/ResearchTracks";
import { HowItWorks } from "./components/HowItWorks";
import { WhoThisIsFor } from "./components/WhoThisIsFor";
import { ApplyCTA } from "./components/ApplyCTA";
import { Footer } from "./components/Footer";

const pageGradient =
  "linear-gradient(to bottom, #002868 0%, #002868 20%, #361259 45%, #361259 60%, #002868 80%, #002868 100%)";

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
        <HowItWorks />
        <WhoThisIsFor />
        <ApplyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;

