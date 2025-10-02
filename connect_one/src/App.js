import LandingPage from "./Test.js";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Profile from './Profile.js';
import Tweet from './IschoolTweet.js';
import SignUp from "./SignUp.js";
import Organizations from './Help.js'
import Calendar from './Calendar.js';
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import Events from './Events.js';
import 'firebase/auth';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { handleSignInWithFacebook, handleSignInWithEmail, handleSignInWithGoogle, handleSignInWithTwitter } from './AuthenticationFunctions.js';
import NavBar from "./NavBar.js";
import ASBASCalendar from "./Calendar.js";
import AboutTeamPage from "./AboutPage.js";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignInWithFacebook = handleSignInWithFacebook.bind(this);
    this.handleSignInWithEmail = handleSignInWithEmail.bind(this);
    this.handleSignInWithGoogle = handleSignInWithGoogle.bind(this);
    this.state = {
        user: null
    };

    this.uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: true
            },
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        }
    };
}

componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => {
            this.setState({ user });
        }
    );
}

componentWillUnmount() {
    this.unregisterAuthObserver();
}

    render() {
      if(this.state.user === null || this.state.user === undefined) {
       return(
        <>
        <Routes>
    <Route path="/terms" element={<TermsOfService  user={this.state.user}/>} />
    <Route path="/privacy" element={<PrivacyPolicy user={this.state.user} />} />
    <Route path="/" element={<LandingPage handleSignInWithFacebook={handleSignInWithFacebook} handleSignInWithEmail={handleSignInWithEmail} handleSignInWithGoogle={handleSignInWithGoogle}
    handleSignInWithTwitter={handleSignInWithTwitter} />} />
    </Routes>
       
   
    </>
    )
      }
      
  return (
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<Tweet signOut={this.handleSignOut} user={this.state.user}/> } />
    <Route path="/calendar" element={<Calendar signOut={this.handleSignOut} user={this.state.user}/> } />
    <Route path="/terms" element={<TermsOfService  user={this.state.user}/>} />
    <Route path="/privacy" element={<PrivacyPolicy user={this.state.user} />} />
    {/* <Route path="/profile" element={<Profile user={this.state.user} />} /> */}
    <Route path="/about" element={<AboutTeamPage  user={this.state.user}/>} />
    </Routes>
  </>
    
  );
}
}


