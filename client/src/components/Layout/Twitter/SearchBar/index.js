import React from "react";

function SearchBar() {

    return (
        <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                  
                                    <form className="d-flex">
                                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> 
                                            <button className="btn btn-outline-success" type="submit">Search</button>
                                     </form>
                     </div>
            
</nav>
      </>
      )
}


export default SearchBar;
