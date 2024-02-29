import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { me } from "../assets";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, className }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
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
          {/* <img src={icon} alt={title} 
          className='w-16 h-16 object-contain' />  */}
          <h3
            className="text-[25px] font-bold
          text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", "0.1", 1)}
        className="mt-4 text-warm-brown text-[17px]
      max-w-3xl leading-[30px] xs:flex"
      >
        <img
          src={me}
          alt={"me"}
          className="mr-[50px] xs:ml-[6px] xs:max-w-[250px] xs:h-[300px] mb-[50px] xs:mb-[0px]"
        />
        As a student, I achieved the title of Best BIM Structural Engineer in a
        national BIM championship. During my time at Renaissance Construction,
        an international corporation that built Europe's tallest skyscraper, I
        initiated and executed a successful rebar automation project using
        Python, Revit API, and Dynamo. After graduation, I relocated to Europe
        and expanded my automation skills in C#, WPF, JavaScript, IFC in web,
        being a part of Research and Development department.
        <br />I am excited to discover new horizons in the world of BIM!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
