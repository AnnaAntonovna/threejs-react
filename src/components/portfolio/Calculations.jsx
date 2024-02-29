import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { Calculations } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const Calculation = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Structural Calculations.</p>
        <h2 className={styles.sectionHeadText}>Calculations.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-warm-brown text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {Calculations.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Calculation, "calculation");
