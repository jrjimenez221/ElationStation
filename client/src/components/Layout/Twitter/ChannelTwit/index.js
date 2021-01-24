import React from "react";
import "./twitStyle.css";
import Directory from "../../Station/Directory"; 
import Portfolio from "../TwitProfile"; 
import UITwo from "../UITwo"; 

import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";



function ChannelTwit() {
  return (
    <>
      <div className="row h-100">

      <div className="col-2 col-md-1 p-0 m-0 h-100">
          <div className="OFH row p-0 m-0 h-100">
            <Directory />
          </div>
        </div>

        <div className="col-10 col-md-11 p-0 m-0 ">
            
      
          <Switch>
              
            <Route exact path="/station/twitter/Home">
            <Portfolio />                  
            </Route>
              
            <Route exact path="/station/twitter/notifications">
            <UITwo />
            </Route>
              
            <Route exact path="/station/twitter/messages">
            <Portfolio />
            </Route>
              
            <Route exact path="/station/twitter/profile">
            <Portfolio />
            </Route>
              
          </Switch>
        </div>


      </div>          
    </>

  );
}

export default ChannelTwit;