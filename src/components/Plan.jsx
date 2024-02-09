import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

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

  const stairStyle = {
    border: "1px solid transparent",
    flex: "1",
    width: "100%",
    margin: "2px 0",
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
          casa tu casa 😉.
        </motion.p>
      </div>
      <div className="bg-plan-back bg-center bg-contain w-fit h-fit bg-no-repeat">
        <div style={layoutStyle} className="p-4">
          <div style={rowStyle}>
            <div
              style={boxStyle}
              className="mt-1 h-[148px] border-solid flex border-4 items-center justify-center border-transparent hover:bg-dynamo-back bg-center bg-contain hover:text-transparent hover:ease-in-out transition duration-150 ease-out cursor-pointer"
            >
              Dynamo Scripting (Python + Revit API)
            </div>
            <div></div>
            <div style={boxStyle} className="mt-1 h-[148px]">
              C# Plugins (Python + RevitAPI + WPF)
            </div>
          </div>
          <div className="h-fit flex flex-1 w-full -mt-2">
            <div style={tallBoxStyle} className="h-[147px]">
              BIM Projects
              {/* <div style={boxStyle}></div>
          <div style={boxStyle}></div> */}
            </div>
            <div style={tallBoxStyle} className="h-[147px]"></div>
            <div style={tallBoxStyle} className="h-[147px]">
              Calculations
              {/* <div style={boxStyle}></div>
          <div style={boxStyle}></div> */}
            </div>
          </div>
          <div style={rowStyle} className="h-[154px] -mt-3">
            <div className="h-[154px] w-1/2 border-solid flex border-4 items-center justify-center border-transparent hover:bg-web-back bg-center bg-contain hover:text-transparent hover:ease-in-out transition duration-150 ease-out  cursor-pointer">
              Websites (JavaScript/TypesScript)
            </div>
            <div style={boxStyle} className="h-[154px]"></div>
            <div style={boxStyle} className="h-[154px]">
              {" "}
              More projects!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Plan, "plan");
