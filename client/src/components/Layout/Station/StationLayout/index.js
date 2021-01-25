import React from "react";

import Directory from "../../Directory"; 



// import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
import StationProfile from "../StationProfile";



function Station() {
  return (
    
    <div className="row h-100 ">

      

        <div className="col-2 col-md-1 p-0 m-0 h-100">
          <div className="OFH row p-0 m-0 h-100">
            <Directory />
          </div>
        </div>

        <div className="col-11 p-0 m-0">
          <StationProfile/>
        </div>

        
      
    </div>
    

  );
}

export default Station;