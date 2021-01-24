import React from "react";
import "./style.css";
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
// import Wrapper from "../Wrap";

function NavBar() {
  return (
    <div className="row m-0 p-0 ">

    
      <nav id="titleNav" class="navbar col-12 text-light p-0 ">
          <Link to="/" id="pageTitle" className="col-6 col-md-2 text-center text-white">Elation Station</Link>
          <Link to="/station" class="navbar-brand text-light text-center col-md-2 col-5 " >
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
    </div>
  );
}

export default NavBar;
