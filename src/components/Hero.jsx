import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl mx-auto 
      flex flex-row items-start gap-5 z-20 h-[180px]`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#54B1C7]'/>
          <div className='w-1 sm:h-80 h-40 yellow-gradient'/>
        </div> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            duration: 1.0,
            y: [0, 24, 0],
          }}
          transition={{ delay: 3.2 }}
        >
          <h1 className={`${styles.heroHeadText} maz-w-[500px]`}>
            Hi, it's <span>Anna</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 max-w-[500px]`}>
            I automate AEC processes, develop BIM plugins and web-applications.
          </p>
        </motion.div>
        {width > 45 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              duration: 1.0,
              y: [0, 24, 0],
            }}
            transition={{ delay: 4.2 }}
          >
            <p className={`${styles.heroSubText} mt-2 max-w-[500px]`}>
              *And you can move the 3D office in the background.
            </p>
          </motion.div>
        ) : (
          <></>
        )}
      </div>
      {width > 45 ? (
        <ComputersCanvas />
      ) : (
        <div className="flex-col w-screen h-screen">
          <iframe
            width="450"
            height="699"
            className="mt-[70px]"
            src="https://www.youtube.com/embed/H6RLb0WTmzI?autoplay=1&mute=1&controls=0&loop=1controls=0&start=8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      )}

      <div
        className="absolute xs:bottom-10 bottom-32 w-full 
      flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-navy xs:border-secondary 
          flex justify-center items-start p-2"
          >
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-navy xs:bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
