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
  Dynamo,
  CSharp,
  BIMProjects,
  Calculations,
  WebProjects,
} from "./components";
import { useEffect, useState } from "react";
import Sugar from "react-preloaders/lib/Sugar/Sugar";
import Talks from "./components/Talks";
import Certificates from "./components/Certificates";
import Plan from "./components/Plan";

const App = () => {
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  if (isAndroid) {
    //window.location = "https://622e12a76c242.site123.me/";
  }
  return (
    <>
      {/* <Sugar
        className="text-black"
        time={1000}
        background="#f2f2f2"
        color={"#003366"}
        animation="slide"
        loop={true} // Loop mode enabled
        slidesPerView={3} // Adjust this to the number of slides you have if it's less than 3
        slidesPerGroup={1} // Adjust this as needed
      /> */}
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
                  <Plan />
                  <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                  </div>
                </>
              }
            />
            <Route
              path="/works"
              element={
                <>
                  <Dynamo />
                  <CSharp />
                  <WebProjects />
                  <BIMProjects />
                  <Calculations />
                  <Tech />
                  <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                  </div>
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
