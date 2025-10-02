import React from 'react';
import 'firebase/auth';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default class SignInWithApple extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignInWithApple = this.handleSignInWithApple.bind(this);
    }

    async handleSignInWithApple() {
        const provider = new firebase.auth.OAuthProvider('facebook.com');
        provider.addScope('email');
        provider.addScope('name');

        try {
            const result = await firebase.auth().signInWithPopup(provider);
            console.log(result.user);
            // Handle successful authentication
        } catch (error) {
            console.error(error);
            // Handle errors
        }
    }

    render() {
        return (
            <button onClick={this.handleSignInWithApple}>Sign in with Apple</button>
        );
    }
}