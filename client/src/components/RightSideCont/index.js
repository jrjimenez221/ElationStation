import React from "react";
import "./style.css";


function Npc() {
  return (
    <>
        <div id="npcContainer" className="row ">
            <div  className="col-4">
                <div id="imgContainer" className="media ">
                    <img className="mr-3" src="./icons/MiniReyIcon.png" alt='dsd'/>
                </div>
            </div>
            <div id="npcInfo" className="col-8">
                <h4>Jrjimenez221</h4>
            
                <p>sdsdsddsdsdsdsddsxsxsfdffddddddddddddddddddddddddddddddddddddddddddddddddddddddwwwwwwwwwwwwwwwwwwxsxs</p>
                
            </div>
        </div>
        {/* <div id="npcContainer" class="media">
            <div id="imgContainer" className=" col-2">
            <img class="ml-0 pl-0 mr-2" src="./icons/MiniReyIcon.png"  alt="Rey"/>

            </div>
            <div id="npcInfo" class="media-body" >
                <h5 id="npcInfo" class="mt-2">Jrjimenez221</h5>
                

                Cras sit amulputatpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                
            </div>
        </div> */}

      


    </>



    
  );
}

export default Npc;