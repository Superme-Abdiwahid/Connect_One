import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import ConnectOneLogo from "./Connect-One.png";  
import { Link } from "react-router-dom"; 


class LandingPage extends Component {
  render() {
    return (
      <div className="signup-container">
        <div className="signup-box">
          <h2>Sign Up or Sign In</h2>
          <img src={ConnectOneLogo} alt="Sign Up Image" className="signup-image" />
          <div className="line"></div>
          <div className="buttons-container">
            <button className="signup-button" onClick={this.props.handleSignInWithGoogle}><FontAwesomeIcon icon={faGoogle} /> Google</button>
            <button className="signup-button" onClick={this.props.handleSignInWithFacebook}><FontAwesomeIcon icon={faFacebook} /> Facebook</button>
          </div>
          <hr />
          <div className="terms-policy">
          <p>By signing up, you agree to our <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy Policy</Link>.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;

