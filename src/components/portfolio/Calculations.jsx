import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { Calculations } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCards, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

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
      <Swiper
        modules={[Pagination, Navigation, EffectCards, Autoplay]}
        autoplay={true}
        pagination={{
          dynamicBullets: true,
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        initialSlide={0}
        slidesPerView={"auto"}
        className="mt-[50px] max-w-[screen] max-h-screen w-full mySwiper text-navy flex place-self-center"
      >
        <div className="mt-20 flex flex-wrap gap-10">
          {Calculations.map((project, index) => (
            <SwiperSlide className="max-w-[500px] max-h-[500px] w-fit h-fit">
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            </SwiperSlide>
          ))}
        </div>

        <div className="swiper_controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div class="swiper-button-next">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default SectionWrapper(Calculation, "calculation");
