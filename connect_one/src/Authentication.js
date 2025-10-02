import React, { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Navigate } from "react-router-dom";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
    this.uiConfig = {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true,
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      credentialHelper: "none",
      signInFlow: "popup",
      callbacks: {
        signInSuccessWithAuthResult: () => false,
      },
    };
  }

  async displayErrorPostError(error) {
    let errorDiv = document.createElement("div");
    errorDiv.classList.add("alert");
    errorDiv.classList.add("alert-danger");
    errorDiv.classList.add("fade");
    errorDiv.classList.add("show");
    errorDiv.setAttribute("id", "ERROR");
    errorDiv.innerText =
      "Error: of " + error + " Check console for more detials";
    errorDiv.style.opacity = 1;
    document.getElementById("root").prepend(errorDiv);

    await new Promise((resolve) => setTimeout(resolve, 4 * 1000));
    errorDiv.innerText = "";
    errorDiv.style.opacity = 0;
    document.getElementById("ERROR").remove();
  }

  componentDidMount() {
    try {
      this.registerUser = firebase.auth().onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          this.setState({ user: firebaseUser });
        } else {
          this.setState({ user: null });
        }
      });
    } catch (error) {
      this.displayErrorPostError(error);
    }
  }

  componentWillUnmount() {
    if (this.registerUser) {
      this.registerUser();
    }
  }

  render() {
    const { user } = this.state;
    if (user) {
      return <Navigate to="/" />;
    } else {
      return (
        <div className="container">
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    }
  }
}
