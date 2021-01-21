import React from "react";
import SignInPage from "./components/Layout/Home";
import NavBar from "./components/Layout/Nav";
import Den from "./components/Layout/Station";
import Directory from "./components/Layout/Directory";
import RightSide from "./components/Layout/RightSide";
import ChannelFB from "./components/Layout/Facebook/ChannelFB/";
import ChannelTwit from "./components/Layout/Twitter/ChannelTwit/";
import ChannelLinkedIn from "./components/Layout/LinkedIn/ChannelLinkedIn/";


import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() { 
return (
  <Router>
      <div className="p-0 m-0" style={{minHeight:"50vh", maxHeight:"100vh",maxWidth:"100vw",overflowX:"hidden"}}>
        <NavBar/>
        <div className="container-fluid  no-gutters mt-0 row p-0 m-0 " style={{minHeight:"50vh"}} >

      <div className="col-12 row p-0 m-0 " style={{maxHeight:"100%"}}>

        <div className="col-12 col-md-1 row p-0 " >


          <div className="col-10 " style={{maxHeight:"100%"}}>
            <Directory/>
          </div>

        </div>

        <div className="col-11 row bg-info m-0 p-0">

         
          
          <Switch>

          <Route exact path="/station/facebook" >
            
            <ChannelFB />
          </Route> 

          <Route exact path="/station/twitter" >
            <ChannelTwit />

          </Route>

          <Route exact path="/station/LinkedIn" >
            <ChannelLinkedIn />

          </Route>

          <Route exact path="/station" >
            <Den/>

          </Route>
          
          {/* <Route path="/den/station" component={Portfolio} /> */}
          {/* <Route path="/den/facebook" component={Facebook} /> */}
          <Route path="/" exact component={SignInPage} />
        </Switch>
          
        </div>


      </div> 
    </div>
        
        
      </div>

    </Router>
  )
}
 
