import React from "react";
import "./style.css";


function NavBar() {
  return (
    <nav id="titleNav" class="navbar col-12">
      <a class="navbar-brand text-danger" href="#">
        <img src="./icons/MiniReyIcon.png" width="30" height="30" class="d-inline-block align-top mr-2" alt=""/>
        Jrjimenez221
      </a>
      <div id="pageTitle">Elation Station</div>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown link
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
    </nav>
  );
}

export default NavBar;              