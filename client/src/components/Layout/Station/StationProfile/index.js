import React from "react";
import "./twitStyle.css";


function StationProfile() {
  return (
    

    
    <div className="row bg-info h-100 m-0 p-0 " >
    
      <div id="TwitFeed" className="col-12 col-md-6 offset-md-5 h-100  p-0" style={{ overflowY:"auto",position:"absolute",top:"0",bottom:"0"}}>
      
        <div className="row border-bottom border-secondary">
          <div className="col-12 text-white-50">

            <div className="bgSample row justify-content-between bg-dark mt-0">
              <div className="img-container col-2 p-3" >
                <img src="../../icons/MiniReyIcon.png" className="align-self-center" width="100%"  alt="ds" />
              </div>
              <div className="col-1 bg-danger">
                <div className="row h-100 justify-content-end">
                  <div className="col-8  bg-success">
                    
                    <div className="row text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%"  fill="currentColor" class="bi bi-twitter col-12 col-md-3 p-0" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </div>

                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>

                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <h3 className="text-center">Jose R Jimenez </h3>
              <span className="npcName">@Username1</span>
            </div>
            
            <div className="row text-center">
              <div className="col-3 border-bottom border-info"> Tweets </div>
              <div className="col-3"> Friends </div>
              <div className="col-3"> Gallery </div>
              <div className="col-3"> Likes</div>
            </div>
            
          </div>
        </div>

        <div style={{ height:"auto"}}>

    
          
        </div>

        <div className="row h-10 bg-dark justify-content-center pt-3 pt-md-1 pb-3 pb-md-1 border-top border-secondary">
          <div className="col-2 col-md-1 p-2 p-md-3 m-0">
            
          </div>
          <div className="col-4 col-md-3 text-white-50 m-0 p-0 align-self-center">
            Back to Top
          </div>
        </div>

        
          
          
          

          

      </div>

    </div>
  );
}

export default StationProfile;
 