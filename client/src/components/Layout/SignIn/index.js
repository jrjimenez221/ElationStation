import React, { useRef } from "react";
import "./style.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";


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
      <div className="row justify-content-center mb-5 ">

        <div id="SignIn" className="col-11 col-md-3 signInPrompt p-3 mt-3 " style={{ paddingBottom: "2vh", borderRadius: "10%" }}>
        <h2 className="text-white-50">Elation Station</h2>
          <form onSubmit={signIn}>
           

           
            
              
              <div className="form-group">
                <input
                  type="email"
                  class="form-control mt-3 bg-dark border-dark"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                
                  ref={emailRef}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  class="form-control bg-dark border-dark"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  ref = {passwordRef}
                />
              </div>

              <div className="row justify-content-between pl-4 pr-4">
                <button type="submit"  class="btn btn-primary col-5">
                Sign In
                </button>
                <button type="button" onClick={signUp} class="btn btn-primary col-5"> Sign Up</button>

                
              </div>
            
          </form>
        </div>
      </div>

      

    </div>
    
  );
}

export default SignIn;

       {/* git pushed code */}
           
            
              {/* <button type="submit" class="btn btn-primary col-5">
                <Link to="/station" className="text-white">Sign In</Link>
              </button>
              <button type="submit" class="btn btn-primary ">
                <Link to="/station" className="text-white">Create Account</Link>
              </button> */}