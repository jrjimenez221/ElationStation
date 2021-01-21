import React from "react";
import "./style.css";
import SignIn from "../SignIn";
import background from "../../../assets/bg2.jpg";



function SignInPage() {
    return (
    <div>
        <div className="container-fluid homeStyle" style={{
          backgroundImage: `url(${background})`,
          
        }}>
        <SignIn/>
        </div>
    </div>
    )
}
export default SignInPage;
