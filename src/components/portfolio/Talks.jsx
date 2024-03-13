import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { scripts } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const Dynamo = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>TALKS</p>
        <h2 className={styles.sectionHeadText}>Lessons&Articles.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-warm-brown text-[17px] max-w-3xl leading-[30px]"
        >
          It happens that on Autodesk forum something is marked as almost
          impossible... That's usually a great sign that I can write an article
          of how I solved the challenge! What might be a better feeling? Well,
          there's one - to present these solutions in a simple and light manner
          as adventurous journeys.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {talks.map((talks, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...talks} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Dynamo, "dynamo");
