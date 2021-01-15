import React from "react";
import "./style.css";
import LeftSide from "../LeftSide";
import RightSide from "../RightSide";

function UIContent() {
  return (
    <div className="row justify-content-between">
      <LeftSide/>
      <RightSide/>
    </div>

  );
}

export default UIContent;