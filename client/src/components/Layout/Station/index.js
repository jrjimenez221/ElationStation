import React from "react";
import "./style.css";
import Portfolio from "./Portfolio"; 
import RightSide from "./RightSide"; 


import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";



function Den() {
  return (
    <>
    <RightSide />
          
    <Portfolio />
    </>

  );
}

export default Den;