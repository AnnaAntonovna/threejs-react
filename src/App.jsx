import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { useEffect, useState } from "react";
import Sugar from "react-preloaders/lib/Sugar/Sugar";
import Talks from "./components/Talks";
import Certificates from "./components/Certificates";
import Plan from "./components/Plan";

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
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Talks />
                  <Experience />
                  <div className="bg-cert-back bg-cover bg-no-repeat bg-center">
                    <Certificates />
                  </div>
                  <Tech />
                  {/* <Plan /> */}
                  <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                  </div>
                </>
              }
            />
            <Route path="/works" element={<Works />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
