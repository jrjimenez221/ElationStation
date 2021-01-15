import React from "react";
import "./style.css";
import NavBar from "../Nav";
import Portfolio from "../Portfolio";
import UI from "../Interface";

import Footer from "../Footer";


function Wrapper() {
  return (
    <div className="container-fluid">
      <NavBar/>
      <UI/>
      <Portfolio/>
      {/* <Footer/> */}
    </div>
    
  );
}

export default Wrapper;