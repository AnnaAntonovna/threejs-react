import React from "react";
import "./../styles";
import { TECarousel, TECarouselItem, TERipple } from "tw-elements-react";
import { SectionWrapper } from '../hoc';
import ReactPlayer from "react-player";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Videos = () => {
  return (
    <Carousel autoPlay infiniteLoop stopOnHover transitionTime={2} className="z-30">
                <div className="ease-in-out">
                <iframe width="1280" height="600" src="https://www.youtube.com/embed/772KN7DDoj8?si=yEOpMTZkjUHXFIbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    <p className="legend">Legend 1</p>
                </div>
                <div className="ease-in-out">
                <iframe width="1280" height="600" src="https://www.youtube.com/embed/lRer6SbMCHw?si=3Bf5hQRpC7xJvaw9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className="legend">Legend 2</p>
                </div>
                <div className="ease-in-out">
                <iframe width="1280" height="600" src="https://www.youtube.com/embed/lRer6SbMCHw?si=3Bf5hQRpC7xJvaw9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className="legend">Legend 3</p>
                </div>
    </Carousel>
  );
}

export default SectionWrapper(Videos)