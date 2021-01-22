import React, { useRef } from "react";
import "./style.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import API from "../../../utils/API.js"

import linkedinImg from "../../misc/images/linkedin.png";
// const appLink = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78o6w4y2569mqx&redirect_uri=https%3A%2F%2Felation-station.herokuapp.com%2F";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function signIn(event) {
    event.preventDefault();
console.log(event.target)
console.log(emailRef.current.value, passwordRef.current.value)
API.signIn({email:emailRef.current.value, password:passwordRef.current.value})
  }
  function signUp(event) {
    event.preventDefault();
console.log(event.target)
// console.log(email:emailRef.current.value, password:passwordRef.current.value)
API.signUp()
  }
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div
          id="SignIn"
          className="col-11 col-md-3 signInPrompt p-3 mt-3 "
          style={{ paddingBottom: "2vh", borderRadius: "10%" }}
        >
          <form onSubmit={signIn}>
            <div className="form-group">
              <input
                type="email"
                class="form-control mt-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
               
                ref={emailRef}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                ref = {passwordRef}
              />
            </div>

            <div className="row justify-content-between pl-4 pr-4">
              <button type="submit"  class="btn btn-primary col-5">
             Sign In
              </button>
              <button type="button" onClick={signUp} class="btn btn-primary col-5">
             Sign Up
              </button>
              <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78o6w4y2569mqx&redirect_uri=https%3A%2F%2Felation-station.herokuapp.com%2F"type="submit" class="btn btn-primary col-5">
              LinkedIn
              <img id="linkinImg" style={{width:"100%"}}src={linkedinImg}></img>
              </a>
              
              
              {/* <a
                href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78o6w4y2569mqx&redirect_uri=https%3A%2F%2Felation-station.herokuapp.com%2F
  "
              >
                <img src={linkedinImg}></img>
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
