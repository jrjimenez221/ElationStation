import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import LinkinImg from "./linkedin.png";

// const appLink = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78o6w4y2569mqx&redirect_uri=https%3A%2F%2Felation-station.herokuapp.com%2F";
function LinkInSignIn() {
  return (
    <>
      <div className="col-12 col-md-6 align-self-center">
        <div className="row justify-content-center ">
          <div
            id="LinkInSignIn"
            className="col-12  p-3 mt-3 text-white-50"
            style={{ paddingBottom: "2vh", borderRadius: "10%" }}
          >
            <form>
              <div className="row justify-content-center text-white-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15%"
                  fill="currentColor"
                  class="bi bi-linkedin col-4 col-md-2 mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </div>

              <div className="row text-center justify-content-around">
                <div className="col-6 text-center ">
                  Please sign into LinkedIn to continue
                </div>
              </div>

              <br></br>

              <br></br>

              <div className="row text-center justify-content-around">
                <a
                  href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78o6w4y2569mqx&redirect_uri=https%3A%2F%2Felation-station.herokuapp.com%2F
"
                >
                  <img src={LinkinImg}></img>
                </a>
              </div>
              {/* Have a function that keeps an eye out for verification on external site through this connection, and then redirect to LinkedIn home/main page */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LinkInSignIn;


