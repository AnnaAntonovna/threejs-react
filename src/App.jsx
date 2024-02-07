import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Videos from "./components/Videos";
import { useEffect, useState } from "react";
import { Cube } from "react-preloaders";
import Sugar from "react-preloaders/lib/Sugar/Sugar";
import Talks from "./components/Talks";

const App = () => {
  return (
    <>
      <Sugar
        time={1000}
        background="#f2f2f2"
        color={"#003366"}
        animation="slide"
      />
      <BrowserRouter>
        <div className="relative z-0 bg-cold-gray">
          <div className="bg-cold-gray">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Talks />
          <Experience />
          <Works />
          <Tech />
          <Videos />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
