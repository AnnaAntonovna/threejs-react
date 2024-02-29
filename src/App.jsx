import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy } from "react";
import {
  About,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Dynamo,
  CSharp,
  BIMProjects,
  Calculations,
  WebProjects,
} from "./components";
import Sugar from "react-preloaders/lib/Sugar/Sugar";

const Contact = lazy(() => import("./components/Contact"));
const Certificates = lazy(() => import("./components/Certificates"));
const Talks = lazy(() => import("./components/Talks"));
const Plan = lazy(() => import("./components/Plan"));
const Tech = lazy(() => import("./components/Tech"));
const App = () => {
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  if (isAndroid) {
    //window.location = "https://622e12a76c242.site123.me/";
  }

  const [heroLoading, setHeroLoading] = useState(true);

  useEffect(() => {
    // Set a timeout for the estimated loading duration of the Hero component
    const timer = setTimeout(() => {
      setHeroLoading(false);
    }, 1800); // Adjust the time (5000ms = 5 seconds) as needed

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const onHeroLoaded = () => {
    setHeroLoading(false);

    console.log("Hero loaded");
  };

  return (
    <>
      {heroLoading && (
        <Sugar
          background="#f2f2f2"
          customLoading={heroLoading}
          color={"#003366"}
          animation="slide"
        />
      )}
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
