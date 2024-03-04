import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {width > 450 ? (
        <>
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </>
      ) : (
        <iframe
          width="450"
          height="210"
          src="https://www.youtube.com/embed/Ii-BvNykBV4?si=zo2roy3G4q3lB19u"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default SectionWrapper(Tech);
