import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";

const Plan = () => {
  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "6px solid transparent",
    height: "500px", // You can adjust the height as needed
    width: "580px", // You can adjust the width as needed
    boxSizing: "border-box",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    flex: "1",
    height: "140px",
    width: "100%",
  };

  const boxStyle = {
    border: "solid transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  };

  const tallBoxStyle = {
    ...boxStyle,
    flexDirection: "column",
  };

  const stairsStyle = {
    ...boxStyle,
    flexDirection: "column",
    justifyContent: "space-between",
    height: "50%", // Adjust height based on your needs
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My projects</p>
        <h2 className={styles.sectionHeadText}>Portfolio.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-warm-brown text-[17px] max-w-3xl leading-[30px]"
        >
          You can pick one or open all - every room is waiting for a guest. Mi
          casa tu casa!
        </motion.p>
      </div>
      <div className="mt-5 bg-plan-back bg-center bg-contain w-fit h-fit bg-no-repeat">
        <div style={layoutStyle} className="p-4">
          <div style={rowStyle}>
            <Link
              to="/works"
              style={boxStyle}
              className="mt-1 h-[148px] text-center border-solid flex border-4 items-center justify-center border-transparent hover:bg-dynamo-back bg-center bg-contain hover:text-transparent hover:ease-in-out transition duration-150 ease-out cursor-pointer"
            >
              Scripts (Python + Revit API)
            </Link>
            <div></div>
            <Link
              to="/works"
              style={boxStyle}
              className="mt-1 h-[148px] text-center items-center justify-center border-transparent bg-no-repeat hover:bg-cold-gray hover:bg-plugin-back bg-center bg-cover hover:text-transparent hover:ease-in-out transition duration-100 ease-out cursor-pointer"
            >
              C# Plugins (RevitAPI + WPF)
            </Link>
          </div>
          <div className="h-fit flex flex-1 w-full -mt-2">
            <Link
              to="/works"
              style={tallBoxStyle}
              className="h-[147px] hover:bg-bim-back bg-center bg-contain hover:bg-white  bg-no-repeat hover:text-transparent hover:ease-in-out transition duration-150 ease-out  cursor-pointer"
            >
              BIM Projects
            </Link>
            <div style={tallBoxStyle} className="h-[147px]"></div>
            <Link
              to="/works"
              style={tallBoxStyle}
              className="h-[147px] hover:bg-calc-back hover:bg-white bg-center bg-contain bg-no-repeat hover:text-transparent hover:ease-in-out transition duration-150 ease-out  cursor-pointer"
            >
              Calculations
            </Link>
          </div>
          <div style={rowStyle} className="h-[154px] -mt-3">
            <Link
              to="/works"
              className="h-[154px] w-1/2 border-solid flex border-4 text-center items-center justify-center border-transparent hover:bg-web-back bg-center bg-contain hover:text-transparent hover:ease-in-out transition duration-150 ease-out  cursor-pointer"
            >
              Websites (JavaScript/TypesScript)
            </Link>
            <div style={boxStyle} className="h-[154px]"></div>
            <Link
              to="/works"
              style={boxStyle}
              className="h-[154px] hover:bg-more-back hover:bg-white bg-center bg-cover bg-no-repeat hover:text-transparent hover:ease-in-out transition duration-150 ease-out cursor-pointer"
            >
              {" "}
              More projects!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Plan, "portfolio");
