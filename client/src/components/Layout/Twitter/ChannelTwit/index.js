import React from "react";
import "./style.css";
import Directory from "../../Directory"; 
import Portfolio from "../Portfolio"; 
import RightSide from "../RightSide"; 

import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";



function ChannelTwit() {
  return (
    <>
    
    <RightSide />
    <Portfolio />
          
    </>

  );
}

export default ChannelTwit;