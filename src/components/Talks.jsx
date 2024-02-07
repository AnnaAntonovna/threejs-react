import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { talks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  src,
  video,
}) => {
  const showVideo = video;
  console.log(showVideo);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        optioins={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-navy p-5 rounded-2xl sm:w-[480px] w-full"
      >
        <div className="z-20 relative w-full h-[240px]">
          {showVideo ? (
            <iframe
              width="560"
              height="315"
              className="z-20 w-full h-full object-cover rounded-2xl"
              src={src}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ) : (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          )}
        </div>

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="z-30 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursos-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Talks = () => {
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
          Here are aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa projects
          offfffffffffffffffffffffff ffffffffff ffffffff ffffffff ffffffff
          meeeeeeeeeee mememmememem they show how cool I am
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

export default SectionWrapper(Talks, "talks");