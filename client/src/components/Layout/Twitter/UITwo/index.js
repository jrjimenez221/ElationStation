import React from "react";
import "./style.css";
import Npc from "../Npc";
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";



function TwitUITwo() {
  return (
    <>
      
      <div className="col-md-8 p-0 m-0" >

      
        <div  id="TwitterUI" className="col-12 col-lg-12 bg-dark">

          <div className="row justify-content-center m-0 p-0">
            <svg id="TwitUIStamp" xmlns="http://www.w3.org/2000/svg" width="25" height="50" fill="currentColor" class="bi bi-twitter m-0" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </div>


      

          <Link exact to="/station/twitter/home" class="row justify-content-around appNav">
            <p >Home</p>
          </Link>

          <Link exact to="/station/twitter/notifications" class="row justify-content-around appNav">
            <p>Notifications</p>
          </Link>

          <Link to="/station/twitter/messages" class="row justify-content-around appNav">
            <p>Messages</p>
          </Link>

          <Link to="/station/twitter/profile" class="row justify-content-around appNav">
            <p >Profile</p>
          </Link>
      




        </div>
      </div>

    </>



    
);
}

export default TwitUITwo;
