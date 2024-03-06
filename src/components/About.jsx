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
          <p className={styles.sectionSubText}>Let's talk about...</p>
          <h2 className={styles.sectionHeadText}>Me.</h2>
          <p
            className="mt-4 text-warm-brown text-[17px]
      max-w-3xl leading-[30px] xs:flex z-50"
          >
            <img
              src={me}
              alt={"me"}
              className="mr-[50px] xs:ml-[6px] xs:max-w-[350px] xs:h-[500px] mb-[50px] xs:mb-[0px]"
            />
            That's me! As a student, I achieved the title of Best BIM Structural
            Engineer in a national BIM championship and won the group
            classification with my team. Little later, during my time at
            Renaissance Construction, known for constructing Europe's tallest
            skyscraper, I boldly initiated and led an automation project,
            enhancing my skills in Python, Revit API, and Dynamo. After
            graduation, I decided to continue my career path in Europe.
            Discovering new cultures I also expanded my automation skills in C#,
            WPF, JavaScript, IFC in web. Working in R&D, I tackle the toughest
            challenges, constantly learn new technologies, and sometimes making
            articles and videos out of it! Are you ready to discover new
            horizons in the world of BIM together?
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
            <p className={styles.sectionSubText}>Let's talk about...</p>
            <h2 className={styles.sectionHeadText}>Me.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", "0.1", 1)}
            className="mt-4 text-warm-brown text-[17px]
      max-w-3xl leading-[30px] xs:flex z-50"
          >
            <img
              src={me}
              alt={"me"}
              className="mr-[50px] xs:ml-[6px] xs:max-w-[350px] xs:h-[500px] mb-[50px] xs:mb-[0px]"
            />
            That's me! As a student, I achieved the title of Best BIM Structural
            Engineer in a national BIM championship and won the group
            classification with my team. Little later, during my time at
            Renaissance Construction, known for constructing Europe's tallest
            skyscraper, I boldly initiated and led an automation project,
            enhancing my skills in Python, Revit API, and Dynamo. After
            graduation, I decided to continue my career path in Europe.
            Discovering new cultures I also expanded my automation skills in C#,
            WPF, JavaScript, IFC in web. Working in R&D, I tackle the toughest
            challenges, constantly learn new technologies, and sometimes making
            articles and videos out of it! Are you ready to discover new
            horizons in the world of BIM together?
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
