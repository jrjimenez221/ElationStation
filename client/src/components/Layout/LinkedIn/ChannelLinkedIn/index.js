import React from "react";
import "./style.css";
import LinkedInSignIn from "../LinkedInSignIn";
import Directory from "../../Station/Directory"; 
import LinkProfile from "../LinkProfile"


import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";




function ChannelLinkedIn() {
  return (
    
    <div className="row h-100">

        <div className="col-2 col-md-1 p-0 m-0 h-100">
          <div className="OFH row bg-success p-0 m-0 h-100">
            <Directory />
          </div>
        </div>

        <div className="col-10 col-md-11 h-100">
          <div className="row">
          <LinkProfile />
            <LinkedInSignIn />
          </div>
        </div>
            


        
      
    </div>
    

  );
}

export default ChannelLinkedIn;


{/* <div className="col-10 col-md-11 p-0 m-0 ">
            
      
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
</div> */}
