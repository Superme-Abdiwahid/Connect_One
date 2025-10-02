// LandingPage.js

import React, { Component } from 'react';
import './Landing.css';
import DreamTeamImage from './Samatar.jpg';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <p>Sign Up to View your profile</p>
        <img src={DreamTeamImage} alt="Dream Team Image" />
        <Link to="/">
          <button type="button" className="btn">Sign In</button>
        </Link>
        <Link to="/">
          <button type="button" className="btn">Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default LandingPage;
