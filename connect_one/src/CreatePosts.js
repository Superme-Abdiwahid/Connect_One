import React, { Component } from "react";
import "./TweetBox.css";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default class TweetBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetMessage: "",
      tweetImage: "",
      name: this.props.user,
      isSignedIn: this.props.user != null,
      title: "",
      message: "",
    };
  }

  sendTweet = async (e) => {
    e.preventDefault();
  
    if (!this.props.user || !this.props.user.displayName) {
      this.displayError("User not signed in");
      return;
    }
  
    const { tweetMessage, message } = this.state;
  
    if (!tweetMessage.trim()) {
      this.displayError("Tweet message cannot be empty");
      return;
    }
  
    try {
      await fetch('/postTweet', {
        method: "POST",
        body: JSON.stringify({
          username: this.props.user.displayName,
          title: tweetMessage,
          description: message,
          date: new Date().toLocaleString(),
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      this.setState({
        tweetMessage: "",
        tweetImage: ""
      });
      this.displaySuccess("Tweet posted successfully!");
    } catch (error) {
      this.displayError("Failed to post tweet: " + error.message);
      console.log(error);
    }
  };
  

  displayError = (errorMessage) => {
    let errorDiv = document.createElement("div");
    errorDiv.classList.add("alert");
    errorDiv.classList.add("alert-danger");
    errorDiv.classList.add("fade");
    errorDiv.classList.add("show");
    errorDiv.setAttribute("id", "ERROR");
    errorDiv.innerText = "Error: cannot submit post action failed " + errorMessage;
    errorDiv.style.opacity = 1;
    document.getElementById("root").prepend(errorDiv);

    setTimeout(() => {
      errorDiv.innerText = "";
      errorDiv.style.opacity = 0;
      errorDiv.remove();
    }, 8000);
  };

  displaySuccess = (successMessage) => {
    let success = document.createElement("div");
    success.classList.add("alert");
    success.classList.add("alert-success");
    success.classList.add("fade");
    success.classList.add("show");
    success.setAttribute("id", "SUCCESS");
    success.innerText = "Successfully posted: " + successMessage;
    success.style.opacity = 1;
    document.getElementById("root").prepend(success);

    setTimeout(() => {
      success.innerText = "";
      success.style.opacity = 0;
      success.remove();
    }, 8000);
  };

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };
  render() {
    return (
      <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
            <div className="avatar">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
            
              onChange={(e) => this.setState({ tweetMessage: e.target.value })}
              value={this.state.tweetMessage}
              placeholder="What's happening?"
              type="text"
              
            />
          </div>
          <input
            value={this.state.tweetImage}
            onChange={(e) => this.setState({ tweetImage: e.target.value })}
            className="tweetBox__imageInput"
            placeholder="Optional: Enter image URL"
            type="text"
          />
          <button
            onClick={this.sendTweet}
            type="submit"
            className="tweetBox__tweetButton"
          >
            <FontAwesomeIcon icon={faTwitter} /> Tweet
          </button>
        </form>
      </div>
    );
  }
}

