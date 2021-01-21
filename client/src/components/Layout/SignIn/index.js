import React from "react";
import "./style.css";
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';


function SignIn() {
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div id="SignIn" className="col-11 col-md-3 signInPrompt p-3 mt-3 " style={{paddingBottom:"2vh",borderRadius:"10%"}}>
          
          
          
          <form>

            <div class="form-group">
              <input type="email" class="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>

            <div class="form-group">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>

            <div className="row justify-content-between pl-4 pr-4">
              <button type="submit" class="btn btn-primary col-5"><Link to="/station">Sign In</Link></button>
              <button type="submit" class="btn btn-primary col-5">Sign Up</button>
            </div>
            
          </form>



        </div>
      </div>
    </div>
  );
}

export default SignIn;

