import React from "react";
import "./style.css";

function Portfolio() {
  return (
    <div className="row">


      <div id="ediv" className="col-5 justify-content-end">
        <div className="img-container col-12" >
          <img src="./icons/MiniReyIcon.png" alt="ds" />
        </div>
        
        <h3 className="text-center">Jrjimenez221 <span className="npcName">(Jose R. Jimenez)</span></h3>
        

        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#">GitHub</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Discord</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Facebook</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nam fuga itaque pariatur sapiente sit aspernatur, esse sed totam ab ipsam labore doloribus ipsum consectetur obcaecati alias repellat ratione nisi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nam fuga itaque pariatur sapiente sit aspernatur, esse sed totam ab ipsam labore doloribus ipsum consectetur obcaecati alias repellat ratione nisi?</p>
        <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
  </ul>
</div>
      </div>

    </div>
  );
}

export default Portfolio;
 