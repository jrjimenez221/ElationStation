import React from "react";
import { useRef } from "react";



function SearchBar() {
const tweetRef = useRef();

    function searchTweets(event) {
        event.preventDefault();
        console.log(event.target);
        console.log(tweetRef.current.value)
        TwitterAPI.searchTweets({tweetQuery:tweetRef.current.value})
    }
    return (
        <>
        <div className= "row">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary col-12">
                <div className="container">
                     
                <button className="navbar-toggler" type="submit" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                  
                                    <form className="d-flex col-9" onSubmit={searchTweets}>
                                         <input className="form-control me-2" 
                                         type="search" 
                                         placeholder="Search User for their recent tweets" 
                                         ref = {tweetRef}
                                         aria-label="Search"/> 
                                            <button className="btn btn-outline-light bg-dark btn-light"type="submit">Search</button>
                                     </form>
                     </div>
            </nav>
        </div>
      </>
      )
}


export default SearchBar;
