import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { me } from "../assets";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, className }) => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  return (
    <Tilt className="xs:w-[250px] w-full">
      {width > 450 ? (
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-[250px] 
        rounded-[20px] shadow-card bg-navy text-transparent hover:text-white focus:text-white focus:ease-in hover:ease-in transition duration-150 ease-out"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className={className}
          >
            <h3
              className="text-[25px] font-bold
          text-center"
            >
              {title}
            </h3>
          </div>
        </motion.div>
      ) : (
        <div
          className="w-[250px] 
        rounded-[20px] shadow-card bg-navy text-transparent hover:text-white focus:text-white focus:ease-in hover:ease-in transition duration-150 ease-out"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className={className}
          >
            <h3
              className="text-[25px] font-bold
          text-center"
            >
              {title}
            </h3>
          </div>
        </div>
      )}
    </Tilt>
  );
};

const About = () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  return (
    <>
      {width < 450 ? (
        <>
          <p className={styles.sectionSubText}>Introduction...</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
          <p
            className="mt-4 text-warm-brown text-[17px]
      max-w-3xl leading-[30px] xs:flex z-50"
          >
            <img
              src={me}
              alt={"me"}
              className="mr-[50px] xs:ml-[6px] xs:max-w-[350px] xs:h-[500px] mb-[50px] xs:mb-[0px]"
            />
            👆 That’s me! With a solid foundation in a various programming
            languages, I’m skilled in bridging the gap between traditional
            construction practices and modern, automated methods.
            <br />
            <br /> My 6-years-long journey through Engineering of Unique
            Buildings and Structures in University, alongside pioneering work at
            Renaissance Construction, known for it’s groundbreaking buildings,
            has sharpened my skills in complex structural engineering and
            automation with Python and Dynamo. At Strategie Digitali, I've honed
            my automation skills, exploring C#, JavaScript to push the
            boundaries of automated solutions. Known for my achievements in
            national BIM championships and teaching Revit Structure in my
            alma-mater, I excel in innovating BIM processes. <br />
            <br />
            Ready ro explore BIM processes together? Let's create the new
            frontiers of BIM innovation!
          </p>

          <div
            variants={fadeIn("up", "spring", 2.15, 0.75)}
            className="text-center mt-[30px] "
          >
            <p className={styles.sectionSubText}>
              {width > 450
                ? "🪄Hover a card to know who I am🪄"
                : "🪄Tap a card to know who I am🪄"}
            </p>
          </div>

          <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </>
      ) : (
        <>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction...</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", "0.1", 1)}
            className="mt-4 text-warm-brown text-[17px]
      max-w-4xl leading-[30px] xs:flex z-50"
          >
            <img
              src={me}
              alt={"me"}
              className="mr-[50px] xs:ml-[6px] xs:max-w-[350px] xs:h-[500px] mb-[50px] xs:mb-[0px]"
            />
            👈 That’s me! With a solid foundation in a various programming
            languages, I’m skilled in bridging the gap between traditional
            construction practices and modern, automated methods.
            <br />
            <br /> My 6-years-long journey through Engineering of Unique
            Buildings and Structures in University, alongside pioneering work at
            Renaissance Construction, known for it’s groundbreaking buildings,
            has sharpened my skills in complex structural engineering and
            automation with Python and Dynamo. At Strategie Digitali, I've honed
            my automation skills, exploring C#, JavaScript to push the
            boundaries of automated solutions. Known for my achievements in
            national BIM championships and teaching Revit Structure in my
            alma-mater, I excel in innovating BIM processes. <br />
            <br />
            Ready to revolutionize BIM processes together? Let's explore the new
            frontiers of BIM innovation!
          </motion.p>

          <motion.div
            variants={fadeIn("up", "spring", 2.15, 0.75)}
            className="text-center mt-[30px] "
          >
            <p className={styles.sectionSubText}>
              {width > 450
                ? "🪄Hover a card to know who I am🪄"
                : "🪄Tap a card to know who I am🪄"}
            </p>
          </motion.div>

          <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
