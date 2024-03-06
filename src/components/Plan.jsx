import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Plan = () => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "6px solid transparent",
    //height: "500px", // You can adjust the height as needed
    height: width > 450 ? "500px" : "250px",
    width: "580px", // You can adjust the width as needed
    width: width > 450 ? "580px" : "290px",
    boxSizing: "border-box",
  };

  const handleLinkClick = (link) => {
    // If we're not on the home page, navigate to the home page first
    setTimeout(() => {
      navigate("/works");
    }, 300);

    console.log("navigated to /works");

    setTimeout(() => {
      const section = document.getElementById(link);
      section && section.scrollIntoView({ behavior: "smooth" });
      window.location.href = `/works${link}`;
      console.log(window.location.href);
    }, 300);

    //navigate("/works", { state: { sectionId: link.id } });

    console.log("navigated to #");
  };

  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const section = document.getElementById(hash.replace("#", ""));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
      <div
        className={
          width > 450
            ? "mt-5 bg-plan-back bg-center bg-contain w-fit h-fit bg-no-repeat"
            : "mt-5 scale-0.5 bg-plan-back bg-center bg-contain w-fit h-fit bg-no-repeat"
        }
      >
        <div style={layoutStyle} className="p-4">
          <div style={rowStyle}>
            <Link
              to="/works#dynamo"
              onClick={() => handleLinkClick("#dynamo")}
              style={boxStyle}
              className={
                width > 450
                  ? "mt-1 h-[148px] text-center border-solid flex border-4 items-center justify-center border-transparent hover:bg-dynamo-back bg-center bg-contain hover:text-transparent hover:ease-in-out transition duration-150 ease-out cursor-pointer"
                  : "h-[74px] text-xs text-center border-solid flex border-4 items-center justify-center border-transparent bg-center bg-contain"
              }
            >
              Scripts (Python + Revit API)
            </Link>
            <div></div>
            <Link
              to="/works#csharp"
              onClick={() => handleLinkClick("#csharp")}
              style={boxStyle}
              className={
                width > 450
                  ? "mt-1 h-[148px] text-center items-center justify-center border-transparent bg-no-repeat hover:bg-cold-gray hover:bg-plugin-back bg-center bg-cover hover:text-transparent hover:ease-in-out transition duration-100 ease-out cursor-pointer"
                  : "h-[74px] text-xs text-center items-center justify-center border-transparent bg-no-repeat bg-center bg-cover"
              }
            >
              C# Plugins (RevitAPI + WPF)
            </Link>
          </div>
          <div className="h-fit flex flex-1 w-full -mt-2">
            <Link
              to="/works#bimprojects"
              onClick={() => handleLinkClick("#bimprojects")}
              style={tallBoxStyle}
              className={
                width > 450
                  ? "h-[147px] hover:bg-bim-back bg-center bg-contain hover:bg-white  bg-no-repeat hover:text-transparent hover:ease-in-out transition duration-150 ease-out  cursor-pointer"
                  : "h-[74px] text-xs text-center items-center justify-center border-transparent bg-no-repeat bg-center bg-cover"
              }
            >
              BIM Projects
            </Link>
            <div style={tallBoxStyle} className="h-[147px]"></div>
            <Link
              to="/works#calculation"
              onClick={() => handleLinkClick("#calculation")}
              style={tallBoxStyle}
              className={
                width > 450
                  ? "h-[147px] hover:bg-calc-back hover:bg-white bg-center bg-contain bg-no-repeat hover:text-transparent hover:ease-in-out transition duration-150 ease-out  cursor-pointer"
                  : "h-[74px] text-xs text-center items-center justify-center border-transparent bg-no-repeat bg-center bg-cover"
              }
            >
              Calculations
            </Link>
          </div>
          <div style={rowStyle} className="h-[154px] -mt-3">
            <Link
              to="/works#web"
              onClick={() => handleLinkClick("#web")}
              className={
                width > 450
                  ? "h-[154px] w-1/2 border-solid flex border-4 text-center items-center justify-center border-transparent hover:bg-web-back bg-center bg-contain hover:text-transparent hover:ease-in-out transition duration-150 ease-out  cursor-pointer"
                  : "ml-[25px] -mt-[40px] h-[74px] text-xs text-center items-center justify-center border-transparent bg-no-repeat bg-center bg-cover"
              }
            >
              Websites <br></br>(JavaScript)
            </Link>
            <div style={boxStyle} className="h-[154px]"></div>
            <Link
              to="/works"
              style={boxStyle}
              className={
                width > 450
                  ? "h-[154px] hover:bg-more-back hover:bg-white bg-center bg-cover bg-no-repeat hover:text-transparent hover:ease-in-out transition duration-150 ease-out cursor-pointer"
                  : "ml-[60px] -mt-[60px] h-[74px] text-xs text-center items-center justify-center border-transparent bg-no-repeat bg-center bg-cover"
              }
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
