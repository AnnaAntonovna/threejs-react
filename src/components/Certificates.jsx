import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import {
  ifcCert,
  pythonCert,
  csharpCert,
  webCert,
  dbCert,
  micCert,
  strucCert,
  promptCert,
  dynamoCert,
  bimNatSert,
  bimNatTeamSert,
  bimTeamStCert,
  bimStSert,
  calcSert,
  restCert,
} from "./../assets";

const Certificates = () => {
  return (
    <div className="w-full flex-col items-center justify-center">
      <motion.div variants={textVariant()} className="bg-white w-fit">
        {/* <p className={styles.sectionSubText}>What I've learned</p> */}
        <h2 className={styles.sectionHeadText}>Certificates.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", "0.1", 1)}
        className="mt-4 text-warm-brown text-[17px]
      max-w-3xl leading-[30px]"
      ></motion.p>
      <Swiper
        modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
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
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        initialSlide={1}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        className="mt-[50px] max-w-[screen] max-h-screen w-full mySwiper text-navy flex place-self-center"
      >
        <SwiperSlide className="max-w-[500px] max-h-[500px] w-fit h-fit">
          <img src={ifcCert} alt="image_1" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] w-fit h-fit">
          <img src={csharpCert} alt="image_1" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] w-fit h-fit">
          <img src={pythonCert} alt="image_1" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] w-fit h-fit">
          <img src={webCert} alt="image_1" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] w-fit h-fit">
          <img src={restCert} alt="image_1" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] w-fit h-fit">
          <img src={dbCert} alt="image_1" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] w-fit h-fit">
          <img src={strucCert} alt="image_1" />
        </SwiperSlide>

        <SwiperSlide className="max-w-[500px] max-h-[500px] w-fit h-fit">
          <img src={micCert} alt="image_1" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] w-fit h-fit">
          <img src={promptCert} alt="image_1" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] w-fit h-fit">
          <img src={calcSert} alt="image_1" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] w-fit h-fit">
          <img src={dynamoCert} alt="image_1" />
        </SwiperSlide>
        {/* <SwiperSlide className="h-[500px]  w-[300px]">
          <img src={bimNatSert} alt="image_1" />
        </SwiperSlide>
        <SwiperSlide className="h-[500px] w-[300px]">
          <img src={bimNatTeamSert} alt="image_1" />
        </SwiperSlide>
        <SwiperSlide className="h-[500x]  w-[300px]">
          <img src={bimTeamStCert} alt="image_1" />
        </SwiperSlide>
        <SwiperSlide className="h-[500px]  w-[300px]">
          <img src={bimStSert} alt="image_1" />
        </SwiperSlide> */}
        <div className="swiper_controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div class="swiper-button-next">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          {/* <div class="swiper-pagination"></div> */}
        </div>
      </Swiper>
    </div>
  );
};

export default SectionWrapper(Certificates, "about");
