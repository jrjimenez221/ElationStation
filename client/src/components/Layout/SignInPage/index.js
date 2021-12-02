import React from "react";
import "./style.css";
import SignIn from "../SignIn";
import background from "../../../assets/bg2.jpg";
import { BrowserRouter as Link} from "react-router-dom";



function SignInPage() {
    return (
      <div className="col-12 p-0">
        <div className=" homeStyle" style={{backgroundImage: `url(${background})`}}>
          <SignIn/>
          
          <Link to="/station" className="col-1 text-center text-white-50" style={{position:"absolute", bottom:"5%",right:"0"}}>Dev Access</Link>
          
        </div>

      </div>
    )
}

export default SignInPage;
