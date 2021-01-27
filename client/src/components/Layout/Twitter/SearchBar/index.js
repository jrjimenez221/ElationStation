import React from "react";
import { useRef } from "react";
import API from "../../../../utils/API"


function SearchBar(props) {

    return (
        <>
        <div className= "row">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary col-12">
                <div className="container">
                     
                <button className="navbar-toggler" type="submit" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                  

                                    <form className="d-flex col-9" >
                                         <input className="form-control me-2" 
                                         type="search" 
                                         placeholder="Search User for their recent tweets" 
                                         ref = {props.tweetRef}
                                         aria-label="Search"/> 
                                            <button className="btn btn-outline-light bg-dark btn-light" onClick={props.searchTweets} type="submit">Search</button>

                                     </form>
                     </div>
            </nav>
        </div>
      </>
      )
}


export default SearchBar;
