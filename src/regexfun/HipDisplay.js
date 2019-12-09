import React from "react";
import "./BrandName.css";

export default function HipDisplay(props) {
  let eachBox = props.input.map((subGroup, i) => (
    <div className="sub-cont" key={i}>
      {subGroup.map((char, i) => (
        <div className="sub-sub-cont" key={i}>
          {" "}
          <h1>{char}</h1>
        </div>
      ))}
    </div>
  ));
  return <div className="main-container">{eachBox}</div>;
}
