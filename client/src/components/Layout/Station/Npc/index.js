import React from "react";
import "./style.css";




function Npc() {
  return (
    <>
        
        {/* Change to a link to change portfolio */}
        <a id="npcContainer" className="row m-0 mb-1 col-12" style={{overflow:"hidden"}}>
          

            <div id="imgCont"  className="col-4  p-0" style={{backgroundSize:"100% 100%"}}>
            </div>
            <div id="npcInfo" className="col-8 text-white-50">
                <h4>Villager-1</h4>
                <p>A buncha sample text</p>
            </div>
          
        </a>

    </>
  );
}

export default Npc;