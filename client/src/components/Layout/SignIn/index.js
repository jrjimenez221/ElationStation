import React from "react";
import "./style.css";
import { BrowserRouter as Link} from "react-router-dom";

function SignIn() {
  return (
    <div className="container">
      <div className="row justify-content-center mb-5 ">
        <div id="SignIn" className="col-11 col-md-3 signInPrompt p-3 mt-4 " style={{ paddingBottom: "2vh", borderRadius: "10%" }}>
          <h2 className="text-white-50">Elation Station</h2>
          <form>
            <div className="form-group">
              <input
                type="email"
                class="form-control mt-3 bg-dark border-dark"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                class="form-control bg-dark border-dark"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <div className="row justify-content-between pl-4 pr-4">
              <button type="submit" class="btn btn-primary col-5">
                <Link to="/station" className="text-white">Sign In</Link>
              </button>
              <button type="submit" class="btn btn-primary ">
                <Link to="/station" className="text-white">Create Account</Link>
              </button>
            
              
              
              
            </div>
          </form>
        </div>
      </div>

      

    </div>
  );
}

export default SignIn;
