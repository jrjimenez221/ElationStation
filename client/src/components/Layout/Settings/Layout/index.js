import React from "react";



// import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";



function SettingsList() {
  return (
    
    <>
      <div className="row justify-content-around ">
        <div className="col-12 col-md-6 bg-dark text-white-50">

          <div className="row">
            <h1 className="col-12 col-md-12 border-bottom border-secondary text-center">Settings</h1>
          </div>

          <div className="row  "> 
            
            <section className="setSect col-12  h3 border-bottom border-secondary">Account Information</section>
            <div className="col-12 h5 text-center">Account Information</div>
            <div className="col-12 h5 text-center">Change Your Password</div>
            <div className="col-12 h5 text-center">Download or archive data</div>
            <div className="col-12 h5 text-center">Deactivate Account</div>
            
          </div>
          
          <div className="row "> 
            
            <section className="setSect col-12 h3 border-bottom border-secondary">Security and account access</section>
            <div className="col-12 h5 text-center">Security</div>
            <div className="col-12 h5 text-center">Apps and sessions</div>
            
           
          </div>

          <div className="row "> 
            
            <section className="setSect col-12 h3 border-bottom border-secondary">Privacy and Safety</section>
            <div className="col-12 h5 text-center">Your Twitter activity</div>
            <div className="col-12 h5 text-center">Your Tweets</div>
            <div className="col-12 h5 text-center">Content you see</div>
            <div className="col-12 h5 text-center">Mute and block</div>
         
           
          </div>















        </div>
      </div> 
    </>
    
  );
}

export default SettingsList;



