import React from "react";
import { SectionWrapper } from "../hoc";

const Plan = () => {
  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "6px solid #003366",
    height: "500px", // You can adjust the height as needed
    width: "600px", // You can adjust the width as needed
    boxSizing: "border-box",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    flex: "1",
    width: "100%",
  };

  const boxStyle = {
    border: "4px solid #003366",
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
    border: "1px solid #003366",
    flex: "1",
    width: "100%",
    margin: "2px 0",
  };

  return (
    <div style={layoutStyle}>
      <div style={rowStyle}>
        <div style={boxStyle}>Dynamo Scripting (Python + Revit API)</div>
        <div></div>
        <div style={boxStyle}>C# Plugins (Python + RevitAPI + WPF)</div>
      </div>
      <div style={rowStyle}>
        <div style={tallBoxStyle}>
          BIM Projects
          {/* <div style={boxStyle}></div>
          <div style={boxStyle}></div> */}
        </div>
        <div style={boxStyle}></div>
        <div style={tallBoxStyle}>
          {/* <div style={boxStyle}></div>
          <div style={boxStyle}></div> */}
        </div>
      </div>
      <div style={rowStyle}>
        Websites (JavaScript/TypesScript)
        <div className="h-full w-1/2 border-solid border-4 border-navy hover:bg-house-card"></div>
        <div style={stairsStyle}>
          <div className="h-[50px]"></div>
          <div style={stairStyle}></div>
          <div style={stairStyle}></div>
          <div style={stairStyle}></div>
          <div style={stairStyle}></div>
        </div>
        <div style={boxStyle}></div>
      </div>
    </div>
  );
};

export default SectionWrapper(Plan, "plan");
