import React from "react";
import "./style.css";
import Npc from "../Npc";
import SignIn from "../../SignIn";


function RightSide() {
  return (
    <>
      
      <div className="col-3 mt-5">

      
        <div  id="LinkedInport" className="col-12 col-lg-12 bg-warning">
          <div className="row justify-content-center mb-0 p-0">
            <h5 className="m-0 p-0">Please Sign In</h5>
          </div>

          <SignIn/>
          
        </div>

      </div>

    </>



    
  );
}

export default RightSide;