import React from "react";
import "./appStyle.css";

import SignInPage from "./components/Layout/SignInPage";

import Station from "./components/Layout/Station/StationLayout";
import ChannelTwit from "./components/Layout/Twitter/ChannelTwit";



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChannelLinkedIn from "./components/Layout/LinkedIn/ChannelLinkedIn";
import SettingsPage from "./components/Layout/Settings/Page";
import ChannelFacebook from "./components/Layout/Facebook/ChannelFB";

export default function App() {
  return (
    <Router>
      <div id="thePage" className="container-fluid bg-secondary p-0 m-0" style={{position:"absolute", right:"0", left:"0", top:"0", bottom:"0"}}>
        
        
      
        <div id="motherFooter" className="row m-0 p-0 h-100" >
          <div id="first12" className="col-12 m-0 " >


            <Switch>
                      
              <Route exact path="/station">
                <Station />
              </Route>
              
              <Route exact path="/station/twitter/home">
                <ChannelTwit/>
              </Route>
              
              <Route exact path="/station/linkedin">
                <ChannelLinkedIn/>
              </Route>
              <Route exact path="/station/facebook">
                <ChannelFacebook/>
              </Route>
              
              <Route exact path="/station/settings">
                <SettingsPage/>
              </Route>
                                    
              <Route exact path="/" > 
                <SignInPage />
              </Route>

            </Switch> 
          </div>
        </div>
        
      </div>
    </Router>
  );
}

