import React from "react";
import "./style.css";
import Npc from "../Npc";


function RightSide() {
  return (
    <>
      
      <div className="col-3">

      
        <div  id="rightSide" className="col-12 col-lg-11 bg-dark">
          <div className="row justify-content-center mb-0 p-0">
            <h5 className="m-0 p-0">LinkedIn</h5>
          </div>

          <div id="appNav" className="row justify-content-center mb-2">
            <ul  class="nav nav-tabs">

              <li class="nav-item ">
                <a class="nav-link active pt-0 text-white" href="#">GitHub</a>
              </li>

              <li class="nav-item">
                <a class="nav-link pt-0 text-white" href="#">Discord</a>
              </li>

              <li class="nav-item">
                <a class="nav-link pt-0 text-white" href="#">Facebook</a>
              </li>

              <li class="nav-item" style={{}}>
                <a class="nav-link pt-0 disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
          <div style={{overflowY:"scroll",maxHeight:"90%"}}>

          

            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
            <Npc/>
          </div>
        </div>
      </div>

    </>



    
  );
}

export default RightSide;