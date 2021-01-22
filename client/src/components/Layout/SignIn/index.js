import React from "react";
import "./style.css";
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import API from "../../../utils/API.js"

function SignIn() {
  function signIn(event) {
    event.preventDefault();
console.log(event.target)
  }
  function signUp(event) {
    event.preventDefault();
console.log(event.target)
API.signUp()
  }
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div id="SignIn" className="col-11 col-md-3 signInPrompt p-3 mt-3 " style={{paddingBottom:"2vh",borderRadius:"10%"}}>
          
          
          
          <form onSubmit= {signIn}>

            <div className="form-group">
              <input type="email" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>

            <div className="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>

            <div className="row justify-content-between pl-4 pr-4">
              <button type="submit" className="btn btn-primary col-5"><Link to="/station">Sign In</Link></button>
              <button type="button" onClick= {signUp} className="btn btn-primary col-5">Sign Up</button>
            </div>
            
          </form>



        </div>
      </div>
    </div>
  );
}

export default SignIn;

