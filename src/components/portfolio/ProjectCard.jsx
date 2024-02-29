import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { fadeIn, textVariant } from "../../utils/motion";

export const ProjectCard = ({
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
    <motion.div>
      <div className="bg-navy p-5 rounded-2xl sm:w-[480px] w-full">
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
      </div>
    </motion.div>
  );
};
