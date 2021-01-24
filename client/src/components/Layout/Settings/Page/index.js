import React from "react";


import Directory from "../../Station/Directory"; 



import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
import SettingsList from "../Layout";



function SettingsPage() {
  return (
    
    <div className="row h-100">

        <div className="col-2 col-md-1 p-0 m-0 h-100">
          <div className="OFH row bg-success p-0 m-0 h-100">
            <Directory />
          </div>
        </div>

        <div className="col-10 col-md-11">
          <SettingsList />
            
        </div>

        
      
    </div>
    

  );
}

export default SettingsPage;