import React from "react";
import {Route,BrowserRouter as Router,Switch,Link,Redirect,} from "react-router-dom";


function RoadConstruction() {
  return (
    <>

      <div className="row justify-content-around p-0 m-0 mt-5">

        <div className="col-12 col-md-3 p-5">

          <div className="row justify-content-around">

            <svg xmlns="http://www.w3.org/2000/svg" width="50%"  fill="orange" class="bi bi-exclamation-diamond col-8 clo-8 color-info" viewBox="0 0 16 16">
              <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg>

          </div>

          <div className="row justify-content-around">
            <h3 className="col-10 text-center text-white-50">Under construction</h3>
          </div>

          <div className="row justify-content-around">

            <p className="col-12 text-center text-white-50">
              Loading pavement... ?%
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default RoadConstruction;


// linkedin sign in href

// const appLink = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78o6w4y2569mqx&redirect_uri=https%3A%2F%2Felation-station.herokuapp.com%2F";

//<a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78o6w4y2569mqx&redirect_uri=https%3A%2F%2Felation-station.herokuapp.com%2F">               
// <img src={linkedinImg}></img>
//</a>
