import React from "react";
import "./style.css";

import Directory from "../../Directory"; 



// import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
import RoadConstruction from "../RoadConstruction";




function ChannelFacebook() {
  return (
    
    <div className="row h-100">

        <div className="col-2 col-md-1 p-0 m-0 h-100">
          <div className="OFH row bg-success p-0 m-0 h-100">
            <Directory />
          </div>
        </div>

        <div id="channelFbOutput" className="col-10 col-md-11 h-100">
          <RoadConstruction />
          

        </div>

        
      
    </div>
    

  );
}

export default ChannelFacebook;