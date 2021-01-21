import React from "react";
import "./style.css";
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
// import Wrapper from "../Wrap";

function NavBar() {
  return (
    <nav id="titleNav" class="navbar col-12 text-light p-0 pr-4">
        <Link to="/" id="pageTitle" className="col-10 col-md-2 text-center text-white">Elation Station</Link>
        <Link to="/station" class="navbar-brand text-light col-md-1 col-1" >
          <img
            src="./icons/MiniReyIcon.png"
            width="30"
            height="30"
            class="d-inline-block align-top mr-2"
            alt=""
          />
          Jrjimenez221
        </Link>
          
    </nav>
  );
}

export default NavBar;
