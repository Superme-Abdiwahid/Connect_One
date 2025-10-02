import React from 'react';
import { NavLink } from 'react-router-dom';
import ConnectOne from './Connect-One.png';
import Facebook from './Facebook.png';
import Google from './Google.jpg';
import Apple from './Apple.jpg';
import "./SignUpForm.css";
import 'firebase/auth';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export const handleSignInWithFacebook = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    provider.addScope('public_profile');

    try {
        const result = await firebase.auth().signInWithPopup(provider);
        console.log(result.user);
    } catch (error) {
        console.error(error);
    }
};

export const handleSignInWithTwitter = async () => {
    const provider = new firebase.auth.OAuthProvider('twitter.com');
    provider.addScope('email');
    provider.addScope('name');

    try {
        const result = await firebase.auth().signInWithPopup(provider);
        console.log(result.user);
    } catch (error) {
        console.error("Twitter sign-in error:", error);
    }
}

export const handleSignInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
        const result = await firebase.auth().signInWithPopup(provider);
        console.log(result.user);
    } catch (error) {
        console.error(error);
    }
};

export const handleSignInWithEmail = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
        const result = await firebase.auth().signInWithPopup(provider);
        console.log(result.user);
    } catch (error) {
        console.error(error);
    }
};
